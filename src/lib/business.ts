import {
  Sparkles, Crown, Wand2, Heart, Scissors, Droplets,
  Palette, Flower2, Hand, Brush, Gem, Eye,
  Star, MapPin, Clock, Phone, Award, ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const SITE_URL: string = ""; // set after publish

export const BUSINESS = {
  name: "Makeover Salon",
  tagline: "Premium Beauty & Bridal Makeover Studio",
  shortDesc:
    "Premium beauty, bridal makeup, hair, skin, nails, and grooming in Pratap Nagar, Jaipur.",
  phone: "+91 9999999999",
  phoneRaw: "+919999999999",
  tel: "tel:+919999999999",
  whatsapp: "919999999999",
  waLink:
    "https://wa.me/919999999999?text=Hi%20Makeover%20Salon%2C%20I%20want%20to%20book%20an%20appointment.",
  email: "",
  address:
    "Kumbha Marg, opposite Sharma Sweets, Sector 2, Pratap Nagar, Jaipur, Rajasthan 302033",
  addressShort: "Kumbha Marg, Pratap Nagar, Jaipur",
  city: "Jaipur",
  region: "Rajasthan",
  country: "IN",
  postal: "302033",
  geo: { lat: 26.8121, lng: 75.8205 },
  mapLink: "https://maps.app.goo.gl/PqXaS2SpWyLVNhvX9",
  mapEmbed:
    "https://www.google.com/maps/dir//ISKCON+Bangalore,+Hare+Krishna+Hill,+Chord+Rd,+1st+R+Block,+Rajajinagar,+Bengaluru,+Karnataka+560010/@13.0096695,77.5485595,17z/data=!4m16!1m7!3m6!1s0x3bae3ded0b360e07:0x7a7fb24a41a6b2b3!2sISKCON+Bangalore!8m2!3d13.0096643!4d77.5511344!16s%2Fm%2F0g9x5qd!4m7!1m0!1m5!1m1!1s0x3bae3ded0b360e07:0x7a7fb24a41a6b2b3!2m2!1d77.5511344!2d13.0096643?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
  hours: "Mon – Sun, 9:00 AM – 9:00 PM",
  hoursSpec: ["Mo-Su 09:00-21:00"],
  rating: 4.9,
  reviews: 473,
} as const;

export const NAV: Array<[string, string]> = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
];

export type Service = { icon: LucideIcon; title: string; desc: string };

export const SERVICES: Service[] = [
  { icon: Crown, title: "Bridal Makeup", desc: "Premium bridal looks for wedding, reception & traditional ceremonies." },
  { icon: Wand2, title: "Airbrush Makeup", desc: "Long-lasting, camera-ready flawless finish using airbrush technology." },
  { icon: Sparkles, title: "Party Makeup", desc: "Elegant glam for parties, events and festive celebrations." },
  { icon: Heart, title: "Engagement Makeup", desc: "Soft, romantic makeover for engagement and pre-wedding shoots." },
  { icon: Scissors, title: "Haircut & Styling", desc: "Professional cuts, blow-dry and finishing for a fresh look." },
  { icon: Droplets, title: "Hair Spa & Treatments", desc: "Nourishing spa treatments for smooth, healthy, shiny hair." },
  { icon: Palette, title: "Hair Color & Makeover", desc: "Modern hair coloring and complete hair makeovers." },
  { icon: Flower2, title: "Facial & Skin Care", desc: "Skin-focused facials for a clean, fresh, glowing complexion." },
  { icon: Brush, title: "Waxing & Hair Removal", desc: "Hygienic waxing services for soft, smooth skin." },
  { icon: Hand, title: "Manicure & Pedicure", desc: "Hand, foot and nail care for neat, polished results." },
  { icon: Gem, title: "Nail Extensions", desc: "Premium nail extensions and stylish nail art." },
  { icon: Eye, title: "Eyebrow Threading", desc: "Precise eyebrow shaping and facial threading." },
];

export const REASONS = [
  { icon: Star, title: "Google Rated 4.9 ★", desc: "Loved by 473+ verified customers on Google Maps." },
  { icon: Crown, title: "Bridal Expertise", desc: "Specialists in bridal, engagement, party and pre-wedding looks." },
  { icon: Sparkles, title: "Complete Beauty Destination", desc: "Hair, makeup, skin, nails, waxing and grooming under one roof." },
  { icon: ShieldCheck, title: "Clean & Professional", desc: "Hygienic, comfortable salon setup with trained staff." },
  { icon: MapPin, title: "Prime Location", desc: "Opposite Navneet Path Lab & Sharma Sweets, Kumbha Marg." },
  { icon: Clock, title: "Open All 7 Days", desc: "9:00 AM – 9:00 PM. Quick booking via call or WhatsApp." },
];

export const TESTIMONIALS = [
  { name: "Verified Google Review", role: "Bridal Client", text: "Beautiful makeup that lasted all day. The team made me feel so comfortable on my wedding morning." },
  { name: "Verified Google Review", role: "Party Glam", text: "Loved my party look! Professional staff, clean salon and great attention to detail." },
  { name: "Verified Google Review", role: "Hair & Skin", text: "Hair spa and facial were so relaxing. Skin felt fresh and hair looked amazing." },
  { name: "Verified Google Review", role: "Engagement Look", text: "Perfect place for bridal and engagement makeup. Highly recommend in Pratap Nagar." },
  { name: "Verified Google Review", role: "Regular Customer", text: "My go-to salon for everything. Consistent quality and very welcoming staff." },
  { name: "Verified Google Review", role: "Pre-Wedding", text: "Picture-perfect makeover for our pre-wedding shoot. Loved every bit." },
];

export const FAQS = [
  { q: "Do I need to book an appointment?", a: "Yes, we recommend booking via WhatsApp or call to ensure availability, especially for bridal and party services." },
  { q: "Do you offer bridal trials?", a: "Yes, bridal trials are available on prior appointment. Please contact us on WhatsApp to schedule." },
  { q: "What are your opening hours?", a: "We are open all 7 days, Monday to Sunday, from 9:00 AM to 9:00 PM." },
  { q: "Where exactly is the salon located?", a: "101, 74 Kumbha Marg, opposite Navneet Path Lab & Sharma Sweets, Sector 10, Pratap Nagar, Jaipur." },
  { q: "Do you provide on-location bridal services?", a: "Yes, on-location bridal makeup is available on request. Please share your venue details when booking." },
  { q: "Which payment methods do you accept?", a: "We accept cash, UPI and major digital payment methods." },
];

export const AWARDS = [
  { label: "Google Rating", value: "4.9★" },
  { label: "Happy Reviews", value: "473+" },
  { label: "Years of Care", value: "Trusted" },
  { label: "Open Daily", value: "9–9" },
];

export function abs(path: string) {
  if (!SITE_URL) return path;
  return `${SITE_URL.replace(/\/$/, "")}${path}`;
}

export function salonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BUSINESS.name,
    description: BUSINESS.shortDesc,
    url: SITE_URL || undefined,
    telephone: BUSINESS.phoneRaw,
    image: abs("/og-cover.jpg"),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "101, 74 Kumbha Marg, opposite Navneet Path Lab & Sharma Sweets, Sector 10",
      addressLocality: "Pratap Nagar, Jaipur",
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postal,
      addressCountry: BUSINESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    openingHours: BUSINESS.hoursSpec,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviews,
    },
    hasMap: BUSINESS.mapLink,
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.desc },
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
