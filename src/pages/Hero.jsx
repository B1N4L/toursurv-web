import { useRef, useEffect, useState } from "react";
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import logoFull from '../assets/logo-full.png';
import downArrow from '../assets/down-arrow.png';
import rightArrow from '../assets/left-arrow.png';
import openArrow from '../assets/open-arrow.png';
import posImg from '../assets/posImg.png';
import techstack from '../assets/techStack.png';
import quote1 from '../assets/quote1.png';
import Footer from '../components/Footer';


export default function Hero() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const cards = [
        {
            title: "IoT App Development",
            desc: "Developing solutions for objects with sensors, processing ability, software, and other connected technologies.",
        },
        {
            title: "Web Development",
            desc: "We develop fast-loading, modern, intuitive, and mobile-compatible websites that deliver exceptional user experiences.",
        },
        {
            title: "Mobile App Development",
            desc: "Our app development platform helps you build and grow apps that engage users and drive business growth.",
        },
    ];

    const products = [
        {
            img: posImg,
            title: "ERP System",
            desc: "A modern ERP platform with built-in POS features to manage billing, inventory, and daily business operations efficiently.",
        },
        {
            img: posImg,
            title: "NearMe.lk",
            desc: "All in One Place: A single platform that lets users discover local services, shops, and essential businesses quickly and conveniently.",
        },
        {
            img: posImg,
            title: "Customer Care Mobile App",
            desc: "A user-friendly app that helps businesses handle customer inquiries, support tickets, and communication in one place.",
        },
        {
            img: posImg,
            title: "HR Management Tool",
            desc: "A streamlined HR solution for managing employee attendance, payroll, and workflow activities with ease.",
        },
        {
            img: posImg,
            title: "IoT Solutions",
            desc: "Smart IoT integrations that connect devices and sensors to provide automation, monitoring, and real-time data insights.",
        },
        {
            img: posImg,
            title: "Hire-IT People",
            desc: "A dedicated hiring platform that connects companies with skilled IT professionals for faster and smarter recruitment.",
        },
    ];

    const animateValue = (id, start, end, duration = 1500) => {
        const element = document.getElementById(id);
        if (!element) return;

        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);

            element.textContent = value + (element.dataset.suffix || "");
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    useEffect(() => {
        animateValue("counter1", 0, 7);
        animateValue("counter2", 0, 100);
        animateValue("counter3", 0, 30);
    }, []);

    return (
        <div className="w-full min-h-screen bg-white">
            <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-36 py-4 sm:py-6 pb-8 sm:pb-12">
                <img
                    src={logoFull}
                    alt="Logo"
                    className="h-10 sm:h-12 md:h-14 object-contain"
                />

                <button
                    onClick={() =>
                        document
                            .getElementById("contact")
                            .scrollIntoView({ behavior: "smooth" })
                    }
                    className="border-2 border-orange-300 rounded-full px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-2 flex items-center gap-2 text-sm sm:text-base md:text-lg bg-white text-gray-800 hover:bg-orange-300 hover:text-white transition font-normal">
                    <span className="hidden sm:inline">contact us</span>
                    <span className="sm:hidden">contact</span>
                    <img
                        src={rightArrow}
                        alt="Arrow"
                        className="w-5 h-3 sm:w-6 sm:h-4"
                    />
                </button>
            </header>

            <section className="relative w-[95%] sm:w-[98%] mx-auto rounded-[60px] mt-2 sm:mt-4">

                <img
                    src={hero1}
                    alt="Hero"
                    className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
                />

                <div className="absolute inset-0 bg-black/50 rounded-[60px] flex flex-col items-center justify-center text-white px-4 sm:px-6 text-center">

                    <p className="text-base sm:text-lg md:text-xl font-bold text-white/90 mb-2 sm:mb-3 fade-in fade-in-delay-1">
                        Innovate . Build. Develop . Support
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-2 sm:mt-3 text-white fade-in fade-in-delay-2">
                        We provide the expertise <br className="hidden sm:block" />
                        <span className="sm:hidden"></span>behind your growth.
                    </h1>

                    <div
                        className="mt-6 sm:mt-8 w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-white/80 transition cursor-pointer fade-in fade-in-delay-3"
                    >
                        <img
                            src={downArrow}
                            alt="Down-Arrow"
                            className="w-6 h-6 sm:w-8 sm:h-8 opacity-100"
                        />
                    </div>

                </div>


                <div className="absolute -bottom-15 left-8 sm:left-10 bg-white rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-4 md:py-5 flex justify-evenly items-center text-center gap-6 w-auto min-w-fit z-0">

                    <div className="px-2 sm:px-2 md:px-2 lg:px-3 fade-in fade-in-delay-1">
                        <h2
                            id="counter1"
                            data-suffix="+"
                            className="counter text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 leading-none"
                        >
                            0+
                        </h2>
                        <p className="fade-in fade-in-delay-1 text-sm sm:text-base md:text-lg text-gray-800 mt-1 font-normal">
                            years of experience
                        </p>
                    </div>

                    <div className="px-2 sm:px-2 md:px-2 lg:px-3 fade-in fade-in-delay-2">
                        <h2
                            id="counter2"
                            data-suffix="%"
                            className="counter text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 leading-none"
                        >
                            0%
                        </h2>
                        <p className="fade-in fade-in-delay-2 text-sm sm:text-base md:text-lg text-gray-800 mt-1 font-normal">
                            Client Satisfaction
                        </p>
                    </div>

                    <div className="px-2 sm:px-2 md:px-2 lg:px-3 fade-in fade-in-delay-3">
                        <h2
                            id="counter3"
                            data-suffix="+"
                            className="counter text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 leading-none"
                        >
                            0+
                        </h2>
                        <p className="fade-in fade-in-delay-3 text-sm sm:text-base md:text-lg text-gray-800 mt-1 font-normal">
                            projects
                        </p>
                    </div>

                </div>

            </section>
            <div className="h-10 sm:h-14 md:h-20 lg:h-28"></div>
            <section className="w-full flex md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">

                <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 flex flex-col items-start justify-start">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-300 leading-tight">Who Are We</h1>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#19202C] leading-snug">
                        Innovative Global Software Provider <br className="hidden sm:block" />
                        Delivering <span className="text-orange-500"> Creative, Reliable </span>
                        Technological Solutions
                    </h3>

                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                .scrollIntoView({ behavior: "smooth" })
                        }
                        className="mt-4 bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-orange-600 transition flex items-center gap-2 w-fit text-sm sm:text-base">
                        Lets Talk
                        <img src={openArrow} alt="open" className="w-6 h-6" />
                    </button>

                </div>

                <div className="w-full md:w-1/2 flex items-end justify-center mt-8 sm:mt-10 md:mt-0">
                    <img
                        src={hero2}
                        alt="Team Illustration"
                        className="w-full sm:w-[80%] md:w-[90%] max-w-lg"
                    />
                </div>
            </section>

            <section className="relative w-full flex justify-center -mb-24 sm:-mb-28 md:-mb-32 z-40 px-4 sm:px-6">
                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-6xl w-full text-center md:text-left relative">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                        Here is What We Do Our Best
                    </h2>

                    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto md:mx-0">
                        Enterprise-grade point-of-sale solutions featuring inventory
                        management, sales analytics, and multi-payment integration
                    </p>

                    <div className="hidden lg:flex flex-col absolute right-10 top-10 w-56 md:w-64 items-start gap-1">
                        <img src={quote1} alt="quote" className="w-10 h-10" />
                        <p className="text-black font-semibold text-lg leading-relaxed">
                            Empower your business with Toursurv's expert team we build solutions that drive success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto min-h-[28rem] sm:min-h-[32rem] md:min-h-[36rem] bg-[#0D1422] flex justify-center items-center overflow-hidden  pt-40 sm:pt-48 md:pt-52 pb-24 sm:pb-28 md:pb-32">
                <div className="relative w-full max-w-5xl flex justify-center items-center mr-52">
                    {cards.map((card, index) => {
                        const offset = index - activeIndex;

                        let scale = "scale-90";
                        let translateY = "translate-y-4";
                        let rotate = "rotate-0";
                        let zIndex = "z-10";
                        let opacity = "opacity-70";

                        if (offset === 0) {
                            scale = "scale-110";
                            translateY = "-translate-y-6";
                            rotate = "rotate-0";
                            zIndex = "z-20";
                            opacity = "opacity-100";
                        } else if (offset === -1) {
                            scale = "scale-90";
                            translateY = "translate-y-4";
                            rotate = "-rotate-6";
                            zIndex = "z-10";
                        } else if (offset === 1) {
                            scale = "scale-90";
                            translateY = "translate-y-4";
                            rotate = "rotate-6";
                            zIndex = "z-10";
                        } else {
                            scale = "scale-75";
                            translateY = "translate-y-6";
                            rotate = "rotate-0";
                            zIndex = "z-0";
                            opacity = "opacity-0";
                        }

                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`absolute transition-all duration-500 
                                    ${scale} ${translateY} ${rotate} ${zIndex} ${opacity} 
                                    bg-gradient-to-b from-[#1B2435] to-[#0D1422] 
                                    border border-[#1E2A3D] 
                                    shadow-md rounded-xl p-6 cursor-pointer w-64 sm:w-72 `}
                                style={{
                                    left: "50%",
                                    transform: `translateX(${offset * 500}px)`,
                                    transformOrigin: "center center",
                                }}
                            >
                                <span className="w-4 h-4 rounded-full bg-orange-500 absolute top-4 left-4"></span>
                                <h3 className="text-white font-bold text-xl mt-10">{card.title}</h3>
                                <p className="text-gray-300 mt-2 text-lg leading-relaxed">{card.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="relative w-full h-40 bg-[#0D1422] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white">
                    <svg
                        viewBox="0 0 1440 200"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,200 C360,20 1080,20 1440,200 L1440,0 L0,0 Z"
                            fill="#0D1422"
                        />
                    </svg>
                </div>
            </section>

            <section className="relative w-full bg-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 sm:h-40 md:h-48 lg:h-64 bg-white rounded-t-[80%]"></div> {/**bg-[#0D1422] */}
                <div className="bg-white relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827]">
                        <span className="text-orange-500">Trusted</span> Products
                    </h2>

                    <p className="text-black mt-3 max-w-2xl text-base sm:text-lg">
                        Enterprise-grade point-of-sale solutions featuring inventory management,
                        sales analytics, and multi-payment integration
                    </p>

                    <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                gap-x-6 sm:gap-x-8 md:gap-x-12 
                gap-y-12 sm:gap-y-16 md:gap-y-20">

                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="border-r-0 sm:border-r border-gray-300 sm:pr-6 last:border-none pb-6 sm:pb-0 border-b sm:border-b-0 last:border-b-0"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mx-auto sm:mx-0"
                                />

                                <h3 className="text-xl sm:text-2xl font-semibold text-[#111827] mt-4 sm:mt-6 text-center sm:text-left">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mt-3 text-center sm:text-left">
                                    {item.desc}
                                </p>

                                <button className="text-gray-500 text-sm mt-3 
                               hover:text-orange-500 transition 
                               block mx-auto sm:mx-0">
                                    View more
                                </button>
                            </div>
                        ))}

                    </div>


                </div>
            </section>
            <section className="bg-white w-full py-10">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f233c] mb-4">
                    Our Tech Stack
                </h2>

                <div className="bg-[#0f233c] w-full overflow-hidden py-6 sm:py-8 md:py-[30px]">
                    <div
                        className="inline-flex items-center gap-10"
                        style={{
                            animation: "marquee 35s linear infinite"
                        }}
                    >
                        <img src={techstack} className="h-16 sm:h-20 md:h-24 lg:h-[120px]" />
                        <img src={techstack} className="h-16 sm:h-20 md:h-24 lg:h-[120px]" />
                        <img src={techstack} className="h-16 sm:h-20 md:h-24 lg:h-[120px]" />
                        <img src={techstack} className="h-16 sm:h-20 md:h-24 lg:h-[120px]" />
                    </div>
                </div>

                <p className="text-center text-gray-600 mt-6 px-6 max-w-3xl mx-auto text-base sm:text-lg">
                    We build powerful, scalable solutions using modern technologies like Python,
                    PHP, Laravel, HTML5, Java, Angular, and Adobe tools ensuring performance,
                    security, and innovation in every project.
                </p>
            </section>

            <section className="relative bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">

                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">

                    <div className="flex-1 flex justify-center w-full md:w-auto">
                        <img src={hero3} alt="Sketch"
                            className="w-full sm:w-[90%] max-w-[500px]" />
                    </div>

                    <div className="flex-1 text-center md:text-left w-full">
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-extrabold text-gray-300 leading-snug">
                            <span className="text-orange-500 mr-2">❝❝❝</span>
                            Proven Global Excellence
                        </h2>

                        <p className="mt-3 text-base sm:text-lg md:text-[20px] lg:text-[21px] font-semibold leading-relaxed text-black">
                            With 30+ successful projects across Globe
                            <span className="text-orange-500 font-bold"> Toursurv</span>
                            continues to earn the trust of clients worldwide delivering
                            innovation, reliability, and results that stand out.
                        </p>
                    </div>

                </div>

                <div className="absolute left-1/2 bottom-0 w-[200%] -translate-x-1/2 pointer-events-none hidden md:block">

                    <img src="/assets/ribbon-1.png"
                        className="absolute bottom-10 w-full rotate-[-8deg]" alt="" />

                    <img src="/assets/ribbon-2.png"
                        className="absolute -bottom-2 w-full rotate-[5deg] opacity-95" alt="" />
                </div>

            </section>

            <section className="relative sm:pt-16 md:pt-24">
                <div className="relative mx-auto overflow-hidden">

                    <div className="flex items-start justify-start mb-8 sm:mb-10 md:mb-12 px-4 pt-12 gap-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#19202C] mb-3">TESTIMONIALS</h2>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#19202C] mb-3">------------</h2>
                    </div>

                    <div className="bg-orange-500 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row">

                        <div className="bg-orange-500 flex-1 flex items-center justify-center p-8 sm:p-10 md:p-12 lg:p-16">
                            <div className="text-white text-center md:text-left">
                                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-2 sm:mb-4">
                                    <span className="block">"</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                    what our<br />
                                    clients<br />
                                    say
                                </h3>
                                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mt-2 sm:mt-4 text-right">
                                    <span className="block">"</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white flex-1 p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8">

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Client"
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0 mx-auto sm:mx-0"
                                />
                                <div className="flex-1">
                                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
                                        Working with Toursurv has been a game changer. Their technical expertise, clear communication, and ability to tailor solutions to our needs exceeded every expectation.
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm mb-2">-Project manager-</p>

                                    <div className="flex gap-1 justify-center sm:justify-start">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <svg
                                                key={star}
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= 3 ? 'text-orange-500 fill-current' : 'text-orange-500'}`}
                                                viewBox="0 0 24 24"
                                                fill={star <= 3 ? "currentColor" : "none"}
                                                stroke="currentColor"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1564490215983-296e5f56b623?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Client"
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0 mx-auto sm:mx-0"
                                />
                                <div className="flex-1">
                                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
                                        Toursurv transformed our workflow with their innovative approach and reliable support. Their team understood our challenges and delivered exactly what we needed.
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm mb-2">-Project manager-</p>

                                    <div className="flex gap-1 justify-center sm:justify-start">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <svg
                                                key={star}
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= 3 ? 'text-orange-500 fill-current' : 'text-orange-500'}`}
                                                viewBox="0 0 24 24"
                                                fill={star <= 3 ? "currentColor" : "none"}
                                                stroke="currentColor"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                                    alt="Client"
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0 mx-auto sm:mx-0"
                                />
                                <div className="flex-1">
                                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
                                        We’ve partnered with many tech companies, but Toursurv stands out. Their professionalism, fast delivery, and commitment to quality made the entire process effortless.
                                    </p>
                                    <p className="text-gray-500 text-xs sm:text-sm mb-2">-Project manager-</p>

                                    <div className="flex gap-1 justify-center sm:justify-start">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <svg
                                                key={star}
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= 3 ? 'text-orange-500 fill-current' : 'text-orange-500'}`}
                                                viewBox="0 0 24 24"
                                                fill={star <= 3 ? "currentColor" : "none"}
                                                stroke="currentColor"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-4 sm:mt-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-[#808080] w-full px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                            Want To Grow Your Business?
                        </h3>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                            className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-600 transition flex items-center gap-2 w-full sm:w-auto justify-center">
                            Lets Talk
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </button>
                    </div>
                </div>

            </section>


            <section
                id="contact"
                className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#19202C]">GET IN TOUCH</h2>
                    </div>

                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 justify-center items-start md:items-stretch">
                        <div className="flex-1 w-full">
                            <form className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                            placeholder=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                                        placeholder=""
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition w-full sm:w-auto"
                                >
                                    send
                                </button>
                            </form>
                        </div>

                        <div className=" w-1/3 mt-8 md:mt-0">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#19202C] mb-4 sm:mb-6">Reach Us</h3>

                            <div className="space-y-4 sm:space-y-6 text-gray-700">
                                <div>
                                    <p className="text-base sm:text-lg mb-1 sm:mb-2">0112-755050</p>
                                    <p className="text-base sm:text-lg">071-11108108</p>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-base sm:text-lg">No: 359/19/1/A, 06th Lane</p>
                                    <p className="text-base sm:text-lg">Maya Mawatha</p>
                                    <p className="text-base sm:text-lg">Makumbura, Pannipitiya,</p>
                                    <p className="text-base sm:text-lg">Postcode: 10230</p>
                                </div>

                                <div>
                                    <p className="text-base sm:text-lg wrap-break-words">toursurvmarketing@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};
