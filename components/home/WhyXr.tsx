import { whyXr } from "@/lib/data/homepage-content";
import { Eyebrow } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function WhyXr() {
  return (
    <section className="bg-navy-800 py-15 md:py-[80px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>{whyXr.eyebrow}</Eyebrow>
          <h2 className="text-h2-sm md:text-h2-md xl:text-h2 font-bold leading-[1.25] text-white">
            {whyXr.title}
          </h2>
          <p className="mt-6 text-base leading-[1.75] text-text-body">{whyXr.subtitle}</p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
          {whyXr.points.map((point, i) => (
            <Reveal key={point.index} delay={i * 60}>
              <div className="border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                <span className="font-mono-brand text-2xl font-extrabold text-brand">
                  {point.index}
                </span>
                <h3 className="mt-3 text-h3 font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-body-sm leading-[1.6] text-text-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
