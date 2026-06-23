import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-gradient-plum text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-ivory/10 ring-1 ring-gold/40 overflow-hidden">
              <img src={logo} alt="Rekha Makeover Salon" width={48} height={48} className="object-contain h-10 w-10" />
            </span>
            <div>
              <p className="font-display text-2xl text-ivory">Rekha Makeover Salon</p>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">{BUSINESS.tagline}</p>
            </div>
          </div>
          <p className="mt-5 text-ivory/75 max-w-md text-sm leading-relaxed">
            Premium beauty, bridal makeup, hair, skin, nails and grooming services in
            Pratap Nagar, Jaipur. Rated 4.9 ★ on Google Maps from 473 reviews.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1.5 text-xs">
            <Star className="h-3.5 w-3.5 text-gold fill-current" /> 4.9 on Google · 473 reviews
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg text-gold">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-ivory/75 hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg text-gold">Visit Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-ivory/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />{BUSINESS.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><a href={BUSINESS.tel} className="hover:text-gold">{BUSINESS.phone}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" />{BUSINESS.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ivory/60">
          <p>© {year} Rekha Makeover Salon · All rights reserved.</p>
          <p>Beauty Salon & Makeup Artist · Pratap Nagar, Jaipur</p>
        </div>
      </div>
    </footer>
  );
}
