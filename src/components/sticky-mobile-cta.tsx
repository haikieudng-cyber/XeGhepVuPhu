import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden pointer-events-none">
      <div className="mx-auto flex max-w-sm items-center gap-2 rounded-full bg-white/90 p-1.5 shadow-xl backdrop-blur-md ring-1 ring-black/5 pointer-events-auto">
        <a
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0068FF] py-3 text-sm font-semibold text-white transition-transform active:scale-95 shadow-sm"
          href={siteConfig.zaloHref}
        >
          <MessageCircle size={18} />
          <span>Zalo</span>
        </a>
        <a
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-navy-800)] py-3 text-sm font-semibold text-[var(--color-gold-400)] transition-transform active:scale-95 shadow-sm"
          href={siteConfig.phoneHref}
        >
          <Phone size={18} />
          <span>Gọi ngay</span>
        </a>
      </div>
    </div>
  );
}
