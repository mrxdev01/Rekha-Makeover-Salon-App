import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { BUSINESS, FAQS, breadcrumb, faqJsonLd, salonJsonLd } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rekha Makeover Salon | Pratap Nagar, Jaipur" },
      { name: "description", content: "Visit, call or WhatsApp Rekha Makeover Salon at 101, Kumbha Marg, Pratap Nagar, Jaipur. Open 9 AM–9 PM, all 7 days." },
      { property: "og:title", content: "Contact — Rekha Makeover Salon" },
      { property: "og:description", content: "Kumbha Marg, Pratap Nagar, Jaipur. Open 9 AM–9 PM all 7 days." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(salonJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb([{name:"Home",path:"/"},{name:"Contact",path:"/contact"}])) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call", value: BUSINESS.phone, href: BUSINESS.tel },
    { icon: MessageCircle, label: "WhatsApp", value: "+91 70141 12074", href: BUSINESS.waLink },
    { icon: MapPin, label: "Visit", value: BUSINESS.addressShort, href: BUSINESS.mapLink },
    { icon: Clock, label: "Open", value: BUSINESS.hours, href: BUSINESS.mapLink },
  ];

  return (
    <>
      <PageHero eyebrow="Get in touch" title="Visit Rekha Makeover Salon" subtitle="We'd love to welcome you. Call, WhatsApp or stop by — we're open all 7 days." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 60}>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                 className="group block h-full rounded-3xl border border-border bg-card p-6 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-luxe ring-1 ring-gold/40">
                  <c.icon className="h-5 w-5 text-accent-foreground" />
                </span>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-medium leading-snug">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">Studio Address</p>
              <h2 className="mt-3 font-display text-2xl">Find us in Pratap Nagar</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{BUSINESS.address}</p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gradient-luxe px-3 py-1.5 text-xs">
                <Star className="h-3.5 w-3.5 text-accent fill-current" /> 4.9 on Google · 473 reviews
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={BUSINESS.waLink} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft">
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
                <a href={BUSINESS.mapLink} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold">
                  <MapPin className="h-4 w-4 text-accent" /> Get Directions
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-soft h-full min-h-[360px]">
              <iframe
                title="Rekha Makeover Salon on Google Maps"
                src={BUSINESS.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">FAQ</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Frequently asked questions</h2>
          </div>
          <div className="mt-8 mx-auto max-w-3xl grid gap-3">
            {FAQS.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                  {f.q}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-accent-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
