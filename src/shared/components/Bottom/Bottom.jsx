import React from 'react'
import { Link } from 'react-router-dom'

function LastSection() {
    return (
        <>
            <section className="w-full bg-[url('/images/home/final-selection.png')] md:py-10 py-10  bg-center  bg-cover flex justify-center items-center">
                <div className=" max-w-[90rem]  mx-auto md:px-5 px-3 pt-3 ">
                    <section className=" flex flex-col gap-10 ">
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 items-center text-white '>
                            <div className="bg-[#033D2D] md:p-10 p-5 w-full h-full transform  flex items-center justify-center rounded-xl relative">
                                <div className="md:p-6 p-3 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10 rounded-tr-xl">
                                    <div className="p-1.5  rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3">
                                    </div>
                                    <div className="p-1.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3">
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 items-center">
                                    <p className="xl:text-2xl text-center">Taipei, Taiwan</p>
                                </div>
                            </div>
                            <div className="bg-[#033D2D] md:p-10 p-5 w-full h-full transform flex items-center justify-center  relative rounded-xl">
                                <div className="md:p-6 p-3 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10 rounded-tr-xl">
                                    <div className="p-1.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3"> </div>
                                    <div className="p-1.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3"> </div>
                                </div>
                                <div className=" flex flex-col gap-5">
                                    <p className="xl:text-2xl text-center">28<sup>th</sup> April, 2026 <br/> 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                        <div className="bg-[#033D2D] md:p-10 p-5 w-full h-full transform flex items-center justify-center relative rounded-xl">
                            <div className="md:p-6 p-3 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-3 left-10 rounded-tr-xl">
                                <div className="p-1.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-3">
                                </div>
                                <div className="p-1.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-3">
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <p className="xl:text-2xl  text-center">info.iciscm@gmail.com
                                </p>
                            </div>
                        </div>
                </div>
                <div className='w-fit mx-auto'>
                    <Link to="/paper-submission">
                        <div className=" px-4 w-fit text-black py-2 rounded-full bg-[#4AF8BA] mx-auto cursor-pointer md:text-base text-sm shadow-2xl hover:scale-105 duration-300 ">
                            Register Now
                        </div>
                    </Link>
                </div>
            </section>
        </div >
            </section >
        </>
    )
}

export default LastSection
