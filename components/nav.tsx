"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarNavItem } from "types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-8 pt-12 scroll fixed">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-[16px] font-medium hover:text-[#EF895F] hover:fill-[#EF895F]",
                  // path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                <Icon
                  className={cn(
                    "mr-2 h-4 w-4",
                    path === item.href
                      ? "fill-[#EF895F] hover:fill-[#EF895F]"
                      : ""
                  )}
                />
                <span
                  className={cn(path === item.href ? "text-[#EF895F]" : "")}
                >
                  {item.title}
                </span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
