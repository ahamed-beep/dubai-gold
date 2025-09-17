import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    {
      title: "DUBAI X GOLD BARS",
      subtitle: "PREMIUM GOLD COLLECTION",
      cta: "WHERE TO BUY",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "LUXURY GOLD MAKING",
      subtitle: "CRAFTED WITH PRECISION",
      cta: "EXPLORE COLLECTION",
      image: "/Images/silver.jpeg"
    },
    {
      title: "FINEST GOLD QUALITY",
      subtitle: "DUBAI'S PREMIUM CHOICE",
      cta: "GET STARTED",
      image: "https://i.tribune.com.pk/media/images/image-71747875910-0/image-71747875910-0-412x290.webp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative mt-0 h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('${heroTexts[currentText].image}')`
            }}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          
          {/* Gold Bar Image */}
        

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider leading-none">
            <span className="inline-block animate-fade-in">
              {heroTexts[currentText].title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 tracking-widest">
            {heroTexts[currentText].subtitle}
          </p>

          {/* CTA Button */}
          <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-4 rounded-full font-bold text-lg tracking-wide hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="relative z-10">{heroTexts[currentText].cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Scroll Down Indicator */}
         

          {/* Text Change Indicators */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroTexts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentText ? 'bg-yellow-400 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

       
      
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  );
};

export default HeroSection;