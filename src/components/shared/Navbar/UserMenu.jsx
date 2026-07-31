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
        <Link href="/login">
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-white font-medium px-4 py-2 hover:bg-slate-800/60 rounded-full text-sm transition-all duration-300 cursor-pointer"
          >
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button
            className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-medium px-5 py-2.5 rounded-full text-sm hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all duration-300 cursor-pointer border border-white/10"
          >
            Register
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Dashboard link (Desktop only) */}
      {/* <Button
        as={Link}
        href="/dashboard"
        variant="ghost"
        className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white font-medium px-4 py-2 hover:bg-slate-800/60 rounded-full text-sm transition-all duration-300 cursor-pointer"
      >
        <LayoutDashboard className="w-4.5 h-4.5 text-slate-400" />
        Dashboard
      </Button> */}

      {/* Avatar Dropdown using HeroUI v3 Named Components */}
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <button
            className="flex items-center justify-center rounded-full p-0.5 border border-slate-800 hover:border-cyan-500/60 focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Open user menu"
          >
            <Avatar
              isBordered={false}
              className="w-8.5 h-8.5 transition-transform"
              src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
              name={user?.name || "User"}
            />
          </button>
        </DropdownTrigger>

        <DropdownPopover className="border border-slate-800/80 bg-slate-950/95 backdrop-blur-xl shadow-2xl rounded-2xl min-w-[240px] p-1.5">
          <DropdownMenu aria-label="User actions" className="w-full">
            {/* User Profile Header Item */}
            <DropdownItem id="user-info" textValue={`Signed in as ${user?.email}`} className="px-3 py-2.5 rounded-xl border-b border-slate-800/80 mb-1 hover:bg-transparent pointer-events-none">
              <div className="flex flex-col gap-0.5">
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Signed in as</p>
                <p className="text-sm font-semibold text-slate-100 truncate">{user?.name || "User"}</p>
                <p className="text-xs text-slate-400 truncate">{user?.email || "user@example.com"}</p>
              </div>
            </DropdownItem>

            <DropdownItem id="profile" textValue="Profile" className="px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200">
              <Link href="/ai-generator" className="flex items-center gap-2 w-full text-slate-300 hover:text-white">
                <User className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium cursor-pointer">AI Generator</span>
              </Link>
            </DropdownItem>

            <DropdownItem id="dashboard-mobile" textValue="Dashboard" className="md:hidden px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200">
              <Link href="/dashboard" className="flex items-center gap-2 w-full text-slate-300 hover:text-white">
                <LayoutDashboard className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium cursor-pointer">Dashboard</span>
              </Link>
            </DropdownItem>

            <DropdownItem
              id="logout"
              textValue="Logout"
              className="px-3 py-2 rounded-lg hover:bg-red-950/30 text-red-400 hover:text-red-300 transition-colors duration-200"
              onClick={onLogout}
            >
              <div className="flex items-center gap-2 w-full cursor-pointer">
                <LogOut className="w-4 h-4 text-red-400/80" />
                <span className="text-sm font-medium cursor-pointer">Log Out</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </DropdownPopover>
      </Dropdown>
    </div>
  );
}

