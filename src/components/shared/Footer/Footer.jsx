import Link from "next/link";
import Logo from "../Navbar/Logo";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Dark Cyber Theme Container
    <footer className="relative w-full bg-slate-950 text-slate-100 border-t border-slate-800/80 pt-16 pb-8 overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-12">

          {/* Left: Logo & Description */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              NotePilot AI is your ultimate intelligent workspace. Capture, organize, and expand your ideas with the power of modern artificial intelligence.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-slate-200 font-bold tracking-wider uppercase text-xs">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact & Socials */}
          <div className="flex flex-col gap-6">
            <h3 className="text-slate-200 font-bold tracking-wider uppercase text-xs">
              Connect With Us
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:support@notepilot.ai" className="hover:text-cyan-400 transition-colors duration-200">
                  support@notepilot.ai
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+18001234567" className="hover:text-cyan-400 transition-colors duration-200">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>San Francisco, CA</span>
              </li>
            </ul>

            {/* Social Icons Container */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:bg-cyan-950/50 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:bg-cyan-950/50 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:bg-cyan-950/50 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-400">
          <p>
            &copy; {currentYear} NotePilot AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}