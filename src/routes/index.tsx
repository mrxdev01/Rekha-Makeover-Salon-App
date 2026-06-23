import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Star, ArrowRight, Sparkles, Check } from "lucide-react";
import { BUSINESS, SERVICES, REASONS, TESTIMONIALS, FAQS, AWARDS, salonJsonLd, faqJsonLd, abs } from "@/lib/business";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import bridalImg from "@/assets/g-bridal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rekha Makeover Salon | Bridal Makeup & Beauty Salon in Pratap Nagar, Jaipur" },
      { name: "description", content: "Premium beauty salon in Pratap Nagar, Jaipur. Bridal makeup, party makeup, hair, skin, nails & grooming. Rated 4.9★ on Google from 473 reviews." },
      { property: "og:title", content: "Rekha Makeover Salon | Bridal Makeup in Pratap Nagar, Jaipur" },
      { property: "og:description", content: "Premium bridal & party makeup, hair, skin and grooming in Pratap Nagar, Jaipur. Rated 4.9★ on Google." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: abs("/og-cover.jpg") },
      { name: "twitter:title", content: "Rekha Makeover Salon | Pratap Nagar, Jaipur" },
      { name: "twitter:description", content: "Bridal & party makeup, hair, skin, nails. Rated 4.9★ on Google from 473 reviews." },
      { name: "twitter:image", content: abs("/og-cover.jpg") },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(salonJsonLd()) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd()) },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-luxe">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-rose/20 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/70 px-3.5 py-1.5 text-xs uppercase tracking-[0.22em] text-accent-foreground/80">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Premium Makeover Studio
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-foreground text-balance">
              Where Beauty Meets <span className="italic text-rose">Elegance</span> in Pratap Nagar
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl text-balance">
              Expert bridal makeup, party glam, hair, skin, nails & grooming — crafted to
              enhance your natural beauty. Trusted by Jaipur's most discerning clients.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-soft">
              <div className="flex">
                {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <span className="text-sm font-semibold">4.9</span>
              <span className="text-sm text-muted-foreground">on Google · 473 reviews</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={BUSINESS.waLink} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-luxe hover:opacity-95 transition">
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a href={BUSINESS.tel}
                 className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={BUSINESS.mapLink} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary transition">
                <MapPin className="h-4 w-4 text-accent" /> Get Directions
              </a>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-3 max-w-md">
              {AWARDS.map((a) => (
                <div key={a.label} className="rounded-2xl bg-card/70 backdrop-blur border border-border/70 p-3 text-center">
                  <p className="font-display text-xl text-accent-foreground">{a.value}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{a.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-gold/40 blur-2xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold/30 shadow-luxe">
              <img src={heroImg} alt="Bridal makeup at Rekha Makeover Salon, Pratap Nagar Jaipur" className="h-full w-full object-cover" width={1024} height={1280} />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/90 backdrop-blur p-4 border border-border/60 shadow-soft">
                <p className="font-display text-lg leading-tight">Bridal Glow Studio</p>
                <p className="text-xs text-muted-foreground mt-0.5">Open today · 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <SectionHeader eyebrow="Our Signature Services" title="Crafted for every occasion" subtitle="From everyday grooming to the biggest day of your life — every service is delivered with quality, comfort and care." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 9).map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group h-full rounded-3xl border border-border/70 bg-card p-6 shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-luxe ring-1 ring-gold/40">
                  <s.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground hover:gap-3 transition-all">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* BRIDAL HIGHLIGHT */}
      <section className="bg-gradient-plum text-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold/40 shadow-luxe">
              <img src={bridalImg} alt="Bridal makeover specialist in Pratap Nagar Jaipur" className="h-full w-full object-cover" width={800} height={1000} loading="lazy" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">For Your Special Day</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-ivory text-balance">
              Bridal Makeup that lasts every <em className="text-gold not-italic">special moment</em>
            </h2>
            <p className="mt-4 text-ivory/80 text-balance">
              From bridal makeup to engagement, party and pre-wedding looks — Rekha Makeover Salon creates elegant, picture-perfect makeovers for every occasion.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Bridal Makeup","Airbrush Makeup","HD Makeup","Engagement Look","Party Glam","Pre-Wedding","Hair Styling","Saree Draping"].map(b => (
                <li key={b} className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ivory/5 px-3.5 py-1.5 text-xs">
                  <Check className="h-3 w-3 text-gold" /> {b}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <a href={BUSINESS.waLink} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-luxe">
                <MessageCircle className="h-4 w-4" /> Book Bridal Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <Section>
        <SectionHeader eyebrow="Why choose us" title="A premium experience, every visit" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <div className="h-full rounded-3xl border border-border/70 bg-gradient-luxe p-6 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-card ring-1 ring-gold/30">
                  <r.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-xl">{r.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-secondary/40">
        <SectionHeader eyebrow="Loved by local customers" title="Pratap Nagar's most reviewed salon" subtitle="Rated 4.9 ★ on Google Maps from 473 verified reviews." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="h-full rounded-3xl bg-card border border-border/70 p-6 shadow-soft">
                <div className="flex gap-0.5">{[0,1,2,3,4].map(j => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <blockquote className="mt-3 text-sm text-foreground/85 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-xs text-muted-foreground">— {t.role}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={BUSINESS.mapLink} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-secondary transition">
            <Star className="h-4 w-4 fill-accent text-accent" /> View all 473 reviews on Google
          </a>
        </div>
      </Section>

      {/* FAQ TEASER */}
      <Section>
        <SectionHeader eyebrow="Good to know" title="Frequently asked" />
        <div className="mt-10 mx-auto max-w-3xl grid gap-3">
          {FAQS.slice(0, 4).map((f, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                {f.q}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-secondary text-accent-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-plum p-8 sm:p-12 text-ivory text-center shadow-luxe">
          <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-gold/20 blur-3xl" aria-hidden />
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Ready when you are</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-balance">Book your makeover at Rekha</h2>
          <p className="mt-3 text-ivory/80 max-w-xl mx-auto">Open all 7 days · 9 AM – 9 PM · Pratap Nagar, Jaipur</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.waLink} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-accent-foreground shadow-luxe">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={BUSINESS.tel}
               className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-ivory/10 px-5 py-3 text-sm font-semibold text-ivory backdrop-blur">
              <Phone className="h-4 w-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">{children}</div>
    </section>
  );
}
function SectionHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow && <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-balance">{subtitle}</p>}
    </div>
  );
}
