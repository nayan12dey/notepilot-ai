"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({
  className = "",
  onItemClick,
  isLoggedIn = false
}) {
  const pathname = usePathname();

  const publicLinks = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "/explore" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const privateLinks = [
    { label: "Add Note", href: "/note/add" },
    { label: "Manage Notes", href: "/note/manage" },
  ];

  const links = isLoggedIn
    ? [...publicLinks, ...privateLinks]
    : publicLinks;

  return (
    <ul className={`flex ${className}`}>
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            key={link.href}
            className="list-none"
          >
            <Link
              href={link.href}
              onClick={onItemClick}
              className={`relative flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 ${
                isActive
                  ? "text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 font-semibold shadow-sm shadow-cyan-500/10"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/60"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="relative z-10">
                {link.label}
              </span>

              {isActive && (
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}