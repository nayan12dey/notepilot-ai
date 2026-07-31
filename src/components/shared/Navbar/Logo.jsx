import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2.5 group focus:outline-none"
      aria-label="NotePilot AI Home"
    >
      {/* Brand Icon (Stylized Winged Notebook + Sparkle) */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300 group-hover:scale-105 border border-white/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5.5 h-5.5 text-white group-hover:rotate-3 transition-transform duration-300 drop-shadow"
        >
          {/* Main Notebook Spine & Wings */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>

        {/* Sparkle overlay for AI */}
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-300 items-center justify-center shadow-sm shadow-cyan-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-2.5 h-2.5 text-slate-950"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          </span>
        </span>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-white leading-none group-hover:text-cyan-300 transition-colors duration-200">
          NotePilot
        </span>
        <span className="text-[10px] font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 uppercase leading-none mt-1">
          AI Assistant
        </span>
      </div>
    </Link>
  );
}