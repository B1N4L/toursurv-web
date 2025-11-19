import React from "react";

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
    {
        title: "UI/UX Design",
        desc: "Crafting beautiful, intuitive, and engaging user interfaces with seamless experiences.",
    },
];

export default function ServiceCarousel() {
    // Duplicate to create infinite loop
    const items = [...cards, ...cards];

    return (
        <section className="w-full bg-[#0D1422] py-16 sm:py-20 md:py-28 relative overflow-hidden">
            <div className="relative px-6">

                {/* Auto-scroll wrapper */}
                <div className="flex gap-8 scroll-horizontal">

                    {items.map((card, i) => {
                        // Pick the center visually every few items
                        const isCenter = i % cards.length === 1;

                        return (
                            <div
                                key={i}
                                className={`
                  min-w-[280px] sm:min-w-[320px]
                  rounded-xl p-6 relative shadow-lg
                  bg-gradient-to-b from-[#1B2435] to-[#0D1422]
                  border border-[#1E2A3D]
                  transition-all duration-500 ease-out

                  ${isCenter
                                        ? "scale-105 -translate-y-6 opacity-100"
                                        : "scale-90 translate-y-4 opacity-70"
                                    }
                `}
                                style={{
                                    borderImage: "linear-gradient(to bottom right, #ff7a00, #00c3ff) 1",
                                }}
                            >

                                {/* Orange dot */}
                                <span className="w-4 h-4 rounded-full bg-orange-500 absolute left-4 top-4"></span>

                                <h3 className="text-white font-bold text-2xl mt-10">
                                    {card.title}
                                </h3>

                                <p className="text-gray-300 mt-3 text-lg leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
