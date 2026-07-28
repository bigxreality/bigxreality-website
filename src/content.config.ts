import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const locale = z.enum(["zh-tw", "en", "jp"]);

const media = z.object({
  src: z.string(),
  alt: z.string(),
});

const youtubeVideo = z.object({
  id: z.string(),
  title: z.string(),
});

const gallery = z.array(media).default([]);

const cta = z
  .object({
    label: z.string(),
    href: z.string(),
  })
  .optional();

const solutions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/solutions" }),
  schema: z.object({
    locale,
    itemSlug: z.string(),
    order: z.number(),
    code: z.string(),
    title: z.string(),
    excerpt: z.string(),
    industry: z.string(),
    image: media,
    relatedProducts: z.array(z.string()).default([]),
    relatedCaseStudies: z.array(z.string()).default([]),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    locale,
    itemSlug: z.string(),
    category: z.enum(["law-enforcement", "defense"]),
    modelCode: z.string(),
    title: z.string(),
    excerpt: z.string(),
    image: media,
    pdfHref: z.string().optional(),
    relatedSolutions: z.array(z.string()).default([]),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/caseStudies" }),
  schema: z.object({
    locale,
    itemSlug: z.string(),
    order: z.number(),
    code: z.string(),
    category: z.string(),
    title: z.string(),
    excerpt: z.string(),
    image: media,
    relatedSolution: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    locale,
    itemSlug: z.string(),
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string(),
    coverImage: media,
    publishDate: z.coerce.date(),
    gallery,
    youtubeVideos: z.array(youtubeVideo).default([]),
    quote: z.string().optional(),
    cta,
    relatedProducts: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    locale,
    itemSlug: z.string(),
    title: z.string(),
    excerpt: z.string().optional(),
    category: z.string(),
    coverImage: media,
    publishDate: z.coerce.date(),
    gallery,
    youtubeVideos: z.array(youtubeVideo).default([]),
    quote: z.string().optional(),
    cta,
    relatedProducts: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    locale,
    itemSlug: z.string(),
    category: z.string(),
    question: z.string(),
    relatedProduct: z.string().optional(),
  }),
});

const siteSettings = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/siteSettings" }),
  schema: z.object({
    locale,
    nav: z.object({
      primary: z.array(z.object({ label: z.string(), href: z.string() })),
      cta: z.object({ label: z.string(), href: z.string() }),
    }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      ctaPrimary: z.object({ label: z.string(), href: z.string() }),
      ctaSecondary: z.object({ label: z.string(), href: z.string() }),
      slides: z.array(media).default([]),
    }),
    about: z.object({
      eyebrow: z.string(),
      title: z.string(),
      body: z.string(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })),
      image: media,
    }),
    whyXr: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      points: z.array(
        z.object({ index: z.string(), title: z.string(), body: z.string() })
      ),
    }),
    realityXr: z.object({
      eyebrow: z.string(),
      title: z.string(),
      steps: z.array(
        z.object({ code: z.string(), label: z.string(), body: z.string() })
      ),
    }),
    missionCta: z.object({
      eyebrow: z.string(),
      title: z.string(),
      ctaPrimary: z.object({ label: z.string(), href: z.string() }),
      ctaSecondary: z.object({ label: z.string(), href: z.string() }),
    }),
    sectionLabels: z.object({
      solutions: z.string(),
      solutionsAllLink: z.string(),
      caseStudies: z.string(),
      news: z.string(),
      newsMoreLink: z.string(),
      trustedBy: z.string(),
      learnMore: z.string(),
    }),
    trustedBy: z.array(z.string()).default([]),
    footer: z.object({
      companyName: z.string(),
      address: z.string(),
      email: z.string(),
      menu: z.array(z.object({ label: z.string(), href: z.string() })),
      about: z.array(z.object({ label: z.string(), href: z.string() })),
      newsletterLabel: z.string(),
      newsletterPlaceholder: z.string(),
      subscribeLabel: z.string(),
      copyright: z.string(),
    }),
  }),
});

export const collections = {
  solutions,
  products,
  caseStudies,
  news,
  insights,
  faq,
  siteSettings,
};
