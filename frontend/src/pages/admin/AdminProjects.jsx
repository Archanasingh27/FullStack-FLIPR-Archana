import React, { useEffect, useState } from "react";
import ImageCropper from "../../components/ImageCropper"; 
import API from "../../services/api";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]); 
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
  });

  const [imageSrc, setImageSrc] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

 
  const fetchProjects = async () => {
    try {
      const res = await API.get("/api/projects");
      console.log("Projects API:", res.data);

      setProjects(
        Array.isArray(res.data) ? res.data : res.data.projects || []
      );
    } catch (error) {
      console.error("Fetch projects error:", error);
      setProjects([]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Select image 
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImageSrc(imageURL);
    setShowCropper(true);
  };

  // ✅ Receive cropped image
  const handleCropDone = (croppedFile) => {
    setForm({ ...form, image: croppedFile });
    setShowCropper(false);
  };

  // ✅ Submit Project
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("projectImage", form.image);
      formData.append("projectName", form.name);
      formData.append("projectDescription", form.description);

      await API.post("/api/projects/add", formData);

      setForm({ name: "", description: "", image: null });
      fetchProjects();
    } catch (error) {
      console.error("Add project error:", error);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8">

      {/* ✅ FORM */}
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="font-bold mb-4">Add Project</h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border p-2 rounded"
            placeholder="Project Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <textarea
            className="w-full border p-2 rounded"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          <input type="file" accept="image/*" onChange={handleImageSelect} required />

          {form.image && (
            <p className="text-green-600 text-sm">✅ Image cropped & ready</p>
          )}

          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Add Project
          </button>
        </form>
      </div>

      {/* ✅ CROP COMPONENT */}
      {showCropper && (
        <ImageCropper
          imageSrc={imageSrc}
          onCancel={() => setShowCropper(false)}
          onCropDone={handleCropDone}
        />
      )}

      {/* ✅ PROJECT LIST */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
        {projects.length === 0 ? (
          <p className="text-slate-400 col-span-full text-center">
            No projects added yet
          </p>
        ) : (
          projects.map((p) => (
            <div key={p._id} className="bg-white border rounded">
              <img
                src={`${API.defaults.baseURL.replace("/api", "")}/uploads/${p.projectImage}`}
                className="h-40 w-full object-cover"
                alt={p.projectName}
                onError={(e) => (e.target.src = "/no-image.png")}
              />

              <div className="p-4">
                <h4 className="font-bold">{p.projectName}</h4>
                <p className="text-sm text-gray-600">
                  {p.projectDescription}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default AdminProjects;
