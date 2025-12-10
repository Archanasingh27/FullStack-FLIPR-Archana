import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          About Us
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed text-lg max-w-2xl">
          With over 10 years of experience in the industry, our team of experts
          is dedicated to delivering excellence. We believe in building lasting
          relationships with our clients through transparency, innovation, and
          results.
        </p>
        <button className="group text-white bg-slate-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-orange-500 transition-colors">
          Learn More{" "}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default AboutSection;