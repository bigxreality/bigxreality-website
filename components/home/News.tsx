import Link from "next/link";
import { news } from "@/lib/data/homepage-content";
import { Eyebrow } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function News() {
  const [main, ...secondary] = news.items;

  return (
    <section className="bg-navy-800 py-15 md:py-[80px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Eyebrow>{news.eyebrow}</Eyebrow>
            <h2 className="text-h2-sm md:text-h2-md xl:text-h2 font-bold leading-[1.25] text-white">
              {news.title}
            </h2>
          </div>
          <Link
            href={news.moreLink.href}
            className="text-brand hover:text-brand-hover text-[15px] font-semibold w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
          >
            {news.moreLink.label} →
          </Link>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal>
            <Link
              href={main.href}
              className="group block border-t-2 border-brand pt-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
            >
              <span className="font-mono-brand text-caption text-text-faint">{main.date}</span>
              <span className="font-mono-brand ml-3 text-[11px] uppercase tracking-[0.06em] text-brand">
                {main.category}
              </span>
              <h3 className="mt-3 text-h2-sm md:text-h2-md font-bold leading-[1.3] text-white group-hover:text-brand transition-colors">
                {main.title}
              </h3>
            </Link>
          </Reveal>

          <Reveal delay={100} className="flex flex-col divide-y divide-border">
            {secondary.map((item) => (
              <Link
                key={item.href + item.date}
                href={item.href}
                className="group py-4 first:pt-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
              >
                <span className="font-mono-brand text-caption text-text-faint">{item.date}</span>
                <span className="font-mono-brand ml-3 text-[11px] uppercase tracking-[0.06em] text-text-muted">
                  {item.category}
                </span>
                <h4 className="mt-1 text-h3 font-medium leading-[1.4] text-text-body2 group-hover:text-brand transition-colors">
                  {item.title}
                </h4>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
