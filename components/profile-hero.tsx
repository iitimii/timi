import Image from "next/image";
import type { Profile } from "@/data/types";

type ProfileHeroProps = {
  profile: Profile;
};

export function ProfileHero({ profile }: ProfileHeroProps) {
  return (
    <section className="profile-hero" aria-labelledby={profile.hero.headingId}>
      <div className="profile-hero__copy">
        <p className="profile-hero__eyebrow">{profile.hero.eyebrow}</p>
        <h1 className="profile-hero__title" id={profile.hero.headingId}>
          <span>{profile.firstName}</span>
          <span>{profile.surname}</span>
        </h1>
        <p className="profile-hero__bio">{profile.longBio}</p>
        <div className="profile-links" aria-label={profile.linksLabel}>
          {profile.links.map((link) => (
            <a
              className="profile-links__item"
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              download={link.download}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <figure className="profile-hero__figure">
        <Image
          src={profile.image.src}
          alt={profile.image.alt}
          width={profile.image.width}
          height={profile.image.height}
          className="profile-hero__image"
        />
        <figcaption className="profile-hero__caption">{profile.image.caption}</figcaption>
      </figure>
    </section>
  );
}
