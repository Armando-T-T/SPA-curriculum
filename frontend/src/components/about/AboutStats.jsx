import { Box, Stack, Typography } from "@mui/material";

const AboutStats = ({ stats }) => {
  return (
    <Stack direction="row" spacing={6} alignItems="center" flexWrap="wrap" rowGap={2}>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.7rem", md: "2rem" },
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          {stats.years.value}
        </Typography>
        <Typography sx={{ color: "var(--text-muted)", fontSize: 12 }}>
          {stats.years.label}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.7rem", md: "2rem" },
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          {stats.projects.value}
        </Typography>
        <Typography sx={{ color: "var(--text-muted)", fontSize: 12 }}>
          {stats.projects.label}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "1.7rem", md: "2rem" },
            fontWeight: 700,
            color: "var(--text-primary)",
          }}
        >
          {stats.awards.value}
        </Typography>
        <Typography sx={{ color: "var(--text-muted)", fontSize: 12 }}>
          {stats.awards.label}
        </Typography>
      </Box>
    </Stack>
  );
};

export default AboutStats;
