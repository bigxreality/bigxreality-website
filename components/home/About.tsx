import { about } from "@/lib/data/homepage-content";
import { homepageMedia } from "@/lib/data/homepage-media";
import { Eyebrow } from "@/components/ui/Tag";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  const media = homepageMedia["about-main"];

  return (
    <section className="bg-bg py-15 md:py-[80px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
        <Reveal>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="text-h2-sm md:text-h2-md xl:text-h2 font-bold leading-[1.25] text-white">
            {about.title}
          </h2>
          <p className="mt-6 text-base leading-[1.75] text-text-body max-w-xl">{about.body}</p>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {about.stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-mono-brand text-stat font-extrabold leading-[1.1] text-brand block">
                    {stat.value}
                  </span>
                  <span className="text-body-sm text-text-muted mt-2 block">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <PlaceholderImage asset={media} className="rounded" />
        </Reveal>
      </div>
    </section>
  );
}
