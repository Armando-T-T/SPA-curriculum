import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useLanguage } from "../context/LanguageContext.jsx";
import AboutCodePanel from "../components/about/AboutCodePanel.jsx";
import AboutHighlights from "../components/about/AboutHighlights.jsx";
import AboutStats from "../components/about/AboutStats.jsx";

const About = () => {
  const { language, copy } = useLanguage();
  const text = copy[language].about;

  const codeLines = [
    {
      no: 1,
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: 2,
      indent: 0,
      content: (
        <>
          <Box component="span" sx={{ color: "#a855f7" }}>
            const
          </Box>{" "}
          <Box component="span" sx={{ color: "#fbbf24" }}>
            Armando
          </Box>{" "}
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            Developer
          </Box>{" "}
          <Box component="span" sx={{ color: "#94a3b8" }}>
            =
          </Box>{" "}
          <Box component="span" sx={{ color: "#f8fafc" }}>
            {"{"}
          </Box>
        </>
      ),
    },
    {
      no: 3,
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: 4,
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            name
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Armando Torres"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: 5,
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: 6,
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            role
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Full-Stack Developer"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: 7,
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: 8,
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            stack
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#f8fafc" }}>
            [
          </Box>
        </>
      ),
    },
    {
      no: 9,
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: 10,
      indent: 2,
      content: (
        <>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "React"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Redux Toolkit"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Node.js"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Express"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: 11,
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: 12,
      indent: 2,
      content: (
        <>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "MongoDB"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "AWS"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "REST APIs"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Stripe"
          </Box>
        </>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#f8fafc" }}>
            ]
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            focus
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "SaaS / B2B"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            hardWorker
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#f59e0b" }}>
            true
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            quickLearner
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#f59e0b" }}>
            true
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 1,
      content: (
        <>
          <Box component="span" sx={{ color: "#7dd3fc" }}>
            status
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            :{" "}
          </Box>
          <Box component="span" sx={{ color: "#4ade80" }}>
            "Ready to Ship"
          </Box>
          <Box component="span" sx={{ color: "#94a3b8" }}>
            ,
          </Box>
        </>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 1,
      content: (
        <Box component="span" sx={{ color: "#64748b", fontStyle: "italic" }}>
          // Building reliable systems & telling good stories.
        </Box>
      ),
    },
    {
      no: "",
      indent: 1,
      content: <Box sx={{ height: 26.6 }} />,
    },
    {
      no: "",
      indent: 0,
      content: (
        <Box component="span" sx={{ color: "#f8fafc" }}>
          {"}"}
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-120px", md: "-140px" },
          left: { xs: "-160px", md: "-120px" },
          width: { xs: 260, md: 340 },
          height: { xs: 260, md: 340 },
          borderRadius: "50%",
          filter: "blur(2px)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          display: "grid",
          gap: { xs: 5, md: 8 },
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
          alignItems: "center",
        }}
      >
        <AboutCodePanel codeLines={codeLines} />

        <Stack spacing={3.2}>
          <Chip
            icon={
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--accent)",
                }}
              />
            }
            label={text.chip}
            sx={{
              alignSelf: "flex-start",
              fontWeight: 700,
              letterSpacing: 1,
              backgroundColor: "rgba(59, 130, 246, 0.16)",
              color: "var(--accent)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
              "& .MuiChip-icon": {
                marginLeft: 2,
                marginRight: 0,
              },
            }}
          />

          <Typography
            sx={{
              fontWeight: 700,
              lineHeight: 1.05,
              fontSize: { xs: "2.6rem", md: "3.6rem" },
              color: "var(--text-primary)",
            }}
          >
            {text.title}{" "}
            <Box component="span" sx={{ color: "var(--accent)" }}>
              {text.titleAccent}
            </Box>
          </Typography>

          <Typography sx={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            {text.intro}
          </Typography>

          <Typography sx={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            {text.body}
          </Typography>

          {/*<AboutHighlights items={text.highlights} />*/}

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              component="a"
              href={language === "es" ? "/Armando_Torres_Desarrollador_FullStack.pdf" : "/Armando_Torres_FullStack_Developer.pdf"}
              download={language === "es" ? "Armando_Torres_CV_ES.pdf" : "Armando_Torres_CV_EN.pdf"}
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2.5,
                px: 2.6,
                py: 1.2,
                backgroundColor: "var(--accent)",
                boxShadow: "0 14px 30px rgba(59, 130, 246, 0.25)",
                "&:hover": {
                  backgroundColor: "#2563eb",
                },
              }}
            >
              {text.resume}
            </Button>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <IconButton
                component="a"
                href="https://github.com/Armando-T-T"
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  color: "var(--text-primary)",
                  "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.9)" },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/armando-torres-trevino-5a5bb6286"
                target="_blank"
                rel="noreferrer"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  color: "var(--text-primary)",
                  "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.9)" },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:torrestrevinoarmando@gmail.com"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "rgba(15, 23, 42, 0.8)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  color: "var(--text-primary)",
                  "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.9)" },
                }}
              >
                <MailOutlineIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.15)" }} />

          <AboutStats stats={text.stats} />
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
