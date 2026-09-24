import Link from "next/link";
import { patents } from "@/lib/publicationsData";

export const metadata = {
  title: "SRE² Lab - Patents & IP",
  description: "Intellectual property and device patents authored by Dr. Qazi Muhammad Saqib and colleagues.",
};

export default function PatentsPage() {
  return (
    <>
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/publications" className="text-xs font-heading font-bold text-[#00549d] hover:underline">
              Publications
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-xs font-heading text-slate-600 uppercase tracking-wider font-semibold">Patents &amp; IP</span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            Patents &amp; <span className="text-[#00549d]">Intellectual Property</span>
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-slate-50/60">
        <div className="container-custom max-w-5xl space-y-4">
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

              <h2 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                {item.title}
              </h2>

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
    </>
  );
}
