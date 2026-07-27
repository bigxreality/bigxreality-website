import { caseStudies } from "@/lib/data/homepage-content";
import { homepageMedia } from "@/lib/data/homepage-media";
import { Eyebrow } from "@/components/ui/Tag";
import { Card } from "@/components/ui/Card";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudies() {
  return (
    <section className="bg-bg py-15 md:py-[80px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20">
        <Reveal>
          <Eyebrow>{caseStudies.eyebrow}</Eyebrow>
          <h2 className="text-h2-sm md:text-h2-md xl:text-h2 font-bold leading-[1.25] text-white">
            {caseStudies.title}
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.items.map((item, i) => {
            const media = homepageMedia[item.mediaId];
            return (
              <Reveal key={item.code} delay={i * 80}>
                <Card className="h-full flex flex-col">
                  <div className="relative">
                    <PlaceholderImage asset={media} className="h-[160px] md:h-[180px]" />
                    <span className="font-mono-brand absolute top-3 left-3 text-[10px] uppercase tracking-[0.08em] text-white bg-bg/60 border border-border-strong rounded px-2 py-1">
                      {item.code}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="font-mono-brand text-[11px] uppercase tracking-[0.06em] text-brand">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-h3 font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-body-sm leading-[1.6] text-text-muted flex-1">
                      {item.body}
                    </p>
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
