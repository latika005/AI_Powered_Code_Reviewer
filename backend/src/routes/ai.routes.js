import express from "express";
import { getReview } from "../controllers/ai.controller.js"

const router = express.Router();

// router.get("/get-response", getResponse);

router.post("/get-review", getReview);

export default router;
