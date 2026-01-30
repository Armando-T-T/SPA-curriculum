import Visit from "./visit.model.js";

const parseBrowser = (ua) => {
  if (!ua) return "Unknown";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("Chrome/")) return "Chrome";
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("Safari/") && !ua.includes("Chrome/")) return "Safari";
  return "Other";
};

const parseOS = (ua) => {
  if (!ua) return "Unknown OS";
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac OS X")) return "macOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iPhone") || ua.includes("iPad")) return "iOS";
  if (ua.includes("Linux")) return "Linux";
  return "Other OS";
};

export const simplifyUserAgent = (raw) => {
  if (!raw) return "Unknown";
  const browser = parseBrowser(raw);
  const os = parseOS(raw);
  return `${browser} on ${os}`;
};

export const hasRecentVisit = async (deviceId, hours = 6) => {
  const since = new Date(Date.now() - hours * 60 * 60 * 1000);
  const recent = await Visit.findOne({
    deviceId,
    createdAt: { $gte: since },
  }).lean();
  return Boolean(recent);
};

export const createVisit = async ({ section, userAgent, country, deviceId }) => {
  const visit = await Visit.create({
    section,
    userAgent,
    country: country || "Unknown",
    deviceId,
  });
  return visit;
};
