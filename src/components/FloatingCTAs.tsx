import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a
        href={BUSINESS.waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="animate-pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={BUSINESS.tel}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-accent-foreground shadow-luxe hover:scale-105 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
