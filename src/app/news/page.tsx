import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/lib/info_helper.server";

export const metadata = {
  title: "SRE² Lab - News & Announcements",
  description:
    "Official news, academic delegations, institutional milestones, and media announcements from the Sustainability & Renewable Energy Research Laboratory (SRE² Lab).",
};

// Map each news article to an optional verified external source link
const externalLinksMap: Record<string, { url: string; label: string }> = {
  "korean-media-cej-mxene-energy": {
    url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2191086",
    label: "E-News Today Press Article"
  },
  "korean-media-advanced-science-mof": {
    url: "https://www.veritas-a.com/news/articleView.html?idxno=522211",
    label: "Veritas Alpha Press Article"
  },
  "korean-tv-broadcast-sargassum-electronics": {
    url: "https://doi.org/10.1016/j.nantod.2024.102379",
    label: "Nano Today Publication Source"
  },
  "korean-media-advanced-materials-3d-fal": {
    url: "https://www.enewstoday.co.kr/news/articleView.html?idxno=2094440",
    label: "E-News Today Press Article"
  },
  "korean-media-jejudomin-top-journals": {
    url: "https://www.jejudomin.co.kr/news/articleView.html?idxno=306689",
    label: "Jeju Domin Ilbo Press Article"
  },
  "korean-media-seagrass-nano-energy": {
    url: "https://www.headlinejeju.co.kr/news/articleView.html?idxno=462747",
    label: "Headline Jeju Press Article"
  },
  "korean-delegation-visit": {
    url: "https://www.sivas.edu.tr/hdetay/jeju-ulusal-universitesi-bk21-bigocean-arastirma-grubundan-sbtuye-ziyaret-1637",
    label: "Official SBTÜ Press Release"
  },
  "launching-sre-rc": {
    url: "https://www.sbtu.edu.tr",
    label: "SBTÜ Institutional Portal"
  }
};

export default function News() {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

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
              News
            </span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
            News &amp; <span className="text-[#00549d]">Announcements</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-600 font-body leading-relaxed">
            Latest events, bilateral academic delegations, scientific milestones, and institutional press coverage from the Sustainability &amp; Renewable Energy Research Laboratory (SRE² Lab) at SBTÜ.
          </p>
        </div>
      </section>

      {/* ── Main News Stream (Clean Vertical List) ───────────── */}
      <section className="py-14 sm:py-20 bg-slate-50/60">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
              Laboratory Updates &amp; Events
            </h2>
            <span className="text-xs font-heading font-semibold text-slate-500 uppercase tracking-wider">
              {sortedNews.length} Stories
            </span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {sortedNews.map((post) => {
              const ext = externalLinksMap[post.slug];
              const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <article
                  key={post.id}
                  className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden hover:border-[#00549d]/50 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-stretch"
                >
                  {/* Left Column: Image (clean, NO text overlay) */}
                  {post.img_file_name && (
                    <div className="relative w-full md:w-80 md:min-h-[220px] aspect-[16/10] md:aspect-auto bg-slate-100 shrink-0 overflow-hidden">
                      <Image
                        src={`/news/img/${post.img_file_name}`}
                        alt={post.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    </div>
                  )}

                  {/* Right Column: Content Details */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between grow gap-4">
                    <div className="space-y-3">
                      {/* Meta row: Date + Event Type Badge */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-heading font-bold uppercase tracking-wider bg-[#00549d]/10 text-[#00549d] border border-[#00549d]/20">
                          {post.category}
                        </span>
                        <span className="text-slate-300">&bull;</span>
                        <time
                          dateTime={post.date}
                          className="text-xs font-mono text-slate-500 font-medium"
                        >
                          {formattedDate}
                        </time>
                      </div>

                      {/* Headline */}
                      <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-slate-900 group-hover:text-[#00549d] transition-colors leading-snug">
                        <Link href={`/news/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm md:text-base text-slate-600 font-body leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Action Links Row */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-heading font-bold">
                      <Link
                        href={`/news/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-[#00549d] hover:text-[#003366] transition-colors uppercase tracking-wider"
                      >
                        <span>Read Full Story</span>
                        <span>&rarr;</span>
                      </Link>

                      {ext && (
                        <a
                          href={ext.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-500 hover:text-[#00549d] transition-colors font-medium"
                          title="View external verified source"
                        >
                          <span>{ext.label}</span>
                          <span className="text-xs">&nearr;</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
