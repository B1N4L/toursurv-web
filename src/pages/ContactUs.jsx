import { useRef, useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from '../components/Footer';
import bgImg from "../assets/contactbg.png";
import reachImg from "../assets/reachusbg.png";
import mapImg from "../assets/map.png";
import addressIcon from "../assets/address.png";
import teleIcon from "../assets/tele.png";
import emailIcon from "../assets/email.png";
import crossIcon from "../assets/cross.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactUs() {
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

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

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
                        Let's Build Your Next <br />Big Thing
                    </h1>
                </div>
            </section>
            <section className="w-full relative bg-white py-40">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1422] mb-10">
                    GET IN TOUCH
                </h2>

                <div className="max-w-5xl mx-auto px-4 relative">
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
                    <form onSubmit={handleSubmit} className="space-y-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#E5E5E5] rounded-md px-4 py-3 focus:outline-none text-gray-700"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm">
                                    Phone Number
                                </label>
                                <input
                                    type="telephone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#E5E5E5] rounded-md px-4 py-3 focus:outline-none text-gray-700"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#E5E5E5] rounded-md px-4 py-3 focus:outline-none text-gray-700"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-1 text-sm">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#E5E5E5] rounded-md px-4 py-3 focus:outline-none text-gray-700"
                                />
                                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-sm">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-[#E5E5E5] rounded-md px-4 py-3 focus:outline-none text-gray-700 resize-none"
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-8 py-2.5 rounded-xl font-semibold text-lg hover:bg-orange-600 transition w-fit"
                        >
                            send
                        </button>
                    </form>
                </div>

                <div className="absolute inset-0 pointer-events-none overflow-hidden"
                    data-aos="fade-down">
                    <img
                        src={crossIcon}
                        alt=""
                        className="absolute opacity-95 transform rotate-60 left-[-20px] bottom-[20px] w-24 sm:left-[-10px] sm:bottom-[40px] sm:w-32 md:left-[-10px] md:bottom-[0px] md:w-44 lg:w-56" />
                    <img
                        src={crossIcon}
                        alt=""
                        className="absolute opacity-95 transform -rotate-20 left-[60px] bottom-[150px] w-20 sm:left-[80px] sm:bottom-[200px] sm:w-28 md:left-[120px] md:bottom-[300px] md:w-40 lg:w-52" />

                    <img
                        src={crossIcon}
                        alt=""
                        className="absolute opacity-95 transform rotate-60 right-[0px] top-[40px] w-24 sm:top-[70px] sm:w-32 md:right-[0px] md:top-[100px] md:w-44 lg:w-60" />

                    <img
                        src={crossIcon}
                        alt=""
                        className="absolute opacity-95 transform -rotate-32 right-[120px] top-[160px] w-24 sm:right-[180px] sm:top-[220px] sm:w-32 md:right-[240px] md:top-[260px] md:w-44 lg:right-[280px] lg:top-[300px] lg:w-60" />

                    <img
                        src={crossIcon}
                        alt=""
                        className="absolute opacity-95 transform rotate-60 right-[10px] bottom-[70px] w-24 sm:bottom-[100px] sm:w-32 md:right-[20px] md:bottom-[150px] md:w-44 lg:w-64" />
                </div>
            </section>
            <section className="w-full py-12 px-4 md:px-12 lg:px-20 bg-white pb-60">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">

                    <div className="flex justify-center w-full">
                        <img
                            src={mapImg}
                            alt="Map Illustration"
                            className="w-full max-w-[500px] h-auto object-cover"
                        />
                    </div>

                    <div className="flex flex-col space-y-6 text-gray-800 items-center md:items-start">

                        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center md:text-left mb-6">
                            Reach Us
                        </h2>

                        <div className="flex flex-col md:flex-row items-center md:item-start space-x-4">
                            <img src={teleIcon} alt="Phone Icon" className="w-7 h-7 object-contain" />
                            <div className="text-lg leading-relaxed">
                                <p>0112-755050</p>
                                <p>071-11108108</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:item-start space-x-4">
                            <img src={addressIcon} alt="Address Icon" className="w-7 h-7 object-contain" />
                            <p className="text-lg leading-relaxed">
                                No: 359/19/1/A, 06th Lane<br />
                                Maya Mawatha<br />
                                Makumbura, Pannipitiya,<br />
                                Postcode: 10230
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:item-start space-x-4">
                            <img src={emailIcon} alt="Email Icon" className="w-7 h-7 object-contain" />
                            <p className="text-lg">toursurvmarketing@gmail.com</p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
