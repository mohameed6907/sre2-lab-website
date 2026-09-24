"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobilePeopleOpen, setMobilePeopleOpen] = useState(false);
  const [mobilePubsOpen, setMobilePubsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPeopleActive =
    pathname.startsWith("/team") ||
    pathname.startsWith("/pi") ||
    pathname.startsWith("/collaborators");

  const isPubsActive = pathname.startsWith("/publications");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2"
          : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 sm:py-4"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <div className="flex items-center justify-between gap-6">
          {/* Official SRE² Lab Logo — start of header, slightly after the start edge */}
          <Link href="/" className="flex items-center group select-none pl-1 sm:pl-2 shrink-0">
            <Image
              src="/sre-logo.png"
              alt="SRE² Lab - Sustainability & Renewable Energy Research Laboratory"
              width={400}
              height={118}
              priority
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 font-heading">
            {/* 1. Home */}
            <Link
              href="/"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname === "/"
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>

            {/* 2. Research */}
            <Link
              href="/research"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname.startsWith("/research")
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Research
              {pathname.startsWith("/research") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>

            {/* 3. People Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                  isPeopleActive
                    ? "text-emerald-700 font-semibold"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                People
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isPeopleActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
              <div className="absolute left-0 mt-1 w-56 bg-white border border-slate-200/90 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1.5">
                <Link
                  href="/pi"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Principal Investigator
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Team
                </Link>
                <Link
                  href="/collaborators"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Collaborating Professors
                </Link>
              </div>
            </div>

            {/* 4. Facilities */}
            <Link
              href="/facilities"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname.startsWith("/facilities")
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Facilities
              {pathname.startsWith("/facilities") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>

            {/* 5. Publications Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                  isPubsActive
                    ? "text-emerald-700 font-semibold"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                Publications
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isPubsActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
              <div className="absolute left-0 mt-1 w-52 bg-white border border-slate-200/90 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-1.5">
                <Link
                  href="/publications/journals"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Selected Articles
                </Link>
                <Link
                  href="/publications/conferences"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Conference Papers
                </Link>
                <Link
                  href="/publications/patents"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Patents
                </Link>
                <Link
                  href="/publications/books"
                  className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
                >
                  Books
                </Link>
              </div>
            </div>

            {/* 6. News */}
            <Link
              href="/news"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname.startsWith("/news")
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              News
              {pathname.startsWith("/news") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>

            {/* 7. Blog */}
            <Link
              href="/blog"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Blog
              {pathname.startsWith("/blog") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>

            {/* 8. Gallery */}
            <Link
              href="/gallery"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname.startsWith("/gallery")
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Gallery
              {pathname.startsWith("/gallery") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>

            {/* 9. Join Us */}
            <Link
              href="/join"
              className={`relative px-3 py-1.5 text-xs lg:text-sm transition-colors ${
                pathname.startsWith("/join")
                  ? "text-emerald-700 font-semibold"
                  : "text-slate-600 hover:text-emerald-700"
              }`}
            >
              Join Us
              {pathname.startsWith("/join") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="xl:hidden text-slate-700 hover:text-emerald-700 transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 mt-3 pt-3 pb-6 space-y-1 max-h-[80vh] overflow-y-auto font-heading">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname === "/"
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              Home
            </Link>

            {/* 2. Research */}
            <Link
              href="/research"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname.startsWith("/research")
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              Research
            </Link>

            {/* 3. People Dropdown */}
            <div className="py-1">
              <button
                onClick={() => setMobilePeopleOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:text-emerald-700 font-medium"
              >
                <span>People</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-3.5 h-3.5 transition-transform ${
                    mobilePeopleOpen ? "rotate-180" : ""
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {(mobilePeopleOpen || isPeopleActive) && (
                <div className="pl-4 space-y-1 border-l-2 border-emerald-600/30 ml-3 mt-1">
                  <Link
                    href="/pi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Principal Investigator
                  </Link>
                  <Link
                    href="/team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Team
                  </Link>
                  <Link
                    href="/collaborators"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Collaborating Professors
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Facilities */}
            <Link
              href="/facilities"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname.startsWith("/facilities")
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              Facilities
            </Link>

            {/* 5. Publications Dropdown */}
            <div className="py-1">
              <button
                onClick={() => setMobilePubsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:text-emerald-700 font-medium"
              >
                <span>Publications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-3.5 h-3.5 transition-transform ${
                    mobilePubsOpen ? "rotate-180" : ""
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {(mobilePubsOpen || isPubsActive) && (
                <div className="pl-4 space-y-1 border-l-2 border-emerald-600/30 ml-3 mt-1">
                  <Link
                    href="/publications/journals"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Selected Articles
                  </Link>
                  <Link
                    href="/publications/conferences"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Conference Papers
                  </Link>
                  <Link
                    href="/publications/patents"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Patents
                  </Link>
                  <Link
                    href="/publications/books"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-emerald-700"
                  >
                    Books
                  </Link>
                </div>
              )}
            </div>

            {/* 6. News */}
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname.startsWith("/news")
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              News
            </Link>

            {/* 7. Blog */}
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname.startsWith("/blog")
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              Blog
            </Link>

            {/* 8. Gallery */}
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname.startsWith("/gallery")
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              Gallery
            </Link>

            {/* 9. Join Us */}
            <Link
              href="/join"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm rounded-xs ${
                pathname.startsWith("/join")
                  ? "text-emerald-700 font-semibold bg-emerald-50"
                  : "text-slate-700 hover:text-emerald-700"
              }`}
            >
              Join Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
