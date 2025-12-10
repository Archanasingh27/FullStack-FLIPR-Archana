import express from "express";
import { addClient, getClients } from "../controllers/client.controller.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.post("/add" ,upload.single("clientImage"),  addClient);
router.get("/", getClients);

export default router;
