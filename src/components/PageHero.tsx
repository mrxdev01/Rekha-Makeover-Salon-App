import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-luxe border-b border-border/60">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-rose/15 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        {eyebrow && (
          <p className="inline-block text-xs uppercase tracking-[0.3em] text-accent-foreground/70 mb-4">
            <span className="px-3 py-1 rounded-full border border-gold/40 bg-ivory/60">{eyebrow}</span>
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-balance">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
