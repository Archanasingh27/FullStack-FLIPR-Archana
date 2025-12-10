
import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar.jsx"; 
import AdminProjects from "./AdminProjects";
import AdminClients from "./AdminClients";
import AdminContacts from "./AdminContacts";
import AdminSubscribers from "./AdminSubscribers";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex  h-screen bg-slate-50 overflow-hidden mt-20">
      
      {/* Sidebar Component */}
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {activeTab === "projects" && <AdminProjects />}
        {activeTab === "clients" && <AdminClients />}
        {activeTab === "contacts" && <AdminContacts />}
        {activeTab === "subscribers" && <AdminSubscribers />}
      </main>
    </div>
  );
};

export default AdminDashboard;
