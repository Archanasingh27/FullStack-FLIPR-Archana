import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-4"
          : "bg-black  py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold group">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
            <Home className="w-6 h-6" />
          </div>
          <span className={scrolled ? "text-slate-800" : "text-white"}>
            Real<span className="text-orange-500">Trust</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium ${
            scrolled ? "text-slate-600" : "text-slate-200"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-orange-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-slate-800 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[72px] bg-white shadow-xl p-6 md:hidden transition-all duration-300 origin-top ease-in-out ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-slate-800 hover:text-orange-500 p-3 rounded-lg hover:bg-orange-50 transition flex items-center justify-between group"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
              <span className="text-orange-200 group-hover:text-orange-500 transition">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;