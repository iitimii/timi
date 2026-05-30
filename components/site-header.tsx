import Link from "next/link";
import { navigation, profile, siteMetadata, uiCopy } from "@/data/profile";

export function SiteHeader() {
  return (
    <header className="site-banner">
      <a className="skip-link" href={`#${siteMetadata.mainId}`}>
        {uiCopy.skipLink}
      </a>
      <div className="site-banner__inner">
        <Link className="site-banner__mark" href="/">
          <span className="site-banner__slash" aria-hidden="true">
            {uiCopy.brandSlash}
          </span>
          <span className="site-banner__name">{profile.fullName}</span>
        </Link>
        <nav className="site-banner__nav" aria-label={uiCopy.primaryNavigationLabel}>
          {navigation.map((item) => (
            <Link className="site-banner__link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
