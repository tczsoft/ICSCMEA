import React from 'react'
import { Link } from 'react-router-dom'

function Common({ heading, content, path, paths }) {
    return (
        <>
            <section>
                <section className="relative h-[15vh] w-full overflow-hidden
                bg-gradient-to-r from-[#0D6743] to-[#033D2D] lg:block hidden">
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/images/home/Herosec.png')] opacity-20 bg-fixed bg-center"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <nav className="text-white text-sm md:text-base font-medium">
                            <ol className="flex space-x-2">
                                <li>
                                    <a href="/" className="hover:underline">Home</a>
                                </li>
                                <li>/</li>
                                <Link to={paths}>
                                    <li className="text-[#4AF8BA]">{path}</li>
                                </Link>
                            </ol>
                        </nav>
                    </div>
                    <img className="absolute -top-20 -left-20 2xl:block hidden" src="/assets/Images/point.png" alt="" />
                    <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/assets/Images/Herosec.png')] opacity-20" ></div>
                </section>
                <section className="lg:pt-0 pt-16">
                    <section className="max-w-[90rem] relative mx-auto lg:px-5">
                        <div className="lg:p-20 p-10 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl xl:block hidden">
                            <p className="text-center w-fit rounded-full font-semibold 2xl:text-3xl text-lg">{heading}</p>
                            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5"> </div>
                            <div className="p-2.5 z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5"></div>
                        </div>
                        <section className="grid xl:grid-cols-5 grid-cols-1 md:gap-5 gap-3 items-center">
                            <div className='col-span-1 xl:block hidden'>
                            </div>
                            <div className='flex flex-col md:gap-4 gap-2 col-span-4 md:mt-10 mt-5'>
                                <div className="text-justify md:text-lg text-sm leading-7 flex flex-col gap-4">
                                    <p className="px-3">
                                        {content}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Common
