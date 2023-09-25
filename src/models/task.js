import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  addedDatet: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
   
    },
  userId: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);