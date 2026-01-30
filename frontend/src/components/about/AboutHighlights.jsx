import { Box, Stack, Typography } from "@mui/material";

const AboutHighlights = ({ items }) => {
  return (
    <Stack spacing={1.2}>
      {items.map((item) => (
        <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              mt: 1,
              flexShrink: 0,
            }}
          />
          <Typography sx={{ color: "var(--text-muted)", fontSize: "0.98rem" }}>
            {item}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default AboutHighlights;
