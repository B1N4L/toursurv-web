import { useRef, useEffect, useState } from "react";
import hero0 from '../assets/hero0.png';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import apsmarks1 from '../assets/apsmarks1.png';
import apsmarks2 from '../assets/apsmarks2.png';
import downArrow from '../assets/down-arrow.png';
import openArrow from '../assets/open-arrow.png';
import posImg from '../assets/posImg.png';
import hireImg from '../assets/hireImg.png';
import iotImg from '../assets/iotImg.png';
import nearbyImg from '../assets/nearbyImg.png';
import customerImg from '../assets/customerImg.png';
import hrImg from '../assets/hrImg.png';
import heromq1 from '../assets/heromq1.png';
import heromq2 from '../assets/heromq2.png';
import heromq3 from '../assets/heromq3.png';
import heromq4 from '../assets/heromq4.png';
import heromq5 from '../assets/heromq5.png';
import heromq6 from '../assets/heromq6.png';
import heromq7 from '../assets/heromq7.png';
import heromq8 from '../assets/heromq8.png';
import quote1 from '../assets/quote1.png';
import imgStrip1 from '../assets/imgStrip1.png';
import imgStrip2 from '../assets/imgStrip2.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AOS from "aos";
import "aos/dist/aos.css";


export default function Hero() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [showFirstRev, setShowFirstRev] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

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
            img: nearbyImg,
            title: "NearBy.lk",
            desc: "All in One Place: A single platform that lets users discover local services, shops, and essential businesses quickly and conveniently.",
        },
        {
            img: customerImg,
            title: "Customer Care Mobile App",
            desc: "A user-friendly app that helps businesses handle customer inquiries, support tickets, and communication in one place.",
        },
        {
            img: hrImg,
            title: "HR Management Tool",
            desc: "A streamlined HR solution for managing employee attendance, payroll, and workflow activities with ease.",
        },
        {
            img: iotImg,
            title: "IoT Solutions",
            desc: "Smart IoT integrations that connect devices and sensors to provide automation, monitoring, and real-time data insights.",
        },
        {
            img: hireImg,
            title: "Hire-IT People",
            desc: "A dedicated hiring platform that connects companies with skilled IT professionals for faster and smarter recruitment.",
        },
    ];

    const reviewsSet1 = [
        {
            text: "Working with Toursurv has been a game changer. Their technical expertise, clear communication, and ability to tailor solutions exceeded expectations.",
            person: "Project manager",
            img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1506&auto=format&fit=crop",
            stars: 5
        },
        {
            text: "Toursurv transformed our workflow with innovative approaches and reliable support. They delivered exactly what we needed.",
            person: "Tech Lead",
            img: "https://images.unsplash.com/photo-1564490215983-296e5f56b623?q=80&w=687&auto=format&fit=crop",
            stars: 5
        },
        {
            text: "We’ve partnered with many tech companies, but Toursurv stands out. Their professionalism and fast delivery made everything effortless.",
            person: "CEO",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            stars: 4
        }
    ];

    const reviewsSet2 = [
        {
            text: "Exceptional service and outstanding communication. Toursurv understood our goals and exceeded every one of them.",
            person: "Operations Lead",
            img: "https://plus.unsplash.com/premium_photo-1682092039530-584ae1d9da7f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stars: 3
        },
        {
            text: "Reliable, efficient, and highly skilled. Their solutions helped us scale faster than expected.",
            person: "Project manager",
            img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            stars: 5
        },
        {
            text: "Toursurv’s dedication to quality and customer satisfaction is unmatched. Highly recommended!",
            person: "CEO",
            img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100&fit=crop",
            stars: 4
        }
    ];

    const activeReviews = showFirstRev ? reviewsSet1 : reviewsSet2;

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

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.phone.trim())
            newErrors.phone = "Phone number is required";
        else if (!/^[0-9]{10}$/.test(formData.phone))
            newErrors.phone = "Enter a valid 10-digit phone number";

        if (!formData.email.trim())
            newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.subject.trim())
            newErrors.subject = "Subject is required";

        if (!formData.message.trim())
            newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setSuccess(false);
        setError(false);

        const form = new FormData();
        form.append("access_key", "4abf1f32-f69f-43a4-bcab-74ae074cec08");
        form.append("name", formData.name);
        form.append("phone", formData.phone);
        form.append("email", formData.email);
        form.append("subject", formData.subject);
        form.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();

            if (data.success) {
                setSuccess(true);

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                setTimeout(() => setSuccess(false), 3000);
            } else {
                setError(true);
                setTimeout(() => setError(false), 3000);
            }
        } catch (err) {
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    };

    const handleSub = (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSuccess(false);
        setError(false);

        setFormData({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
        });

        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        animateValue("counter1", 0, 7);
        animateValue("counter2", 0, 100);
        animateValue("counter3", 0, 30);
    }, []);

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.deltaY > 0) {
                setActiveIndex((prev) => (prev + 1) % cards.length);
            } else {
                setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
            }
        };

        window.addEventListener("wheel", handleWheel);

        return () => window.removeEventListener("wheel", handleWheel);
    }, [cards.length]);


    useEffect(() => {
        let startX = 0;

        const onTouchStart = (e) => {
            startX = e.touches[0].clientX;
        };

        const onTouchEnd = (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    setActiveIndex((prev) => (prev + 1) % cards.length);
                } else {
                    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
                }
            }
        };

        window.addEventListener("touchstart", onTouchStart);
        window.addEventListener("touchend", onTouchEnd);

        return () => {
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchend", onTouchEnd);
        };
    }, [cards.length]);

    return (
        <div className="w-full min-h-screen bg-white">
            <Header />

            <section className="relative w-[95%] sm:w-[98%] mx-auto rounded-[60px] mt-2 sm:mt-4">

                <div className="relative w-full">
                    <img
                        src={hero0}
                        alt="Hero"
                        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover rounded-[60px]" />
                    <div
                        className="absolute inset-0 bg-black/50 rounded-[60px] flex flex-col items-center justify-center text-white px-4 sm:px-6 text-center">
                        <p className="text-base sm:text-lg md:text-xl font-bold text-white/90 mb-2 sm:mb-3 fade-in fade-in-delay-1">
                            Innovate . Build. Develop . Support
                        </p>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-2 sm:mt-3 text-white fade-in fade-in-delay-2">
                            We provide the expertise <br className="hidden sm:block" />
                            <span className="sm:hidden"></span>behind your growth.
                        </h1>

                        <div
                            onClick={() => {
                                const section = document.getElementById("whorwe");
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="mt-6 sm:mt-8 w-12 h-12 bg-white/50 rounded-full flex items-center justify-center hover:bg-white/80 transition cursor-pointer fade-in fade-in-delay-3"
                        >
                            <img
                                src={downArrow}
                                alt="Down-Arrow"
                                className="w-6 h-6 sm:w-8 sm:h-8 opacity-100"
                            />
                        </div>
                    </div>
                </div>


                <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 bg-white rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-4 md:py-5 flex justify-evenly items-center text-center gap-6 w-auto min-w-fit z-0">

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
            <section
                id="whorwe"
                className="w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20"
            >
                <div
                    className="w-full md:w-1/2 space-y-4 sm:space-y-6 flex flex-col items-start justify-start"
                    data-aos="fade-right"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-300 leading-tight">
                        Who Are We
                    </h1>

                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#19202C] leading-snug">
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
                        className="mt-4 bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-orange-600 transition flex items-center gap-2 w-fit text-sm sm:text-base"
                    >
                        Lets Talk
                        <img src={openArrow} alt="open" className="w-6 h-6" />
                    </button>
                </div>

                <div
                    className="w-full md:w-1/2 flex items-end justify-center mt-8 sm:mt-10 md:mt-0"
                    data-aos="fade-left"
                >
                    <img
                        src={hero2}
                        alt="Team Illustration"
                        className="w-full sm:w-[80%] md:w-[90%] max-w-lg"
                    />
                </div>
            </section>


            <section className="relative w-full flex justify-center -mb-24 sm:-mb-28 md:-mb-32 z-40 px-4 sm:px-6">
                <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-6xl w-full text-center md:text-left relative">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black"
                        data-aos="slide-down">
                        Here is What We Do Our Best
                    </h2>

                    <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto md:mx-0"
                        data-aos="slide-down">
                        Enterprise-grade point-of-sale solutions featuring inventory
                        management, sales analytics, and multi-payment integration
                    </p>

                    <div className="hidden lg:flex flex-col absolute right-10 top-10 w-56 md:w-64 items-start gap-1"
                        data-aos="slide-up">
                        <img src={quote1} alt="quote" className="w-10 h-10" />
                        <p className="text-black font-semibold text-lg leading-relaxed">
                            Empower your business with Toursurv's expert team we build solutions that drive success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto min-h-[28rem] sm:min-h-[32rem] md:min-h-[36rem] bg-[#0D1422] flex justify-center items-center overflow-hidden no-scrollbar pt-60 sm:pt-60 md:pt-52 lg:pt-48 pb-24 sm:pb-28 md:pb-32">
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
                        className="w-full h-full block sm:hidden"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,200 C480,80 960,80 1440,200 L1440,0 L0,0 Z"
                            fill="#0D1422"
                        />
                    </svg>

                    <svg
                        viewBox="0 0 1440 200"
                        className="w-full h-full hidden sm:block md:hidden"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,200 C360,60 1080,60 1440,200 L1440,0 L0,0 Z"
                            fill="#0D1422"
                        />
                    </svg>

                    <svg
                        viewBox="0 0 1440 200"
                        className="w-full h-full hidden md:block"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,200 C280,20 1160,20 1440,200 L1440,0 L0,0 Z"
                            fill="#0D1422"
                        />
                    </svg>

                </div>
            </section>


            <section className="relative w-full bg-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 sm:h-40 md:h-48 lg:h-64 bg-white rounded-t-[80%]"></div> {/**bg-[#0D1422] */}
                <div className="bg-white relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827]"
                        data-aos="flip-up">
                        <span className="text-orange-500">Trusted</span> Products
                    </h2>

                    <p className="text-black mt-3 max-w-2xl text-base sm:text-lg"
                        data-aos="flip-down">
                        Enterprise-grade point-of-sale solutions featuring inventory management,
                        sales analytics, and multi-payment integration
                    </p>

                    <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-12 sm:gap-y-16 md:gap-y-20">

                        {products.map((item, index) => (
                            <div
                                key={index}
                                className=" border-gray-300 sm:pr-6 last:border-none pb-6 sm:pb-0 border-b sm:border-b-0 last:border-b-0"
                                data-aos="flip-up"
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
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f233c] mb-4"
                    data-aos="fade-up">
                    Our Tech Stack
                </h2>

                <div className="bg-[#0f233c] w-full overflow-hidden py-6 sm:py-8 md:py-[30px]">
                    <div className="marquee flex gap-10">
                        {[heromq1, heromq2, heromq3, heromq4, heromq5, heromq6, heromq7, heromq8,
                            heromq1, heromq2, heromq3, heromq4, heromq5, heromq6, heromq7, heromq8
                        ].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`tech-${idx}`}
                                className="h-16 sm:h-20 md:h-24 lg:h-[120px] flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                <p className="text-center text-gray-600 mt-6 px-6 max-w-3xl mx-auto text-base sm:text-lg"
                    data-aos="fade-down">
                    We build powerful, scalable solutions using modern technologies like Python,
                    PHP, Laravel, HTML5, Java, Angular, and Adobe tools ensuring performance,
                    security, and innovation in every project.
                </p>
            </section>

            <section className="relative bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">

                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">

                    <div className="flex-1 flex justify-center w-full md:w-auto"
                        data-aos="fade-right">
                        <img src={hero3} alt="Sketch"
                            className="w-full sm:w-[90%] max-w-[500px]" />
                    </div>

                    <div className="flex-1 text-center md:text-left w-full"
                        data-aos="fade-left">
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-extrabold text-gray-300 leading-snug flex items-center justify-center md:justify-start">

                            <img
                                src={apsmarks1}
                                alt="quote"
                                className="w-10 sm:w-12 md:w-14 lg:w-16 mr-2"
                            />

                            Proven Global Excellence
                        </h2>

                        <p className="mt-3 text-base sm:text-lg md:text-[20px] lg:text-[21px] font-semibold leading-relaxed text-black">
                            With 30+ successful projects across Globe
                            <span className="text-orange-500 font-bold"> Toursurv </span>
                            continues to earn the trust of clients worldwide delivering
                            innovation, reliability, and results that stand out.
                        </p>
                    </div>


                </div>
            </section>

            <section className="relative overflow-hidden py-10">
                <div className="hidden md:block pointer-events-none relative h-[300px]">

                    <img
                        src={imgStrip2}
                        alt=""
                        className="absolute bottom-24 left-1/2 -translate-x-1/2 min-w-[120%] w-[120%] rotate-[8deg]"
                        data-aos="fade-left"
                    />

                    <img
                        src={imgStrip1}
                        alt=""
                        className="absolute bottom-24 left-1/2 -translate-x-1/2 min-w-[120%] w-[120%] rotate-[-8deg] opacity-95"
                        data-aos="fade-right"
                    />

                </div>
            </section>

            <section className="relative sm:pt-5 md:pt-14"
                data-aos="fade-down">
                <div className="relative mx-auto overflow-hidden">

                    <div className="flex flex-col md:flex-row items-start justify-start mb-8 sm:mb-10 md:mb-12 px-4">
                        <h2
                            className="text-xl sm:text-xl md:text-2xl md:pl-40 font-semibold text-[#19202C] mb-3 mr-3"
                            style={{ fontFamily: "Roboto Mono, monospace" }}
                        >
                            T E S T I M O N I A L S
                        </h2>
                        <h2
                            className="text-lg sm:text-xl md:text-2xl font-semibold text-[#19202C] mb-3"
                            style={{ fontFamily: "Roboto Mono, monospace" }}
                        >
                            ------------
                        </h2>
                    </div>


                    <div className="bg-orange-500 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row">

                        <div className="bg-orange-500 flex-1 flex items-center justify-center p-8 sm:p-10 md:p-12 lg:p-16"
                            data-aos="fade-down">
                            <div className="text-white text-center md:text-left">

                                <div className="mb-2 sm:mb-4 flex justify-center md:justify-start">
                                    <img
                                        src={apsmarks2}
                                        alt="quote"
                                        className="w-12 sm:w-16 md:w-20 lg:w-24"
                                    />
                                </div>

                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                    what our<br />
                                    clients<br />
                                    say
                                </h3>

                                <div className="mt-2 sm:mt-4 flex justify-center md:justify-end">
                                    <img
                                        src={apsmarks2}
                                        alt="quote"
                                        className="w-12 sm:w-16 md:w-20 lg:w-24 transform scale-x-[-1]"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="bg-white flex-1 p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8">

                            {activeReviews.map((review, index) => (
                                <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
                                    data-aos="fade-down">
                                    <img
                                        src={review.img}
                                        alt="Client"
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0 mx-auto sm:mx-0"
                                    />
                                    <div className="flex-1">
                                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-2 text-center md:text-left">
                                            {review.text}
                                        </p>
                                        <p className="text-gray-500 text-xs sm:text-sm mb-2 text-center md:text-left">
                                            - {review.person} -
                                        </p>

                                        <div className="flex gap-1 justify-center sm:justify-start">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg
                                                    key={star}
                                                    className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= review.stars ? "text-orange-500" : "text-gray-300"
                                                        }`}
                                                    viewBox="0 0 24 24"
                                                    fill={star <= review.stars ? "currentColor" : "none"}
                                                    stroke="currentColor"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="flex justify-center mt-4 sm:mt-6">
                                <button
                                    onClick={() => setShowFirstRev(!showFirstRev)}
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center"
                                >
                                    {showFirstRev ? (
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    )}
                                </button>
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
                className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16"
                data-aos="fade-up">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#19202C]">GET IN TOUCH</h2>
                    </div>

                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 justify-center items-center md:items-stretch">
                        <div className="flex-1 w-full relative">
                            {success && (
                                <div className="fixed bottom-5 right-5 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn">
                                    Message sent successfully!
                                </div>
                            )}
                            {error && (
                                <div className="fixed bottom-5 right-5 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn">
                                    Something went wrong! Please try again.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            Phone Number
                                        </label>
                                        <input
                                            type="telephone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            E-mail
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                                        />
                                        {errors.subject && (
                                            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none text-sm sm:text-base"
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition w-full sm:w-auto"
                                >
                                    Send
                                </button>
                            </form>
                        </div>

                        <div className="w-1/3 mt-8 md:mt-0 text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#19202C] mb-4 sm:mb-6">
                                Reach Us
                            </h3>

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
                                    <p className="text-base sm:text-lg">
                                        toursurvmarketing@gmail.com
                                    </p>
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
