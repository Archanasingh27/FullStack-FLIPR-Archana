import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Project fetch error:", error);
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#475569 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Projects</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group border border-slate-100"
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 z-10 transition-colors"></div>

                {/* ✅ IMAGE FIXED HERE */}
                <img
                  src={`http://localhost:5000/uploads/${project.projectImage}`}
                  alt={project.projectName}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-2 group-hover:text-orange-500 transition">
                  {project.projectName}
                </h3>

                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                  {project.projectDescription}
                </p>

                <div className="flex justify-center">
  <button className="mt-3 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg">
    View Details <ArrowRight className="w-3 h-3" />
  </button>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
