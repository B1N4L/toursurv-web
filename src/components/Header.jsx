import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import rightArrow from "../assets/left-arrow.png";
import logoInline from "../assets/logo inline.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "about us", path: "#" },
    { label: "what we do", path: "#" },
    { label: "projects", path: "#" }
  ];

  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-36 py-4 sm:py-6 pb-8 sm:pb-12 relative">

      <img
        src={logoInline}
        alt="Logo"
        className="h-10 sm:h-12 md:h-14 object-contain cursor-pointer"
        onClick={() => navigate("/")}
      />

      <nav className="hidden lg:flex gap-10 text-lg">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`transition font-lg ${isActive
                ? "font-extrabold underline text-black"
                : "text-gray-700 hover:text-black"
                }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <button
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="border-2 border-orange-300 rounded-full px-4 sm:px-5 md:px-6 
        py-2 sm:py-2.5 md:py-2 hidden lg:flex items-center gap-2 text-sm sm:text-base md:text-lg
        bg-white text-gray-800 hover:bg-orange-300 hover:text-white transition font-normal"
      >
        <span className="hidden sm:inline">contact us</span>
        <span className="sm:hidden">contact</span>
        <img src={rightArrow} alt="Arrow" className="w-5 h-3 sm:w-6 sm:h-4" />
      </button>

      <button
        className="lg:hidden text-3xl ml-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col items-center justify-start pt-24
               animate-fadeIn"
        >
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="absolute top-6 right-6 text-gray-800 hover:text-black transition"
          >
            <X size={36} />
          </button>
          <div className="flex flex-col items-center gap-6 w-full animate-slideUp">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setMenuOpen(false);
                  }}
                  className={`text-2xl transition ${isActive
                    ? "font-extrabold text-black"
                    : "text-gray-700 hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="mt-4 text-2xl text-gray-700 hover:text-black transition animate-slideUpDelay"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
