import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/#tuyen-xe", label: "Tuyến xe" },
  { href: "/#bang-gia", label: "Bảng giá" },
  { href: "/#services", label: "Dịch vụ" },
  { href: "#footer", label: "Liên hệ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto grid h-[70px] max-w-6xl grid-cols-[1fr_auto_auto] items-center gap-3 px-4 sm:px-6 lg:grid-cols-[260px_1fr_auto] lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid h-12 w-11 shrink-0 place-items-center rounded-lg border-[3px] border-[var(--color-gold-500)] bg-[#fff8e6] font-heading text-sm font-black text-[var(--color-navy-900)] shadow-sm">
            VP
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-xl font-black leading-none text-[var(--color-navy-950)] sm:text-2xl">
              {siteConfig.name.toUpperCase()}
            </span>
            <span className="mt-1 block text-[10px] font-semibold text-[var(--color-navy-800)] sm:text-xs">
              {siteConfig.trustMessage}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {navItems.map((item) => (
            <Link 
              className="relative flex h-[70px] items-center text-sm font-bold text-[var(--color-navy-900)] transition-colors hover:text-[var(--color-gold-600)] first:after:absolute first:after:bottom-0 first:after:left-0 first:after:right-0 first:after:h-0.5 first:after:rounded-full first:after:bg-[var(--color-gold-500)]"
              href={item.href} 
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[var(--color-gold-600)]/30 bg-gradient-to-b from-[var(--color-gold-400)] to-[var(--color-gold-600)] px-5 text-sm font-black text-white shadow-sm transition-transform active:scale-95"
            href={siteConfig.phoneHref}
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Gọi ngay</span>
          </a>
        </div>
      </div>
    </header>
  );
}
