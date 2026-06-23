import { createFileRoute } from "@tanstack/react-router";
import { Award, Crown, Heart, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";
import { BUSINESS, breadcrumb, abs } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import interior from "@/assets/g-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rekha Makeover Salon | Beauty Studio in Pratap Nagar, Jaipur" },
      { name: "description", content: "Rekha Makeover Salon is a trusted beauty & makeover studio in Pratap Nagar, Jaipur — specializing in bridal makeup, hair, skin, nails and grooming." },
      { property: "og:title", content: "About Rekha Makeover Salon" },
      { property: "og:description", content: "Trusted beauty & bridal salon in Pratap Nagar, Jaipur. Rated 4.9★ on Google." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }],
  }),
  component: AboutPage,
});

const HIGHLIGHTS = [
  { icon: Crown, t: "Bridal & Occasion Experts" },
  { icon: Sparkles, t: "Complete Beauty Destination" },
  { icon: ShieldCheck, t: "Clean & Hygienic Setup" },
  { icon: MapPin, t: "Prime Pratap Nagar Location" },
  { icon: Star, t: "4.9★ Rated on Google" },
  { icon: Heart, t: "Loved by 473+ Customers" },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="The story of Rekha Makeover Salon" subtitle="A premium beauty studio in the heart of Pratap Nagar — where craft, comfort and care come together." />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold/30 shadow-luxe">
            <img src={interior} alt="Rekha Makeover Salon interior, Pratap Nagar Jaipur" className="h-full w-full object-cover" width={800} height={1000} loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground/70">Crafted with care</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-balance">Premium beauty, personalised for you</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Rekha Makeover Salon is a trusted beauty and makeover studio located on Kumbha Marg, Pratap Nagar, Jaipur.
            We offer professional services across bridal makeup, party makeup, hair care, skin care, nails, waxing,
            and complete grooming — all under one elegant roof.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            With an unwavering focus on quality, comfort and a polished salon experience, we are a preferred
            destination for everyday beauty care and once-in-a-lifetime moments.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {HIGHLIGHTS.map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-luxe ring-1 ring-gold/30">
                  <Icon className="h-4.5 w-4.5 text-accent" />
                </span>
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl border border-gold/30 bg-gradient-luxe p-6 flex items-center gap-5">
            <Award className="h-10 w-10 text-accent shrink-0" />
            <div>
              <p className="font-display text-xl">4.9 ★ on Google Maps</p>
              <p className="text-sm text-muted-foreground">From 473 verified reviews in Pratap Nagar, Jaipur.</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
