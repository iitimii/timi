export type NavigationItem = {
  title: string;
  href: string;
};

export const routesConfig = {
  mainNav: [
    { title: "Projects", href: "/projects" },
    { title: "Experience", href: "/experience" },
    { title: "Publications", href: "/publications" },
    { title: "Skills", href: "/skills" },
    { title: "Contact", href: "/contact" },
  ] satisfies NavigationItem[],
  resume: {
    title: "Resume",
    href: "/documents/timi-owolabi-research-cv.pdf",
  } satisfies NavigationItem,
};
