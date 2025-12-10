import Project from "../models/Project.js";

// ADD PROJECT
export const addProject = async (req, res) => {
  try {
    const { projectName, projectDescription } = req.body;
    const projectImage = req.file ? req.file.filename : null;

    if (!projectImage || !projectName || !projectDescription) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const project = await Project.create({
      projectImage,
      projectName,
      projectDescription,
    });

    res.status(201).json({ message: "Project added successfully", project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL PROJECTS
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
