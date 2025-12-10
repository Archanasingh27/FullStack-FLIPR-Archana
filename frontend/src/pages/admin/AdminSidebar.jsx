import React from "react";
import { LayoutDashboard, Users, FolderPlus, Mail, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SidebarItem = ({ id, icon: Icon, label, activeTab, setActiveTab }) => {
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
        activeTab === id
          ? "bg-orange-500 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
};

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold flex gap-2 items-center">
          <LayoutDashboard className="text-orange-500" />
          Admin Panel
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <SidebarItem
          id="projects"
          icon={FolderPlus}
          label="Projects"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SidebarItem
          id="clients"
          icon={Users}
          label="Clients"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SidebarItem
          id="contacts"
          icon={MessageSquare}
          label="Contacts"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <SidebarItem
          id="subscribers"
          icon={Mail}
          label="Subscribers"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-orange-500">
          <ArrowLeft className="w-4 h-4" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
