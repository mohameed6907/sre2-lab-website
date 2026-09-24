import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/lib/info_helper.server";

export const metadata = {
  title: "SRE² Lab - Home",
  description:
    "Sustainability & Renewable Energy Research Laboratory (SRE² Lab) at Sivas University of Science and Technology (SBTÜ). Developing advanced energy harvesting, self-powered systems, supercapacitors, and flexible electronics.",
};

const researchAxes = [
  {
    num: "01",
    title: "Novel Trends in Renewable/ Sustainable Energy Generation",
    image: "/research/axes/axis1.png",
    desc: "Emerging nanogenerators and smart architectures converting ambient and wasted energy into usable electrical power.",
  },
  {
    num: "02",
    title: "Advanced Energy Storage & Self-Powered Systems",
    image: "/research/axes/axis2.png",
    desc: "Next-generation micro-supercapacitors and integrated self-powered storage architectures for autonomous systems.",
  },
  {
    num: "03",
    title: "Self-Powered Multifunctional Sensors and Electronic Skin",
    image: "/research/axes/axis3.png",
    desc: "Flexible self-powered sensors and electronic skin platforms for continuous monitoring and human-machine interaction.",
  },
  {
    num: "04",
    title: "Nature-Inspired Platforms for Smart Technologies",
    image: "/research/axes/axis4.png",
    desc: "Sustainable functional biofilms and bio-smart platforms harnessing micro-activity for energy generation and sensing.",
  },
  {
    num: "05",
    title: "Advanced Sensing Technologies for Aviation and Space",
    image: "/research/axes/axis5.png",
    desc: "Multifunctional self-powered sensing systems engineered for extreme aviation and space mission environments.",
  },
];

const researchPillars = [
  {
    id: "I",
    title: "Sustainable Energy Harvesting & Self-Powered Systems",
    image: "/research/ecosystem-wheel.png",
    desc: "Unconventional nanogenerators capturing motion and ambient energy for battery-free operation.",
  },
  {
    id: "II",
    title: "Aerospace & Space Missions Energy Innovations",
    image: "/research/aerospace-satellite.png",
    desc: "Lightweight, flexible energy systems and autonomous sensors for UAVs and satellites.",
  },
  {
    id: "III",
    title: "Zero-Power Smart Sensing for Defense & Security",
    image: "/research/ultrathin-eskin.png",
    desc: "Zero-power border triggers and acoustic vibration monitoring for remote zones.",
  },
  {
    id: "IV",
    title: "Bio-Smart Materials & Biocompatible Platforms",
    image: "/research/wearable-smart-sensors.png",
    desc: "Biodegradable, bio-integrated platforms for wearable diagnostics and healthcare.",
  },
  {
    id: "V",
    title: "Intelligent Edge AI & Metaverse Technologies",
    image: "/research/security-monitoring-network.png",
    desc: "Edge AI and machine learning for predictive power optimization and digital twins.",
  },
];

