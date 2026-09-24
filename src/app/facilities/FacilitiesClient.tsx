"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface EquipmentItem {
  id: string;
  title: string;
  model: string;
  category: string;
  image: string;
  keySpec: string;
  description: string;
  tags: string[];
}

const equipments: EquipmentItem[] = [
  {
    id: "hioki-lcr",
    title: "Hioki IM3536 LCR Meter",
    model: "Hioki IM3536 Precision LCR Meter",
    category: "Electrical Characterization",
    image: "/equipments/image6.png",
    keySpec: "DC & 4 Hz to 8 MHz frequency range · 0.05% basic accuracy · 1 ms high-speed measurement",
    description:
      "High-precision broadband LCR meter engineered for accurate capacitance, resistance, impedance spectroscopy, and inductance analysis in flexible electronic devices, smart skin, and functional energy materials.",
    tags: ["Smart Skin & Sensors", "Impedance Spectroscopy", "Dielectric Analysis", "TENG/PENG"],
  },
  {
    id: "electrospinning",
    title: "Electrospinning System",
    model: "High-Voltage Nanofiber Fabrication Platform",
    category: "Nanofiber Fabrication",
    image: "/equipments/image7.png",
    keySpec: "High-voltage DC generator · Precision syringe pump · Environmental control enclosure",
    description:
      "Advanced electrospinning platform for synthesizing continuous polymeric micro- and nanofibers, high-surface-area porous functional membranes, and piezoelectric/triboelectric polymer scaffolds for wearable energy devices.",
    tags: ["Nanofiber Mats", "PENG/TENG Scaffolds", "Porous Dielectrics", "Flexible Sensors"],
  },
  {
    id: "potentiostat",
    title: "Multichannel Potentiostat / Galvanostat",
    model: "Synchronized Electrochemical Workstation",
    category: "Electrochemical Workstation",
    image: "/equipments/image8.png",
    keySpec: "Multi-channel synchronized testing · CV, GCD, EIS analysis · Sub-picoamp resolution",
    description:
      "High-precision electrochemical workstation for comprehensive cyclic voltammetry (CV), galvanostatic charge-discharge (GCD), and electrochemical impedance spectroscopy (EIS) of advanced energy storage systems and biosensors.",
    tags: ["Supercapacitors", "Electrochemical Sensors", "Battery Testing", "Cyclic Voltammetry"],
  },
  {
    id: "function-generator",
    title: "Function Wave Generator",
    model: "Arbitrary Waveform Synthesizer",
    category: "Signal Generation & Dynamics",
    image: "/equipments/image9.png",
    keySpec: "Arbitrary waveform synthesis · Micro-Hz frequency resolution · Ultra-low distortion output",
    description:
      "Versatile signal generator producing programmable sine, square, ramp, and arbitrary waveforms for dynamic sensor characterization, AC excitation, and self-powered electronics evaluation under controlled frequencies.",
    tags: ["Sensor Excitation", "Frequency Response", "Wearable Testing", "Pulse Simulation"],
  },
  {
    id: "linear-motor",
    title: "Linear Motor Actuation System",
    model: "Frequency-Controlled Linear Actuator",
    category: "Mechanical Motion Simulator",
    image: "/equipments/image10.png",
    keySpec: "Programmable stroke length & acceleration · Continuous frequency tuning · High-cycle durability",
    description:
      "Precision programmable linear motor actuation system providing repeatable mechanical stimuli, periodic pressing, sliding, and vibration testing for energy harvesting devices and tactile sensors.",
    tags: ["TENG/PENG Testing", "Tactile Stimulation", "Cyclic Durability", "Mechanical Stimuli"],
  },
  {
    id: "electrometer",
    title: "Keithley 6517B Precision Electrometer",
    model: "Keithley 6517B Electrometer / High Resistance Meter",
    category: "Ultra-Low Signal Measurement",
    image: "/equipments/image11.jpg",
    keySpec: "Sub-femtoamp (< 0.1 fA) current resolution · > 200 TΩ input impedance · ±1000V built-in source",
    description:
      "Research-grade electrometer and high-resistance meter engineered for accurate characterization of ultra-low currents, weak electrostatic charges, surface potentials, and ultra-high-resistance functional nanomaterials.",
    tags: ["Sub-Femtoamp Current", "Surface Charge", "Ultra-High Resistance", "Triboelectric Output"],
  },
  {
    id: "oscilloscope",
    title: "Digital Storage Oscilloscope (ADS-1022B)",
    model: "ADS-1022B High-Speed Storage Oscilloscope",
    category: "Waveform Analysis",
    image: "/equipments/image12.png",
    keySpec: "High-speed real-time sampling · Deep memory waveform capture · Multi-channel transient analysis",
    description:
      "High-performance measurement instrument for real-time observation and transient analysis of generated open-circuit voltages, pulse dynamics, and instantaneous sensor response waveforms under real-world mechanical stimuli.",
    tags: ["Transient Signals", "Open-Circuit Voltage", "Pulse Dynamics", "Circuit Verification"],
  },
  {
    id: "gw-lcr",
    title: "GW INSTEK LCR-916 Handheld LCR Meter",
    model: "GW INSTEK LCR-916 Dual-Display Meter",
    category: "Portable Testing & Diagnostics",
    image: "/equipments/image13.png",
    keySpec: "Dual numeric display · 0.5 s rapid reading rate · Auto LCR mode · USB PC connectivity",
    description:
      "Fast handheld testing instrument measuring capacitance, resistance, inductance, ESR, and dissipation factor for rapid on-bench sensor screening, field testing, and on-site prototyping validation.",
    tags: ["Portable Screening", "Capacitive Sensors", "Rapid Diagnostics", "ESR Testing"],
  },
  {
    id: "power-supply",
    title: "AATECH ADC-3303D Regulated DC Power Supply",
    model: "AATECH ADC-3303D Dual-Channel Supply",
    category: "Power & Biasing",
    image: "/equipments/image14.png",
    keySpec: "Dual-channel independent outputs · Low ripple & noise · Digital LED voltage/current readout",
    description:
      "Dual-channel adjustable DC power source providing stable, low-noise regulated voltage and current for device testing, active sensor biasing, power management circuit prototyping, and battery charging emulation.",
    tags: ["Precision Biasing", "Circuit Power", "Low-Noise Regulation", "Laboratory Testing"],
  },
  {
    id: "fault-detector",
    title: "Electronic Fault Detector & EFLVI Tester",
    model: "Specialized EFLVI Diagnostic Tester",
    category: "Diagnostic Testing",
    image: "/equipments/image15.png",
    keySpec: "Multi-lead diagnostic interface · Micro-fault isolation · Interfacial continuity checking",
    description:
      "Specialized diagnostic instrument for rapid identification of internal electrical faults, interfacial contact integrity, micro-crack detection, and line continuity testing across multi-layer flexible devices.",
    tags: ["Fault Diagnosis", "Circuit Integrity", "Micro-Crack Detection", "Device Screening"],
  },
  {
    id: "multimeter",
    title: "AA Tech ADM-3055 Digital Multimeter",
    model: "AA Tech ADM-3055 5.5-Digit Multimeter",
    category: "Benchtop Multimeter",
    image: "/equipments/image16.png",
    keySpec: "5.5-digit resolution · True-RMS measurement · 4-wire high-accuracy resistance sensing",
    description:
      "High-accuracy benchtop digital multimeter for high-precision DC/AC voltage, current, 4-wire resistance, frequency, and diode characterization across experimental energy harvesting setups.",
    tags: ["True-RMS Sensing", "4-Wire Resistance", "Bench Diagnostics", "System Calibration"],
  },
  {
    id: "fabrication-bench",
    title: "Device Fabrication & Prototyping Bench",
    model: "Multi-Functional Clean Assembly Station",
    category: "Prototyping & Assembly",
    image: "/equipments/image17.png",
    keySpec: "Anti-static ESD protection · Precision micro-assembly tools · Controlled chemical encapsulation",
    description:
      "Comprehensive laboratory workstation dedicated to the fabrication, manual micro-assembly, electrolyte dispensing, electrode layering, and protective encapsulation of functional flexible devices and smart skins.",
    tags: ["Device Assembly", "Sensor Prototyping", "Electrode Layering", "Encapsulation"],
  },
];

