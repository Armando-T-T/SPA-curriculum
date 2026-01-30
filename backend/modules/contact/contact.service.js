import Contact from "./contact.model.js";

export const saveContact = async ({ name, email, subject, message, ip }) => {
  const contact = await Contact.create({
    name,
    email,
    subject,
    message,
    ip,
  });

  return contact;
};

export const countRecentByIp = async (ip, hours = 24) => {
  const since = new Date(Date.now() - hours * 60 * 60 * 1000);
  const count = await Contact.countDocuments({ ip, createdAt: { $gte: since } });
  return count;
};
