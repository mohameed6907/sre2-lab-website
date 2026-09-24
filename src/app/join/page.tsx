export const metadata = {
  title: "SRE² Lab - Join Us",
  description: "Join SRE² Lab as an undergraduate researcher, Master's student, PhD candidate, or postdoctoral fellow.",
};

export default function JoinUs() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-slate-200 bg-slate-50">
        <div className="container-custom">
          <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
            Opportunities &amp; Careers
          </p>
          <h1 className="font-heading font-extralight text-slate-900 text-4xl sm:text-5xl md:text-6xl tracking-[-0.025em] leading-[0.95]">
            Join <span className="font-bold text-emerald-700">SRE² Lab.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-slate-600 font-body leading-relaxed">
            We are always seeking passionate graduate students, postdoctoral researchers, and motivated undergraduates to join our mission in self-powered electronics and sustainable energy.
          </p>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-slate-600 font-body leading-relaxed">
            We also welcome undergraduate students from SBTÜ and other universities who are eager to gain hands-on research experience, develop their technical skills, and contribute to innovative projects in our field.          </p>
        </div>
      </section>

      {/* ── Details & Roles ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl space-y-16">


          {/* How to Apply */}
          <div className="bg-slate-50 border border-slate-200/90 p-8 rounded-sm">
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
              How to Apply
            </h3>
            <p className="text-sm text-slate-600 font-body leading-relaxed mb-4">
              Prospective applicants should prepare and submit the following application dossier via email to Principal Investigator Dr. Qazi Muhammad Saqib:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600 font-body mb-6">
              <li>Comprehensive Curriculum Vitae (CV) with complete publication list (if applicable).</li>

            </ul>

            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500 font-body">Direct Application Email</p>
                <a
                  href="mailto:qazi.saqib@sivas.edu.tr"
                  className="font-heading font-bold text-base text-emerald-700 hover:text-emerald-800 underline"
                >
                  qazi.saqib@sivas.edu.tr
                </a>
              </div>
              <a
                href="mailto:qazi.saqib@sivas.edu.tr?subject=Application%20for%20SRE%C2%B2%20Lab%20Position"
                className="btn-primary py-2.5 px-6 text-xs"
              >
                Send Application Email &rarr;
              </a>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
