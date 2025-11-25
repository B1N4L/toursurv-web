import React from "react";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6 text-white">

        <h1 className="text-2xl font-semibold tracking-wide">
          <span className="text-orange-300">Tour</span>Surv
        </h1>

        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <a href="/" className="hover:opacity-80 transition">home</a>
          <a href="/about" className="hover:opacity-80 transition">about us</a>

          <div className="flex flex-col items-center">
            <a className="font-semibold">What we do</a>
            <div className="w-12 h-[2px] bg-black mt-1"></div>
          </div>

          <a href="/projects" className="hover:opacity-80 transition">projects</a>
          <a href="/contact" className="hover:opacity-80 transition">contact us</a>
        </nav>

        <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-white hover:text-black transition">
          contact us → 
        </button>
      </div>
    </header>
  );
}
