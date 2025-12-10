import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../services/api";



const AdminSubscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    axios  
      .get  (`${import.meta.env.VITE_API_URL}/api/subscribe`)
      .then((res) => setSubs(res.data));
  }, []);

  return (
    <table className="w-full bg-white border rounded">
      <thead className="bg-gray-100">
        <tr>
          <th>Email</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {subs.map((s) => (
          <tr key={s._id} className="text-center">
            <td>{s.email}</td>
            <td>{new Date(s.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminSubscribers;
