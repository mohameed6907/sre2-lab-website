import { teamData } from "@/lib/info_helper.server";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SRE² Lab - Research Team",
  description:
    "Meet the researchers, engineers, and scientists behind the SRE² Lab (Sustainability & Renewable Energy Research Laboratory).",
};

export default function Team() {
  // Separate Principal Investigator from the rest of the team
  const pi = teamData.find(m => m.id === 1 || m.role.toLowerCase().includes("principal investigator") || m.role.toLowerCase().includes("director"));
  const members = teamData.filter(m => m.id !== (pi?.id || 1));

  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-slate-200 bg-white">
        <div className="container-custom fade-up">
          <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
            People
          </p>
          <h1 className="font-heading font-extralight text-slate-900 text-4xl sm:text-5xl md:text-6xl tracking-[-0.025em] leading-[0.95]">
            Research <span className="font-bold text-emerald-700">Team.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-slate-600 font-body leading-relaxed">
            Meet the researchers, engineers, and scientists working together to
            advance flexible electronics, energy harvesting, and smart sensing systems at SRE² Lab.
          </p>
        </div>
      </section>

      {/* ── Principal Investigator Featured Section ─────────── */}
      {pi && (
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="container-custom">
            <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">
              Lab Director
            </p>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 md:p-10 grid md:grid-cols-12 gap-8 items-center hover:border-emerald-600/40 hover:shadow-lg transition-all">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative aspect-[4/4.5] w-full max-w-[260px] mx-auto bg-slate-50 border border-slate-200/80 rounded-xl overflow-hidden shadow-xs">
                  <Image
                    src={`/pfp/${pi.pfp_file_name}`}
                    alt={pi.name}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                <span className="font-heading text-xs font-bold text-emerald-700 uppercase tracking-widest">
                  {pi.role}
                </span>
                <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 mt-1 mb-3">
                  {pi.name}
                </h2>
                <div className="w-10 h-0.5 bg-emerald-600 rounded-full mb-4" />
                <p className="text-sm md:text-base text-slate-600 font-body leading-relaxed mb-6">
                  {pi.research_info}
                </p>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                  <Link href="/pi" className="btn-primary py-2 px-5 text-xs">
                    View Full PI Profile
                  </Link>
                  {pi.linkedin && (
                    <a
                      href={pi.linkedin.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-2 px-5 text-xs flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4 1.4 1.4 0 0 0-1.4 1.4 1.4 1.4 0 0 0 1.4 1.4m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Team Grid (Compact, Proportional Cards) ─────────── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">
            Researchers &amp; Engineers
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <article
                key={member.id}
                className="group bg-white border border-slate-200/90 rounded-2xl p-4 md:p-5 shadow-xs hover:shadow-lg hover:border-emerald-600/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Compact Photo Box with Rounded Corners */}
                  <div className="relative w-full aspect-[4/3.8] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 mb-4">
                    <Image
                      src={`/pfp/${member.pfp_file_name}`}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Content Section Centered */}
                  <div className="text-center">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-heading font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>

                    {member.degree && (
                      <p className="text-[11px] font-heading font-medium text-slate-500 mt-1">
                        {member.degree}
                      </p>
                    )}

                    {/* Clean Accent Divider Line */}
                    <div className="w-8 h-0.5 bg-emerald-600 mx-auto my-3 rounded-full" />

                    {member.research_info && (
                      <div className="mb-4">
                        <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Research Interests
                        </span>
                        <div className="space-y-1.5 text-center">
                          {member.research_info
                            .split("•")
                            .map((item) => item.trim())
                            .filter((item) => item.length > 0)
                            .map((interest, idx) => (
                              <p
                                key={idx}
                                className="text-xs font-medium text-slate-700 font-body leading-snug"
                              >
                                {interest}
                              </p>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions: Email / LinkedIn */}
                {(member.email || member.linkedin) && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap justify-center gap-2">
                    {member.email && member.email.trim() !== "" && (
                      <a
                        href={`mailto:${member.email.trim()}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                        title={member.email.trim()}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        Email
                      </a>
                    )}

                    {member.linkedin && member.linkedin.trim() !== "" && (
                      <a
                        href={member.linkedin.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4 1.4 1.4 0 0 0-1.4 1.4 1.4 1.4 0 0 0 1.4 1.4m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
