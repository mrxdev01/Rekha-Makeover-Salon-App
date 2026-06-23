import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, SERVICES, breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Bridal Makeup, Hair & Skin — Rekha Salon, Jaipur" },
      { name: "description", content: "Full service menu at Rekha Makeover Salon, Pratap Nagar — bridal makeup, airbrush, party makeup, hair spa, color, facials, nails & waxing." },
      { property: "og:title", content: "Services — Rekha Makeover Salon" },
      { property: "og:description", content: "Bridal, party, hair, skin & nail services in Pratap Nagar, Jaipur." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{name:"Home",path:"/"},{name:"Services",path:"/services"}])) }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="A complete beauty menu" subtitle="Everything you need for everyday confidence and unforgettable occasions — under one premium roof.">
        <a href={BUSINESS.waLink} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-luxe">
          <MessageCircle className="h-4 w-4" /> Book on WhatsApp
        </a>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-luxe ring-1 ring-gold/40">
                  <s.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="mt-5 font-display text-xl">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex gap-2">
                  <a href={BUSINESS.waLink} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition">
                    <MessageCircle className="h-3.5 w-3.5" /> Book
                  </a>
                  <a href={BUSINESS.tel} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium">
                    <Phone className="h-3.5 w-3.5" /> Call
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
