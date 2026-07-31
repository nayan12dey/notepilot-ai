"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";
import { LayoutDashboard, LogOut, User, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";

export default function MobileMenu({ isOpen, setIsOpen, isLoggedIn, user, onLogout }) {
  const pathname = usePathname();

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
        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 z-50 cursor-pointer border border-slate-800"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <div className="relative w-5 h-4">
          <span
            className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
          />
          <span
            className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out top-1.5 ${isOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
          />
          <span
            className={`absolute block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
          />
        </div>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sliding Menu Panel - Deep Dark Glassmorphism */}
      <div
        className={`fixed top-[65px] right-0 left-0 bottom-0 z-50 bg-slate-950/95 backdrop-blur-2xl shadow-2xl border-t border-slate-800/80 flex flex-col px-6 py-6 md:hidden transition-all duration-300 ease-out origin-top ${isOpen
            ? "translate-y-0 opacity-100 scale-y-100"
            : "-translate-y-4 opacity-0 scale-y-95 pointer-events-none"
          }`}
      >
        {/* Navigation Links (Vertical List) */}
        <div className="flex flex-col gap-4">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-4">
            Navigation
          </p>

          {/* NavLinks Wrapper - Dark Mode Overrides */}
          <div className="flex flex-col w-full text-slate-300 font-semibold text-sm items-stretch gap-1
            [&_a]:w-full [&_a]:px-4 [&_a]:py-3 [&_a]:rounded-xl [&_a]:transition-colors
            [&_a]:bg-slate-900/40 [&_a]:border [&_a]:border-slate-800/50 [&_a]:text-slate-300
            [&_a[aria-current='page']]:bg-cyan-950/50 [&_a[aria-current='page']]:border-cyan-500/30 [&_a[aria-current='page']]:text-cyan-300 [&_a[aria-current='page']]:font-bold"
          >
            <NavLinks
              className="flex-col items-stretch gap-1 w-full"
              onItemClick={() => setIsOpen(false)}
              isLoggedIn={isLoggedIn}
              currentPathname={pathname}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/80 my-6" />

        {/* User Account / Auth Actions */}
        <div className="flex flex-col gap-6 mt-auto mb-12">
          {!isLoggedIn ? (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold rounded-xl transition-all duration-200 text-center ${pathname === "/login"
                    ? "bg-slate-900 text-cyan-300 border border-cyan-500/40"
                    : "bg-slate-900/60 text-slate-300 hover:text-white border border-slate-800"
                  }`}
              >
                <LogIn className="w-4 h-4 text-cyan-400" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 rounded-xl shadow-lg shadow-indigo-500/20 transition-all duration-200 text-center border border-white/10"
              >
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {/* Signed-in User Info - Dark Card */}
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl shadow-sm">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700/80 bg-slate-950 flex-shrink-0">
                  <Image
                    src={user?.image || "https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"}
                    fill
                    sizes="40px"
                    className="object-cover"
                    alt={user?.name || "User Avatar"}
                  />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-slate-100 truncate">
                    {user?.name || "Jane Doe"}
                  </span>
                  <span className="text-xs text-slate-400 truncate">
                    {user?.email || "jane.doe@example.com"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-1">
                {/* <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150 ${pathname === "/dashboard"
                      ? "bg-cyan-950/40 text-cyan-300 font-bold border border-cyan-500/30"
                      : "text-slate-300 hover:bg-slate-900/60 hover:text-white"
                    }`}
                >
                  <LayoutDashboard className="w-4.5 h-4.5" />
                  <span>Dashboard</span>
                </Link> */}
                <Link
                  href="/ai-generator"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150 ${pathname === "/ai-generator"
                      ? "bg-cyan-950/40 text-cyan-300 font-bold border border-cyan-500/30"
                      : "text-slate-300 hover:bg-slate-900/60 hover:text-white"
                    }`}
                >
                  <User className="w-4.5 h-4.5 text-slate-400" />
                  <span>AI Generator</span>
                </Link>
                <button
                  onClick={async () => {
                    setIsOpen(false);
                    await onLogout();
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-400 hover:bg-red-950/30 hover:text-red-300 rounded-xl transition-colors duration-150 text-left w-full cursor-pointer"
                >
                  <LogOut className="w-4.5 h-4.5 text-red-400/80" />
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