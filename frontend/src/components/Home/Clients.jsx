import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";

const Clients = () => {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/clients`);
      setClients(res.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
          Happy Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div
              key={client._id}
              className="text-center p-8 rounded-2xl hover:bg-slate-50 transition border border-transparent hover:border-slate-100 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <img
                  src{`https://fullstack-flipr-archana.onrender.com/uploads/${client.clientImage}`}
                  alt={client.clientName}
                  className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition"
                />

                <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-1 rounded-full border-2 border-white">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <p className="text-slate-600 text-sm italic mb-6 leading-relaxed">
                "{client.clientDescription}"
              </p>

              <h4 className="font-bold text-blue-900 text-lg">
                {client.clientName}
              </h4>

              <p className="text-orange-500 text-xs font-bold uppercase mt-1 tracking-wider">
                {client.clientDesignation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
