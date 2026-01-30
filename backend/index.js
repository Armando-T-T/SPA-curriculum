import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import developerRoutes from "./modules/developer/developer.route.js";
import contactRoutes from "./modules/contact/contact.route.js";
import visitRoutes from "./modules/visit/visit.route.js";
import metricsRoutes from "./modules/metrics/metrics.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const DEFAULT_ORIGINS = ["https://torrestrevinoarmando.com"];
const DEV_ORIGINS = ["http://localhost:5173", "http://localhost:5174"];
const EXTRA_ORIGINS = process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : [];
const ALLOWED_ORIGINS =
  process.env.NODE_ENV === "production"
    ? [...DEFAULT_ORIGINS, ...EXTRA_ORIGINS]
    : [...DEFAULT_ORIGINS, ...DEV_ORIGINS, ...EXTRA_ORIGINS];

app.set("trust proxy", true);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Backend MERN activo." });
});

app.use("/api/developer", developerRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/metrics", metricsRoutes);

if (!MONGODB_URI) {
  console.warn("MONGODB_URI no esta configurada.");
} else {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.error("Error al conectar MongoDB", err));
}

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
