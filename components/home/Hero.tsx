import { hero } from "@/lib/data/homepage-content";
import { homepageMedia } from "@/lib/data/homepage-media";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  const media = homepageMedia["hero-main"];

  return (
    <section className="relative isolate overflow-hidden bg-navy-800 pt-16 md:pt-20">
      <div className="absolute inset-0 -z-10">
        <PlaceholderImage asset={media} className="h-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-navy-800/60 to-navy-800/20" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20 pt-16 pb-24 md:pt-24 md:pb-32 xl:pt-32 xl:pb-40">
        <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-brand mb-6">
          {hero.eyebrow}
        </p>
        <h1 className="text-h1-sm md:text-h1-md xl:text-h1 font-extrabold leading-[1.12] text-white max-w-4xl">
          {hero.title}
        </h1>
        <p className="mt-6 text-base md:text-lg leading-[1.75] text-text-body max-w-2xl">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button href={hero.ctaPrimary.href} variant="primary">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="secondary">
            {hero.ctaSecondary.label} →
          </Button>
        </div>
      </div>

      <div
        className="hidden md:flex absolute right-8 xl:right-20 top-24 flex-col items-end gap-2 font-mono-brand text-[11px] uppercase tracking-[0.08em] text-text-muted"
        aria-hidden
      >
        {hero.overlayLabels.map((label) => (
          <span key={label} className="rounded border border-border-strong bg-bg/40 px-2 py-1">
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
