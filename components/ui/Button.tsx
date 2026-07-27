import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded font-semibold text-[15px] md:text-base transition-colors duration-150 px-6 py-3 md:px-8 md:py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-hover active:bg-brand-active",
  secondary:
    "bg-transparent text-white border border-outline hover:bg-white/[0.08] hover:border-outline-hover",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
