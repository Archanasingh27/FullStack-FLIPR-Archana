// src/components/HeroSection.jsx
import React from "react";
import ContactFormCard from "./Contact.jsx";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[750px]  flex items-center overflow-hidden">
      
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Office Meeting"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-500/20 via-slate-900/20 to-slate-900"></div>
      </div>

      {/* Content Layout */}
      <div className="container mx-auto px-4 z-10 relative flex flex-col md:flex-row items-center justify-between gap-12 pt-20 pb-12">
        {/* Left side - Hero Text */}
        <div className="md:w-1/2 text-white">
          <div className="inline-block bg-orange-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider animate-bounce-slow">
            Real Trust
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Consultation,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Design,
            </span>
            <br /> & Marketing
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
            We help businesses grow by providing top-tier consultancy,
            innovative design solutions, and strategic marketing campaigns.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
              Get Started
            </button>
            <button className="px-8 py-3 border border-slate-600 text-white font-bold rounded-full hover:bg-slate-800/50 transition">
              Our Work
            </button>
          </div>
        </div>

        {/* Right side - Contact Form */}
        
        <ContactFormCard />
      </div>
    </section>
  );
};

export default HeroSection;