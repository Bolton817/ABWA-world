import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogPostsData } from "@/content/blog";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/seo/schema";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found | ABWA World",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://abwaworld.org/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://abwaworld.org/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.heroImage,
          alt: post.heroImageAlt,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPostsData.filter((p) => p.slug !== post.slug).slice(0, 2);

  const breadcrumbsList = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[getBlogPostingSchema(post), getBreadcrumbSchema(breadcrumbsList)]} />
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-slate-50/70 border-b border-slate-200/80 pt-10 pb-12 sm:pt-14 sm:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />

            {/* Meta Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-abwa-pale px-3.5 py-1 text-xs font-bold text-abwa-blue">
                {post.category}
              </span>
              <span className="text-abwa-ink/40">•</span>
              <span className="flex items-center gap-1.5 text-xs text-abwa-ink/70">
                <Clock className="h-3.5 w-3.5 text-abwa-blue" />
                {post.readTime}
              </span>
              <span className="text-abwa-ink/40">•</span>
              <span className="flex items-center gap-1.5 text-xs text-abwa-ink/70">
                <Calendar className="h-3.5 w-3.5 text-abwa-blue" />
                {post.publishedDate}
              </span>
            </div>

            {/* Single H1 Title */}
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-abwa-navy sm:text-4xl md:text-5xl leading-tight">
              {post.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-abwa-ink/80 font-normal">
              {post.subtitle}
            </p>

            {/* Author Line */}
            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-abwa-navy text-white text-xs font-bold">
                ABWA
              </div>
              <div>
                <p className="text-sm font-semibold text-abwa-navy">By the {post.author}</p>
                <p className="text-xs text-abwa-ink/60">Community Development Reflections • Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Hero Image */}
      <section className="bg-white pt-10 sm:pt-12">
        <Container>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Article Body */}
      <article className="bg-white py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10 text-abwa-ink">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="font-heading text-2xl font-bold tracking-tight text-abwa-navy sm:text-3xl pt-4">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg leading-relaxed text-abwa-ink/85">
                    {para}
                  </p>
                ))}

                {section.listItems && (
                  <ul className="mt-4 space-y-3 pl-2">
                    {section.listItems.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-3 text-base sm:text-lg leading-relaxed text-abwa-ink/85">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-abwa-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="mt-6 rounded-2xl border border-abwa-blue/20 bg-abwa-pale/60 p-6 sm:p-8">
                    {section.callout.title && (
                      <div className="flex items-center gap-2 text-abwa-blue">
                        <Sparkles className="h-5 w-5" />
                        <h3 className="font-heading text-lg font-bold text-abwa-navy">
                          {section.callout.title}
                        </h3>
                      </div>
                    )}
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-abwa-ink/80">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* End of article CTAs */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                Next Steps
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-abwa-navy">
                Where to learn more
              </h3>
              <p className="mt-2 text-base text-abwa-ink/80">
                Continue exploring our work or get in touch directly with our team in Nairobi.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {post.primaryCta && (
                  <Link
                    href={post.primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-abwa-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-abwa-blue hover:shadow-md"
                  >
                    <span>{post.primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
                {post.secondaryCta && (
                  <Link
                    href={post.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-abwa-ink shadow-sm transition hover:bg-slate-50"
                  >
                    <span>{post.secondaryCta.label}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Back to Blog link */}
            <div className="border-t border-slate-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-abwa-blue transition hover:text-abwa-navy"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to all blog articles</span>
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {/* 4. Related Articles Grid */}
      {relatedPosts.length > 0 && (
        <Section className="bg-slate-50/70 border-t border-slate-200">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-abwa-gold">
                    Further Reading
                  </span>
                  <h2 className="mt-1 font-heading text-2xl font-bold text-abwa-navy">
                    Related articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-abwa-blue hover:underline"
                >
                  <span>View all</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-abwa-blue/30 hover:shadow-md"
                  >
                    <div>
                      <span className="rounded-full bg-abwa-pale px-3 py-1 text-xs font-bold text-abwa-blue">
                        {related.category}
                      </span>
                      <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-abwa-navy hover:text-abwa-blue">
                        <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                      </h3>
                      <p className="mt-2 text-sm text-abwa-ink/75 line-clamp-2">
                        {related.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold text-abwa-blue hover:text-abwa-navy"
                      >
                        <span>Read article</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
