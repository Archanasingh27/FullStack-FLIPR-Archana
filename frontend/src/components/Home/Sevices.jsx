import React from "react";
import { TrendingUp, Target, MonitorSmartphone } from "lucide-react"; 
// install with: npm install lucide-react

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-[-100px] w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-white">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <TrendingUp className="w-8 h-8 text-blue-600 -rotate-3 group-hover:-rotate-6 transition" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Potential ROI</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Maximize your returns with our data-driven strategies designed to identify the best opportunities for your growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-white">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl -rotate-3 flex items-center justify-center mx-auto mb-6 group-hover:-rotate-6 transition">
              <Target className="w-8 h-8 text-orange-500 rotate-3 group-hover:rotate-6 transition" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Design</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Crafting visually stunning and functional designs that resonate with your audience and elevate your brand identity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-white">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition">
              <MonitorSmartphone className="w-8 h-8 text-blue-600 -rotate-3 group-hover:-rotate-6 transition" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Marketing</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Comprehensive marketing solutions that integrate SEO, social media, and content to drive traffic and conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;