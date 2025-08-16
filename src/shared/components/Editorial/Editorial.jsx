
// import React from 'react'
// import Edit from './Edit';
// import Bottom from '../Bottom/Bottom';

// function Editorial() {
//     const Tech = [
//         { name: "K. Ramesh", position: "V.R.S. College of Engineering and Technology", location: "India" },
//         { name: "Muhammad Asif Khan", position: "Qatar University", location: "Qatar" },
//         { name: "Siddharth Dabhade", position: "National Forensic Sciences University", location: "India" },
//         { name: "Chen Li", position: "Hangzhou TCM Hospital", location: "China" },
//         { name: "Putri Mentari Endraswari", position: "University of Bangka Belitung", location: "Indonesia" },
//         { name: "Noureddine Seddari", position: "Skikda University", location: "Algeria" },
//         { name: "C. Suresh", position: "Sri Ranganathar Institute of Engineering and Technology", location: "India" },
//         { name: "Ridwan Mustofa", position: "Khulna University of Engineering & Technology", location: "Bangladesh" },
//         { name: "Awais Khan Jumani", position: "ILMA University", location: "Pakistan" },
//         { name: "Qiang Tong", position: "Shenzhen Institute of Information Technology", location: "China" },
//         { name: "Daniel Ekpenyong Asuquo", position: "University of Uyo", location: "Nigeria" },
//         { name: "Maryam Anwer", position: "Majma University", location: "Saudi Arabia" },
//         { name: "Ashok Kumar", position: "Skyline University", location: "Nigeria" },
//         { name: "Waseem", position: "Jiangsu University", location: "China" },
//         { name: "Jay Sarraf", position: "KIIT University", location: "India" },
//         { name: "Asef Shahriar", position: "Khulna University of Engineering & Technology", location: "Bangladesh" },
//         { name: "K. Nehru", position: "SNS College of Technology", location: "India" },
//         { name: "A. Gabriel", position: "Sharda University", location: "Uzbekistan" },
//         { name: "Tahir Abbas", position: "TIMES Institute", location: "Pakistan" },
//         { name: "Sutikno", position: "University of Diponegoro", location: "Indonesia" },
//     ];
//     return (
//         <>
//             <section className='bg-[url("/images/home/contact-image.webp")] bg-no-repeat bg-center bg-cover md:h-[20vh] h-[15vh] w-full flex items-center justify-center'>
//                 <div className='text-white md:text-3xl text-xl font-bold uppercase'>
//                     Editorial Board
//                 </div>
//             </section>
//             <section className='pt-10 pb-5'>
//                 <section className=''>
//                     <div className="px-3 lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
//                         <div className="text-justify md:text-[18px] leading-relaxed">The Editorial Board of the International Conference on Emerging Trends in Computer Science & Engineering plays a pivotal role in upholding the academic quality and excellence of the event.  Our board members oversee the peer-review process, ensure adherence to the highest standards of research ethics, and provide strategic guidance that reflects the latest developments across diverse domains of computer science and engineering. Their expertise helps shape a conference program that fosters innovation, collaboration, and impactful research contributions.</div>
//                     </div>
//                     <div className='rounded-lg w-fit mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5'>
//                         <div className="grid bg-white p-3 md:p-6 grid-cols-1 lg:grid-cols-2 md:gap-5 gap-5 mx-auto rounded-lg">
//                             {Tech.map((member, index) => (<Edit key={index} position={member.position} department={member.department} name={member.name} location={member.location} />))}
//                         </div>
//                     </div>
//                 </section>
//             </section>
//             <Bottom />
//         </>
//     )
// }

// export default Editorial


import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import LastSection from '../Bottom/Bottom';
import Common from '../Common/Common';

