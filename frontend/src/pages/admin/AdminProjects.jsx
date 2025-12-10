import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCropper from "../../components/ImageCropper"; 

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
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ Select image → open cropper
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImageSrc(imageURL);
    setShowCropper(true);
  };

  // ✅ Receive cropped image from ImageCropper
  const handleCropDone = (croppedFile) => {
    setForm({ ...form, image: croppedFile });
    setShowCropper(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectImage", form.image);
    formData.append("projectName", form.name);
    formData.append("projectDescription", form.description);

    await axios.post(`${import.meta.env.VITE_API_URL}/api/projects/add`, formData);

    setForm({ name: "", description: "", image: null });
    fetchProjects();
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
        {projects.map((p) => (
          <div key={p._id} className="bg-white border rounded">
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${p.projectImage}`}
              className="h-40 w-full object-cover"
              alt=""
            />
            <div className="p-4">
              <h4 className="font-bold">{p.projectName}</h4>
              <p className="text-sm text-gray-600">
                {p.projectDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminProjects;
