import { missionCta } from "@/lib/data/homepage-content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-600 to-bg py-15 md:py-[80px] xl:py-30">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20 text-center">
        <Reveal>
          <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-brand mb-4">
            {missionCta.eyebrow}
          </p>
          <h2 className="text-h2-sm md:text-h2-md xl:text-h2 font-bold leading-[1.25] text-white max-w-3xl mx-auto">
            {missionCta.title}
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href={missionCta.ctaPrimary.href} variant="primary">
              {missionCta.ctaPrimary.label}
            </Button>
            <Button href={missionCta.ctaSecondary.href} variant="secondary">
              {missionCta.ctaSecondary.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
