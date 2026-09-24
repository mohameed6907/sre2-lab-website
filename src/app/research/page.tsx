import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "SRE² Lab - Research",
  description:
    "Explore SRE² Lab's scientific research axes and strategic pillars in energy harvesting, flexible electronics, smart sensing, and self-powered systems.",
};

const researchAxes = [
  {
    id: "axis-1",
    label: "Axis 01",
    title: "Novel Trends in Renewable/ Sustainable Energy Generation",
    image: "/research/layered-nanomaterials.png",
    desc: "Our research focuses on emerging approaches for renewable and sustainable energy generation. We explore innovative technologies that convert renewable, ambient, and otherwise wasted energy into usable electrical power, including Triboelectric, Piezoelectric, Thermoelectric nanogenerators, and waste-derived energy technologies. By integrating advanced functional materials, nanostructures, and intelligent device architectures, our research aims to develop efficient, flexible, and sustainable energy-generation systems for next-generation smart systems.",
    keywords: [
      "Triboelectric Nanogenerators (TENG)",
      "Piezoelectric Nanogenerators (PENG)",
      "Thermoelectric Nanogenerators",
      "Waste-Derived Energy Harvesting",
      "Advanced Functional Nanomaterials"
    ]
  },
  {
    id: "axis-2",
    label: "Axis 02",
    title: "Advanced Energy Storage & Self-Powered Systems",
    image: "/research/biomechanical-harvesting.png",
    desc: "Our research focuses on next-generation energy storage technologies for compact, flexible, and autonomous electronic systems, with particular emphasis on supercapacitors, microsupercapacitors, and self-powered energy-storage systems. We investigate advanced electrode materials, nanostructured architectures, sustainable materials, and novel device configurations to achieve high energy density, rapid charge–discharge capability, long cycle life, and mechanical flexibility. By coupling emerging energy-generation technologies such as triboelectric and piezoelectric nanogenerators with advanced micro- and supercapacitors, our research aims to establish integrated self-powered systems capable of harvesting ambient and renewable energy, storing it efficiently, and delivering power on demand for wearable electronics, wireless sensors, soft robotics, IoT devices, and next-generation autonomous systems.",
    keywords: [
      "Supercapacitors & Micro-Supercapacitors",
      "Self-Powered Energy Storage",
      "Advanced Nanostructured Electrodes",
      "Integrated Self-Charging Systems",
      "Flexible Energy Storage"
    ]
  },
  {
    id: "axis-3",
    label: "Axis 03",
    title: "Self-Powered Multifunctional Sensors and Electronic Skin",
    image: "/research/flexible-wearable-circuits.png",
    desc: "Our research focuses on self-powered, flexible, and multifunctional sensing systems for next-generation wearable electronics, electronic skin, human-machine interfaces, smart healthcare, and intelligent environments. We develop triboelectric and piezoelectric nanogenerators, pressure and tactile sensors, strain sensors, humidity and environmental sensors, and flexible biosensors capable of detecting mechanical, environmental, and physiological signals. By integrating energy harvesting with sensing, our goal is to create battery-free, low-power, and self-sustained sensing platforms that can enable continuous monitoring, intelligent interaction, and sustainable wearable technologies.",
    keywords: [
      "Electronic Skin (E-Skin)",
      "Tactile & Pressure Sensors",
      "Flexible Biosensors",
      "Human-Machine Interfaces (HMI)",
      "Strain & Environmental Sensing"
    ]
  },
  {
    id: "axis-4",
    label: "Axis 04",
    title: "Nature-Inspired Platforms for Smart Technologies",
    image: "/research/ultrathin-eskin.png",
    desc: "Our research explores functional biofilms as sustainable platforms for energy generation, storage, and sensing. We investigate biofilm-based systems that can harness micro-activity to generate electrical energy, while exploring their integration with energy-storage materials and self-powered sensing technologies.",
    keywords: [
      "Functional Biofilms",
      "Chitin & Chitosan Transducers",
      "Bio-Smart Polymers",
      "Micro-Activity Energy Harvesting",
      "Sustainable Bio-Sensing Platforms"
    ]
  },
  {
    id: "axis-5",
    label: "Axis 05",
    title: "Advanced Sensing Technologies for Aviation and Space",
    image: "/research/multiscale-technologies.png",
    desc: "Our lab focuses on the design and development of self-powered, multifunctional sensing technologies tailored for aerospace applications. By combining materials science, flexible electronics, and energy harvesting techniques, we aim to create sensors capable of withstanding the extreme mechanical, thermal, and environmental conditions found in aircraft and space systems-enabling smarter, lighter, and more autonomous monitoring solutions for the future of aviation and space exploration.",
    keywords: [
      "Aerospace Sensing Technologies",
      "Extreme Environment Sensors",
      "Aircraft Structural Health Monitoring",
      "Space Exploration Instrumentation",
      "Multifunctional Autonomous Sensors"
    ]
  }
];

