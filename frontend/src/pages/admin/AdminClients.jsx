import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminClients = () => {
  const [clients, setClients] = useState([]);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    description: "",
    image: null,
  });

  
  const fetchClients = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/clients`);
    setClients(res.data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // ADD CLIENT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("clientImage", form.image);
    formData.append("clientName", form.name);
    formData.append("clientDesignation", form.designation);
    formData.append("clientDescription", form.description);

    await axios.post(`${import.meta.env.VITE_API_URL}/api/clients/add`, formData);

    setForm({ name: "", designation: "", description: "", image: null });
    fetchClients();
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">

      {/* ADD CLIENT FORM */}
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="font-bold mb-4">Add Client</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            placeholder="Client Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="w-full border p-2 rounded"
            placeholder="Designation"
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            required
          />

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Client Review"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          <input
            type="file"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            required
          />

          <button className="bg-orange-500 text-white px-4 py-2 rounded w-full">
            Add Client
          </button>
        </form>
      </div>

      {/* CLIENT LIST */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
        {clients.map((c) => (
          <div key={c._id} className="bg-white p-4 border rounded flex gap-3">
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${c.clientImage}`}
              className="w-16 h-16 rounded-full object-cover"
              alt={c.clientName}
            />

            <div>
              <p className="italic text-sm">"{c.clientDescription}"</p>
              <h4 className="font-bold">{c.clientName}</h4>
              <span className="text-orange-500 text-xs">
                {c.clientDesignation}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminClients;
