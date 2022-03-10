import express from "express";
import mongoose from "mongoose";
import Service from "../models/index.js";

const router = express.Router();

export const postService = async (req, res) => {
  const { title, selectedFile } = req.body;

  const newService = new Service({ title, selectedFile });

  try {
    await newService.save();

    res.status(201).json(newService);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getService = async (req, res) => {
  try {
    const service = await Service.find();

    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateService = async (req, res) => {
  const { id } = req.params;
  const { title, selectedFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updatedPost = { title, selectedFile, _id: id };
  await Service.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};
export const deleteService = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Service.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export default router;