"use client";

import Link from "next/link";
import Image from "next/image";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/blog", label: "Blog" },
  { href: "/join", label: "Join Us" },
];

const academicLinks = [
  { href: "/pi", label: "Principal Investigator" },
  { href: "/team", label: "Research Team" },
  { href: "/collaborators", label: "Collaborating Professors" },
  { href: "/publications/journals", label: "Selected Articles" },
  { href: "/publications/conferences", label: "Conference Papers" },
  { href: "/publications/patents", label: "Patents & IP" },
  { href: "/publications/books", label: "Books & Chapters" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* 1. Brand, Institution & Connect */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/sre-logo.png"
                alt="SRE² Lab Logo"
                width={260}
                height={77}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <div className="space-y-1 text-sm text-slate-600 font-body leading-relaxed mb-6">
              <p className="text-slate-900 font-heading font-bold">
                Sustainability &amp; Renewable Energy Research Laboratory (SRE² Lab)
              </p>
              <p>Department of Electrical &amp; Electronics Engineering</p>
              <p>Sivas University of Science and Technology (SBTÜ)</p>
              <p>Sivas, Türkiye</p>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/company/sre2-lab-sbtu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs border border-slate-200 text-slate-700 hover:border-emerald-600 hover:text-emerald-700 transition-all text-xs font-heading bg-slate-50/60"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                </svg>
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* 2. Main Navigation Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Explore
            </p>
            <div className="flex flex-col space-y-2.5">
              {mainNavLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* 3. People & Publications */}
          <div className="lg:col-span-3 sm:col-span-1">
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              People &amp; Research
            </p>
            <div className="flex flex-col space-y-2.5">
              {academicLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-xs sm:text-sm text-slate-600 hover:text-emerald-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* 4. Location Map */}
          <div className="lg:col-span-3 flex flex-col">
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Location
            </p>
            <div className="relative w-full h-36 rounded-xs overflow-hidden border border-slate-200 shadow-2xs">
              <iframe
                title="SRE² Lab Location - Sivas University of Science and Technology (SBTÜ)"
                src="https://maps.google.com/maps?q=Sivas+Bilim+ve+Teknoloji+%C3%9Cniversitesi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
            <a
              href="https://maps.google.com/?q=Sivas+Bilim+ve+Teknoloji+%C3%9Cniversitesi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[11px] font-heading text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>Open in Google Maps</span>
              <span>&rarr;</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar — No Contact link */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} SRE² Lab &middot; Sivas University of Science and Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
            <Link href="/research" className="hover:text-emerald-700 transition-colors">Research</Link>
            <Link href="/facilities" className="hover:text-emerald-700 transition-colors">Facilities</Link>
            <Link href="/publications" className="hover:text-emerald-700 transition-colors">Publications</Link>
            <Link href="/join" className="hover:text-emerald-700 transition-colors">Join Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
