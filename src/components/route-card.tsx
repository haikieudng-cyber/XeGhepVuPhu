import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { RouteInfo } from "@/data/routes";
import { siteConfig } from "@/data/site";

export function RouteCard({ route }: { route: RouteInfo }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] ring-1 ring-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50"></div>
      <div className="relative z-10 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl font-bold text-[var(--color-navy-900)]">
            {route.name}
          </h3>
          <span className="inline-flex shrink-0 items-center rounded-full bg-[var(--color-gold-50)] px-2.5 py-1 text-xs font-semibold text-[var(--color-gold-600)] ring-1 ring-inset ring-[var(--color-gold-200)]">
            Từ {route.priceFrom}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-2">
          {route.description}
        </p>
        <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
          {route.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-400)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="relative z-10 mt-8 flex items-center gap-3">
        <a 
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-navy-800)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-navy-900)]" 
          href={siteConfig.phoneHref}
        >
          Đặt xe ngay
        </a>
        <Link 
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors hover:bg-slate-100 hover:text-[var(--color-navy-900)]" 
          href={`/${route.slug}`}
          title="Xem chi tiết"
        >
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
