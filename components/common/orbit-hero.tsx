import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface OrbitItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

interface OrbitHeroProps {
  profileImage: StaticImageData;
  profileAlt: string;
  /** First `innerCount` items ride the inner ring; the rest ride the outer one. */
  items: OrbitItem[];
  innerCount?: number;
}

interface RingProps {
  items: OrbitItem[];
  /** Distance from the centre, as a percentage of the container's width. */
  radiusPct: number;
  durationSeconds: number;
  reverse?: boolean;
  thumbClass: string;
}

/**
 * One ring of thumbnails.
 *
 * The ring element spins; each thumbnail spins the opposite way at the same
 * rate so the artwork stays upright rather than tumbling. A negative
 * animation-delay starts that counter-spin part-way through its cycle, which
 * is what cancels the thumbnail's own starting angle on the ring.
 */
function Ring({
  items,
  radiusPct,
  durationSeconds,
  reverse = false,
  thumbClass,
}: RingProps) {
  const inset = 50 - radiusPct;

  return (
    <div
      className="orbit-ring absolute inset-0 group-hover:[animation-play-state:paused]"
      style={{
        animationName: reverse ? "orbit-reverse" : "orbit",
        animationDuration: `${durationSeconds}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        const counterDelay = reverse
          ? (angle / 360 - 1) * durationSeconds
          : -(angle / 360) * durationSeconds;

        return (
          <div
            key={item.id}
            className="absolute"
            style={{
              inset: `${inset}%`,
              transform: `rotate(${angle}deg)`,
            }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div
                className="orbit-counter group-hover:[animation-play-state:paused]"
                style={{
                  animationName: reverse ? "orbit" : "orbit-reverse",
                  animationDuration: `${durationSeconds}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay: `${counterDelay}s`,
                }}
              >
                <Link
                  href={item.href}
                  aria-label={item.title}
                  className="group/item relative block"
                >
                  <span
                    className={`block overflow-hidden rounded-full border border-border bg-muted shadow-lg ring-0 ring-primary/40 transition-all duration-300 group-hover/item:scale-125 group-hover/item:ring-4 ${thumbClass}`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </span>
                  <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover/item:opacity-100 md:block">
                    {item.title}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function OrbitHero({
  profileImage,
  profileAlt,
  items,
  innerCount = 6,
}: OrbitHeroProps) {
  const inner = items.slice(0, innerCount);
  const outer = items.slice(innerCount);

  return (
    <div className="group relative aspect-square w-[min(88vw,20rem)] sm:w-[min(76vw,24rem)] lg:w-[28rem]">
      {/* Faint guide rings, so the layout reads as orbits rather than scatter. */}
      <div
        className="pointer-events-none absolute rounded-full border border-border/40"
        style={{ inset: "22%" }}
      />
      <div
        className="pointer-events-none absolute rounded-full border border-border/25"
        style={{ inset: "8%" }}
      />

      <Ring
        items={inner}
        radiusPct={28}
        durationSeconds={48}
        thumbClass="relative h-9 w-9 sm:h-11 sm:w-11 lg:h-[3.25rem] lg:w-[3.25rem]"
      />
      <Ring
        items={outer}
        radiusPct={42}
        durationSeconds={72}
        reverse
        thumbClass="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
      />

      <div className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src={profileImage}
          alt={profileAlt}
          fill
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 170px"
          className="rounded-full border-8 border-primary bg-primary object-cover"
          priority
        />
      </div>
    </div>
  );
}
