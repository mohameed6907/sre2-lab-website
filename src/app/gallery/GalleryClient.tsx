"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface GalleryPhoto {
  url: string;
  caption?: string;
}

export interface GalleryItem {
  id: string;
  type: "album" | "video";
  title: string;
  category: "Academic Delegations & Visits" | "Ceremonies & Milestones" | "Broadcast & Demonstrations" | "Competitions & Activities";
  date: string;
  description: string;
  coverImage: string;
  photos?: GalleryPhoto[];
  videoSrc?: string;
  newsUrl?: string;
  newsLabel?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "alb-awards",
    type: "album",
    title: "National Awards & Government Fellowships",
    category: "Ceremonies & Milestones",
    date: "December 31, 2021",
    description: "Prestigious national recognition, including the Republic of Korea Minister of Education Commendation Award, NRF Brain Pool Invited Scientist Fellowship, and Grade 'S' National Evaluation.",
    coverImage: "/gallery/awards/minister-award-ceremony-presentation.jpg",
    newsUrl: "/news#press",
    newsLabel: "View Press Coverage",
    photos: [
      {
        url: "/gallery/awards/minister-award-ceremony-presentation.jpg",
        caption: "Official presentation of the Minister of Education Commendation Award (부총리 겸 교육부장관 표창장) to Dr. Qazi Muhammad Saqib alongside Prof. Jinho Bae."
      },
      {
        url: "/gallery/awards/korea-minister-of-education-award-certificate.jpg",
        caption: "Official Commendation Certificate from the Deputy Prime Minister and Minister of Education of the Republic of Korea for outstanding research excellence in the 4th Stage BK21 project."
      },
      {
        url: "/gallery/awards/brain-pool-fellowship-certificate.png",
        caption: "National Research Foundation of Korea (NRF) Brain Pool Program Certificate of Selection as an Invited Foreign Scientist at Jeju National University."
      },
      {
        url: "/gallery/awards/iris-rnd-evaluation-grade-s.jpg",
        caption: "IRIS National R&D Evaluation Report showing Grade 'S' (최우수 - Highest Distinction / Outstanding) for the Brain Pool energy harvesting research project."
      },
      {
        url: "/gallery/awards/jnu-bk-honor-research-award.png",
        caption: "Jeju National University President's BK-Honor Award for Outstanding Research Achievement presented by President Seok Eon Song."
      },
      {
        url: "/gallery/awards/ocean-system-lab-achievement-award.png",
        caption: "Ocean Information System Lab Higher Achievement Award for breakthrough marine triboelectric energy publication in Nano Energy."
      }
    ]
  },
  {
    id: "alb-mou",
    type: "album",
    title: "Institutional MoU Signing with Jeju National University",
    category: "Academic Delegations & Visits",
    date: "September 12, 2025",
    description: "Official bilateral Memorandum of Understanding (MoU) signing ceremony between the Big Data based Ocean Convergence Education Agency (JNU) and the Department of Electrical & Electronic Engineering (SBTÜ).",
    coverImage: "/gallery/mou/jnu-sbtu-mou-signing-ceremony.jpg",
    newsUrl: "/news/korean-delegation-visit",
    newsLabel: "Visit Details",
    photos: [
      {
        url: "/gallery/mou/jnu-sbtu-mou-signing-ceremony.jpg",
        caption: "Official signing of the bilateral academic and research cooperation agreement between Prof. Jinho Bae (JNU) and Dr. Qazi Muhammad Saqib (SBTÜ)."
      }
    ]
  },
  {
    id: "alb-01",
    type: "album",
    title: "Jeju National University Academic Delegation Visit to SBTÜ",
    category: "Academic Delegations & Visits",
    date: "September 3, 2026",
    description: "A comprehensive photographic record of the BK21 BigOCEAN delegation visit, featuring bilateral cooperation meetings, academic keynote seminars, graduate workshops, and campus laboratory tours.",
    coverImage: "/gallery/delegation/korean-delegation-featured.jpg",
    newsUrl: "/news/korean-delegation-visit",
    newsLabel: "Read Visit News",
    photos: [
      {
        url: "/gallery/delegation/korean-delegation-featured.jpg",
        caption: "Prof. Jinho Bae delivering an invited keynote lecture on advanced energy harvesting and international academic alliances at SBTÜ."
      },
      {
        url: "/gallery/delegation/korean-delegation-meeting.jpeg",
        caption: "SBTÜ university leadership and SRE² Lab faculty meeting with Jeju National University delegates to formalize bilateral research collaboration."
      },
      {
        url: "/gallery/delegation/korean-delegation-meeting1.jpeg",
        caption: "Technical discussions at the Senate Hall on high-output nanogenerator architectures and joint grant submissions."
      },
      {
        url: "/gallery/delegation/korean-delegation-seminar.jpg",
        caption: "Interactive research seminar and Q&A session with graduate researchers and faculty exploring self-powered electronic devices."
      },
      {
        url: "/gallery/delegation/korean-delegation-visit.jpg",
        caption: "Korean delegation inspecting laboratory test instrumentation, micro-fabrication benches, and synthesis setups at SRE² Lab."
      }
    ]
  },
  {
    id: "alb-campus",
    type: "album",
    title: "Academic Milestones, Ph.D. Defense & Campus Life",
    category: "Academic Delegations & Visits",
    date: "February 20, 2024",
    description: "A photographic retrospective spanning doctoral dissertation defense, graduation commencement, advanced institute visits, and laboratory collaboration.",
    coverImage: "/gallery/campus/phd-dissertation-defense-ceremony.jpg",
    photos: [
      {
        url: "/gallery/campus/phd-dissertation-defense-ceremony.jpg",
        caption: "Ph.D. Dissertation Defense: 'Enhanced Performance of Piezoelectric and Electrochemical Energy Storage Devices Based on Advanced Hybrid Nanomaterials' presented by Dr. Saqib with faculty committee."
      },
      {
        url: "/gallery/campus/doctoral-graduation-ceremony.jpg",
        caption: "Doctoral Commencement & Graduation Ceremony: Dr. Qazi Muhammad Saqib in doctoral regalia with Prof. Jinho Bae and research colleagues."
      },
      {
        url: "/gallery/campus/convergence-technology-institute.jpg",
        caption: "Academic delegation and research group at the Advanced Institutes of Convergence Technology."
      },
      {
        url: "/gallery/campus/thesis-seminar-presentation.jpg",
        caption: "Research symposium and seminar session on next-generation energy conversion materials."
      },
      {
        url: "/gallery/campus/campus-quad-researchers.jpg",
        caption: "Dr. Saqib with fellow academic researchers in the Jeju National University campus courtyard."
      },
      {
        url: "/gallery/campus/ocean-system-lab-members.jpg",
        caption: "Collaborative research gathering outside the Ocean Information System Laboratory."
      },
      {
        url: "/gallery/campus/research-team-academic-dinner.jpg",
        caption: "Laboratory dinner and team gathering with Prof. Jinho Bae celebrating project milestones."
      }
    ]
  },
  {
    id: "alb-02",
    type: "album",
    title: "SRE² Research Laboratory Launching & Inauguration Ceremony",
    category: "Ceremonies & Milestones",
    date: "August 15, 2026",
    description: "Official inaugural gathering and faculty milestone launching the Sustainability & Renewable Energy Research Laboratory at Sivas University of Science and Technology.",
    coverImage: "/gallery/launch/launch.jpg",
    newsUrl: "/news/launching-sre-rc",
    newsLabel: "Read Launch Story",
    photos: [
      {
        url: "/gallery/launch/launch.jpg",
        caption: "Official ceremony and faculty gathering commemorating the launch of the SRE² Research Laboratory at SBTÜ."
      }
    ]
  },
  {
    id: "vid-01",
    type: "video",
    title: "National Television Feature: Breakthrough Marine Electronics",
    category: "Broadcast & Demonstrations",
    date: "September 12, 2026",
    description: "SBS and JIBS national television network evening news broadcast profiling Dr. Qazi Muhammad Saqib's pioneering research on sustainable marine bio-waste utilization for self-powered electronics.",
    coverImage: "/cover-pages/image7.png",
    videoSrc: "/cover-pages/media1.mp4",
    newsUrl: "/news/korean-tv-broadcast-sargassum-electronics",
    newsLabel: "View Broadcast Report"
  },
  {
    id: "vid-02",
    type: "video",
    title: "Self-Powered Nanogenerator & Triboelectric Harvesting Demonstration",
    category: "Broadcast & Demonstrations",
    date: "August 25, 2026",
    description: "Operational laboratory demonstration displaying real-time biomechanical energy harvesting, capacitor charging, and sensory signal transduction powered autonomously by SRE² Lab nanogenerators.",
    coverImage: "/cover-pages/image8.png",
    videoSrc: "/cover-pages/media2.mp4"
  }
];

