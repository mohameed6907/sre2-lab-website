import Link from "next/link";

export const metadata = {
  title: "Blog - SRE² Lab",
  description:
    "Official blogs, dispatches, perspectives, and research stories from SRE² Lab.",
};

export default function BlogPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/"
              className="text-xs font-heading font-bold text-[#00549d] hover:underline"
            >
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-xs font-heading text-slate-600 uppercase tracking-wider font-semibold">
              Blog
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            Research <span className="text-[#00549d]">Blog</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-600 font-body leading-relaxed">
            Perspectives, laboratory dispatches, and research stories from the Sustainability &amp; Renewable Energy Research Laboratory (SRE² Lab).
          </p>
        </div>
      </section>

      {/* ── Content Section ─────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-slate-50/60 min-h-[420px] flex items-center">
        <div className="container-custom max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200/90 shadow-2xs mb-6 text-[#00549d]">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00549d]/10 border border-[#00549d]/20 text-[#00549d] text-xs font-heading font-bold uppercase tracking-wider mb-4">
            SRE² LAB Blogs
          </div>

          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 tracking-tight mb-3">
            Upcoming Dispatches &amp; Stories
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-body">
            Stay tuned! New articles and laboratory updates will be published here soon.
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-heading font-semibold text-slate-600 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00549d] animate-pulse" />
            <span>Upcoming posts in preparation</span>
          </div>
        </div>
      </section>
    </>
  );
}
