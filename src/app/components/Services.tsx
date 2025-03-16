import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsClipboard2Data } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { LuBrainCircuit, LuServerOff } from "react-icons/lu";
import { IconCloudComputing } from "@tabler/icons-react";


const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <div
      id="services"
      className="grid gap-3 md:grid-cols-2 px-2 sm:px-10 lg:px-[11.6vw] lg:mt-20 mt-6 lg:h-screen h-full dark:bg-black mb-20 lg:overflow-y-hidden"
    >
      <div data-aos="flip-left" className="px-3 lg:px-0">
        {" "}
        {/* Apply flip-left to the parent container */}
        <h1 className="serCol lg:scroll-m-20 pb-2 md:px-3 text-3xl font-semibold tracking-tight first:mt-0">
          Services
        </h1>
        <h1 className="lg:scroll-m-20 md:px-3 text-4xl font-extrabold tracking-wide lg:text-5xl lg:mb-5">
          Unlocking your potential with my expert services
        </h1>
        <Image
        src="/softwaer.png" // Path to your image
        alt="Description of the image"
        width={1200} // Set the width according to the size you need
        height={800} // Set the height according to the size you need
        quality={100} // Adjust the quality prop to control compression (0-100)
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw" // Adjust for responsive sizes
        priority  
      />
      </div>
      
      <div data-aos="flip-left">
      <div  className="relative lg:overflow-hidden h-full">
        <h1 className="q mb-3 mt-7 px-5 hidden lg:block">
          Scroll up here to explore my more services and see how I can help
          elevate your business!
        </h1>
        <div className="absolute sha" >
          {" "}
          {/* Apply flip-left here */}
          <div className="px-4 py-2">
            {/* 1 */}
            <div className="xcx my-3 rounded-xl flex lg:p-4 p-2 shadow-lg">
              <div>
              <BsClipboard2Data className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 dark:text-green-300/50 text-green-300" />
              </div>
              <div className="lg:mr-6 lg:ml-4 ml-3">
                <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#2cbca5]">
                 AI & Data Science
                </h1>
                <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2  text-gray-600 dark:text-[#B7B4CBD4]">
                I build end-to-end data science models for financial forecasting and personalized recommendations using techniques like LSTM, Linear Regression, and ARIMA.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="xcx my-3 rounded-xl flex lg:p-4 p-2 shadow-lg">
              <div>
                <BiNetworkChart className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#50add7]/80" />
              </div>
              <div className="lg:mr-6 lg:ml-4 ml-3">
                <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#50add7]">
                  Cloud & DevOps
                </h1>
                <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                I deploy AI models and web applications on the cloud, ensuring scalable, secure, and efficient operations with best-in-class DevOps practices.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="xcx my-3 rounded-xl flex lg:p-4 p-2 shadow-lg">
              <div>
                <LuServerOff className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#c742f7]/90" />
              </div>
              <div className="lg:mr-6 lg:ml-4 ml-3">
                <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#c742f7]">
                  Software Development
                </h1>
                <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                I create full-stack applications using JavaScript, Node.js, and React, delivering responsive, high-performance solutions from development to deployment.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="xcx my-3 rounded-xl flex lg:p-4 p-2 shadow-lg">
              <div>
                <IconCloudComputing className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#53b8a2]" />
              </div>
              <div className="lg:mr-6 lg:ml-4 ml-3">
                <h1 className="lg:scroll-m-20 lg:text-2xl text-sm font-semibold tracking-tight first:mt-0 text-[#53b8a2]">
                Soft Skills & Strengths
                </h1>
                <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                I combine technical expertise with strong communication and problem-solving skills, making complex ideas accessible and fostering effective collaboration.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="xcx my-3 rounded-xl flex lg:p-4 p-2 shadow-lg">
              <div>
              <LuBrainCircuit className="lg:h-12 lg:w-12 h-6 w-6 mt-1 lg:mt-0 text-[#af6c6c]/80" />
              </div>
              <div className="lg:mr-6 lg:ml-4 ml-3">
                <h1 className="lg:scroll-m-20 lg:text-2xl text-1xl font-semibold tracking-tight first:mt-0 text-[#af6c6c]/90">
                Web Crawling & Finance AI
                </h1>
                <p className="lg:leading-6 text-xs lg:text-base lg:[&:not(:first-child)]:mt-3 mt-1 lg:line-clamp-3 line-clamp-2 text-gray-600 dark:text-[#B7B4CBD4]">
                I develop custom web crawlers that extract financial news and integrate AI insights to predict stock impacts, enabling data-driven decision-making.
                </p>
              </div>
            </div>

            {/* Add more divs as needed */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;