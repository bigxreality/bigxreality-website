import Link from "next/link";
import { solutions } from "@/lib/data/homepage-content";
import { homepageMedia } from "@/lib/data/homepage-media";
import { Eyebrow } from "@/components/ui/Tag";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function Solutions() {
  const [featured, ...rest] = solutions.items;
  const featuredMedia = homepageMedia[featured.mediaId];

  return (
    <section className="bg-bg py-15 md:py-[80px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Eyebrow>{solutions.eyebrow}</Eyebrow>
            <h2 className="text-h2-sm md:text-h2-md xl:text-h2 font-bold leading-[1.25] text-white">
              {solutions.title}
            </h2>
          </div>
          <Link
            href={solutions.allLink.href}
            className="text-brand hover:text-brand-hover text-[15px] font-semibold w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
          >
            {solutions.allLink.label} →
          </Link>
        </Reveal>

        {/* Featured, horizontal solution card */}
        <Reveal className="mt-10 md:mt-12">
          <Card href={featured.href} className="md:flex md:flex-row-reverse">
            <div className="relative md:w-1/2">
              <PlaceholderImage asset={featuredMedia} className="h-full min-h-[220px]" />
              <span className="font-mono-brand absolute top-3 left-3 text-[10px] uppercase tracking-[0.08em] text-text-muted bg-bg/60 border border-border-strong rounded px-2 py-1">
                {solutions.systemLabel}
              </span>
            </div>
            <div className="p-5 md:p-8 md:w-1/2 flex flex-col justify-center">
              <span className="font-mono-brand text-[11px] uppercase tracking-[0.06em] text-brand">
                {featured.code}
              </span>
              <h3 className="mt-2 text-h3 font-semibold text-white">{featured.title}</h3>
              <p className="mt-2 text-body-sm leading-[1.6] text-text-muted">{featured.body}</p>
              <span className="mt-4 text-brand group-hover:text-brand-hover text-[15px] font-semibold">
                了解更多 →
              </span>
            </div>
          </Card>
        </Reveal>

        {/* Remaining solutions, uniform grid cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((item, i) => {
            const media = homepageMedia[item.mediaId];
            return (
              <Reveal key={item.code} delay={i * 80}>
                <Card href={item.href} className="h-full flex flex-col">
                  <div className="relative">
                    <PlaceholderImage asset={media} className="h-[160px] md:h-[180px]" />
                    <div className="absolute inset-0 flex items-start justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-mono-brand text-[10px] uppercase tracking-[0.08em] text-white bg-brand/80 rounded px-2 py-1">
                        XR VIEW
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="font-mono-brand text-[11px] uppercase tracking-[0.06em] text-brand">
                      {item.code}
                    </span>
                    <h3 className="mt-2 text-h3 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-body-sm leading-[1.6] text-text-muted flex-1">
                      {item.body}
                    </p>
                    <span className="mt-4 text-brand group-hover:text-brand-hover text-[15px] font-semibold">
                      了解更多 →
                    </span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
