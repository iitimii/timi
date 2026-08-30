import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@iitimii",
    icon: Icons.gitHub,
    link: "https://github.com/iitimii",
  },
  {
    name: "LinkedIn",
    username: "Timi Owolabi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/timi-owolabi/",
  },
  {
    name: "Twitter",
    username: "@iitiimii",
    icon: Icons.twitter,
    link: "https://x.com/iitiimii",
  },
  {
    name: "Gmail",
    username: "timiiowolabi",
    icon: Icons.gmail,
    link: "mailto:timiiowolabi@gmail.com",
  },
];

/**
 * Icon row in the site header, in display order. Rendered beside the theme
 * toggle, so keep this short — the footer carries the fuller social list.
 */
export const headerLinks: SocialInterface[] = [
  {
    name: "Resume",
    username: "Resume",
    icon: Icons.post,
    link: "/resume",
  },
  {
    name: "Email",
    username: "timiiowolabi",
    icon: Icons.gmail,
    link: "mailto:timiiowolabi@gmail.com",
  },
  {
    name: "LinkedIn",
    username: "Timi Owolabi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/timi-owolabi/",
  },
  {
    name: "X",
    username: "@iitiimii",
    icon: Icons.twitter,
    link: "https://x.com/iitiimii",
  },
  {
    name: "Google Scholar",
    username: "Timi Owolabi",
    icon: Icons.scholar,
    link: "https://scholar.google.com/citations?user=mJOLhAcAAAAJ&hl=en",
  },
  {
    name: "Github",
    username: "@iitimii",
    icon: Icons.gitHub,
    link: "https://github.com/iitimii",
  },
];
