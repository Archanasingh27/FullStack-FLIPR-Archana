import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectImage: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectDescription: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
