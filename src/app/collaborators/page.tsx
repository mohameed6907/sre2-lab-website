import Link from "next/link";

export const metadata = {
  title: "SRE² Lab - Collaborative Professors",
  description:
    "Academic and scientific research partners collaborating with SRE² Lab across sustainable energy, self-powered systems, sensors, flexible electronics, and advanced functional materials.",
};

interface Collaborator {
  id: number;
  name: string;
  role: string;
  institution: string;
  location: string;
  collaboration: string;
  avatarText: string;
}

const internationalPartners: Collaborator[] = [
  {
    id: 1,
    name: "Prof. Dr. Jinho Bae",
    role: "Professor & Research Director",
    institution: "Jeju National University",
    location: "Republic of Korea",
    collaboration:
      "Triboelectric and flexible electronics, self-powered sensing, multifunctional devices, neuromorphic systems, and Korea-Türkiye joint research.",
    avatarText: "JB",
  },
];

const sbtuPartners: Collaborator[] = [
  {
    id: 2,
    name: "Prof. Dr. Sabit Horoz",
    role: "Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Sustainable energy generation, semiconductor materials, hybrid energy systems, and advanced functional materials.",
    avatarText: "SH",
  },
  {
    id: 3,
    name: "Prof. Dr. Fatih Kaburcuk",
    role: "Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Wireless and electromagnetic sensing, antenna-integrated devices, RF systems, and self-powered wireless technologies.",
    avatarText: "FK",
  },
  {
    id: 4,
    name: "Prof. Dr. Muhammad Asim",
    role: "Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Self-powered agricultural sensors, smart agriculture, environmental monitoring, and AI-enabled sensing systems.",
    avatarText: "MA",
  },
  {
    id: 5,
    name: "Doç. Dr. Ceren Orak",
    role: "Associate Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Sustainable nanomaterials, environmental sensing, and waste-derived functional materials.",
    avatarText: "CO",
  },
  {
    id: 6,
    name: "Dr. Öğr. Üyesi Ebubekir Sıddık Aydın",
    role: "Assistant Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Carbon/polymer nanocomposites, TENG materials, flexible devices, electromagnetic materials, and multifunctional systems.",
    avatarText: "EA",
  },
  {
    id: 7,
    name: "Doç. Dr. Fikret Yıldız",
    role: "Associate Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Self-powered aerospace sensors, structural health monitoring, UAV technologies, flexible electronics, and aircraft sensing systems.",
    avatarText: "FY",
  },
  {
    id: 8,
    name: "Doç. Dr. Sıtkı Akkaya",
    role: "Associate Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Power management, electrical characterization, hybrid energy systems, and integration of self-powered technologies.",
    avatarText: "SA",
  },
  {
    id: 9,
    name: "Dr. Öğr. Üyesi Engin Eyceyurt",
    role: "Assistant Professor",
    institution: "Sivas University of Science and Technology (SBTÜ)",
    location: "Türkiye",
    collaboration:
      "Optical fiber based sensors, self-powered IoT systems, and intelligent sensing.",
    avatarText: "EE",
  },
];

export default function CollaboratorsPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
            Academic &amp; Research Partnerships
          </p>
          <h1 className="font-heading font-extralight text-slate-900 text-4xl sm:text-5xl md:text-6xl tracking-[-0.025em] leading-[0.95]">
            Collaborative <span className="font-bold text-emerald-700">Professors &amp; Partners.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm md:text-base text-slate-600 font-body leading-relaxed">
            SRE² Lab collaborates with researchers across complementary fields to advance sustainable energy, advanced materials, self-powered systems, sensors, flexible electronics, intelligent systems, and application-oriented technologies.
          </p>
        </div>
      </section>

      {/* ── Collaborators Content ───────────────────────────── */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container-custom space-y-16">
          {/* Section 1: Republic of Korea */}
          <div>
            <div className="mb-8">
              <span className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-700 block mb-2">
                International Joint Research
              </span>
              <h2 className="font-heading font-extralight text-slate-900 text-2xl sm:text-3xl tracking-tight">
                Republic of <span className="font-bold text-emerald-700">Korea.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalPartners.map((c) => (
                <div
                  key={c.id}
                  className="bg-white border border-slate-200 rounded-sm p-6 sm:p-7 hover:border-emerald-600/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-13 h-13 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-heading font-bold text-base shadow-2xs shrink-0">
                        {c.avatarText}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                          {c.name}
                        </h3>
                        <p className="text-xs font-heading font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">
                          {c.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 pb-3 border-b border-slate-100 text-xs">
                      <p className="font-medium text-slate-800">{c.institution}</p>
                      <p className="text-slate-500 font-body mt-0.5">{c.location}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                      <strong className="font-semibold text-slate-700">Collaboration:</strong> {c.collaboration}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-heading font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                    International Joint Partner
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Sivas University of Science & Technology */}
          <div>
            <div className="mb-8">
              <span className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-700 block mb-2">
                Institutional Faculty Collaborators
              </span>
              <h2 className="font-heading font-extralight text-slate-900 text-2xl sm:text-3xl tracking-tight">
                Sivas University of <span className="font-bold text-emerald-700">Science &amp; Technology (SBTÜ).</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sbtuPartners.map((c) => (
                <div
                  key={c.id}
                  className="bg-white border border-slate-200 rounded-sm p-6 sm:p-7 hover:border-emerald-600/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-13 h-13 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 font-heading font-bold text-base shadow-2xs shrink-0">
                        {c.avatarText}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug">
                          {c.name}
                        </h3>
                        <p className="text-xs font-heading font-semibold text-emerald-700 uppercase tracking-wider mt-0.5">
                          {c.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 pb-3 border-b border-slate-100 text-xs">
                      <p className="font-medium text-slate-800">{c.institution}</p>
                      <p className="text-slate-500 font-body mt-0.5">{c.location}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                      <strong className="font-semibold text-slate-700">Collaboration:</strong> {c.collaboration}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-heading font-semibold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                    SBTÜ Research Partner
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborative Mission & Inquiries Box */}
          <div className="p-8 bg-white border border-slate-200 rounded-sm max-w-3xl mx-auto text-center shadow-xs">
            <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2">
              Joint Research &amp; Collaborative Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed mb-6">
              Through these complementary collaborations, SRE² Lab develops multidisciplinary research projects, joint publications, student and researcher exchange, shared experimental activities, technology development, and international research proposals.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/join" className="btn-primary text-xs">
                Inquire Research Collaboration
              </Link>
              <Link href="/research" className="btn-secondary text-xs">
                View Active Research Axes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

