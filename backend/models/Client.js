import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    clientImage: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
      trim: true,
    },
    clientDesignation: {
      type: String,
      required: true,
      trim: true,
    },
    clientDescription: {
      type: String,
      required: true,
      trim: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Client", clientSchema);
