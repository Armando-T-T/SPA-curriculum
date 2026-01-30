import mongoose from "mongoose";

const DeveloperSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    stack: { type: [String], required: true },
    focus: { type: String, required: true },
    hardWorker: { type: Boolean, default: true },
    quickLearner: { type: Boolean, default: true },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

const Developer = mongoose.models.Developer || mongoose.model("Developer", DeveloperSchema);

export default Developer;
