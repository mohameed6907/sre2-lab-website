import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { newsData } from "@/lib/info_helper.server";
import { MarkdownContent } from "@/app/components/MarkdownContent";

export async function generateStaticParams() {
  return newsData.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const slug = params.slug;

  let post = newsData.find((post) => post.slug === slug);

  if (!post) {
    post = newsData.find((post) => post.id.toString() === slug);
    if (post) {
      redirect(`/news/${post.slug}`);
    }
  }

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested news post could not be found.",
    };
  }

  const postUrl = `https://sre2lab.org.tr/news/${post.slug}`;
  const imageUrl = post.img_file_name ? `/news/img/${post.img_file_name}` : "/Logo/SRE2_Logo_Primary.png";

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const slug = params.slug;

  let post = newsData.find((post) => post.slug === slug);

  if (!post) {
    post = newsData.find((post) => post.id.toString() === slug);
    if (post) {
      redirect(`/news/${post.slug}`);
    }
  }

  if (!post) {
    notFound();
  }

  const mdFilePath = path.join(
    process.cwd(),
    "public",
    "news",
    "md",
    post.md_file_name as string,
  );

  let mdContent;
  try {
    mdContent = fs.readFileSync(mdFilePath, "utf8");
  } catch (error) {
    console.error(`Error reading markdown file: ${error}`);
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": `https://sre2lab.org.tr/news/${post.slug}`,
    "image": post.img_file_name
      ? [`https://sre2lab.org.tr/news/img/${post.img_file_name}`]
      : ["https://sre2lab.org.tr/Logo/SRE2_Logo_Primary.png"],
    "author": {
      "@type": "Person",
      "name": "Dr. Qazi Muhammad Saqib",
      "url": "https://sre2lab.org.tr/pi"
    },
    "publisher": {
      "@type": "ResearchOrganization",
      "name": "Sustainability & Renewable Energy Research Laboratory (SRE² Lab)",
      "url": "https://sre2lab.org.tr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sre2lab.org.tr/Logo/SRE2_Logo_Primary.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* ── Article Header ─────────────────────────────────────── */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 border-b border-slate-200">
        <div className="container-custom max-w-4xl fade-up">
          <Link
            href="/news"
            className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-slate-600 hover:text-emerald-700 transition-colors mb-10 group"
          >
            <span className="h-px w-8 bg-slate-300 group-hover:w-12 group-hover:bg-emerald-600 transition-all duration-500" />
            Back to News
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-emerald-700 px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-white rounded-sm">
              {post.category}
            </span>
            <span className="h-px w-8 bg-slate-300" />
            <span className="font-heading text-[11px] font-medium tracking-[0.24em] uppercase text-slate-500">
              {post.date}
            </span>
          </div>

          <h1 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] leading-[1.1]">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-8 text-base md:text-lg text-slate-700 font-body leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* ── Article Body ───────────────────────────────────────── */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-3xl">
          {post.img_file_name && (
            <div className="relative aspect-[16/9] mb-12 md:mb-16 overflow-hidden rounded-sm bg-slate-100">
              <Image
                src={`/news/img/${post.img_file_name}`}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none text-slate-800 font-body">
            <MarkdownContent content={mdContent} />
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 text-xs font-heading tracking-[0.24em] uppercase text-slate-600 hover:text-emerald-700 transition-colors group"
            >
              <span className="h-px w-8 bg-slate-300 group-hover:w-12 group-hover:bg-emerald-600 transition-all duration-500" />
              All News
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
