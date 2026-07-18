export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-4">
        Contact Us
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
        Have questions? Reach out to us at <span className="text-indigo-600 dark:text-indigo-400 font-semibold">support@notepilot.ai</span> and our team will get right back to you.
      </p>
    </div>
  );
}
