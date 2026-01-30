import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useLanguage } from "../context/LanguageContext.jsx";

const iconMap = {
  school: <SchoolRoundedIcon />,
  cert: <VerifiedRoundedIcon />,
};

const TimelineSection = ({ title, subtitle, icon, items }) => {
  return (
    <Box sx={{ position: "relative", pb: 6 }}>
      <Stack spacing={1.2} sx={{ mb: 3 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "2rem", md: "2.4rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ maxWidth: 680 }}
        >
          {subtitle}
        </Typography>
      </Stack>

      <Box sx={{ position: "relative", pl: { xs: 4, md: 5 } }}>
        <Box
          sx={{
            position: "absolute",
            left: { xs: 12, md: 16 },
            top: 4,
            bottom: 4,
            width: 2,
            background:
              "linear-gradient(180deg, rgba(148, 163, 184, 0.3), rgba(148, 163, 184, 0.05))",
          }}
        />

        <Stack spacing={4.5}>
          {items.map((item, index) => (
            <Box key={`${item.title}-${index}`} sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: -32, md: -36 },
                  top: 4,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  border: "1px solid rgba(59, 130, 246, 0.5)",
                  display: "grid",
                  placeItems: "center",
                  color: "secondary.main",
                }}
              >
                {icon || iconMap[item.icon] || <WorkOutlineRoundedIcon />}
              </Box>

              <Stack spacing={1.5}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.location ? `${item.company} • ${item.location}` : item.company}
                    </Typography>
                  </Box>
                  <Chip
                    label={item.period}
                    sx={{
                      alignSelf: "flex-start",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      color: "text.secondary",
                      fontSize: 12,
                    }}
                  />
                </Box>

                <Card
                  sx={{
                    background: "rgba(15, 23, 42, 0.9)",
                    borderRadius: 3,
                    border: "1px solid rgba(148, 163, 184, 0.15)",
                  }}
                >
                  <CardContent>
                    <Stack spacing={1.4}>
                      {item.highlights.map((highlight) => (
                        <Stack key={highlight} direction="row" spacing={1.2}>
                          <Box
                            sx={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              backgroundColor: "rgba(59, 130, 246, 0.25)",
                              display: "grid",
                              placeItems: "center",
                              color: "secondary.main",
                              fontSize: 12,
                              mt: 0.4,
                            }}
                          >
                            <CheckRoundedIcon sx={{ fontSize: 14 }} />
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {highlight}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {item.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(15, 23, 42, 0.9)",
                        border: "1px solid rgba(148, 163, 184, 0.2)",
                        color: "text.secondary",
                        fontSize: 12,
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

const Projects = () => {
  const { language, copy } = useLanguage();
  const text = copy[language].projectsPage;

  return (
    <Stack spacing={6}>
      <TimelineSection
        title={text.title}
        subtitle={text.subtitle}
        items={text.experienceItems}
      />

      <TimelineSection
        title={text.educationTitle}
        subtitle={text.educationSubtitle}
        icon={<SchoolRoundedIcon />}
        items={text.educationItems}
      />
    </Stack>
  );
};

export default Projects;


