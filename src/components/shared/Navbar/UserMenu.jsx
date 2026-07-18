"use client";

import Link from "next/link";
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownPopover, 
  DropdownMenu, 
  DropdownItem, 
  Avatar, 
  Button 
} from "@heroui/react";
import { LayoutDashboard, LogOut, User } from "lucide-react";

export default function UserMenu({ isLoggedIn, user, onLogout }) {
  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-2.5">
        <Button
          as={Link}
          href="/login"
          variant="ghost"
          className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 font-medium px-4 py-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30 rounded-full text-sm transition-all duration-300 cursor-pointer"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          className="bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700 text-white font-medium px-5 py-2.5 rounded-full text-sm hover:from-violet-500 hover:to-indigo-600 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all duration-300 cursor-pointer"
        >
          Register
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Dashboard link (Desktop only) */}
      <Button
        as={Link}
        href="/dashboard"
        variant="ghost"
        className="hidden md:flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 font-medium px-4 py-2 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30 rounded-full text-sm transition-all duration-300 cursor-pointer"
      >
        <LayoutDashboard className="w-4.5 h-4.5" />
        Dashboard
      </Button>

      {/* Avatar Dropdown using HeroUI v3 Named Components */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <button 
            className="flex items-center justify-center rounded-full p-0.5 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500 dark:hover:border-indigo-400 focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Open user menu"
          >
            <Avatar
              isBordered={false}
              className="w-8.5 h-8.5 transition-transform"
              src={user?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"}
              name={user?.name || "User"}
            />
          </button>
        </DropdownTrigger>

        <DropdownPopover className="border border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-xl rounded-2xl min-w-[240px] p-1.5">
          <DropdownMenu aria-label="User actions" className="w-full">
            {/* User Profile Header Item */}
            <DropdownItem id="user-info" textValue={`Signed in as ${user?.email}`} className="px-3 py-2.5 rounded-xl border-b border-zinc-100 dark:border-zinc-800/60 mb-1 hover:bg-transparent pointer-events-none">
              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Signed in as</p>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">{user?.name || "Jane Doe"}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{user?.email || "jane.doe@example.com"}</p>
              </div>
            </DropdownItem>

            <DropdownItem id="profile" textValue="Profile" className="px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/40 transition-colors duration-200">
              <Link href="/profile" className="flex items-center gap-2 w-full text-zinc-700 dark:text-zinc-300">
                <User className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <span className="text-sm font-medium cursor-pointer">My Profile</span>
              </Link>
            </DropdownItem>

            <DropdownItem id="dashboard-mobile" textValue="Dashboard" className="md:hidden px-3 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/40 transition-colors duration-200">
              <Link href="/dashboard" className="flex items-center gap-2 w-full text-zinc-700 dark:text-zinc-300">
                <LayoutDashboard className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                <span className="text-sm font-medium cursor-pointer">Dashboard</span>
              </Link>
            </DropdownItem>

            <DropdownItem 
              id="logout" 
              textValue="Logout"
              className="px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors duration-200"
              onClick={onLogout}
            >
              <div className="flex items-center gap-2 w-full cursor-pointer">
                <LogOut className="w-4 h-4 text-red-500/80" />
                <span className="text-sm font-medium cursor-pointer">Log Out</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </DropdownPopover>
      </Dropdown>
    </div>
  );
}