const strategicPillars = [
  {
    num: "Pillar I",
    title: "Next-Era Renewable & Fully Sustainable Energy & Self-Powered Technologies",
    image: "/research/ecosystem-wheel.png",
    desc: "Unconventional, battery-free energy harvesting platforms using triboelectric and piezoelectric nanogenerators to capture low-frequency motion, human strides, and smart surface vibrations, storing it in custom micro-supercapacitors for permanent low-power operation."
  },
  {
    num: "Pillar II",
    title: "Sustainable Energy Innovations for Aerospace & Space Missions",
    image: "/research/aerospace-satellite.png",
    desc: "Developing low-mass, flexible energy systems and sensors optimized for constrained aerospace platforms, including self-powered UAV sensors, ultra-small satellites, and autonomous aircraft monitoring systems."
  },
  {
    num: "Pillar III",
    title: "Self-Powered Smart Sensing Technologies for Defense & Security Applications",
    image: "/research/ultrathin-eskin.png",
    desc: "Creating zero-power border security triggers, autonomous vibration signaling grids, and self-powered acoustic/pressure sensors that operate indefinitely in remote zones without batteries or maintenance."
  },
  {
    num: "Pillar IV",
    title: "Sustainable Energy from Bio-Smart Materials toward Biocompatible Energy Systems",
    image: "/research/wearable-smart-sensors.png",
    desc: "Utilizing biodegradable, biocompatible, and non-toxic natural substrates to construct wearable diagnostic systems, smart band-aids, gait insoles, impact-detecting helmets, and bio-integrated biomedical sensors."
  },
  {
    num: "Pillar V",
    title: "Self-Powered Technologies Empowered by AI and Metaverse",
    image: "/research/security-monitoring-network.png",
    desc: "Applying machine learning, edge AI algorithms, and adaptive control systems directly to physical energy-harvesting hardware for predictive power optimization, self-diagnostics, and digital twin interaction."
  }
];

