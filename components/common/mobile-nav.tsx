import { Norican } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { profile } from "@/config/profile";
import type { NavigationItem } from "@/config/routes";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: readonly NavigationItem[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();
  const pathname = usePathname();

  return (
    <div
      id="mobile-navigation"
      className={cn(
        "fixed inset-0 top-20 z-50 grid h-[calc(100vh-5rem)] grid-flow-row auto-rows-max overflow-auto bg-background/80 p-6 pb-32 shadow-md backdrop-blur-sm animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(norican.className, "text-2xl")}>
            {profile.fullName}
          </span>
        </Link>
        <nav
          aria-label="Mobile navigation"
          className="grid grid-flow-row auto-rows-max text-sm"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>
  );
}
