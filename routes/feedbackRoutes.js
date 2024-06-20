import express from "express";
import {
  addFeedbacks,
  getFeedbacks,
} from "../controllers/feedbackControllers.js";

const router = express.Router();

router.get("/", getFeedbacks);
router.post("/add", addFeedbacks);

export { router as feedbackRoutes };
