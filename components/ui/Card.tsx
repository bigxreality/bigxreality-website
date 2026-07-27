import Link from "next/link";
import type { ReactNode } from "react";

export function Card({
  href,
  children,
  className = "",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `group bg-bg-soft border border-border rounded overflow-hidden transition-all duration-200 hover:border-brand hover:-translate-y-0.5 ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={`${classes} block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
      >
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
