import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Principal Investigator - Dr. Qazi Muhammad Saqib, PhD | SRE² Lab",
  description:
    "Official Curriculum Vitae, academic appointments, education, awards, and collaborative research network of Dr. Qazi Muhammad Saqib, Principal Investigator of SRE² Lab.",
};

const educationData = [
  {
    degree: "Doctor of Philosophy (Ph.D.) in Engineering",
    institution: "Jeju National University (JNU)",
    location: "Jeju, Republic of Korea",
    graduation: "Feb 2022",
    thesis:
      "Self-powered Nanogenerators and Active Sensors Based on Advanced Functional Materials",
  },
  {
    degree: "Master of Science (M.S.) in Electronics Engineering",
    institution: "Kyungpook National University (KNU)",
    location: "Daegu, Republic of Korea",
    graduation: "Feb 2018",
    thesis:
      "Self-tuning smart window based on cholesteric liquid crystal for energy-saving building",
  },
  {
    degree: "Bachelor of Engineering (B.E.) in Electronic Engineering",
    institution: "Dawood University of Engineering and Technology (DUET)",
    location: "Karachi, Pakistan",
    graduation: "May 2012",
    thesis:
      "Electrical Circuits, Embedded Microprocessors & Industrial Automation",
  },
];

const careerData = [
  {
    role: "Assistant Professor & Principal Research Scientist",
    institution: "Sivas University of Science & Technology (SBTÜ)",
    location: "Sivas, Türkiye",
    period: "July 2025 – Present",
    current: true,
    description:
      "Department of Electrical & Electronic Engineering. Founder & Team Lead of the Sustainability & Renewable Energy Research Laboratory (SRE² Lab), directing research on self-powered nanogenerators (TENG/PENG), flexible electronics, and autonomous sensor systems.",
  },
  {
    role: "Visiting Professor & Senior Advisor",
    institution: "Jeju National University (JNU)",
    location: "Jeju, Republic of Korea",
    period: "Jan 2025 – Present",
    current: true,
    description:
      "Ocean Information Systems Engineering Lab (OISE Lab). Mentoring graduate and doctoral scholars, delivering specialized advanced lectures, and leading international joint research ventures.",
  },
  {
    role: "Invited Research Scientist / Brain Pool Fellow / Advisor",
    institution: "National Research Foundation (NRF) & OISE Lab, JNU",
    location: "Jeju, Republic of Korea",
    period: "July 2022 – Dec 2024",
    current: false,
    description:
      "Selected under the prestigious Brain Pool Fellowship by the Ministry of Science and ICT. Served as Project Lead (PL) for micro-scale self-powered energy storage systems ($154,019 USD grant).",
  },
  {
    role: "Graduate Lecturer (MS & PhD Faculty)",
    institution: "Jeju National University (JNU)",
    location: "Jeju, Republic of Korea",
    period: "March 2023 – Dec 2024",
    current: false,
    description:
      "Taught Advanced Electronics, Sensors and Systems, Optoelectronics, Organic Electronics, Printed Electronics, and Nanotechnology to postgraduate and doctoral students.",
  },

];

const awardsData = [
  {
    title: "Best Researcher Candidate of Korea Nationwide Award",
    year: "2022",
    conferring: "Republic of Korea (Nationwide Recognition)",
    description:
      "Nationwide award recognizing pioneering scientific breakthroughs in self-powered devices, nanogenerators, and functional nanomaterials across South Korea.",
  },
  {
    title: "Distinguished Brain Pool Alumnus",
    year: "2022 – 2024",
    conferring:
      "National Research Foundation (NRF) & Ministry of Science and ICT, South Korea",
    description:
      "Recognized by NRF Korea following the successful tenure of the prestigious Brain Pool fellowship (highly competitive 10–15% selection rate).",
  },
  {
    title: "BK Honor Award & BK Outstanding Awards",
    year: "2020 – 2022",
    conferring: "Jeju National University, Republic of Korea",
    description:
      "Multiple consecutive awards under the Brain Korea (BK21) national initiative for distinguished research output and publication excellence.",
  },
  {
    title: "Rapid Publication Award",
    year: "2022",
    conferring: "Jeju National University, Republic of Korea",
    description:
      "Awarded in recognition of rapid and high-volume first-author publications in top-tier international Q1 journals.",
  },
  {
    title: "BK4 Doctoral & BK21 Master Fellowship Awards",
    year: "2016 – 2022",
    conferring: "National Research Foundation (NRF) of Korea",
    description:
      "Prestigious national merit fellowships awarded throughout graduate and doctoral academic research tenures at KNU and JNU.",
  },
  {
    title: "Best Presentation Award",
    year: "2020",
    conferring: "15th Joint Symposium at Nagasaki University, Japan",
    description:
      "Recognized for outstanding oral presentation on advanced functional materials for energy conversion.",
  },
  {
    title: "KINGS Scholarship Award",
    year: "2016 – 2018",
    conferring: "Kyungpook National University, Republic of Korea",
    description:
      "Full academic merit scholarship for Master of Science degree in Electronics Engineering.",
  },
];

