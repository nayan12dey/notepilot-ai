"use client";

import { useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { LayoutDashboard, LogOut, User, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";

export default function MobileMenu({ isOpen, setIsOpen, isLoggedIn, user, onLogout }) {
  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-9 h-9 flex flex-col justify-center items-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 rounded-xl hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 z-50 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-5 h-4.5">
          <span
            className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "top-2.25 rotate-45" : "top-0.5"
              }`}
          />
          <span
            className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out top-2.25 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
          />
          <span
            className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "top-2.25 -rotate-45" : "top-4"
              }`}
          />
        </div>
      </button>

      {/* Backdrop (Darkened and Blur) */}
      <div
        className={`fixed inset-0 top-[65px] bg-zinc-950/20 dark:bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sliding Menu Panel */}
      <div
        className={`fixed top-[65px] right-0 left-0 bottom-0 z-45 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-100 dark:border-zinc-900 shadow-2xl flex flex-col px-6 py-8 md:hidden transition-all duration-300 ease-out origin-top ${isOpen
          ? "translate-y-0 opacity-100 scale-y-100"
          : "-translate-y-4 opacity-0 scale-y-95 pointer-events-none"
          }`}
      >
        {/* Navigation Links (Vertical List) */}
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest px-4">
            Navigation
          </p>
          <NavLinks
            className="flex-col items-stretch gap-2.5 w-full"
            onItemClick={() => setIsOpen(false)}
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-200/50 dark:bg-zinc-800/50 my-6" />

        {/* User Account / Auth Actions */}
        <div className="flex flex-col gap-6 mt-auto mb-16">
          {!isLoggedIn ? (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100/70 hover:bg-zinc-100 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 rounded-full transition-all duration-300 text-center"
              >
                <LogIn className="w-4 h-4 text-zinc-500" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-full shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 text-center"
              >
                <UserPlus className="w-4 h-4 text-white/90" />
                <span>Register</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Signed-in User Info */}
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl border border-zinc-100 dark:border-zinc-900">
                <Image
                  src={user?.image || "https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"}
                  width={40}
                  height={40}
                  alt={user?.name}
                />
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate">
                    {user?.name || "Jane Doe"}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                    {user?.email || "jane.doe@example.com"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 transition-all duration-300"
                >
                  <LayoutDashboard className="w-4.5 h-4.5 text-zinc-400 dark:text-zinc-500" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 transition-all duration-300"
                >
                  <User className="w-4.5 h-4.5 text-zinc-400 dark:text-zinc-500" />
                  <span>My Profile</span>
                </Link>
                <button
                  onClick={async () => {
                    setIsOpen(false);
                    await onLogout();
                  }}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/10 rounded-2xl border border-red-100/50 dark:border-red-950/20 transition-all duration-300 text-left cursor-pointer"
                >
                  <LogOut className="w-4.5 h-4.5 text-red-500/80" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