const categories = [
  "All",
  "Photo Albums",
  "Videos",
  "Academic Delegations & Visits",
  "Ceremonies & Milestones",
  "Broadcast & Demonstrations"
];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Filter items
  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Photo Albums") return item.type === "album";
    if (selectedCategory === "Videos") return item.type === "video";
    return item.category === selectedCategory;
  });

  const handleOpenItem = (item: GalleryItem) => {
    setActiveItem(item);
    setCurrentPhotoIndex(0);
  };

  const handleClose = () => {
    setActiveItem(null);
    setCurrentPhotoIndex(0);
  };

  const handlePrevPhoto = useCallback(() => {
    if (!activeItem || !activeItem.photos) return;
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : activeItem.photos!.length - 1));
  }, [activeItem]);

  const handleNextPhoto = useCallback(() => {
    if (!activeItem || !activeItem.photos) return;
    setCurrentPhotoIndex((prev) => (prev < activeItem.photos!.length - 1 ? prev + 1 : 0));
  }, [activeItem]);

  // Keyboard navigation
  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (activeItem.type === "album") {
        if (e.key === "ArrowLeft") handlePrevPhoto();
        if (e.key === "ArrowRight") handleNextPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeItem, handleNextPhoto, handlePrevPhoto]);

  return (
    <>
      {/* ── Filter Bar ───────────────────────────────────────── */}
      <section className="py-5 border-b border-slate-200/90 bg-white sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const count = galleryItems.filter((item) => {
                if (cat === "All") return true;
                if (cat === "Photo Albums") return item.type === "album";
                if (cat === "Videos") return item.type === "video";
                return item.category === cat;
              }).length;

              if (count === 0) return null;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    handleClose();
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-heading font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#00549d] text-white shadow-xs"
                      : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`ml-2 text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Media Cards Grid ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-slate-50/60">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => {
              const isVideo = item.type === "video";
              const photoCount = item.photos ? item.photos.length : 0;

              return (
                <div
                  key={item.id}
                  className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#00549d]/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Media Thumbnail Container — Strictly NO text overlay */}
                  <div
                    onClick={() => handleOpenItem(item)}
                    className="relative aspect-[16/10] bg-slate-900 overflow-hidden cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleOpenItem(item);
                      }
                    }}
                    aria-label={`${isVideo ? "Play video:" : "Open album:"} ${item.title}`}
                  >
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />

                    {/* Media Type Badge in Corner */}
                    <div className="absolute top-3.5 right-3.5 pointer-events-none">
                      {isVideo ? (
                        <div className="flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-heading font-bold px-3 py-1 rounded-full border border-white/15 shadow-md">
                          <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span>Video</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-heading font-bold px-3 py-1 rounded-full border border-white/15 shadow-md">
                          <svg className="w-3.5 h-3.5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{photoCount} {photoCount === 1 ? "Photo" : "Photos"}</span>
                        </div>
                      )}
                    </div>

                    {/* Center Play Button for Video */}
                    {isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-[#00549d]/90 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Clean Content Area Below Thumbnail */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between grow gap-4">
                    <div className="space-y-2.5">
                      {/* Meta row: Category Badge + Date */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20">
                          {item.category}
                        </span>
                        <span className="text-slate-400 font-mono text-xs">
                          {item.date}
                        </span>
                      </div>

                      {/* Title — Bold Black */}
                      <h3
                        onClick={() => handleOpenItem(item)}
                        className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl leading-snug cursor-pointer group-hover:text-[#00549d] transition-colors"
                      >
                        {item.title}
                      </h3>

                      {/* Description / Details — Soft legible slate */}
                      <p className="font-body text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Links Row */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-heading font-bold">
                      <button
                        onClick={() => handleOpenItem(item)}
                        className="inline-flex items-center gap-1.5 bg-[#00549d] hover:bg-[#003366] text-white px-4 py-2 rounded-lg uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
                      >
                        {isVideo ? (
                          <>
                            <span>Watch Video</span>
                            <span>▶</span>
                          </>
                        ) : (
                          <>
                            <span>View Photos ({photoCount})</span>
                            <span>&rarr;</span>
                          </>
                        )}
                      </button>

                      {item.newsUrl && (
                        <Link
                          href={item.newsUrl}
                          className="inline-flex items-center gap-1 text-slate-500 hover:text-[#00549d] transition-colors font-medium"
                          title="View related article"
                        >
                          <span>{item.newsLabel || "Related Story"}</span>
                          <span className="text-xs">&nearr;</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal (Multi-Photo Album & Video Player) ── */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="px-5 py-3.5 bg-slate-950/90 border-b border-white/10 flex items-center justify-between gap-4 text-white z-10">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <span
                  className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    activeItem.type === "video"
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      : "bg-[#00549d]/40 text-sky-200 border border-sky-400/30"
                  }`}
                >
                  {activeItem.type === "video" ? "Video Player" : "Photo Album"}
                </span>
                <span className="text-xs sm:text-sm font-heading text-slate-200 truncate">
                  {activeItem.title}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {activeItem.type === "album" && activeItem.photos && (
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    {currentPhotoIndex + 1} of {activeItem.photos.length}
                  </span>
                )}
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Media Display Area */}
            <div className="relative flex-1 bg-black min-h-[320px] sm:min-h-[480px] flex items-center justify-center overflow-hidden">
              {activeItem.type === "video" && activeItem.videoSrc ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={activeItem.coverImage}
                  className="w-full max-h-[65vh] object-contain"
                >
                  <source src={activeItem.videoSrc} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                activeItem.photos && activeItem.photos[currentPhotoIndex] && (
                  <div className="relative w-full h-[55vh] sm:h-[65vh]">
                    <Image
                      src={activeItem.photos[currentPhotoIndex].url}
                      alt={activeItem.photos[currentPhotoIndex].caption || activeItem.title}
                      fill
                      className="object-contain p-2"
                      sizes="100vw"
                      priority
                    />
                  </div>
                )
              )}

              {/* Prev / Next Buttons for Album */}
              {activeItem.type === "album" && activeItem.photos && activeItem.photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevPhoto();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                    aria-label="Previous photo"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextPhoto();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                    aria-label="Next photo"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Strip (for Albums with multiple photos) */}
            {activeItem.type === "album" && activeItem.photos && activeItem.photos.length > 1 && (
              <div className="px-5 py-2.5 bg-slate-950/90 border-t border-white/10 flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
                {activeItem.photos.map((photo, pIdx) => (
                  <button
                    key={photo.url}
                    onClick={() => setCurrentPhotoIndex(pIdx)}
                    className={`relative w-14 h-10 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      currentPhotoIndex === pIdx
                        ? "border-[#00549d] scale-105 shadow-md"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`Jump to photo ${pIdx + 1}`}
                  >
                    <Image src={photo.url} alt={`Thumbnail ${pIdx + 1}`} fill className="object-cover" sizes="56px" />
                  </button>
                ))}
              </div>
            )}

            {/* Bottom Caption Bar */}
            <div className="p-5 sm:p-6 bg-slate-950 border-t border-white/10 text-white space-y-1.5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-heading font-bold text-[#38bdf8]">
                  {activeItem.category}
                </span>
                <span className="text-slate-400 font-mono">{activeItem.date}</span>
              </div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                {activeItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-normal font-body leading-relaxed">
                {activeItem.type === "album" && activeItem.photos && activeItem.photos[currentPhotoIndex]?.caption
                  ? activeItem.photos[currentPhotoIndex].caption
                  : activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
