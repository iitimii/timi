import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "-40px 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-14 sm:py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="mb-8 flex items-baseline gap-3 sm:mb-10 sm:gap-4">
            <span className="font-mono text-xs text-accent">{index}</span>
            <h2 className="font-mono text-lg font-semibold tracking-tight text-foreground sm:text-xl md:text-2xl">
              {title}
            </h2>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm border border-border bg-surface-raised px-2.5 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}
