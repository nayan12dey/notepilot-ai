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
    { label: "Add Note", href: "/add-note" },
    { label: "Manage Notes", href: "/manage-notes" },
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
              className={`relative flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 ${isActive
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40 font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/20"
                }`}
              aria-current={isActive ? "page" : undefined}
            >

              <span className="relative z-10">
                {link.label}
              </span>


              {isActive && (
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                />
              )}

            </Link>

          </li>
        );

      })}
    </ul>
  );
}