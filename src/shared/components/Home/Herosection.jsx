import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import LastSection from "../Bottom/Bottom";
import { RiCpuLine, RiBarChart2Line, RiRocketLine, RiTeamLine } from "react-icons/ri";


export const Herosection = () => {
  // const scopeHeadings = [
  //   "Smart Computational Techniques",
  //   "Data-Driven Approaches",
  //   "Emerging Applications",
  //   "Interdisciplinary Innovations",
  // ];
  const scopeHeadings = [
    { text: "Smart Computational Techniques", Icon: RiCpuLine },
    { text: "Data-Driven Approaches", Icon: RiBarChart2Line },
    { text: "Emerging Applications", Icon: RiRocketLine },
    { text: "Interdisciplinary Innovations", Icon: RiTeamLine },
  ];
  const date = [
    { Dates: '22-07-2025', Title: 'Submission Deadline' },
    { Dates: '29-07-2025', Title: 'Notification of Decision' },
    { Dates: '05-08-2025', Title: 'Submitting Revised Full Paper' },
    { Dates: '12-08-2025', Title: 'Notification of Acceptance' },
    { Dates: '19-08-2025', Title: 'Camera-Ready Paper Submission' },
    { Dates: '26-08-2025', Title: 'Last Date for Registration' },
  ];
  return (
    <>
      <section className="relative lg:h-[calc(100dvh-30px)] w-full overflow-hidden bg-gradient-to-r from-[#0D6743] to-[#033D2D]  " >
        <img className="absolute -top-20 -left-20 2xl:block hidden" src="/images/home/point.png" alt="" />
        <div className="absolute top-0 left-0 h-full w-full z-0 bg-[url('/images/home/Herosec.png')] opacity-20 bg-fixed"></div>
        <div className="py-20 flex flex-col justify-center 2xl:gap-20 xl:gap-10 gap-5 h-full">
          <div className="relative md:py-5 py-3 bg-[#4AF8BA] 2xl:w-1/2 w-3/4 rounded-tr-full rounded-br-full">
            <Marquee pauseOnHover direction="right">
              <p className=" text-black overflow-hidden  font-bold md:text-xl uppercase">International Conference on Smart Computational Methods and Emerging Applications <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  Intelligent Systems <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  Advanced Algorithms <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span> AI & Emerging Tech <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  Global Innovations  <span className="animate-spin inline-block text-[#033D2D]"> ✦ </span>  </p>
            </Marquee>
          </div>
          <div className="relative z-10 grid grid-cols-1 2xl:grid-cols-2 max-w-[90rem] gap-10 lg:py-0 py-10 mx-auto items-center px-4">
            <div className=" lg:ml-auto mx-auto flex flex-col gap-6">
              <h1 className="text-2xl xl:text-5xl lg:text-3xl font-bold leading-snug text-left text-white">
                International Conference on Smart Computational Methods and Emerging Applications</h1>
              <div className=" ">
                <Link to="/paper-submission">
                  <button className="border border-[#4AF8BA] px-6 py-3 rounded-full  text-white cursor-pointer">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
            {/* <img src="public/images/home/pages.jpg" className="rounded-xl 2xl:block hidden" alt="" /> */}
          </div>
        </div>
      </section>
      <section className=" bg-white/96">
        <section className="max-w-[90rem] relative  mx-auto md:px-5 px-3">
          <div className="md:p-40 p-20 bg-[#4AF8BA] w-fit rounded-b-full absolute -top-5 rounded-tr-4xl">
            <div className="p-2.5 rounded-t-full bg-[#02c07d] top-0 absolute z-20 -left-5">
            </div>
            <div className="p-2.5  z-10 rounded-tl-xl bg-[#4AF8BA] top-0 absolute -left-4.5">
            </div>
          </div>
          <section className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3 items-center">
            <div className="z-10">
              <img src="/images/home/aboutsection.png" className="md:w-[500px] w-[200px] md:mx-0 mx-auto" alt="" />
            </div>
            <div className='flex flex-col md:gap-4 gap-2 lg:my-0 my-5 col-span-2'>
              <div className="flex gap-3 justify-center items-center">
                <div className="bg-[#4AF8BA] p-3 rounded-full w-fit">
                </div>
                <h1 className="text-center w-fit rounded-full font-semibold lg:text-3xl text-lg">About</h1>
              </div>
              <div className="text-justify lg:text-lg md:text-base text-sm leading-7 flex flex-col gap-4">
                <p className="">
                  The International Conference on Smart Computational Methods and Emerging Applications serves as a premier interdisciplinary platform for scholars, researchers, practitioners, and educators to present and discuss the latest innovations, trends, and challenges in the field of intelligent computational systems and their transformative applications.
                </p>
                <p className="">ICSCMEA 2025 aims to bring together leading minds from academia, industry, and government to exchange knowledge on the advancement of computational intelligence, data-driven methodologies, and next-generation technologies. The conference fosters collaboration across disciplines including Artificial Intelligence, Machine Learning, Data Science, Cyber-Physical Systems, Internet of Things (IoT), Quantum Computing, Robotics, Cloud and Edge Computing, and many more.
                </p>
              </div>
              <div className="md:mx-0 mx-auto">
                <Link to="/about">
                  <button className="md:text-base text-sm relative bg-transparent border border-[#4AF8BA] rounded-full cursor-pointer px-6 py-2 md:py-3 " >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>
      <section className="bg-white/96 py-10">
        <section className="max-w-[90rem] mx-auto md:px-5 px-3 flex flex-col gap-5">
          <div className="flex gap-3 justify-center items-center">
            <div className="bg-[#4AF8BA] p-3 rounded-full w-fit">
            </div>
            <h1 className="text-center w-fit rounded-full font-semibold lg:text-3xl text-lg">
              Scope of the Conference
            </h1>
          </div>
          <div className="grid lg:grid-cols-4 gap-5 items-center">
            <div className="lg:col-span-1">
              <img className="rounded-lg mx-auto" src="/images/home/emerging.webp" alt="" />
            </div>
            <div className="flex flex-col gap-4 md:col-span-3">
              <p className="text-justify md:text-lg">The International Conference on Smart Computational Methods and Emerging Applications aims to provide a global platform for researchers, academicians, industry experts, and innovators to exchange knowledge, share advancements, and explore novel trends in computational intelligence and its real-world applications. The conference will focus on cutting-edge computational methods and their integration into diverse domains to address complex challenges and enable transformative innovations.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scopeHeadings.map(({ text, Icon }, index) => (
              <div key={index} className="font-medium rounded-lg p-4 flex flex-col items-center justify-center gap-3 text-center shadow-md transition"  >
                <Icon className="w-8 h-8 text-[#033D2D]" />
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div>
          </div>
        </section>
      </section>
      <section className=" flex flex-col md:gap-10  gap-10 bg-white/96">
        <section className="  max-w-[90rem]  mx-auto md:px-5 px-3 ">
          <div className=" flex flex-col md:gap-5 gap-3">
            <div className="flex gap-3 justify-center items-center">
              <div className="bg-[#4AF8BA] p-3 rounded-full w-fit">
              </div>
              <h1 className="text-center w-fit rounded-full font-semibold lg:text-3xl text-lg">
                Key Dates
              </h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 md:gap-10 gap-5">
              {date.map((item, index) => (
                <section key={index} className='grid grid-cols-1 md:grid-cols-5 items-center'>
                  <div className={`bg-[#033D2D] col-span-1 md:col-span-4 text-white rounded-xl md:p-7 p-5 w-full h-full ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
                    <div className="flex items-center gap-5 h-full justify-center">
                      <div className="md:text-base text-sm font-medium flex flex-col text-center gap-5">
                        {item.Title}
                      </div>
                    </div>
                  </div>
                  <div className={`md:bg-[#4AF8BA] p-4 col-span-1 font-semibold ${index % 2 === 0 ? 'order-1 md:order-2 rounded-tr-3xl rounded-br-3xl' : 'order-1 md:order-1 rounded-tl-3xl rounded-bl-3xl text-right'}`}>
                    <p className="2xl:text-base text-sm">{item.Dates}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
        <LastSection />
      </section>
    </>
  );
};
