import Link from "next/link";
import { books } from "@/lib/publicationsData";

export const metadata = {
  title: "SRE² Lab - Books & Chapters",
  description: "Academic books and scholarly book chapters authored by Dr. Qazi Muhammad Saqib and colleagues.",
};

export default function BooksPage() {
  return (
    <>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/publications" className="text-xs font-heading font-bold text-[#00549d] hover:underline">
              Publications
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-xs font-heading text-slate-600 uppercase tracking-wider font-semibold">Books &amp; Chapters</span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            Books &amp; <span className="text-[#00549d]">Chapters</span>
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50/60">
        <div className="container-custom max-w-5xl space-y-4">
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

              <h2 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                {item.title}
              </h2>

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
    </>
  );
}
