import { experiences } from "@/config/experience";
import { projects } from "@/config/projects";

export const getProject = (id: string) =>
  projects.find((item) => item.id === id);

export const getExperience = (id: string) =>
  experiences.find((item) => item.id === id);

export function formatDateRange(startDate: string, endDate: string) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const formatPortfolioDate = (value: string) => {
    if (
      /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}$/.test(
        value
      )
    ) {
      return value;
    }

    const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? new Date(`${value}T00:00:00Z`)
      : new Date(value);

    return formatter.format(date);
  };

  const start = formatPortfolioDate(startDate);
  const end =
    endDate === "Present" ? endDate : formatPortfolioDate(endDate);

  return `${start} - ${end}`;
}
