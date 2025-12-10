import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Home as HomeIcon,
} from "lucide-react";

// Navigation links array
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Testimonials", href: "#" },
 
];

// Social links array
const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-700 pb-8 mb-8">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <HomeIcon className="w-6 h-6 text-orange-500" />
              Real Trust
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm text-slate-300">
            {navLinks.map((link, idx) =>
              link.isRouter ? (
                <Link
                  key={idx}
                  to={link.to}
                  className="hover:text-orange-400 transition font-semibold"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {socialLinks.map(({ icon: Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Real Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;