const collaborationCountries = [
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Türkiye", flag: "🇹🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Qatar", flag: "🇶🇦" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "China", flag: "🇨🇳" },
  { name: "Pakistan", flag: "🇵🇰" },
];

export default function PIProfile() {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* ── Breadcrumb Sub-Navigation ───────────────────────────── */}
      <div className="bg-white border-b border-slate-200/80 pt-28 pb-4">
        <div className="container-custom max-w-6xl">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-body">
            <Link href="/" className="hover:text-[#00549d] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/team" className="hover:text-[#00549d] transition-colors">
              People
            </Link>
            <span>/</span>
            <span className="text-[#00549d] font-semibold">
              Principal Investigator Profile
            </span>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-6xl mt-8 space-y-8">
        {/* ══════════════════════════════════════════════════════════
            ROW 1: FULL-WIDTH HEADER CARD (Pic + About + Email + Phone + Links)
            ══════════════════════════════════════════════════════════ */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT: Doctor's Photo (Pic) — prominent, rounded corners */}
            <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center md:items-start">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border-4 border-slate-100 bg-slate-100 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/pfp/saqib.jpg"
                  alt="Dr. Qazi Muhammad Saqib, PhD"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 240px, 300px"
                />
              </div>

              {/* Status Badges */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start w-full max-w-[256px]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-semibold bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00549d]" />
                  PI &bull; SRE² Lab
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                  🏆 Best Researcher Candidate Award (Korea) 2022
                </span>
              </div>
            </div>

            {/* RIGHT: About block + Contact info + Academic Links */}
            <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-between space-y-6">
              {/* "About" block */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#00549d] uppercase tracking-wider bg-[#00549d]/10 px-3 py-1 rounded-full border border-[#00549d]/20">
                  Principal Investigator
                </div>

                {/* Doctor's Name (large, bold) */}
                <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-none">
                  Dr. Qazi Muhammad Saqib,{" "}
                  <span className="text-[#00549d] font-normal text-2xl sm:text-3xl">
                    Ph.D.
                  </span>
                </h1>

                {/* Academic title / position */}
                <p className="text-base sm:text-lg font-heading font-bold text-[#00549d] leading-snug">
                  Assistant Professor &middot; Department of Electrical and Electronic Engineering
                </p>

                {/* Department, affiliation, university and country */}
                <div className="space-y-1 text-xs sm:text-sm text-slate-700 font-heading">
                  <p className="font-semibold text-slate-800">
                    Principal Research Scientist &amp; Team Lead &middot; Sustainability &amp; Renewable Energy Research Laboratory (SRE² Lab)
                  </p>
                  <p className="text-slate-600">
                    Sivas University of Science &amp; Technology (SBTÜ), Sivas, Türkiye
                  </p>
                  <p className="text-slate-500 pt-0.5">
                    Visiting Professor &amp; Senior Advisor &middot; Ocean Information Systems Engineering Lab (OISE Lab), Jeju National University (JNU), Republic of Korea
                  </p>
                </div>

                {/* Biographical Summary */}
                <div className="bg-slate-50/90 rounded-xl p-4 sm:p-5 border border-slate-200/70 mt-3">
                  <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed">
                    <strong>Dr. Qazi Muhammad Saqib</strong> is an Assistant Professor at SBTÜ and Principal Investigator of the <strong>SRE² Lab</strong>. With over 4.5 years of post-PhD research and 3.5+ years of university teaching experience, his research pioneers self-powered energy harvesters (TENG/PENG), flexible electronics, electronic skin, soft robotics, and smart sensory interfaces. Awarded the prestigious <strong>Brain Pool Fellowship</strong> by the Korean Government (NRF &amp; Ministry of Science and ICT), he received the nationwide <strong>Best Researcher Candidate of Korea Award in 2022</strong>.
                  </p>
                </div>
              </div>

              {/* BELOW the About block (still inside same card): Horizontal Row with Email & Phone */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs">
                {/* Email with line icon */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00549d]/40 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#00549d] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div className="leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-heading font-bold">
                      Email
                    </span>
                    <a
                      href="mailto:qazisaqib12@gmail.com"
                      className="text-slate-800 font-medium hover:text-[#00549d] transition-colors"
                    >
                      qazisaqib12@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone number with line icon */}
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00549d]/40 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#00549d] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div className="leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-heading font-bold">
                      Phone
                    </span>
                    <a
                      href="tel:+905015959270"
                      className="text-slate-800 font-mono font-medium hover:text-[#00549d] transition-colors"
                    >
                      +90-501-5959270
                    </a>
                  </div>
                </div>
              </div>

              {/* Academic & Profile Links - Single Line without Scrollbar */}
              <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2">
                {/* Download CV */}
                <a
                  href="/cv-dr-qazi-saqib.pdf"
                  download
                  className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-2.5 py-1.5 rounded-lg font-heading font-semibold text-xs whitespace-nowrap transition-all shadow-xs shrink-0"
                  title="Download Curriculum Vitae"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  CV (.pdf)
                </a>

                {/* Google Scholar */}
                <a
                  href="https://scholar.google.com/citations?user=3U5h4AoAAAAJ&hl=en&oi=ao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-[#00549d] hover:text-[#00549d] text-slate-700 px-2.5 py-1.5 rounded-lg font-heading font-semibold text-xs whitespace-nowrap transition-all shrink-0"
                  title="Google Scholar Profile"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#00549d]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                  Scholar
                </a>

                {/* ResearchGate */}
                <a
                  href="https://www.researchgate.net/profile/Qazi-Saqib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-emerald-600 hover:text-emerald-700 text-slate-700 px-2.5 py-1.5 rounded-lg font-heading font-semibold text-xs whitespace-nowrap transition-all shrink-0"
                  title="ResearchGate Profile"
                >
                  <span className="font-serif font-black text-emerald-600 text-xs">RG</span>
                  ResearchGate
                </a>

                {/* ORCID */}
                <a
                  href="https://orcid.org/0000-0001-8829-0230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-lime-600 hover:text-lime-700 text-slate-700 px-2 py-1.5 rounded-lg font-heading font-semibold text-xs whitespace-nowrap transition-all shrink-0"
                  title="ORCID Profile"
                >
                  <span className="font-bold text-lime-600 text-xs">iD</span>
                  ORCID
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/dr-qazi-muhammad-saqib-ph-d-b7202411b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-700 px-2.5 py-1.5 rounded-lg font-heading font-semibold text-xs whitespace-nowrap transition-all shrink-0"
                  title="LinkedIn Profile"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#0077b5]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74V9.97H5.07v8.53h2.78z" />
                  </svg>
                  LinkedIn
                </a>

                {/* Publications Link */}
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 px-2.5 py-1.5 rounded-lg font-heading font-semibold text-xs whitespace-nowrap transition-all shrink-0"
                >
                  Publications &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            ROW 2: TWO COLUMNS (Left: Education | Right: Work Experience)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: "Education" card (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-6 transition-all duration-300 hover:shadow-md hover:border-[#00549d]/30">
              {/* Section Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl text-slate-900">
                      Education
                    </h2>
                    <p className="text-xs text-slate-500 font-body">
                      Academic degrees and formal qualifications
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-heading font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  3 Degrees
                </span>
              </div>

              {/* Degrees List (Clean cards without timeline line/dots) */}
              <div className="space-y-4">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/70 hover:border-[#00549d]/40 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#00549d] bg-[#00549d]/10 px-2.5 py-0.5 rounded-md border border-[#00549d]/20">
                        {edu.graduation}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-slate-700 font-medium pt-0.5">
                        {edu.institution} &middot;{" "}
                        <span className="text-slate-500">{edu.location}</span>
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-2.5 border border-slate-200/60 text-xs text-slate-600 font-body italic">
                      <span className="font-semibold text-slate-700 not-italic">Thesis: </span>
                      &ldquo;{edu.thesis}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (wider): "Work Experience / Career" card (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-6 transition-all duration-300 hover:shadow-md hover:border-[#00549d]/30">
              {/* Section Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl text-slate-900">
                      Work Experience (Career)
                    </h2>
                    <p className="text-xs text-slate-500 font-body">
                      Faculty appointments and professional research positions
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-heading font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {careerData.length} Appointments
                </span>
              </div>

              {/* Positions List (Clean cards without timeline line/dots) */}
              <div className="space-y-4">
                {careerData.map((pos, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/70 hover:border-[#00549d]/40 transition-all space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#00549d] bg-[#00549d]/10 px-2.5 py-0.5 rounded-md border border-[#00549d]/20">
                        {pos.period}
                      </span>
                      {pos.current && (
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md border border-emerald-200">
                          Current
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                        {pos.role}
                      </h3>
                      <p className="text-xs font-heading font-semibold text-[#00549d]">
                        {pos.institution}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {pos.location}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 font-body leading-relaxed">
                      {pos.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════
            ROW 3: TWO COLUMNS (Left: Awards | Right: Collaborations Network)
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN: "Awards" card (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-6 transition-all duration-300 hover:shadow-md hover:border-[#00549d]/30">
              {/* Section Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl text-slate-900">
                      Awards
                    </h2>
                    <p className="text-xs text-slate-500 font-body">
                      Prestigious recognitions and research honors
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-heading font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                  {awardsData.length} Honors
                </span>
              </div>

              {/* Awards List */}
              <div className="space-y-3.5">
                {awardsData.map((award, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 border border-slate-200/70 hover:border-[#00549d]/40 transition-all space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {award.title}
                      </h3>
                      <span className="text-[10px] font-mono font-bold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-md shrink-0">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-xs font-heading font-medium text-[#00549d]">
                      {award.conferring}
                    </p>
                    <p className="text-xs text-slate-600 font-body leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (wider): "Collaborations Network" card (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 space-y-6 transition-all duration-300 hover:shadow-md hover:border-[#00549d]/30 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Section Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20 flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl text-slate-900">
                        Collaborations Network
                      </h2>
                      <p className="text-xs text-slate-500 font-body">
                        Global research partnerships and international footprint
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/collaborators"
                    className="text-xs font-heading font-semibold text-[#00549d] hover:underline"
                  >
                    Faculty Partners &rarr;
                  </Link>
                </div>

                {/* Collaboration Scope Overview */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 space-y-2">
                  <h3 className="text-xs font-heading font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00549d]" />
                    Global Academic &amp; Scientific Reach
                  </h3>
                  <p className="text-xs text-slate-600 font-body leading-relaxed">
                    SRE² Lab actively maintains bilateral and multi-institutional research collaborations across premier institutions worldwide. Research activities encompass joint funded projects, international co-authorship in high-impact Q1 journals, co-supervision of doctoral and postgraduate scholars, and cross-border scientific exchanges.
                  </p>
                </div>

                {/* Key Collaborative Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-[#00549d]/10 text-[#00549d] flex items-center justify-center font-bold text-xs mb-1.5">
                      🔬
                    </div>
                    <h4 className="font-heading font-bold text-xs text-slate-900">
                      Joint Grants
                    </h4>
                    <p className="text-[11px] text-slate-500 font-body leading-snug">
                      Collaborative funding on sustainable energy, TENGs, and sensors.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-[#00549d]/10 text-[#00549d] flex items-center justify-center font-bold text-xs mb-1.5">
                      🎓
                    </div>
                    <h4 className="font-heading font-bold text-xs text-slate-900">
                      Mentorship
                    </h4>
                    <p className="text-[11px] text-slate-500 font-body leading-snug">
                      Cross-institutional co-supervision of PhD &amp; MS researchers.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1">
                    <div className="w-7 h-7 rounded-lg bg-[#00549d]/10 text-[#00549d] flex items-center justify-center font-bold text-xs mb-1.5">
                      📑
                    </div>
                    <h4 className="font-heading font-bold text-xs text-slate-900">
                      Co-Authored Works
                    </h4>
                    <p className="text-[11px] text-slate-500 font-body leading-snug">
                      Regular high-impact publications in top 1%–5% journals.
                    </p>
                  </div>
                </div>

                {/* International Country Footprint (Featured at the end as requested) */}
                <div className="pt-2 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-heading font-bold text-slate-800 uppercase tracking-wider">
                      Active Collaborative Countries
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">
                      12 International Regions
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-0.5">
                    {collaborationCountries.map((c, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-white text-slate-700 border border-slate-200/80 transition-all text-xs"
                      >
                        <span className="text-base">{c.flag}</span>
                        <span className="font-heading font-medium truncate">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link to Dedicated Collaborative Professors Page */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <p className="text-xs text-slate-500 font-body">
                  Meet our faculty partners on the dedicated page:
                </p>
                <Link
                  href="/collaborators"
                  className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-4 py-2 rounded-xl font-heading font-semibold text-xs transition-all shadow-xs shrink-0"
                >
                  Collaborative Professors &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
