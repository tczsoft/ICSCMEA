import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import LastSection from '../Bottom/Bottom';

function About() {
    const highlights = [
        {
            title: "Keynote Addresses",
            description: "By internationally renowned experts sharing groundbreaking insights.",
        },
        {
            title: "Technical Paper Presentations",
            description: "Explore innovations through multiple technical tracks.",
        },
        {
            title: "Workshops & Tutorials",
            description: "Hands-on sessions on emerging and disruptive technologies.",
        },
        {
            title: "Industry Panel Discussions",
            description: "Engage with industry leaders and explore real-world innovations.",
        },
        {
            title: "Best Paper Awards",
            description: "Recognizing excellence and offering journal publication opportunities.",
        },
        {
            title: "Live Demos & Tech Exhibits",
            description: "Explore smart solutions via live demos and tech exhibits.",
        },
    ];
    return (
        <>
            <section className='bg-white/96'>
                <section className="relative h-[15vh] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D]" >
                    <img className="absolute -top-20 -left-20 2xl:block hidden" src="/assets/Images/point.png" alt="" />
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
                </section>
                <section className="">
                    <section className="max-w-[90rem] relative  mx-auto lg:px-5">
                        <div className="lg:p-20 p-10 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl xl:block hidden">
                            <p className="text-center w-fit rounded-full font-semibold lg:text-3xl text-lg">About </p>
                            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5">
                            </div>
                            <div className="p-2.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5"></div>
                         </div>
                        <section className="grid xl:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center ">
                            <div className='col-span-1 xl:block hidden'>
                            </div>
                            <div className='flex flex-col md:gap-4 gap-2 col-span-4 md:my-10 my-5  '>
                                <div className="text-justify md:text-lg text-sm leading-7 flex flex-col gap-4">
                                    <p className="px-3"> The International Conference on Smart Computational Methods and Emerging Applications (ICSCMEA 2025) is a prestigious global forum designed to advance the frontiers of intelligent computational technologies and their real-world implementations. Set against the backdrop of rapid technological evolution, this conference offers a vital platform for scholars, engineers, scientists, technocrats, and industry professionals to share their pioneering ideas, research outcomes, and experiences. </p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
                <section>
                    <div className="md:py-12 py-6 px-6 ">
                        <div className="max-w-[90rem] mx-auto text-center">
                            <div className='flex items-center gap-2 justify-center md:mb-10 mb-5'>
                                <div className="bg-[#4AF8BA] p-3 rounded-full w-fit">   </div>
                                <h2 className="md:text-2xl text-xl font-semibold ">Conference Highlights</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4">
                                {highlights.map((item, index) => (
                                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-600 hover:scale-105 transition-transform duration-300">
                                        <h3 className="md:text-xl text-lg font-semibold text-[#033D2D] mb-2">{item.title}</h3>
                                        <p className="text-gray-600 md:text-base text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[90rem] mx-auto px-3">
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
                </section>
                <LastSection />
            </section>

        </>
    )
}

export default About
