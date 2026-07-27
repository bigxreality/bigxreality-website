import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-brand bg-brand-12 border border-brand-35 font-mono-brand">
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-brand text-label font-bold uppercase tracking-[0.1em] text-text-muted mb-2">
      {children}
    </p>
  );
}
