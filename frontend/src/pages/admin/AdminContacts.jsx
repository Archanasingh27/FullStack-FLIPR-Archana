import React, { useEffect, useState } from "react";
import API from "../../services/api";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await API.get("/api/contact"); 

        console.log("Admin Contacts API Response:", res.data); 

       
        setContacts(
          Array.isArray(res.data) ? res.data : res.data.contacts || []
        );
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setContacts([]); 
      }
    };

    fetchContacts();
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
        {contacts.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center py-4 text-gray-400">
              No contacts found
            </td>
          </tr>
        ) : (
          contacts.map((c) => (
            <tr key={c._id} className="text-center">
              <td>{c.fullName}</td>
              <td>{c.email}</td>
              <td>{c.mobile}</td>
              <td>{c.city}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default AdminContacts;
