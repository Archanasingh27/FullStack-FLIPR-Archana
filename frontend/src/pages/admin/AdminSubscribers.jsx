import React, { useEffect, useState } from "react";
import API from "../../services/api";

const AdminSubscribers = () => {
  const [subs, setSubs] = useState([]); // ✅ always array

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        // ✅ Uses BASE_URL from api.js
        const res = await API.get("/api/subscribe");

        console.log("Admin Subscribers API Response:", res.data); // ✅ debug

        // ✅ Always store array safely
        setSubs(
          Array.isArray(res.data) ? res.data : res.data.subscribers || []
        );
      } catch (error) {
        console.error("Error fetching subscribers:", error);
        setSubs([]); // ✅ prevent crash
      }
    };

    fetchSubscribers();
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
        {subs.length === 0 ? (
          <tr>
            <td colSpan="2" className="text-center py-4 text-gray-400">
              No subscribers found
            </td>
          </tr>
        ) : (
          subs.map((s) => (
            <tr key={s._id} className="text-center">
              <td>{s.email}</td>
              <td>{new Date(s.createdAt).toLocaleString()}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AdminSubscribers;
