import Link from "next/link";
import Logo from "../Navbar/Logo";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mb-12">
          
          {/* Left: Logo & Description */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              NotePilot AI is your ultimate intelligent workspace. Capture, organize, and expand your ideas with the power of modern artificial intelligence.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-zinc-900 dark:text-white font-semibold tracking-wide uppercase text-sm">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact & Socials */}
          <div className="flex flex-col gap-6">
            <h3 className="text-zinc-900 dark:text-white font-semibold tracking-wide uppercase text-sm">
              Connect With Us
            </h3>
            
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <Mail className="w-4 h-4 text-indigo-500" />
                <a href="mailto:support@notepilot.ai" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  support@notepilot.ai
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <Phone className="w-4 h-4 text-indigo-500" />
                <a href="tel:+18001234567" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  +1 (800) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>San Francisco, CA</span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {currentYear} NotePilot AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-400 dark:text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
