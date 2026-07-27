import Link from "next/link";
import { footer } from "@/lib/data/homepage-content";
import { NewsletterForm } from "@/components/home/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-bg-soft border-t border-border">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12 xl:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div>
            <span className="font-mono-brand text-lg font-bold text-white">
              BIG<span className="text-brand">x</span>REALITY
            </span>
            <p className="mt-4 text-body-sm text-text-muted">{footer.companyName}</p>
            <p className="mt-2 text-body-sm text-text-muted">{footer.address}</p>
            <a
              href={`mailto:${footer.email}`}
              className="mt-2 inline-block text-body-sm text-text-muted hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
            >
              {footer.email}
            </a>
          </div>

          <div>
            <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-text-faint mb-4">
              MENU
            </p>
            <ul className="flex flex-col gap-3">
              {footer.menu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-text-body2 hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-text-faint mb-4">
              ABOUT
            </p>
            <ul className="flex flex-col gap-3">
              {footer.about.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-text-body2 hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-text-faint mb-4">
              {footer.newsletter.label}
            </p>
            <NewsletterForm placeholder={footer.newsletter.placeholder} />
            <ul className="mt-6 flex items-center gap-4">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    title={s.note}
                    className="text-body-sm text-text-muted hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-caption text-text-faint">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