const categories = [
  "All Facilities",
  "Electrical Characterization",
  "Nanofiber Fabrication",
  "Electrochemical Workstation",
  "Mechanical Motion Simulator",
  "Signal & Waveform",
  "Diagnostic & Prototyping",
];

export default function FacilitiesClient() {
  const [activeCategory, setActiveCategory] = useState("All Facilities");
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);

  const filteredEquipments = equipments.filter((item) => {
    if (activeCategory === "All Facilities") return true;
    if (activeCategory === "Electrical Characterization") {
      return (
        item.category === "Electrical Characterization" ||
        item.category === "Ultra-Low Signal Measurement" ||
        item.category === "Benchtop Multimeter" ||
        item.category === "Portable Testing & Diagnostics"
      );
    }
    if (activeCategory === "Nanofiber Fabrication") {
      return item.category === "Nanofiber Fabrication";
    }
    if (activeCategory === "Electrochemical Workstation") {
      return item.category === "Electrochemical Workstation";
    }
    if (activeCategory === "Mechanical Motion Simulator") {
      return item.category === "Mechanical Motion Simulator";
    }
    if (activeCategory === "Signal & Waveform") {
      return item.category === "Signal Generation & Dynamics" || item.category === "Waveform Analysis";
    }
    if (activeCategory === "Diagnostic & Prototyping") {
      return (
        item.category === "Diagnostic Testing" ||
        item.category === "Power & Biasing" ||
        item.category === "Prototyping & Assembly"
      );
    }
    return true;
  });

  return (
    <>
      {/* ── Page Header / Hero ─────────────────────────────────────── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00549d]/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-custom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00549d]/10 border border-[#00549d]/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00549d] animate-pulse" />
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-[#00549d]">
              SRE² Lab Experimental Infrastructure
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-slate-900 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] max-w-4xl">
            World-Class Research Facilities &amp;{" "}
            <span className="text-[#00549d] underline decoration-[#00549d]/20 decoration-wavy underline-offset-8">
              Advanced Instrumentation
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg text-slate-700 font-body leading-relaxed">
            Our laboratory is equipped with state-of-the-art platforms for continuous nanofiber electrospinning,
            sub-femtoamp electrometer characterization, broadband impedance analysis, and multi-modal dynamic mechanical
            testing—empowering breakthroughs in sustainable energy harvesting, smart skins, and self-powered systems.
          </p>

          {/* Core Infrastructure Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-200/80">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00549d]">12+</div>
              <div className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mt-1">Core Instruments</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Synthesis, testing &amp; diagnostics</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00549d]">&lt; 0.1 fA</div>
              <div className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mt-1">Keithley Sensitivity</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Sub-femtoamp current resolution</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00549d]">8 MHz</div>
              <div className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mt-1">Broadband LCR</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">High-frequency impedance analysis</div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00549d]">Multi-Modal</div>
              <div className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mt-1">Motion &amp; Stimuli</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Cyclic linear motor actuation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Tabs & Showcase Grid ─────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="container-custom">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 sm:mb-12 pb-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#00549d] text-white shadow-md shadow-[#00549d]/20 scale-[1.02]"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#00549d]/50 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* 2-Column Spacious Grid Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredEquipments.map((item, idx) => (
              <div
                key={item.id}
                id={item.id}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#00549d]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Expansive High-Definition Image Showcase */}
                  <div
                    onClick={() => setSelectedEquipment(item)}
                    className="relative w-full h-72 sm:h-84 md:h-96 bg-gradient-to-b from-slate-50/90 via-white to-slate-100/60 p-6 flex items-center justify-center border-b border-slate-100 cursor-pointer overflow-hidden"
                    title="Click to expand high-resolution view"
                  >
                    {/* Category badge (top-left) */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/95 backdrop-blur-md border border-slate-200/90 text-[#00549d] font-heading font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00549d]" />
                        {item.category}
                      </span>
                    </div>

                    {/* Number badge (top-right) */}
                    <div className="absolute top-4 right-4 z-10 font-mono text-xs font-bold text-slate-400 bg-white/90 backdrop-blur-sm border border-slate-200/80 px-2.5 py-1 rounded-full shadow-2xs">
                      #{String(idx + 1).padStart(2, "0")}
                    </div>

                    {/* Actual Large Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-sm"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={idx < 4}
                    />

                    {/* Enlarge prompt hint (bottom-right on hover) */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00549d] text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                      Inspect Instrument
                    </div>
                  </div>

                  {/* Text Details Area */}
                  <div className="p-6 sm:p-8">
                    <h2
                      onClick={() => setSelectedEquipment(item)}
                      className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 group-hover:text-[#00549d] transition-colors leading-snug cursor-pointer tracking-tight mb-3"
                    >
                      {item.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Key Technical Highlights Box */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 mb-5">
                      <div className="text-[11px] uppercase tracking-wider font-heading font-bold text-[#00549d] mb-1 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#00549d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Key Performance &amp; Capability
                      </div>
                      <p className="text-xs sm:text-sm font-body font-medium text-slate-800 leading-snug">
                        {item.keySpec}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags / Capabilities Pills */}
                <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-heading font-semibold text-slate-700 bg-slate-100 hover:bg-[#00549d]/10 hover:text-[#00549d] px-3 py-1.5 rounded-lg border border-slate-200/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Access & Collaborative Research Section */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-12 bg-white border border-slate-200/90 rounded-2xl shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00549d]/5 rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00549d]/10 text-[#00549d] text-xs font-heading font-bold uppercase tracking-wider mb-4">
              Joint Inquiries &amp; Characterization
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-3 tracking-tight">
              Facility Access &amp; Collaborative Research
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed max-w-2xl mx-auto mb-8">
              Our instrumentation is accessible for joint academic research, industrial characterization inquiries,
              and cross-institutional collaborations. We welcome international researchers, graduate students, and industry partners.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/join"
                className="bg-[#00549d] hover:bg-[#003366] text-white px-7 py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-colors shadow-sm"
              >
                Inquire Access &amp; Collaborate
              </Link>
              <Link
                href="/research"
                className="border border-slate-300 hover:border-[#00549d] hover:text-[#00549d] bg-white text-slate-800 px-7 py-3 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-colors shadow-xs"
              >
                Explore Research Axes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── High-Definition Lightbox / Modal ────────────────────── */}
      {selectedEquipment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedEquipment(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEquipment(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Badge & Model */}
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20 text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {selectedEquipment.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2 leading-tight">
              {selectedEquipment.title}
            </h3>
            <p className="text-xs sm:text-sm font-heading font-medium text-slate-500 mb-6">
              {selectedEquipment.model}
            </p>

            {/* Giant Image Preview in Lightbox */}
            <div className="relative w-full h-80 sm:h-96 bg-gradient-to-b from-slate-50 via-white to-slate-100/80 rounded-xl border border-slate-200/80 flex items-center justify-center p-6 mb-6 overflow-hidden">
              <Image
                src={selectedEquipment.image}
                alt={selectedEquipment.title}
                fill
                className="object-contain p-4 drop-shadow-md"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Key Specs */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-6">
              <div className="text-xs uppercase tracking-wider font-heading font-bold text-[#00549d] mb-1.5 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#00549d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Key Specifications &amp; Capabilities
              </div>
              <p className="text-sm font-body font-medium text-slate-800 leading-relaxed">
                {selectedEquipment.keySpec}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-heading font-bold text-slate-400 mb-2">
                Laboratory Role &amp; Experimental Scope
              </h4>
              <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed">
                {selectedEquipment.description}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-heading font-bold text-slate-400 mb-2">
                Target Research Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedEquipment.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-heading font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
