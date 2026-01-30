import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema(
  {
    timestamp: { type: Date, default: Date.now },
    section: { type: String, required: true },
    userAgent: { type: String, required: true },
    country: { type: String, default: "Unknown" },
    deviceId: { type: String, required: true },
  },
  { timestamps: true }
);

const Visit = mongoose.models.Visit || mongoose.model("Visit", VisitSchema);

export default Visit;
