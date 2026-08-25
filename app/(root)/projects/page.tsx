import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  } else if (tabVal === "professional") {
    projectArr = projectArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static items-stretch">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const tabItems = [
    {
      value: "all",
      label: "All",
      content: renderContent("all"),
    },
    {
      value: "personal",
      label: "Personal",
      content: renderContent("personal"),
    },
    {
      value: "professional",
      label: "Professional",
      content: renderContent("professional"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <Link
        href="/research"
        className="mb-6 flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted"
      >
        <Icons.post className="h-4 w-4 flex-shrink-0" />
        <span>
          Looking for my peer-reviewed work? See my{" "}
          <span className="font-medium text-foreground underline underline-offset-4">
            research publications
          </span>
          .
        </span>
      </Link>
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
