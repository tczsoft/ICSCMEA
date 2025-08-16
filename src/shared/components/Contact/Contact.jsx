import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Contact() {
    const [formData, setFormData] = useState({ firstname: "", email: "", number: "", message: "" });
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstname', formData.firstname);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('number', formData.number);
            formDataToSend.append('message', formData.message);
            const response = await fetch('http://icscmea.com/api/message_mail.php', { method: 'POST', body: formDataToSend, });
            if (response.ok) { const result = await response.text(); setStatus(result); setFormData({ firstname: '', email: '', number: '', message: '', }); toast.success("submitted successfully!"); console.log("success") } else { setStatus('Failed to send submission. Please try again.'); toast.error('Failed to send submission. Please try again.'); }
        } catch (error) { console.error('Error:', error); setStatus('An error occurred. Please try again.'); toast.error('An error occurred. Please try again.'); }
    };
    return (
        <>
            <section className='bg-white/96'>
                <section className="relative lg:h-[15vh] h-[15vh] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D]">
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/images/home/Herosec.png')] opacity-20 bg-fixed bg-center"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <nav className="text-white text-sm md:text-base font-medium lg:mt-5 mt-12">
                            <ol className="flex space-x-2">
                                <li>
                                    <a href="/" className="hover:underline">Home</a>
                                </li>
                                <li>/</li>
                                <Link to="/contact">
                                    <li className="text-[#4AF8BA]">Contact</li>
                                </Link>
                            </ol>
                        </nav>
                    </div>
                    <img className="absolute -top-20 -left-20 2xl:block hidden" src="/assets/Images/point.png" alt="" />
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
                </section>
                <section className="">
                    <section className="max-w-[90rem] relative mx-auto lg:px-5">
                        <div className="lg:p-20 p-10 bg-[#4AF8BA] w-fit rounded-b-[150px] absolute -top-5 rounded-tr-xl xl:block hidden">
                            <p className="text-center w-fit rounded-full font-semibold 2xl:text-3xl text-lg">Contact</p>
                            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5"> </div>
                            <div className="p-2.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5"> </div>
                        </div>
                    </section>
                </section>
                <section className='md:mt-0'><div className="flex flex-col items-center py-10">
                    <div className="grid md:grid-cols-1 gap-5 grid-cols-1 px-6 w-full max-w-[40rem]">
                        <div className="flex flex-col gap-4 md:gap-6 md:px-9  p-4 md:p-8 rounded-lg shadow-lg w-full bg-white border-[#FEDE68]">
                            <h1 className="md:text-xl text-lg font-extrabold text-[#033F2E] text-center">Get in Touch</h1>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-semibold text-[#03402E]' htmlFor="firstname">First Name *</label>
                                    <input type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter your name" className="w-full h-12 p-2 text-lg  bg-white rounded-lg border-b-2 focus:outline-none border-[#00A63E]" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-semibold text-[#03402E]' htmlFor="email">Email *</label>
                                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full h-12 p-2 text-lg border-b-2 rounded-lg  bg-white  border-[#00A63E]   focus:outline-none" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-semibold text-[#03402E]' htmlFor="number">Number *</label>
                                    <input type="text" name="number" id="number" onChange={handleChange} value={formData.number} placeholder="Enter your number" className="w-full h-12 p-2 text-lg border-b-2 rounded-lg bg-white  border-[#00A63E]   focus:outline-none" required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='font-semibold text-[#03402E]' htmlFor="message">Message *</label>
                                    <textarea name="message" id='message' value={formData.message} onChange={handleChange} placeholder="Enter your message" className="w-full h-40 p-4 text-lg border-b-2 rounded-lg  bg-white border-[#00A63E]   resize-none focus:outline-none" required   ></textarea>
                                </div>
                                <button type="submit" className="cursor-pointer p-3 mx-auto bg-[#4AF8BA] text-black w-fit rounded-full md:text-base text-sm hover:scale-105 duration-300 flex justify-center items-center gap-2"  >
                                    {status === 'Sending...' ? 'Submitting...' : 'Send message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}

export default Contact
