import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx";
import Projects from "./components/Home/Projects.jsx";
import Clients from "./components/Home/Clients.jsx";
import Contact from "./components/Home/Contact.jsx";
import Navbar from "./components/Navbar";

import AdminDashboard from "./pages/admin/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
