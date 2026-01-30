import { Box, Stack, Typography } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const AboutCodePanel = ({ codeLines }) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        border: "1px solid rgba(148, 163, 184, 0.18)",
        background: "linear-gradient(160deg, #0f172a 0%, #0b1120 100%)",
        boxShadow: "0 28px 60px rgba(2, 6, 23, 0.65)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          px: 2.5,
          py: 1.5,
          borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
          backgroundColor: "rgba(15, 23, 42, 0.85)",
        }}
      >
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#f87171",
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#fbbf24",
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
        </Stack>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <CodeRoundedIcon
            sx={{ color: "rgba(148, 163, 184, 0.8)", fontSize: 20 }}
          />
          <Typography
            sx={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: 1.6,
              color: "rgba(148, 163, 184, 0.8)",
            }}
          >
            DEVELOPER.CONFIG.JS
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: { xs: 320, md: 520 },
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          lineHeight: 1.9,
          color: "#e2e8f0",
          background:
            "linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.95) 100%)",
        }}
      >
        <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 2.5 }, flex: 1 }}>
          <Stack spacing={0.6}>
            {codeLines.map((line, index) => (
              <Box
                key={`${line.no}-${index}`}
                sx={{ display: "grid", gridTemplateColumns: "28px 1fr" }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 14,
                    color: "rgba(148, 163, 184, 0.6)",
                    textAlign: "right",
                    pr: 1.5,
                    pt: "2px",
                  }}
                >
                  {line.no}
                </Typography>
                <Box sx={{ whiteSpace: "pre-wrap", pl: line.indent * 2 }}>
                  {line.content}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(148, 163, 184, 0.12)",
            px: { xs: 2, md: 2.5 },
            py: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "rgba(148, 163, 184, 0.7)",
            backgroundColor: "rgba(15, 23, 42, 0.85)",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={0.75} alignItems="center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 56 59"
                style={{ color: "#60a5fa", display: "block" }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor" shapeRendering="crispEdges">
                  <rect x="12" y="16" width="12" height="14" />
                  <rect x="34" y="16" width="13" height="14" />
                  <rect x="12" y="21" width="35" height="3" />
                  <rect x="27" y="21" width="4" height="21" />
                  <rect x="31" y="39" width="3" height="3" />
                  <rect x="34" y="34" width="13" height="13" />
                </g>
              </svg>

              <Typography sx={{ fontSize: 12, color: "#60a5fa", lineHeight: 1 }}>
                main
              </Typography>
            </Stack>

            <Typography sx={{ fontSize: 12, lineHeight: 1 }}>
              0 errors, 0 warnings
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.8,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <Typography sx={{ fontSize: 12 }}>Online</Typography>
            </Box>
            <Typography sx={{ fontSize: 12 }}>UTF-8</Typography>
            <Typography sx={{ fontSize: 12, color: "#38bdf8" }}>
              TypeScript
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCodePanel;
