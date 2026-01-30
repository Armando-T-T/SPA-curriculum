import { getDeveloperProfile } from "./developer.service.js";

export const getDeveloper = (_req, res) => {
  const profile = getDeveloperProfile();
  res.json(profile);
};
