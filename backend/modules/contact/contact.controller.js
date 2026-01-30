import { countRecentByIp, saveContact } from "./contact.service.js";

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.ip || "unknown";
};

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        error: "Faltan campos requeridos: name, email, subject, message.",
      });
    }

    const ip = getClientIp(req);
    const recentCount = await countRecentByIp(ip);
    if (recentCount >= 2) {
      return res.status(429).json({
        error: "Limite de envios alcanzado. Intenta de nuevo en 24 horas.",
      });
    }

    const saved = await saveContact({ name, email, subject, message, ip });

    return res.status(201).json({
      status: "ok",
      id: saved._id,
      message: "Mensaje registrado.",
    });
  } catch (error) {
    return res.status(500).json({
      error: "No se pudo enviar el mensaje.",
      detail: error.message,
    });
  }
};
