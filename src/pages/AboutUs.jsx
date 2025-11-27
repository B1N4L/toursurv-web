import { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from '../components/Footer';
import bgImg from "../assets/aboutusbg.png";
import storyImg from "../assets/story.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
    const navigate = useNavigate();
    const teamMembers = [
        {
            name: "Sampath Gamage",
            position: "Director",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
            big: true,
        },
        {
            name: "Member One",
            position: "Software Engineer",
            img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Member Two",
            position: "UI/UX Designer",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Member Three",
            position: "Frontend Developer",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Member Four",
            position: "Mobile Developer",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Member Five",
            position: "Backend Engineer",
            img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Member Six",
            position: "QA Engineer",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        },
    ];

    const smallMembers = teamMembers.filter(m => !m.big);

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

                <div className="w-full flex flex-col items-center justify-center text-center mt-52 px-6">

                    <div
                        data-aos="fade-down"
                        className="relative inline-block"
                    >
                        <div
                            className="absolute inset-0 bg-[#0A0F2C] rounded-none"
                            style={{
                                clipPath: "polygon(6% 0%, 94% 0%, 100% 100%, 0% 100%)"
                            }}
                        ></div>

                        <h1 className="relative text-4xl md:text-5xl font-extrabold px-10 py-4 tracking-wide">
                            WHY WE ARE THE BEST
                        </h1>
                    </div>

                    <p className="mt-8 max-w-4xl text-lg leading-relaxed text-center"
                        data-aos="fade-down">
                        We combine innovation, reliability, and creativity to deliver technology that truly makes a
                        difference. With a passionate team and a proven track record, we turn complex ideas into
                        powerful digital solutions.
                    </p>
                </div>
            </section>
            <section className="w-full bg-white py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-14">

                    <div className="flex-1 text-center md:text-center"
                        data-aos="fade-right">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                            OUR <span className="text-orange-500">STORY</span>
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            <span className="font-bold text-xl md:text-2xl">Toursurv</span> began with a simple vision to create technology that
                            empowers people and transforms businesses.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                            What started as a small team of passionate developers in Sri Lanka
                            has grown into a global software solutions provider, now operating in
                            Sri Lanka, Bangladesh, and the USA, in partnership with Revo
                            Interactive and Hire IT People, Inc.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            From day one, we’ve focused on a single question:
                            <br />
                            <span className="italic">
                                “How can technology make everyday work simpler and smarter?”
                            </span>
                            <br />
                            That question drives every solution we build from dynamic websites
                            and mobile apps to complex enterprise systems.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-4">
                            With over 7 years of experience and 30+ successful projects, we’ve
                            partnered with clients across government, education, and private
                            industries.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            Our strength lies not just in technology, but in understanding people
                            their goals, challenges, and vision for the future.
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            At Toursurv, we don’t just write code we craft experiences. Our story
                            is built on innovation, collaboration, and trust, and we continue to grow
                            with one goal in mind:
                        </p>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            To build digital solutions that inspire, empower, and create real change.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center items-center"
                        data-aos="fade-left">
                        <img
                            src={storyImg}
                            alt="Our Story Illustration"
                            className="w-full object-contain rounded-3xl"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full bg-[#0A1628] py-16 text-white">
                <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
                    data-aos="flip-down">
                    MEET THE TEAM
                </h2>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="relative group h-[350px] sm:h-[420px] rounded-lg overflow-hidden">
                        {teamMembers
                            .filter(m => m.big)
                            .map((member, i) => (
                                <div key={i} className="w-full h-full"
                                    data-aos="flip-down">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                                            <p className="text-2xl font-bold">{member.name}</p>
                                            <p className="text-lg">{member.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="grid grid-rows-2 gap-4">

                        <div className="grid grid-cols-3 gap-4">
                            {smallMembers.slice(0, 3).map((member, i) => (
                                <div
                                    key={i}
                                    className="relative group h-[150px] sm:h-[180px] md:h-[200px] rounded-lg overflow-hidden"
                                    data-aos="flip-down"
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                                            <p className="text-sm md:text-base font-semibold">{member.name}</p>
                                            <p className="text-xs md:text-sm">{member.position}</p>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {smallMembers.slice(3, 6).map((member, i) => (
                                <div
                                    key={i}
                                    className="relative group h-[150px] sm:h-[180px] md:h-[200px] rounded-lg overflow-hidden"
                                    data-aos="flip-down"
                                >
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-center">
                                            <p className="text-sm md:text-base font-semibold">{member.name}</p>
                                            <p className="text-xs md:text-sm">{member.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center"
                data-aos="fade-up">

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-gray-800">
                        {/*style={{ fontFamily: "Anek Odia, Anek" }}*/}
                        Let’s Build Your
                        <br />
                        Next Big Thing
                        <br />
                        <span className="text-orange-500">Together</span>
                    </h1>

                    <p className="mt-6 text-gray-700 text-base md:text-lg">
                        Partner with Toursurv to turn your ideas into powerful digital solutions that inspire growth and success.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={() => { navigate("/contactus"); }}
                            className="bg-orange-500 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium flex items-center gap-2 hover:bg-orange-600 transition">
                            Get Started Now
                            <span className="text-lg"> →</span>
                        </button>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
