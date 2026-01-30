import { getMetricsSummary } from "./metrics.service.js";

export const getMetrics = async (req, res) => {
  try {
    const section = req.query.section || "cv";
    const summary = await getMetricsSummary(section);
    return res.json(summary);
  } catch (error) {
    return res.status(500).json({
      error: "No se pudo obtener metricas.",
      detail: error.message,
    });
  }
};
