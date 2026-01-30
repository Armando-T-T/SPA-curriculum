import { createVisit, hasRecentVisit, simplifyUserAgent } from "./visit.service.js";

export const registerVisit = async (req, res) => {
  try {
    const { section, country, deviceId } = req.body || {};
    if (!section) {
      return res.status(400).json({ error: "section es requerido." });
    }
    if (!deviceId) {
      return res.status(400).json({ error: "deviceId es requerido." });
    }

    const rawUserAgent = req.get("user-agent") || "";
    const userAgent = simplifyUserAgent(rawUserAgent);

    const recent = await hasRecentVisit(deviceId, 6);
    if (recent) {
      return res.status(200).json({ status: "skipped" });
    }

    const visit = await createVisit({ section, userAgent, country, deviceId });

    return res.status(201).json({
      status: "ok",
      id: visit._id,
    });
  } catch (error) {
    return res.status(500).json({
      error: "No se pudo registrar la visita.",
      detail: error.message,
    });
  }
};
