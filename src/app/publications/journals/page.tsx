import Link from "next/link";
import { journalArticles } from "@/lib/publicationsData";

export const metadata = {
  title: "SRE² Lab - Selected Articles",
  description: "Peer-reviewed publications authored by Dr. Qazi Muhammad Saqib and SRE² Lab researchers.",
};

export default function JournalArticlesPage() {
  return (
    <>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/publications" className="text-xs font-heading font-bold text-[#00549d] hover:underline">
              Publications
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-xs font-heading text-slate-600 uppercase tracking-wider font-semibold">Selected Articles</span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            Selected <span className="text-[#00549d]">Articles</span>
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50/60">
        <div className="container-custom max-w-5xl space-y-4">
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

              <h2 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00549d] transition-colors"
                >
                  {item.title}
                </a>
              </h2>

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
    </>
  );
}
