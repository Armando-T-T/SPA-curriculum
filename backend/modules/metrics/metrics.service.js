import Visit from "../visit/visit.model.js";
import Contact from "../contact/contact.model.js";

export const getMetricsSummary = async (section = "cv") => {
  const visits = await Visit.countDocuments({ section });
  const countriesList = await Visit.distinct("country", {
    section,
    country: { $ne: "Unknown" },
  });
  const countries = countriesList.filter(Boolean).length;
  const recruiters = await Contact.countDocuments();

  return {
    section,
    visits,
    countries,
    recruiters,
    message: `Mi CV ha sido visitado ${visits} veces, desde ${countries} paises, ${recruiters} reclutadores me escribieron`,
  };
};
