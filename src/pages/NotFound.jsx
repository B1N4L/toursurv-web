import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

export default function NotFound() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="w-full min-h-screen flex items-center justify-center bg-white p-4">
                <div className="text-center">
                    {/*style={{ fontFamily: "Anek Odia, Anek" }}*/}
                    <h1 className="text-7xl md:text-9xl font-bold text-black">4<span className="text-orange-600">0</span>4</h1>
                    <p className="mt-4 text-xl md:text-2xl tracking-wide text-black">Page Not Found</p>


                    <Link
                        to="/"
                        className="inline-block mt-6 px-6 py-2 bg-orange-500 text-white rounded-full text-sm md:text-base hover:bg-orange-600 transition-all duration-300"
                    >
                        Back to home →
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}