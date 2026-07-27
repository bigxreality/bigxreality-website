"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data/homepage-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-bg-soft/95 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-12 xl:px-20 h-16 md:h-20">
        <Link
          href="/tw/home"
          className="font-mono-brand text-lg md:text-xl font-bold text-white tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
        >
          BIG<span className="text-brand">x</span>REALITY
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-body-sm md:text-[15px] text-text-body2 hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center rounded border border-border-strong overflow-hidden text-[12px]">
            {nav.languages.map((lang) => (
              <Link
                key={lang.code}
                href={lang.href}
                aria-current={lang.current ? "true" : undefined}
                className={`px-3 py-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand ${
                  lang.current ? "bg-white/[0.06] text-white" : "text-text-muted hover:text-white"
                }`}
              >
                {lang.label}
              </Link>
            ))}
          </div>
          <Link
            href={nav.cta.href}
            className="bg-brand hover:bg-brand-hover text-white rounded px-5 py-2.5 text-[15px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {nav.cta.label}
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-y-auto bg-bg-soft border-t border-border transition-[max-height] duration-300 ${
          menuOpen ? "max-h-[calc(100vh-4rem)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-body text-text-body2 border-b border-border last:border-b-0 hover:text-brand transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 pb-6 flex flex-col gap-4">
          <div className="flex items-center rounded border border-border-strong overflow-hidden text-[12px] w-fit">
            {nav.languages.map((lang) => (
              <Link
                key={lang.code}
                href={lang.href}
                aria-current={lang.current ? "true" : undefined}
                className={`px-3 py-1.5 transition-colors ${
                  lang.current ? "bg-white/[0.06] text-white" : "text-text-muted hover:text-white"
                }`}
              >
                {lang.label}
              </Link>
            ))}
          </div>
          <Link
            href={nav.cta.href}
            onClick={() => setMenuOpen(false)}
            className="bg-brand hover:bg-brand-hover text-white rounded px-5 py-3 text-[15px] font-semibold text-center transition-colors"
          >
            {nav.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