export default function Home() {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <>
      {/* ── A. Grand Cover Background Hero Section ────────────────── */}
      <section className="relative min-h-[90svh] flex items-center overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20 border-b border-slate-200">
        {/* Full-Bleed Grand Laboratory Cover Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/sre-lab-interior.jpg"
            alt="Sustainability & Renewable Energy Research Laboratory (SRE² Lab)"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle luminous light wash: soft white fade on the left to preserve photo daylight brightness while guaranteeing 100% text clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 lg:to-transparent" />
        </div>

        <div className="container-custom relative z-10 w-full py-8">
          {/* Luminous Frosted Glass Card: Elegant, Ordered & 100% Legible */}
          <div className="max-w-2xl bg-white/95 backdrop-blur-xl border border-white/90 p-8 sm:p-10 md:p-12 rounded-sm shadow-2xl shadow-slate-900/10">
            {/* Full Laboratory Name (Without Abbreviations) */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-600 whitespace-nowrap">
                Sustainability &amp; Renewable Energy Research Laboratory </span>
            </div>

            {/* University & Lab Acronym */}
            <p className="font-heading text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
              SRE² Lab &middot; Sivas University of Science and Technology (SBTÜ)
            </p>

            {/* Main Headline */}
            <h1 className="font-heading font-extralight text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-6">
              Next-Generation <br />
              <span className="font-bold text-emerald-700">Sustainable Energy</span> &amp; <br />
              <span className="font-bold text-slate-900">Self-Powered Technologies.</span>
            </h1>

            {/* Core Mission Subtext */}
            <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed mb-8">
              We develop new trends in renewable/sustainable technologies through advanced nanogenerators, energy storage micro-systems, flexible electronics, and multifunctional active sensors.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link href="/research" className="btn-primary">
                Explore Our Research
              </Link>
              <Link href="/join" className="btn-secondary">
                Join SRE² Lab
              </Link>
            </div>

            {/* Key Indicators */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">5</p>
                <p className="text-[10px] sm:text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Research Axes</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-emerald-700">100%</p>
                <p className="text-[10px] sm:text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Self-Powered</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">SBTÜ</p>
                <p className="text-[10px] sm:text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-500 mt-0.5">Research Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── B. Latest News & Lab Updates (News Preview) ─────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-3">
                Latest Updates
              </p>
              <h2 className="font-heading font-extralight text-slate-900 text-3xl md:text-4xl tracking-tight">
                News &amp; <span className="font-bold text-emerald-700">Lab Updates.</span>
              </h2>
            </div>
            <Link
              href="/news"
              className="text-xs font-heading font-semibold uppercase tracking-widest text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-2 group transition-colors"
            >
              <span>Explore All News</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

          {sortedNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sortedNews.slice(0, 3).map((post) => (
                <Link
                  key={post.id}
                  href={`/news/${post.slug}`}
                  className="group bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-emerald-600/50 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={`/news/img/${post.img_file_name}`}
                        alt={post.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-5">
                      <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-2">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <h3 className="font-heading font-bold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1 flex items-center text-xs font-heading font-semibold uppercase tracking-wider text-emerald-700 group-hover:text-emerald-800 transition-colors">
                    <span>Read story &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>


      {/* ── C. Research Highlights (5 Axes Preview) ────────────────── */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-b border-slate-200">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-14 md:mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
              Capabilities
            </p>
            <h2 className="font-heading font-extralight text-slate-900 text-4xl md:text-5xl tracking-tight">
              Complementary <span className="font-bold text-emerald-700">Research Axes.</span>
            </h2>
          </div>

          {/* Axes Grid - 5 pillars side by side horizontally in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {researchAxes.map((axis) => (
              <div
                key={axis.num}
                className="group bg-white border border-slate-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-emerald-600/50 hover:shadow-md transition-all"
              >
                <div>
                  {/* Single Cropped Sub-Image Visual */}
                  <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden border-b border-slate-100 flex items-center justify-center p-2">
                    <Image
                      src={axis.image}
                      alt={axis.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-xs font-heading text-[9px] font-bold text-emerald-700 tracking-widest border border-slate-200/60">
                      AXIS {axis.num}
                    </span>
                  </div>

                  {/* Text: Title + Single short sentence only (no tags) */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-heading font-semibold text-base text-slate-800 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                      {axis.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-body leading-relaxed">
                      {axis.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/research" className="btn-primary">
              Explore All Research Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── D. Strategic Research Pillars ─────────────── */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
        <div className="container-custom">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-3">
              Strategic Applications
            </p>
            <h2 className="font-heading font-extralight text-slate-900 text-5xl md:text-6xl tracking-tight">
              Research <span className="font-bold text-emerald-700">Pillars.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-600 font-body leading-relaxed">
              Our research targets critical application domains, applying materials science and energy systems engineering to real-world strategic sectors.
            </p>
          </div>

          {/* Pillars List - 5 pillars side by side in one row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {researchPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="group bg-white border border-slate-200/80 rounded-sm p-6 flex flex-col items-center text-center hover:border-emerald-600/50 hover:shadow-md transition-all"
              >
                <div className="relative w-20 h-20 mb-4 shrink-0 rounded-full overflow-hidden bg-slate-50 p-2 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 80px, 80px"
                  />
                </div>
                <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-emerald-700 mb-2">
                  Pillar {pillar.id}
                </span>
                <h3 className="font-heading font-bold text-base text-slate-800 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 font-body leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E. Join Us CTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="font-heading text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
            Opportunities
          </p>
          <h2 className="font-heading font-extralight text-slate-900 text-3xl md:text-5xl tracking-tight">
            Join the <span className="font-bold text-emerald-700">SRE² Lab.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-slate-600 font-body leading-relaxed">
            We are actively looking for motivated undergraduate researchers, Master&apos;s and PhD candidates, and postdoctoral fellows interested in pioneering flexible electronics, energy harvesting, and smart sensing systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/join" className="btn-primary">
              View Open Positions &amp; Apply
            </Link>
            <Link href="/pi" className="btn-secondary">
              Principal Investigator Profile
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
