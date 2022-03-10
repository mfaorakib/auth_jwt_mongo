import express from "express";
const router = express.Router();

import {
  postService,
  getService,
  updateService,
  deleteService,
} from "../controllers/index.js";

router.post("/postService", postService);
router.get("/getService", getService);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);

export default router;