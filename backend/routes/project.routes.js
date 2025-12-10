import express from "express";
import { addProject, getProjects } from "../controllers/project.controller.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/add", upload.single("projectImage"), addProject);
router.get("/", getProjects);

export default router;
