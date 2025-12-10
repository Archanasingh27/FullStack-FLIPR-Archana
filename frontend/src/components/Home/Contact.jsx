import React, { useState } from "react";
import axios from "axios";

const ContactFormCard = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [contactStatus, setContactStatus] = useState("idle");
  

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("submitting");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact/add",
        contactForm
      );

      console.log("Contact Response:", res.data);

    
      setContactStatus("success");
      setContactForm({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });

      setTimeout(() => setContactStatus("idle"), 2500);
    } catch (err) {
      console.error("Contact form error:", err);
      setContactStatus("error");
    }
  };

  return (
    <div className="md:w-1/3 w-full bg-purple-500/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white-500/50 shadow-2xl relative">
      
      

      <div className="text-center mb-6 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">
          Get a Free Consultation
        </h3>
       
      </div>

      <form onSubmit={handleContactSubmit} className="space-y-4 relative z-10 text-white">

        <input
          type="text"
          placeholder="Full Name"
          required
          value={contactForm.fullName}
          onChange={(e) =>
            setContactForm({ ...contactForm, fullName: e.target.value })
          }
          className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="email"
          placeholder="Enter Email Address"
          required
          value={contactForm.email}
          onChange={(e) =>
            setContactForm({ ...contactForm, email: e.target.value })
          }
          className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          required
          value={contactForm.mobile}
          onChange={(e) =>
            setContactForm({ ...contactForm, mobile: e.target.value })
          }
          className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          placeholder="Area, City"
          required
          value={contactForm.city}
          onChange={(e) =>
            setContactForm({ ...contactForm, city: e.target.value })
          }
          className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          type="submit"
          disabled={contactStatus === "submitting"}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-70"
        >
          {contactStatus === "submitting"
            ? "Submitting..."
            : contactStatus === "success"
            ? "Sent Successfully!"
            : "Get Quick Quote"}
        </button>
      </form>

      {contactStatus === "error" && (
        <p className="text-red-400 text-sm mt-4 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default ContactFormCard;
