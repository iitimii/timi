import { FileText, Github, GraduationCap, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { profile } from "@/data/portfolio";

function XIcon({ size = 18, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L5.5 22H2.3l7.3-8.5L.8 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
    </svg>
  );
}

const socialLinks: Array<{
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon | typeof XIcon;
  dock?: boolean;
}> = [
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    dock: true,
  },
  { label: "X", handle: "@iitiimii", href: profile.x, icon: XIcon },
  { label: "LinkedIn", handle: "timi-owolabi", href: profile.linkedin, icon: Linkedin, dock: true },
  { label: "GitHub", handle: "iitimii", href: profile.github, icon: Github, dock: true },
  { label: "Google Scholar", handle: "Google Scholar", href: profile.scholar, icon: GraduationCap },
  { label: "Full CV", handle: "Download CV", href: profile.cv, icon: FileText },
];

export function SocialLinks({
  variant = "text",
}: {
  variant?: "text" | "icons" | "dock" | "menu";
}) {
  const iconOnly = variant === "icons" || variant === "dock";
  return (
    <div
      className={`social-links social-links--${variant}`}
      aria-label="Contact and social profiles"
    >
      {socialLinks.map(({ label, handle, href, icon: Icon, dock }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={iconOnly ? `${label}${label === "Full CV" ? "" : `: ${handle}`}` : undefined}
          title={iconOnly ? `${label} · ${handle}` : undefined}
          className={variant === "dock" && !dock ? "dock-secondary-social" : undefined}
        >
          <Icon size={variant === "icons" ? 19 : 17} aria-hidden="true" />
          {iconOnly ? null : <span>{handle}</span>}
        </a>
      ))}
    </div>
  );
}
