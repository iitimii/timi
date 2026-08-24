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
  const start = formatter.format(new Date(startDate));
  const end =
    endDate === "Present" ? endDate : formatter.format(new Date(endDate));

  return `${start} - ${end}`;
}
