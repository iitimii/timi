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
    username: "timilehin.owolabi",
    icon: Icons.gmail,
    link: "mailto:timilehin.owolabi@stu.cu.edu.ng",
  },
];
