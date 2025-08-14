import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Bottom from '../Bottom/Bottom';

function Submission() {

    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [fileName, setFileName] = useState('Choose Your File');
    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;
        if (files && files.length > 0) {
            setFileName(files[0].name);
            setFormData((prev) => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'icetcse';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);
            if (formData.Paper_File) { formDataToSend.append('Paper_File', formData.Paper_File); }
            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);
            const mailPromise = fetch('http://192.168.1.30:5173/ICSCME/send_mail.php', {
                method: 'POST',
                body: formDataToSend,
            });
            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
                body: googleSheetsParams.toString(),
            });
            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);
            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';
            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }
            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);
            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }
    return (
        <>
            <section className='bg-white/96'>
                <section className="relative h-[15vh] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D] lg:block hidden" >
                    <img className="absolute -top-20 -left-20 2xl:block hidden" src="/assets/Images/point.png" alt="" />
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
                </section>
                <section className="lg:pt-0 pt-16">
                    <section className="max-w-[90rem] relative  mx-auto lg:px-5">
                        <div className="lg:p-20 p-10 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl xl:block hidden">
                            <p className="text-center w-fit rounded-full font-semibold lg:text-3xl text-lg">Scope</p>
                            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5">
                            </div>
                            <div className="p-2.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5"></div>
                        </div>
                        <section className="grid xl:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center">
                            <div className='col-span-1 xl:block hidden'>  </div>
                            <div className='flex flex-col md:gap-4 gap-2 col-span-4 md:my-10 my-5'>
                                <div className="w-full px-4 grid md:grid-cols-2 gap-5 bg-white   order-1 lg:order-2">
                                    <div className='border-t-4 p-3 rounded-lg border-[#00A63E] shadow-md'>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline underline-offset-4">Submission Guidelines</h2>
                                        <ul className="space-y-3 text-gray-700">
                                            <li>Papers must be written in English.</li>
                                            <li>Maximum length: 8 pages including figures and references.</li>
                                            <li>Use the conference format.</li>
                                            <li>Submit in PDF, Docx, PPTX format.</li>
                                            <li>Include abstract (max 250 words).</li>
                                            <li>Blind all author information for review.</li>
                                        </ul>
                                    </div>
                                    <div className='border-t-4 p-3 rounded-lg shadow-md border-[#00A63E]'>
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 underline underline-offset-4">Important Notes</h2>
                                        <ul className="space-y-3 text-gray-700">
                                            <li>All papers undergo a double-blind peer review process.</li>
                                            <li>At least one author must register for the conference.</li>
                                            <li>Plagiarism checks will be performed.</li>
                                            <li>Multiple submissions are not allowed.</li>
                                            <li>Authors must present accepted papers at the conference.</li>
                                            <li>Papers will be published in the conference proceedings.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="pb-10" id="paper-submission">
                    <div className="w-full  max-w-[60rem] pt-5 px-4 flex flex-col lg:flex-row gap-8 items-center justify-center mx-auto">
                        <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-8 order-2 lg:order-1">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="Paper_Title" className="block text-lg font-medium text-gray-700">Paper Title</label>
                                    <input id="Paper_Title" name="Paper_Title" type="text" placeholder="Enter the title of your paper" value={formData?.Paper_Title} onChange={handleFileInputChange} className="mt-1 block w-full px-4 py-2 border-b-2 border-[#00A63E] rounded-lg  focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="Author_FUll_Name" className="block text-lg font-medium text-gray-700">Author(s) Full Name</label>
                                    <input id="Author_FUll_Name" name="Author_FUll_Name" type="text" placeholder="Enter the name of the author(s)" value={formData.Author_FUll_Name} onChange={handleFileInputChange} className="mt-1 block w-full px-4 py-2 border-b-2 border-[#00A63E] rounded-lg  focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="Email_Address" className="block text-lg font-medium text-gray-700">Email</label>
                                    <input id="Email_Address" name="Email_Address" type="email" placeholder="Enter the author's email" value={formData.Email_Address} onChange={handleFileInputChange} className="mt-1 block w-full px-4 py-2 border-b-2 border-[#00A63E] rounded-lg  focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="Institution_Name" className="block text-lg font-medium text-gray-700">Institution Name</label>
                                    <input id="Institution_Name" name="Institution_Name" type="text" placeholder="Enter the author's institution" value={formData.Institution_Name} onChange={handleFileInputChange} className="mt-1 block w-full px-4 py-2 border-b-2 border-[#00A63E] rounded-lg  focus:outline-none" required />
                                </div>
                                <div>
                                    <label htmlFor="Paper_Track" className="block text-lg font-medium text-gray-700">Paper Track</label>
                                    <select id="Paper_Track" name="Paper_Track" value={formData.Paper_Track} onChange={handleFileInputChange} className="mt-1 block w-full px-4 py-2 border-b-2 border-[#00A63E] rounded-lg  focus:outline-none" required>
                                        <option value="">Select Paper Track</option>
                                        <option>Artificial Intelligence & Machine Learning</option>
                                        <option>Data Science & Big Data Analytics</option>
                                        <option>Cloud Computing & Virtualization</option>
                                        <option>Cybersecurity & Information Assurance</option>
                                        <option>Computer Vision & Image Processing</option>
                                        <option>Natural Language Processing</option>
                                        <option>Blockchain & Distributed Ledger Technologies</option>
                                        <option>IoT and Smart Systems</option>
                                        <option>Software Engineering & Agile Methodologies</option>
                                        <option>Human-Computer Interaction</option>
                                        <option>Embedded Systems & Robotics</option>
                                        <option>Quantum Computing & Advanced Algorithms</option>
                                        <option>High Performance & Parallel Computing</option>
                                        <option>Green Computing & Sustainable Technologies</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="Paper_File" className="block text-lg font-medium text-gray-700">Upload Paper</label>
                                    <input id="Paper_File" name="Paper_File" onChange={handleFileInputChange} type="file" accept=".pdf" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-600 focus:border-green-600 focus:outline-none" required />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="w-fit px-4 py-2 cursor-pointer bg-[#04412F] text-white font-medium rounded-full hover:bg-[#04412F]">{status === 'Sending...' ? 'Submitting...' : 'Submit Paper'}</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}
export default Submission
