import { Box, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import TopBar from "./components/TopBar.jsx";
import AppRouter from "./router/AppRouter.jsx";
import api from "./api/client.js";

const getDeviceId = () => {
  const key = "spa_device_id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const generated =
    (typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID()) ||
    `dev-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(key, generated);
  return generated;
};

const getCountryFromLocale = () => {
  const locale = navigator.language || "en-US";
  const region = locale.split("-")[1];
  if (!region) return "Unknown";
  try {
    const display = new Intl.DisplayNames([locale], { type: "region" });
    return display.of(region) || region;
  } catch {
    return region;
  }
};

const App = () => {
  useEffect(() => {
    const deviceId = getDeviceId();
    const country = getCountryFromLocale();
    api.post("/api/visits", { section: "cv", deviceId, country }).catch(() => {});
  }, []);

  return (
    <LanguageProvider>
      <Box className="app-root">
        <CssBaseline />
        <TopBar />
        <Box component="main" sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 } }}>
          <AppRouter />
        </Box>
      </Box>
    </LanguageProvider>
  );
};

export default App;
