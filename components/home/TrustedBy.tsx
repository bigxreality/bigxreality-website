import { trustedBy } from "@/lib/data/homepage-content";
import { Reveal } from "@/components/ui/Reveal";

export function TrustedBy() {
  return (
    <section className="bg-bg py-10 md:py-12 border-y border-border">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20">
        <Reveal>
          <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-text-faint mb-6 text-center md:text-left">
            {trustedBy.eyebrow}
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4">
            {trustedBy.items.map((item) => (
              <li key={item} className="text-body-sm text-text-muted">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
