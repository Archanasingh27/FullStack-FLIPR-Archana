import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [emailSub, setEmailSub] = useState("");
  const [subStatus, setSubStatus] = useState("idle");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubStatus("loading");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/subscribe/add",
        { email: emailSub }
      );

      // axios only goes here when the response is 2xx
      setSubStatus("success");
      setEmailSub("");

      setTimeout(() => setSubStatus("idle"), 2500);
      
    } catch (err) {
      console.error("Subscription error:", err);
      setSubStatus("error");
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to our Newsletter
        </h2>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address..."
            className="flex-1 px-6 py-4 rounded-full bg-white text-slate-800"
            value={emailSub}
            onChange={(e) => setEmailSub(e.target.value)}
          />

          <button
            type="submit"
            disabled={subStatus === "loading"}
            className="bg-slate-900 text-white px-10 py-4 rounded-full"
          >
            {subStatus === "success"
              ? "Subscribed!"
              : subStatus === "loading"
              ? "Subscribing..."
              : "Subscribe"}
          </button>
        </form>

        {subStatus === "error" && (
          <p className="text-red-200 mt-4">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
