import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, sendContactMessage } from "../store/contactSlice.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const getMonterreyTime = (locale) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    timeZone: "America/Monterrey",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });
  const parts = formatter.formatToParts(new Date());
  const time = parts
    .filter((part) => part.type === "hour" || part.type === "minute" || part.type === "dayPeriod")
    .map((part) => part.value)
    .join("")
    .replace("AM", " AM")
    .replace("PM", " PM");
  const tz = parts.find((part) => part.type === "timeZoneName")?.value || "CST";
  return { time, tz };
};

const Contact = () => {
  const { language, copy } = useLanguage();
  const text = copy[language].contactPage;
  const dispatch = useDispatch();
  const { status, error, success } = useSelector((state) => state.contact);
  const [clientError, setClientError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const locale = language === "es" ? "es-MX" : "en-US";
  const [timeInfo, setTimeInfo] = useState(() => getMonterreyTime(locale));

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputSx = {
    "& .MuiInputBase-root": {
      color: "var(--text-primary)",
      backgroundColor: "rgba(15, 23, 42, 0.85)",
      borderRadius: 2,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(148, 163, 184, 0.2)",
    },
    "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(148, 163, 184, 0.4)",
    },
    "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(59, 130, 246, 0.7)",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "rgba(148, 163, 184, 0.7)",
      opacity: 1,
    },
    "& .MuiInputLabel-root": {
      color: "rgba(148, 163, 184, 0.7)",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgba(59, 130, 246, 0.9)",
    },
  };

  useEffect(() => {
    setTimeInfo(getMonterreyTime(locale));
    const interval = setInterval(() => {
      setTimeInfo(getMonterreyTime(locale));
    }, 60000);
    return () => clearInterval(interval);
  }, [locale]);

  useEffect(() => {
    if (status === "succeeded") {
      setForm({ name: "", email: "", subject: "", message: "" });
      const timer = setTimeout(() => dispatch(resetStatus()), 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [status, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (clientError) {
      setClientError(null);
    }
    if (status !== "idle") {
      dispatch(resetStatus());
    }
  };

  const canSubmit = useMemo(() => {
    return (
      form.name &&
      form.email &&
      form.subject &&
      form.message &&
      status !== "loading" &&
      !isSending
    );
  }, [form, status, isSending]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    try {
      setIsSending(true);
      setClientError(null);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS no esta configurado.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          time: `${timeInfo.time} ${timeInfo.tz}`,
        },
        { publicKey }
      );

      await dispatch(
        sendContactMessage({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        })
      ).unwrap();
    } catch (err) {
      setClientError(err?.message || "No se pudo enviar el mensaje.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box id="contact-top" sx={{ position: "relative" }}>
      <Stack spacing={3}>
        <Box>
          <Typography sx={{ fontSize: { xs: "2.5rem", md: "3rem" }, fontWeight: 700, color: "var(--text-primary)", }}>
            {text.title}
          </Typography>
          <Typography sx={{ color: "var(--text-muted)", mt: 1.2, maxWidth: 620 }}>
            {text.subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.6fr 0.9fr" },
            gap: { xs: 4, lg: 6 },
            alignItems: "start",
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2.4}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
                <TextField
                  label={text.fields.name}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={text.fields.namePlaceholder}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={inputSx}
                />
                <TextField
                  label={text.fields.email}
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={text.fields.emailPlaceholder}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={inputSx}
                />
              </Box>

              <TextField
                label={text.fields.subject}
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder={text.fields.subjectPlaceholder}
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={inputSx}
              />

              <TextField
                label={text.fields.message}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={text.fields.messagePlaceholder}
                fullWidth
                multiline
                minRows={6}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={inputSx}
              />

              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!canSubmit}
                  endIcon={<ArrowOutwardRoundedIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 2.5,
                    px: 3,
                    py: 1.2,
                    backgroundColor: "var(--accent)",
                    boxShadow: "0 14px 30px rgba(59, 130, 246, 0.25)",
                    "&:hover": {
                      backgroundColor: "#2563eb",
                    },
                  }}
                >
                  {text.send}
                </Button>
                {(status === "loading" || isSending) && (
                  <Typography sx={{ color: "var(--text-muted)" }}>
                    {text.sending}
                  </Typography>
                )}
                {clientError && (
                  <Typography sx={{ color: "#f87171" }}>{clientError}</Typography>
                )}
                {status === "failed" && (
                  <Typography sx={{ color: "#f87171" }}>{error}</Typography>
                )}
                {status === "succeeded" && (
                  <Typography sx={{ color: "#34d399" }}>{success}</Typography>
                )}
              </Stack>
            </Stack>
          </Box>

          <Stack spacing={3}>
            <Card
              sx={{
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(148, 163, 184, 0.15)",
                borderRadius: 3,
              }}
            >
              <CardContent>
                <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)", }}>
                  {text.infoTitle}
                </Typography>
                <Stack spacing={2.2} sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <EmailOutlinedIcon sx={{ color: "var(--accent)" }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "var(--text-muted)", fontSize: 13 }}>
                        {text.emailLabel}
                      </Typography>
                      <Typography sx={{ fontWeight: 600, color: "var(--text-primary)", }}>
                        torrestrevinoarmando@gmail.com
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <LocationOnOutlinedIcon sx={{ color: "var(--accent)" }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: "var(--text-muted)", fontSize: 13 }}>
                        {text.locationLabel}
                      </Typography>
                      <Typography sx={{ fontWeight: 600, color: "var(--text-primary)", }}>
                        {text.locationValue}
                      </Typography>
                      <Typography sx={{ color: "var(--text-muted)", fontSize: 13 }}>
                        {text.localTimeLabel}: {timeInfo.time} ({timeInfo.tz})
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Box>
              <Typography sx={{ fontWeight: 700, mb: 2, color: "var(--text-primary)",}}>
                {text.connectTitle}
              </Typography>
              <Stack spacing={1.6}>
                {[
                  {
                    label: text.socials.linkedin,
                    href: "https://www.linkedin.com/in/armando-torres-trevino-5a5bb6286",
                    icon: <LinkedInIcon />,
                  },
                  {
                    label: text.socials.github,
                    href: "https://github.com/Armando-T-T",
                    icon: <GitHubIcon />,
                  },
                  {
                    label: text.socials.twitter,
                    href: "https://x.com/",
                    icon: <TwitterIcon />,
                  },
                ].map((item) => (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      textDecoration: "none",
                      padding: "14px 16px",
                      borderRadius: 2,
                      backgroundColor: "rgba(15, 23, 42, 0.85)",
                      border: "1px solid rgba(148, 163, 184, 0.15)",
                      color: "var(--text-primary)",
                      transition: "transform 0.2s ease, border 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: "rgba(59, 130, 246, 0.4)",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1.6} alignItems="center">
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 2,
                          backgroundColor: "rgba(59, 130, 246, 0.18)",
                          display: "grid",
                          placeItems: "center",
                          color: "var(--accent)",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>{item.label}</Typography>
                    </Stack>
                    <ArrowOutwardRoundedIcon sx={{ color: "var(--text-muted)" }} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            mt: 6,
            pt: 2.5,
            borderTop: "1px solid rgba(148, 163, 184, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "var(--text-muted)", fontSize: 13 }}>
            {text.footer}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
