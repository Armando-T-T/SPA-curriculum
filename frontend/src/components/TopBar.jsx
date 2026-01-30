import { Box, Button, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const TopBar = () => {
  const { language, setLanguage, copy } = useLanguage();
  const labels = copy[language].nav;

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
        backgroundColor: "rgba(10, 16, 28, 0.85)",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 6 },
          py: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              display: "grid",
              placeItems: "center",
              background: "linear-gradient(145deg, #1e293b, #0f172a)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
              boxShadow: "0 10px 30px rgba(15, 23, 42, 0.35)",
            }}
          >
            <CodeRoundedIcon sx={{ color: "var(--accent)", fontSize: 20 }} />
          </Box>
          <Typography sx={{ fontWeight: 700, letterSpacing: 0.2, color: "var(--text-primary)" }}>
            Armando Torres
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2.5}
          alignItems="center"
          sx={{ flexWrap: "wrap", rowGap: 1, justifyContent: "flex-end" }}
        >
          <Button
            component={NavLink}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-muted)",
              borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
            })}
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontWeight: 600,
              pb: 0.6,
              minWidth: 0,
            }}
          >
            {labels.home}
          </Button>
          <Button
            component={NavLink}
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-muted)",
              borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
            })}
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontWeight: 600,
              pb: 0.6,
              minWidth: 0,
            }}
          >
            {labels.about}
          </Button>
          <Button
            component={NavLink}
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-muted)",
              borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
            })}
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontWeight: 600,
              pb: 0.6,
              minWidth: 0,
            }}
          >
            {labels.projects}
          </Button>
          <Button
            component={NavLink}
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-muted)",
              borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
            })}
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontWeight: 600,
              pb: 0.6,
              minWidth: 0,
            }}
          >
            {labels.contact}
          </Button>
          <Button
            variant="outlined"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              px: 1.8,
              color: "var(--text-primary)",
              borderColor: "rgba(148, 163, 184, 0.4)",
              "&:hover": { borderColor: "rgba(148, 163, 184, 0.7)" },
            }}
          >
            {language === "es" ? "EN" : "ES"}
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              px: 2.5,
              backgroundColor: "#1f2937",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#111827",
              },
            }}
          >
            {labels.cta}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default TopBar;
