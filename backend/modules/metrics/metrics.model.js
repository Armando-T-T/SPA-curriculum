import mongoose from "mongoose";

const MetricsSchema = new mongoose.Schema(
  {
    section: { type: String, required: true },
    visits: { type: Number, default: 0 },
    countries: { type: Number, default: 0 },
    recruiters: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Metrics = mongoose.models.Metrics || mongoose.model("Metrics", MetricsSchema);

export default Metrics;