export default function Research() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────── */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-200">
        <div className="container-custom fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-emerald-50 border border-emerald-200/90 mb-6">
            <span className="font-heading text-sm md:text-base font-extrabold uppercase tracking-[0.3em] text-emerald-700">
              SRE² LAB
            </span>
          </div>
          <h1 className="font-heading font-extralight text-slate-900 text-5xl md:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.95]">
            Scientific <span className="font-bold text-emerald-700">Research.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-slate-700 font-body leading-relaxed">
            We investigate the loop of Materials, Energy Harvesting, Energy Storage, and Smart Electronics to develop next-generation battery-free autonomous technologies.
          </p>

          {/* Grand Panoramic Research Cover Banner (Complete Full View - No Cropping) */}
          <div className="w-full rounded-sm overflow-hidden border border-slate-200/90 shadow-md mt-10 bg-white">
            <Image
              src="/research/research-hero-banner.jpg"
              alt="SRE² Lab Nanotechnology and Energy Research Scientific Cover"
              width={1024}
              height={343}
              priority
              quality={100}
              className="w-full h-auto object-contain block"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* ── Philosophy Intro with Ecosystem Wheel ───────────────── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="font-heading text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-2">
                Scientific Framework
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-800 mb-4">
                Our Research Philosophy
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-body leading-relaxed mb-4">
                SRE² Lab develops sustainable and self-powered technologies that reduce battery dependency and environmental impact.
                We harness ambient and wasted energy using triboelectric, piezoelectric, thermoelectric, and waste-derived technologies, and store it in advanced supercapacitors and microsupercapacitors, and micro-batteries.
                We integrate these technologies into self-powered sensors, electronic skin, flexible biosensors, and intelligent sensing systems.
                Our research combines energy harvesting, storage, sensing, sustainable materials, and AI-enabled technologies to create autonomous systems.
                These innovations target healthcare, wearable electronics, soft robotics, IoT, aerospace, defense, and smart cities.
              </p>

            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-sm">
              <div className="relative w-60 h-60 sm:w-68 sm:h-68">
                <Image
                  src="/research/ecosystem-wheel.png"
                  alt="SRE² Lab Integrated Applications Wheel"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[10px] font-heading font-bold uppercase tracking-wider text-slate-500 text-center mt-3">
                Core Domains of the SRE² Ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 Complementary Research Axes (Capabilities) ───────── */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
              Scientific Capabilities
            </p>
            <h2 className="font-heading font-extralight text-slate-900 text-4xl tracking-tight">
              Complementary <span className="font-bold text-emerald-700">Research Axes.</span>
            </h2>
          </div>

          <div className="space-y-16">
            {researchAxes.map((axis, index) => (
              <div
                key={axis.id}
                className="grid md:grid-cols-12 gap-8 md:gap-12 items-center pb-16 border-b border-slate-200 last:border-b-0 last:pb-0"
              >
                {/* Image panel */}
                <div className={`md:col-span-5 relative aspect-[4/3] bg-white border border-slate-200 rounded-sm overflow-hidden shadow-xs ${index % 2 === 1 ? "md:order-last" : ""
                  }`}>
                  <Image
                    src={axis.image}
                    alt={axis.title}
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>

                {/* Content panel */}
                <div className="md:col-span-7">
                  <span className="font-heading text-xs font-bold text-emerald-700 tracking-widest block mb-2">
                    {axis.label}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-slate-800 mb-4">{axis.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 font-body leading-relaxed mb-6">
                    {axis.desc}
                  </p>

                  <div>
                    <h4 className="font-heading text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Topics &amp; Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {axis.keywords.map(kw => (
                        <span key={kw} className="text-[11px] bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-sm shadow-2xs">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 Strategic Research Pillars (Applications) ─────────── */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
              Strategic Applications
            </p>
            <h2 className="font-heading font-extralight text-slate-900 text-4xl tracking-tight">
              Strategic <span className="font-bold text-slate-800">Research Pillars.</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base font-body leading-relaxed">
              We apply our scientific capabilities to address critical application challenges across defense, aerospace, healthcare, and computational systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {strategicPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group bg-slate-50 border border-slate-200/80 rounded-sm overflow-hidden flex flex-col justify-between hover:bg-white hover:border-emerald-600/50 hover:shadow-md transition-all"
              >
                <div className="relative w-full h-44 bg-white overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white backdrop-blur-sm px-2.5 py-0.5 rounded-sm font-heading font-extrabold text-xs">
                    {pillar.num}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-800 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 font-body leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlighted Research ───────────────────────────────── */}
      <section id="highlighted-research" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="font-heading font-extralight text-slate-900 text-3xl md:text-4xl tracking-tight">
              Highlighted <span className="font-bold text-emerald-700">Research.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { src: "/cover-pages/image1.png", alt: "Highlighted Research 1" },
              { src: "/cover-pages/image2.png", alt: "Highlighted Research 2" },
              { src: "/cover-pages/image3.png", alt: "Highlighted Research 3" },
              { src: "/cover-pages/image4.jpg", alt: "Highlighted Research 4" },
              { src: "/cover-pages/image5.jpg", alt: "Highlighted Research 5" },
              { src: "/cover-pages/image6.jpg", alt: "Highlighted Research 6" },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] w-full bg-white rounded-sm overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration CTA ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="font-heading text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-700 mb-4">
              Get in Touch
            </p>
            <h2 className="font-heading font-extralight text-slate-900 text-4xl tracking-tight">
              Research <span className="font-bold text-emerald-700">Collaboration.</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-slate-700 font-body leading-relaxed max-w-2xl">
              Interested in collaborating on research projects, requesting joint research, or visiting the research laboratory? We welcome partnerships with global academic institutions, industry, and security agencies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="btn-primary">
                Inquire &amp; Join SRE² Lab
              </Link>
              <Link href="/collaborators" className="btn-secondary">
                View Collaborating Professors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
