import express from "express";
import { submitContact, getContacts } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/add", submitContact);
router.get("/", getContacts);

export default router;
