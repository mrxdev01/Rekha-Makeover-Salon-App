import { createFileRoute } from "@tanstack/react-router";
import { breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import bridal from "@/assets/g-bridal.jpg";
import party from "@/assets/g-party.jpg";
import hair from "@/assets/g-hair.jpg";
import nails from "@/assets/g-nails.jpg";
import interior from "@/assets/g-interior.jpg";
import facial from "@/assets/g-facial.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Bridal & Party Makeup — Rekha Salon, Jaipur" },
      { name: "description", content: "See our bridal makeup, party glam, hair styling, nails, facials and salon interior at Rekha Makeover Salon, Pratap Nagar Jaipur." },
      { property: "og:title", content: "Gallery — Rekha Makeover Salon" },
      { property: "og:description", content: "Bridal, party, hair, skin & nails portfolio." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{name:"Home",path:"/"},{name:"Gallery",path:"/gallery"}])) }],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: bridal, alt: "Bridal makeup look at Rekha Makeover Salon", label: "Bridal Makeup", span: "lg:row-span-2" },
  { src: party, alt: "Party glam makeup", label: "Party Glam" },
  { src: hair, alt: "Hair styling and color", label: "Hair Studio" },
  { src: interior, alt: "Premium salon interior", label: "Studio Interior", span: "lg:col-span-2" },
  { src: nails, alt: "Manicure and pedicure service", label: "Nail Care" },
  { src: facial, alt: "Skin care and facial treatments", label: "Skin Care" },
];

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Looks from our studio" subtitle="A curated selection of bridal, party, hair, skin and nail work." />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[220px] sm:auto-rows-[280px] gap-3 sm:gap-4">
          {ITEMS.map((it, i) => (
            <Reveal key={i} delay={i * 50} className={`relative overflow-hidden rounded-2xl ring-1 ring-border shadow-soft group ${it.span ?? ""}`}>
              <img src={it.src} alt={it.alt} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/70 via-transparent to-transparent" />
              <span className="absolute left-3 bottom-3 rounded-full bg-ivory/90 px-3 py-1 text-xs font-semibold text-foreground">{it.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
