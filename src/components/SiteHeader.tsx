import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
import logo from "@/assets/logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-xl shadow-[0_2px_20px_-8px_rgba(36,24,38,0.15)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group min-w-0">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-luxe ring-1 ring-gold/40 shadow-soft overflow-hidden">
            <img src={logo} alt="Rekha Makeover Salon logo" width={44} height={44} className="object-contain h-9 w-9" />
          </span>
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-display text-lg font-semibold text-foreground truncate">Rekha</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-accent-foreground/70 -mt-0.5 truncate">Makeover Salon</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(([label, path]) => {
            const active = pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={BUSINESS.tel}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Phone className="h-4 w-4 text-accent" /> Call
          </a>
          <a
            href={BUSINESS.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" /> Book Now
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden relative shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground ring-1 ring-gold/50 shadow-soft hover:opacity-90 active:scale-95 transition-all"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] isolate lg:hidden">
          <button
            aria-label="Close menu overlay"
            className="absolute inset-0 h-full w-full bg-plum-deep/75 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed inset-y-0 right-0 z-[110] flex h-dvh w-full max-w-[410px] flex-col overflow-y-auto border-l border-gold/30 bg-background bg-gradient-luxe shadow-luxe"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gold/20 bg-background/95 px-5 py-4 shadow-soft backdrop-blur-xl">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-luxe ring-1 ring-gold/40">
                  <img src={logo} alt="" width={40} height={40} className="h-8 w-8 object-contain" />
                </span>
                <span className="font-display text-xl font-semibold text-foreground">Menu</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-accent-foreground ring-1 ring-gold/50 shadow-soft transition-transform active:scale-95"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="grid gap-3 px-5 py-6">
              {NAV.map(([label, path]) => {
                const active = pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={`group flex min-h-14 items-center justify-between rounded-2xl border px-5 text-base font-semibold shadow-soft transition-all ${
                      active
                        ? "border-gold/50 bg-gradient-gold text-accent-foreground"
                        : "border-gold/20 bg-card/90 text-foreground hover:border-gold/45 hover:bg-secondary"
                    }`}
                  >
                    <span>{label}</span>
                    <span
                      className={`h-2 w-2 rounded-full transition-opacity ${
                        active ? "bg-accent-foreground opacity-100" : "bg-accent opacity-35 group-hover:opacity-80"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto grid gap-3 border-t border-gold/20 bg-background/80 px-5 py-5 backdrop-blur-xl">
              <a
                href={BUSINESS.tel}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-card/80 px-4 text-sm font-semibold text-foreground shadow-soft hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-accent" /> Call {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 text-sm font-bold text-accent-foreground shadow-soft"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
