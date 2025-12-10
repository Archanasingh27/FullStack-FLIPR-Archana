import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../services/api";


const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/contact`)
      .then((res) => setContacts(res.data));
  }, []);

  return (
    <table className="w-full bg-white border rounded">
      <thead className="bg-gray-100">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c._id} className="text-center">
            <td>{c.fullName}</td>
            <td>{c.email}</td>
            <td>{c.mobile}</td>
            <td>{c.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminContacts;
