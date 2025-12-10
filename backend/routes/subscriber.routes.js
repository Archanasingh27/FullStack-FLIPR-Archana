import express from "express";
import { addSubscriber, getSubscribers } from "../controllers/subscriber.controller.js";

const router = express.Router();

router.post("/add", addSubscriber);
router.get("/", getSubscribers);

export default router;
