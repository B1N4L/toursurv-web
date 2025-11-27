import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from '../components/Footer';
import bgImg from "../assets/whatwedobg.png";
import webDev from "../assets/webDev.png";
import mobileDev from "../assets/mobileDev.png";
import webAppDev from "../assets/webAppDev.png";
import posDev from "../assets/posDev.png";
import iotDev from "../assets/iotDev.png";
import aiDev from "../assets/aiDev.png";
import discoverIcon from "../assets/discover.png";
import designIcon from "../assets/design.png";
import developIcon from "../assets/develop.png";
import deployIcon from "../assets/deploy.png";
import philosophyImg from "../assets/philosophy.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function WhatWeDo() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col">
            <section
                className="w-full min-h-[800px] bg-cover bg-center relative text-white"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <Header />

                <div className="flex flex-col items-center justify-center text-center mt-40 px-4">
                    <h1 className="text-7xl md:text-8xl font-extrabold mb-4"
                        data-aos="fade-down">
                        What We Do
                    </h1>

                    <p className="text-2xl md:text-4xl font-light tracking-wide"
                        data-aos="fade-down">
                        innovating software for a digital tomorrow
                    </p>
                </div>
            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 py-20 relative">

                <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
                        data-aos="fade-right">
                        <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            Web Development
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
                            We develop fast-loading, modern, intuitive, and mobile-compatible websites
                            that deliver exceptional user experiences.
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
                        data-aos="fade-left">
                        <img
                            src={webDev}
                            alt="web dev illustration"
                            className="w-[260px] sm:w-[320px] md:w-[430px] lg:w-[480px]"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center mt-16">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="w-full h-5 bg-[#202A47]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 py-20 relative">

                <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
                        data-aos="fade-down">
                        <img
                            src={mobileDev}
                            alt="mobile dev illustration"
                            className="w-[260px] sm:w-[320px] md:w-[430px] lg:w-[480px]"
                        />
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
                        data-aos="fade-up">
                        <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            Mobile App Development
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
                            Our app development platform helps you build and grow apps that engage users and drive business growth.
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-16">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="w-full h-5 bg-[#FF6D00]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 py-20 relative">

                <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
                        data-aos="fade-left">
                        <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            Web App Development
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
                            Creating application programs that reside on remote servers and are delivered through the internet via a browser.
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
                        data-aos="fade-right">
                        <img
                            src={webAppDev}
                            alt="web dev illustration"
                            className="w-[260px] sm:w-[320px] md:w-[430px] lg:w-[480px]"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center mt-16">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="w-full h-5 bg-[#202A47]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 py-20 relative">

                <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
                        data-aos="fade-up">
                        <img
                            src={iotDev}
                            alt="iot dev illustration"
                            className="w-[260px] sm:w-[320px] md:w-[430px] lg:w-[480px]"
                        />
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
                        data-aos="fade-down">
                        <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            IOT Development
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
                            Developing solutions for objects with sensors, processing ability, software, and other connected technologies.
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-16">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="w-full h-5 bg-[#FF6D00]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 py-20 relative">

                <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
                        data-aos="fade-left">
                        <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            Pos System Designs
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
                            Enterprise-grade point-of-sale solutions featuring inventory management, sales analytics, and multi-payment integration
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
                        data-aos="fade-right">
                        <img
                            src={posDev}
                            alt="pos dev illustration"
                            className="w-[260px] sm:w-[320px] md:w-[430px] lg:w-[480px]"
                        />
                    </div>
                </div>

                <div className="w-full flex justify-center mt-16">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="w-full h-5 bg-[#202A47]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 py-20 relative">

                <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">

                    <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0"
                        data-aos="fade-down">
                        <img
                            src={aiDev}
                            alt="ai dev illustration"
                            className="w-[260px] sm:w-[320px] md:w-[430px] lg:w-[480px]"
                        />
                    </div>

                    <div className="md:w-1/2 w-full flex flex-col justify-center text-center md:text-left"
                        data-aos="fade-up">
                        <h2 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                            AI Development
                        </h2>

                        <p className="text-black text-lg md:text-xl leading-relaxed mb-8 max-w-[550px] mx-auto md:mx-0">
                            We build custom AI solutions for your business. From automation and predictive analytics to chatbots and machine learning models and deploy AI systems that drive results.
                        </p>

                        <div className="flex md:justify-start justify-center">
                            <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-16">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="w-full h-5 bg-[#FF6D00]"></div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#0D1422] text-white py-28 px-6 sm:px-10 md:px-20">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-wide"
                        data-aos="flip-up">
                        OUR PROCESS</h2>
                    <p className="text-gray-300 mt-3 text-sm md:text-base"
                        data-aos="flip-up">
                        We Know Your Time Is Valuable
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 text-center">

                    <div className="flex flex-col items-center px-6 relative"
                        data-aos="flip-up">
                        <img src={discoverIcon} alt="discover" className="w-16 mb-6" />
                        <h3 className="text-lg font-semibold mb-3">1. Discover</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We dive deep into your goals,<br /> challenges, and ideas to<br /> understand exactly what you<br /> need.
                        </p>

                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gray-600"></div>
                    </div>

                    <div className="flex flex-col items-center px-6 relative"
                        data-aos="flip-down">
                        <img src={designIcon} alt="design" className="w-16 mb-6" />
                        <h3 className="text-lg font-semibold mb-3">2. Design</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We craft intuitive, modern,<br /> and user-focused designs<br /> that bring your vision to life.
                        </p>

                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gray-600"></div>
                    </div>

                    <div className="flex flex-col items-center px-6 relative"
                        data-aos="flip-up">
                        <img src={developIcon} alt="develop" className="w-16 mb-6" />
                        <h3 className="text-lg font-semibold mb-3">3. Develop</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Our team builds fast, secure,<br /> and scalable solutions using<br /> the latest technologies.
                        </p>

                        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-40 bg-gray-600"></div>
                    </div>

                    <div className="flex flex-col items-center px-6"
                        data-aos="flip-down">
                        <img src={deployIcon} alt="deploy" className="w-16 mb-6" />
                        <h3 className="text-lg font-semibold mb-3">4. Deploy & Scale</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            We launch your product<br /> smoothly and optimize it for<br /> long-term growth and<br /> performance.
                        </p>
                    </div>

                </div>

            </section>
            <section className="w-full bg-white px-6 sm:px-10 md:px-20 pt-20">

                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-500 mb-16"
                    data-aos="fade-down">
                    Our Core Philosophy
                </h2>

                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-center"
                    data-aos="fade-down">

                    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                        <img
                            src={philosophyImg}
                            alt="core philosophy illustration"
                            className="w-full max-w-[550px] object-contain"
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-center font-bold md:text-center text-lg sm:lg md:text-3xl text-gray-900 leading-relaxed ">

                        <p>
                            We take a holistic approach to software<br />
                            development, combining
                            <span className="font-semibold text-orange-500"> technical expertise </span>
                            with
                            <span className="font-semibold text-orange-500"> creative problem-solving </span>
                            and global best practices. Our process ensures every solution is robust, scalable,
                            and aligned with<br /> your business goals.
                        </p>

                    </div>

                </div>

            </section>
            <Footer />
        </div>
    );
}
