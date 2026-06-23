import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { BUSINESS, TESTIMONIALS, breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Rekha Makeover Salon — 4.9★ on Google, Jaipur" },
      { name: "description", content: "Read reviews of Rekha Makeover Salon in Pratap Nagar, Jaipur. Rated 4.9★ on Google Maps from 473 verified customers." },
      { property: "og:title", content: "Reviews — Rekha Makeover Salon" },
      { property: "og:description", content: "4.9★ on Google from 473 reviews. See what our clients say." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{name:"Home",path:"/"},{name:"Reviews",path:"/reviews"}])) }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Loved by Pratap Nagar" subtitle="Rated 4.9 ★ on Google Maps from 473 verified reviews." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-luxe border border-gold/30 p-8 sm:p-10 text-center shadow-soft">
          <div className="flex justify-center gap-1">
            {[0,1,2,3,4].map(i => <Star key={i} className="h-7 w-7 fill-accent text-accent" />)}
          </div>
          <p className="mt-4 font-display text-5xl">4.9 / 5</p>
          <p className="mt-2 text-muted-foreground">From 473 verified Google reviews · Pratap Nagar, Jaipur</p>
          <a href={BUSINESS.mapLink} target="_blank" rel="noopener noreferrer"
             className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-luxe">
            View on Google Maps
          </a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 60}>
              <figure className="h-full rounded-3xl bg-card border border-border p-6 shadow-soft">
                <div className="flex gap-0.5">{[0,1,2,3,4].map(j => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <blockquote className="mt-3 text-sm text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">— {t.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
