import { Box, Button, Stack, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import PlaceIcon from "@mui/icons-material/Place";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useEffect, useState } from "react";
import api from "../api/client.js";

const getMonterreyTime = (locale) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone: "America/Monterrey",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  const parts = formatter.formatToParts(new Date());

  const hour = parts.find((p) => p.type === "hour")?.value ?? "00";
  const minute = parts.find((p) => p.type === "minute")?.value ?? "00";
  const period = parts.find((p) => p.type === "dayPeriod")?.value ?? "";
  const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "CST";

  return `${hour}:${minute} ${period} (${tz})`;
};


const Home = () => {
  const { language, copy } = useLanguage();
  const text = copy[language].home;
  const locale = language === "es" ? "es-MX" : "en-US";
  const [localTime, setLocalTime] = useState(() => getMonterreyTime(locale));
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    setLocalTime(getMonterreyTime(locale));
    const timer = setInterval(() => {
      setLocalTime(getMonterreyTime(locale));
    }, 60000);
    return () => clearInterval(timer);
  }, [locale]);

  useEffect(() => {
    let active = true;
    api
      .get("/api/metrics", { params: { section: "cv" } })
      .then((response) => {
        if (active) setMetrics(response.data);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <Box
      id="top"
      sx={{
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          pointerEvents: "none",
          opacity: 0.5,
        },
      }}
    >
      <Stack spacing={7} sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.2fr 0.8fr" },
            gap: { xs: 3, lg: 5 },
            alignItems: "center",
            pt: { xs: 2, md: 4 },
            height: "80vh",
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              {text.hero.label}
            </Typography>
            <Typography
              variant="h1"
              sx={{ mt: 2, fontSize: { xs: "3.2rem", md: "4.6rem" } }}
            >
              {text.hero.firstName}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3.2rem", md: "4.6rem" },
                color: "primary.main",
              }}
            >
              {text.hero.lastName}
            </Typography>
            <Box
              sx={{
                mt: 3,
                pt: 3,
                borderTop: "1px solid rgba(148, 163, 184, 0.16)",
              }}
            >
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ maxWidth: 520 }}
              >
                {text.hero.subtitle}
              </Typography>
              {metrics && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mt: 1.8 }}
                >
                  {language === "es"
                    ? `Mi CV ha sido visitado ${metrics.visits ?? 0} veces, desde ${
                        metrics.countries ?? 0
                      } países, ${metrics.recruiters ?? 0} reclutadores me escribieron`
                    : `My resume has been viewed ${metrics.visits ?? 0} times, from ${
                        metrics.countries ?? 0
                      } countries, ${metrics.recruiters ?? 0} recruiters messaged me`}
                </Typography>
              )}
            </Box>
            <Stack
              spacing={1.2}
              sx={{ mt: 3, display: { xs: "flex", lg: "none" } }}
            >
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "secondary.main",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {text.hero.location}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "secondary.main",
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  {text.hero.localTime}: {localTime}
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Stack
            spacing={1.2}
            sx={{
              alignItems: "flex-end",
              display: { xs: "none", lg: "flex" },
            }}
          >
            <Stack direction="row" spacing={1.2} alignItems="center">
              <PlaceIcon sx={{ color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {text.hero.location}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <WatchLaterIcon sx={{ color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {text.hero.localTime}: {localTime}
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(148, 163, 184, 0.12)", pt: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: { xs: 2, md: 4 },
            }}
          >
            <Box>
              <Typography variant="overline" sx={{ color: "secondary.main" }}>
                {text.about.label}
              </Typography>
            </Box>

            <Box>
              <Typography variant="h4">{text.about.title}</Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 1.2 }}
              >
                {text.about.body}
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                  gap: 3,
                }}
              >
                {[
                  text.about.disciplines,
                  text.about.tools,
                  text.about.focus,
                ].map((group) => (
                  <Box key={group.title}>
                    <Typography variant="overline" color="text.secondary">
                      {group.title}
                    </Typography>
                    <Stack spacing={0.6} sx={{ mt: 1 }}>
                      {group.items.map((item) => (
                        <Typography key={item} variant="body2">
                          {item}
                        </Typography>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(148, 163, 184, 0.12)", pt: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: { xs: 2, md: 4 },
            }}
          >
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              {text.experience.label}
            </Typography>
            <Stack spacing={3}>
              {text.experience.items.map((item, index) => (
                <Box
                  key={`${item.name}-${index}`}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
                    gap: 2,
                    borderBottom:
                      index === text.experience.items.length - 1
                        ? "none"
                        : "1px solid rgba(148, 163, 184, 0.1)",
                    pb: index === text.experience.items.length - 1 ? 0 : 2,
                  }}
                >
                  <Box>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.role}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ textAlign: { xs: "left", md: "right" } }}
                    >
                      {item.period}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 0.6 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}

              <Button
                variant="text"
                startIcon={<FileDownloadOutlinedIcon />}
                component="a"
                href={language === "es" ? "/Armando_Torres_Desarrollador_FullStack.pdf" : "/Armando_Torres_FullStack_Developer.pdf"}
                download={
                  language === "es"
                    ? "Armando_Torres_CV_ES.pdf"
                    : "Armando_Torres_CV_EN.pdf"
                }
                sx={{
                  alignSelf: "flex-start",
                  color: "secondary.main",
                  textTransform: "uppercase",
                  letterSpacing: 1.2,
                  fontSize: 12,
                }}
              >
                {text.experience.cta}
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(148, 163, 184, 0.12)", pt: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: { xs: 2, md: 4 },
            }}
          >
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              {text.projects.label}
            </Typography>
            <Stack spacing={2.2}>
              {text.projects.items.map((project) => (
                <Box
                  key={project.title}
                  sx={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    borderRadius: 3,
                    border: "1px solid rgba(148, 163, 184, 0.15)",
                    padding: { xs: 2, md: 2.6 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography variant="overline" color="text.secondary">
                      {project.tag}
                    </Typography>
                    <Typography variant="h4">{project.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </Box>
                  <ArrowOutwardRoundedIcon sx={{ color: "text.secondary" }} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid rgba(148, 163, 184, 0.12)", pt: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: { xs: 2, md: 4 },
            }}
          >
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              {text.talk.label}
            </Typography>
            <Box>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2.6rem", md: "3.1rem" } }}
              >
                {text.talk.title}
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  pt: 2,
                  borderTop: "1px solid rgba(148, 163, 184, 0.12)",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {text.talk.contact}
                </Typography>
                <Typography variant="subtitle1">{text.talk.email}</Typography>
              </Box>
              <Stack
                direction="row"
                spacing={3}
                sx={{ mt: 2, flexWrap: "wrap" }}
              >
                {[
                  {
                    label: text.talk.socials[0],
                    href: "https://www.linkedin.com/in/armando-torres-trevino-5a5bb6286",
                  },
                  {
                    label: text.talk.socials[1],
                    href: "https://github.com/Armando-T-T",
                  },
                  { label: text.talk.socials[2], href: "https://x.com/" },
                ].map((item) => (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      color: "text.secondary",
                      fontSize: 12,
                      letterSpacing: 1.2,
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 3,
            pt: 2.5,
            borderTop: "1px solid rgba(148, 163, 184, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {text.talk.footer}
          </Typography>
          <Box
            component="a"
            href="#top"
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              fontSize: 12,
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {language === "es" ? "Volver arriba" : "Back to top"}
            <ArrowOutwardRoundedIcon
              sx={{ fontSize: 16, transform: "rotate(-90deg)" }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Home;
