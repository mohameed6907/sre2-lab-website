import Link from "next/link";
import {
  journalArticles,
  conferencePapers,
  patents,
  books,
} from "@/lib/publicationsData";

export const metadata = {
  title: "SRE² Lab - Publications",
  description:
    "Complete scientific publications record of Dr. Qazi Muhammad Saqib, including peer-reviewed articles, conference papers, patents, and books.",
};

const navTabs = [
  { name: `All (${journalArticles.length + conferencePapers.length + patents.length + books.length})`, href: "/publications" },
  { name: `Selected Articles (${journalArticles.length})`, href: "/publications/journals" },
  { name: `Conference Papers (${conferencePapers.length})`, href: "/publications/conferences" },
  { name: `Patents (${patents.length})`, href: "/publications/patents" },
  { name: `Books & Chapters (${books.length})`, href: "/publications/books" },
];

export default function PublicationsPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00549d]/10 border border-[#00549d]/20 mb-4">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#00549d]">
              Scholarly Output &bull; Complete Record
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05]">
            Scientific <span className="text-[#00549d]">Publications</span>
          </h1>

          {/* Sub-navigation tabs */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200">
            {navTabs.map((tab, idx) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-bold transition-all ${
                  idx === 0
                    ? "bg-[#00549d] text-white shadow-xs"
                    : "bg-white text-slate-800 border border-slate-200 hover:border-[#00549d]/50 hover:text-[#00549d] hover:bg-slate-50"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publications Sections ───────────────────────────── */}
      <div className="py-14 sm:py-20 bg-slate-50/60 space-y-16">
        <div className="container-custom max-w-5xl space-y-16">
          {/* 1. Selected Articles */}
          <section id="journals" className="scroll-mt-32">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Selected Articles
              </h2>
              <Link
                href="/publications/journals"
                className="text-xs font-heading font-bold text-[#00549d] hover:text-[#003366] transition-colors uppercase tracking-wider"
              >
                View all ({journalArticles.length}) &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {journalArticles.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 hover:border-[#00549d]/50 hover:shadow-md transition-all flex flex-col gap-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#00549d] text-white text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-medium">
                        #{String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {item.citations && (
                      <a
                        href={item.citationsUrl || item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-amber-50 hover:bg-amber-100 border border-amber-200/90 text-amber-900 text-xs font-heading font-semibold px-2.5 py-0.5 rounded-full transition-colors"
                        title="View citations on Google Scholar"
                      >
                        <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        Cited by {item.citations}
                      </a>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00549d] transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Authors:</strong> {item.authors}
                  </p>

                  {item.venue && (
                    <p className="text-xs sm:text-sm font-heading font-semibold text-[#00549d] italic">
                      {item.venue}
                    </p>
                  )}

                  {item.url && (
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-3">
                      {item.citations ? (
                        <a
                          href={item.citationsUrl || item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-heading font-medium text-slate-500 hover:text-[#00549d] transition-colors"
                        >
                          Citations: {item.citations}
                        </a>
                      ) : <span />}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                      >
                        <span>View Publication</span>
                        <span>&nearr;</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 2. Conference Papers */}
          <section id="conferences" className="scroll-mt-32">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Conference Proceedings
              </h2>
              <Link
                href="/publications/conferences"
                className="text-xs font-heading font-bold text-[#00549d] hover:text-[#003366] transition-colors uppercase tracking-wider"
              >
                View all ({conferencePapers.length}) &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {conferencePapers.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 hover:border-[#00549d]/50 hover:shadow-md transition-all flex flex-col gap-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-sky-700 text-white text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Conference &bull; {item.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Authors:</strong> {item.authors}
                  </p>

                  <p className="text-xs sm:text-sm font-heading font-semibold text-[#00549d] italic">
                    {item.venue}
                  </p>

                  {item.url && (
                    <div className="pt-2.5 border-t border-slate-100 flex justify-end">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        <span>Conference Details</span>
                        <span>&nearr;</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 3. Patents */}
          <section id="patents" className="scroll-mt-32">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Patents &amp; Intellectual Property
              </h2>
              <Link
                href="/publications/patents"
                className="text-xs font-heading font-bold text-[#00549d] hover:text-[#003366] transition-colors uppercase tracking-wider"
              >
                View all ({patents.length}) &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {patents.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 hover:border-[#00549d]/50 hover:shadow-md transition-all flex flex-col gap-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-amber-600 text-white text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Patent &bull; {item.year}
                    </span>
                    {item.patentNumber && (
                      <span className="text-xs font-mono text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        {item.patentNumber}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Inventors:</strong> {item.authors}
                  </p>

                  <p className="text-xs sm:text-sm font-heading font-semibold text-[#00549d] italic">
                    {item.venue}
                  </p>

                  {item.url && (
                    <div className="pt-2.5 border-t border-slate-100 flex justify-end">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        <span>Search Patent</span>
                        <span>&nearr;</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 4. Books */}
          <section id="books" className="scroll-mt-32">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                Books &amp; Book Chapters
              </h2>
              <Link
                href="/publications/books"
                className="text-xs font-heading font-bold text-[#00549d] hover:text-[#003366] transition-colors uppercase tracking-wider"
              >
                View all ({books.length}) &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {books.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 sm:p-6 hover:border-[#00549d]/50 hover:shadow-md transition-all flex flex-col gap-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-indigo-700 text-white text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Chapter &bull; {item.year}
                    </span>
                    {item.doi && (
                      <span className="font-mono text-xs text-slate-500">
                        DOI: <span className="text-slate-700">{item.doi}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed">
                    <strong className="text-slate-900 font-semibold">Authors:</strong> {item.authors}
                  </p>

                  <p className="text-xs sm:text-sm font-heading font-semibold text-[#00549d] italic">
                    {item.venue}
                  </p>

                  {(item.doi || item.url) && (
                    <div className="pt-2.5 border-t border-slate-100 flex justify-end">
                      <a
                        href={item.url || `https://doi.org/${item.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors ml-auto"
                      >
                        <span>Read Chapter</span>
                        <span>&nearr;</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