function Editorial() {
    const highlights = [
        { title: "A.V.L.N. Sujith", description: "Department of Computer Science and Engineering, JNTUA University, India", },
        { title: "Hung Nguyen", description: "Department of Information Technology, Nha Trang University, Vietnam", },
        { title: "Tusar Kanti Dash", description: "Department of Electronics and Communication Engineering, C V Raman Global University, India", },
        { title: "D. Angeline Benitta", description: "Department of Computer Applications, Hindustan Institute of Technology and Science, India", },
        { title: "Samir Hallaci", description: "Department of Computer Science, Guelma University, Algeria", },
        { title: "Sidaoui Boutkhil", description: "Department of Computer Science, Salhi Ahmed University of Naama, Algeria", },
        { title: "Muhammd Umer Farooq", description: "Department of Computer Science and Information Technology, NED University of Engineering and Technology, Pakistan", },
        { title: "M. Sathish kumar", description: "Department of Computer Application, Hindustan Institute of Technology and Science, India", },
        { title: "Ledan Qian", description: "Department of Information Technology, Wenzhou University, China", },
        { title: "Omar Bin Samin", description: "Department of Information Technology, Institute of Management Sciences, Pakistan", },
        { title: "Asma Kausar Mukhtar Ali", description: "Department of Information Technology, MJIIT University of Technology, Malaysia", },
        { title: "Adekunle Musibau Ibrahim", description: " Department of Computer Science, Osun State University, Nigeria", },
        { title: "PPG Dinesh Asanka", description: "Department of Industrial Management, University of Kelaniya, Sri Lanka", },
        { title: "Arindom Kundu", description: "Department of Computer Science and Engineering, Daffodil International University, Bangladesh", },
        { title: "Moses Adah Agana", description: "Department of Computer Science and Engineering, University of Calabar, Nigeria", },
        { title: "V. Pravenea", description: "Department of Computer Science and Engineering, Dr.N.G.P Institute of Technology, India", },
        { title: "S. Stewart Kirubakaran", description: "Department of Computer Science and Engineering, Karunya Institute of Technology and Sciences, India", },
        { title: "Kabir G. Kharade", description: "Department of Computer Science and Engineering, Shivaji University, India", },
        { title: "P. Punitha", description: "Department of Artificial Intelligence and Data Science, Tagore Institute of Engineering and Technology, India", },
        { title: "S. Salomi", description: "Department of Computational Intelligence, SRM Institute of Science and Technology, India", },
        { title: "Mujtaba Korai", description: "Department of Computer Science and Engineering, Gachon University, Korea", },
    ];
    return (
        <>
            <section className='bg-white/96'>
                {/* <section className="relative h-[15vh] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D] lg:block hidden" >
                    <img className="absolute -top-20 -left-20 2xl:block hidden" src="/assets/Images/point.png" alt="" />
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
                </section>
                <section className="lg:pt-0 pt-16">
                    <section className="max-w-[90rem] relative  mx-auto lg:px-5">
                        <div className="lg:p-20 p-10 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl xl:block hidden">
                            <p className="text-center w-fit rounded-full font-semibold 2xl:text-3xl text-lg">Editorial</p>
                            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5">
                            </div>
                            <div className="p-2.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5"></div>
                        </div>
                        <section className="grid xl:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center">
                            <div className='col-span-1 xl:block hidden'></div>
                            <div className='flex flex-col md:gap-4 gap-2 col-span-4 md:my-10 my-5'>
                                <div className="text-justify md:text-lg text-sm leading-7 flex flex-col gap-4">
                                    <p className="px-3">
                                    Our Editorial Board comprises eminent scholars, researchers, and industry leaders from across the globe, dedicated to fostering rigorous peer review, promoting interdisciplinary collaboration, and ensuring the dissemination of high-quality research. Together, we strive to create an environment that inspires innovation, addresses real-world challenges, and advances the global knowledge ecosystem.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section> */}
                <Common heading="Editorial" path="Editorial" paths="/editorial" content="Our Editorial Board comprises eminent scholars, researchers, and industry leaders from across the globe, dedicated to fostering rigorous peer review, promoting interdisciplinary collaboration, and ensuring the dissemination of high-quality research. Together, we strive to create an environment that inspires innovation, addresses real-world challenges, and advances the global knowledge ecosystem." />
                <section>
                    <div className="md:py-12 py-6 md:px-6 px-3">
                        <div className="max-w-[70rem] mx-auto text-center">
                            <div className='flex items-center gap-2 justify-center md:mb-10 mb-5'>
                                {/* <div className="bg-[#4AF8BA] p-3 rounded-full w-fit">   </div> */}
                                <h2 className="md:text-2xl text-xl font-semibold">Our Board of Editors</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:gap-4 gap-4 border bg-[#04402F] rounded-xl p-4">
                                {highlights.map((item, index) => (
                                    <div key={index} className="bg-white w-full  p-3  text-left rounded-lg ">
                                        <h3 className="md:text-base text-base font-semibold text-[#033D2D] ">Dr. {item.title}, <span className=' text-black md:text-sm text-sm'>{item.description}</span></h3>
                                        {/* <p className="text-gray-600 md:text-base text-sm">{item.description}</p> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="max-w-[90rem] mx-auto px-3">
                    <div className='flex items-center gap-3 mb-3 md:mb-6 justify-center'>
                        <div className="bg-[#4AF8BA] p-3 rounded-full w-fit"> </div>
                        <h1 className="md:text-2xl text-xl font-semibold">Our Mission</h1>
                    </div>
                    <div className="max-w-4xl mx-auto text-gray-700   leading-relaxed space-y-6 md:text-base text-sm">
                        <p className='text-center md:text-lg'>
                            At the <strong> International Conference on Smart Computational Methods and Emerging Applications </strong>,
                            our mission is to advance innovation,  foster collaboration, and bridge the gap
                            between theory and real-world solutions in the field of computational intelligence.
                        </p>
                        <ul className="list-disc list-outside space-y-2 pl-6 md:text-lg">
                            <li>
                                Promote cutting-edge research in smart algorithms, data-driven methods, and emerging technologies.
                            </li>
                            <li>
                                Create a global platform for academics, researchers, and industry experts to exchange ideas and best practices.
                            </li>
                            <li>
                                Support the development and deployment of intelligent solutions that address real-world challenges.
                            </li>
                            <li>
                                Empower young researchers and innovators through engagement, mentorship, and recognition.
                            </li>
                            <li>
                                Encourage interdisciplinary dialogue to fuel impactful scientific discovery and practical implementation.
                            </li>
                        </ul>
                    </div>
                </section> */}
                <LastSection />
            </section>

        </>
    )
}

export default Editorial
