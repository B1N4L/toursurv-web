import React from "react";
import Header from "../components/Header.jsx";
import Footer from '../components/Footer';
import bgImg from "../assets/whatwedobg.png";

export default function WhatWeDo() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <section
                className="w-full min-h-[800px] bg-cover bg-center relative flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <Header />

                <div className="text-center mt-10 px-4">
                    <h1 className="text-7xl md:text-8xl font-extrabold mb-4">
                        What We Do
                    </h1>

                    <p className="text-2xl md:text-4xl font-light tracking-wide">
                        innovating software for a digital tomorrow
                    </p>
                </div>
            </section>
            <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
                {/* Left Content */}
                <div className="md:w-1/2 w-full mb-10 md:mb-0">
                    <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
                        Web Development
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                        We develop fast-loading, modern, intuitive, and mobile-compatible websites
                        that deliver exceptional user experiences.
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition-all">
                        Learn More
                    </button>
                </div>


                {/* Illustration */}
                <div className="md:w-1/2 w-full flex justify-center">
                    <img
                        src={''}
                        alt="web dev illustration"
                        className="w-[300px] md:w-[450px]"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}
