import Link from "next/link";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "SRE² Lab - Visual Gallery",
  description:
    "Photographic albums and video chronicles of academic delegations, campus ceremonies, student competitions, and laboratory events from SRE² Lab at SBTÜ.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-16 border-b border-slate-200 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 mb-3">
            <Link
              href="/"
              className="text-xs font-heading font-bold text-[#00549d] hover:underline"
            >
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-xs font-heading text-slate-600 uppercase tracking-wider font-semibold">
              Gallery
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            Visual <span className="text-[#00549d]">Gallery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-500 font-body leading-relaxed">
            Photographic albums and video chronicles capturing our international academic delegations, campus ceremonies, student competitions, and laboratory events at SBTÜ.
          </p>
        </div>
      </section>

      {/* ── Client Gallery Grid & Lightbox ──────────────────── */}
      <GalleryClient />
    </>
  );
}
