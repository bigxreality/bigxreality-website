"use client";

export function NewsletterForm({ placeholder }: { placeholder: string }) {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="footer-email" className="sr-only">
        {placeholder}
      </label>
      <input
        id="footer-email"
        type="email"
        placeholder={placeholder}
        className="flex-1 min-w-0 bg-bg border border-border-strong rounded px-3 py-2.5 text-[13px] text-white placeholder:text-text-muted focus:outline-none focus:border-brand"
      />
      <button
        type="submit"
        className="bg-brand hover:bg-brand-hover text-white rounded px-4 py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        訂閱
      </button>
    </form>
  );
}
