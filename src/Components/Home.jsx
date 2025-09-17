import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Scroll hone par background show
      } else {
        setIsScrolled(false); // TOP pe bilkul transparent
      }
    };

    // Page load ke time bhi check kare
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-4 transition-all duration-300 mb-0 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-sm shadow"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/Images/goldlogo.png"
            className="w-15 h-15 object-contain"
            alt="Dubai GoldBarMaker Logo"
          />
          <div className="ml-3">
            <div className="flex flex-col">
              <div className="text-xl font-bold text-amber-800 leading-tight">
                DUBAI
              </div>
              <div className="text-base font-semibold text-amber-700">
                Gold-BarMaker
              </div>
            </div>
          </div>
        </div>

        {/* Admin Login Button */}
        <div>
          <Link to='/login' >
          <button className="bg-yellow-300 text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200 shadow-sm">
            Admin Login
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;