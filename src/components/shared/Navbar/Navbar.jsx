"use client";

import { useState } from "react";
import Logo from "./Logo";
import { signOut, useSession } from "@/lib/auth-client";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, pending } = useSession();

  const isLoggedIn = !!session?.user;
  const user = session?.user;

  const router = useRouter();

  const logout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div className="flex-1 md:flex-initial">
          <Logo />
        </div>

        {/* Center: Desktop Links */}
        <nav className="hidden md:block">
          <NavLinks
            className="gap-1 items-center text-slate-300 hover:text-white transition-colors"
            isLoggedIn={isLoggedIn}
          />
        </nav>

        {/* Right: Auth / User Menu & Mobile Trigger */}
        <div className="flex items-center gap-3">
          {pending ? (
            /* Dark Skeleton Loader */
            <div className="w-24 h-9 animate-pulse rounded-full bg-slate-800/80 border border-slate-700/50" />
          ) : (
            <>
              <UserMenu
                isLoggedIn={isLoggedIn}
                user={user}
                onLogout={logout}
              />

              <MobileMenu
                isOpen={mobileMenuOpen}
                setIsOpen={setMobileMenuOpen}
                isLoggedIn={isLoggedIn}
                user={user}
                onLogout={logout}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}