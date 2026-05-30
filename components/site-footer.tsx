import Link from "next/link";
import { footerLinks, profile, uiCopy } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__statement">
        <p>{profile.footerStatement}</p>
      </div>
      <div className="site-footer__meta">
        <p>{uiCopy.footerColophon}</p>
        <nav className="site-footer__links" aria-label={uiCopy.footerNavigationLabel}>
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href} className="site-footer__link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
