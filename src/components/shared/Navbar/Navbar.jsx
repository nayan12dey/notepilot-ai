"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn=true, user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 dark:border-zinc-800/40 bg-white/70 dark:bg-black/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div className="flex-1 md:flex-initial">
          <Logo />
        </div>

        {/* Center: Desktop Links */}
        <nav className="hidden md:block">
          <NavLinks className="gap-1 items-center" />
        </nav>

        {/* Right: Auth / User Menu & Mobile Trigger */}
        <div className="flex items-center gap-3">
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
        </div>
      </div>
    </header>
  );
}
