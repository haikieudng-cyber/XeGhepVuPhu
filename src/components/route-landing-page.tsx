import { CtaLink } from "@/components/cta-link";
import { RouteCard } from "@/components/route-card";
import { Section } from "@/components/section";
import { faqs } from "@/data/faqs";
import { pricing } from "@/data/pricing";
import { routes, type RouteInfo } from "@/data/routes";
import { siteConfig } from "@/data/site";
import { Users, CreditCard, ShieldCheck, ChevronDown, CheckCircle2 } from "lucide-react";

export function RouteLandingPage({ route }: { route: RouteInfo }) {
  const relatedRoutes = routes.filter((item) => item.slug !== route.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-navy-950)] text-white pt-20 pb-28 md:pt-32 md:pb-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy-900)] to-[var(--color-navy-950)] opacity-90 z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-gold-400)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <p className="font-semibold tracking-wider uppercase text-[var(--color-gold-400)] mb-4">{siteConfig.name}</p>
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
            {route.title}
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto">{route.description}</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <CtaLink href={siteConfig.phoneHref} variant="secondary" className="text-base px-10 py-4 shadow-xl shadow-gold-500/20">
              Gọi {siteConfig.phone}
            </CtaLink>
            <CtaLink href={siteConfig.zaloHref} variant="outline" className="bg-white/10 text-white ring-white/30 hover:bg-white/20 text-base px-10 py-4">
              Nhắn Zalo đặt xe
            </CtaLink>
          </div>
        </div>
      </section>

      <Section className="-mt-16 relative z-20">
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <InfoBlock icon={<Users size={24} />} label="Phù hợp" value={route.audience} />
          <InfoBlock icon={<CreditCard size={24} />} label="Giá từ" value={route.priceFrom} />
          <InfoBlock icon={<ShieldCheck size={24} />} label="Dịch vụ" value="Xe ghép, xe tiện chuyến, bao xe" />
        </div>
      </Section>

      <Section className="bg-slate-50" title="Cam kết dịch vụ" eyebrow="Lợi ích vượt trội">
        <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          {route.highlights.map((item) => (
            <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100" key={item}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold-50)] text-[var(--color-gold-500)]">
                <CheckCircle2 size={20} />
              </div>
              <p className="mt-2 text-slate-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Giá tham khảo" eyebrow="Chi phí dự kiến">
        <div className="grid gap-8 md:grid-cols-3">
          {pricing.map((item, idx) => (
            <article className={`relative overflow-hidden rounded-2xl border bg-white p-8 transition-all hover:shadow-xl ${idx === 1 ? 'border-[var(--color-gold-300)] shadow-lg md:-mt-4 md:mb-4 scale-100 md:scale-105' : 'border-slate-200'}`} key={item.name}>
              {idx === 1 && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-lg bg-gradient-to-b from-[#d69d38] to-[#bf8324] px-6 py-1.5 text-[10px] font-black uppercase tracking-wider text-white sm:px-8 sm:text-xs">
                    <Star size={12} className="mr-1 inline pb-0.5" /> Phổ biến nhất
                  </div>
              )}
              <h3 className="font-heading text-xl font-bold text-[var(--color-navy-900)]">{item.name}</h3>
              <div className="mt-4 flex items-baseline text-[var(--color-navy-900)]">
                <span className="text-4xl font-extrabold tracking-tight">{item.price}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-[var(--color-navy-50)] p-6 text-center max-w-2xl mx-auto border border-[var(--color-navy-100)]">
          <p className="text-sm font-medium text-[var(--color-navy-800)]">
            Giá có thể thay đổi theo điểm đón, điểm trả và thời gian đi. Quý khách vui lòng gọi Hotline để được báo giá chính xác nhất cho hành trình của mình.
          </p>
        </div>
      </Section>

      <Section className="bg-slate-50" title="Câu hỏi thường gặp" eyebrow="Giải đáp thắc mắc">
        <div className="mx-auto max-w-3xl grid gap-4">
          {faqs.slice(0, 4).map((faq) => (
            <details className="group rounded-2xl border border-slate-200 bg-white p-6 [&_summary::-webkit-details-marker]:hidden" key={faq.question}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-heading text-lg font-semibold text-[var(--color-navy-900)]">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[var(--color-gold-500)]" />
              </summary>
              <p className="mt-4 leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <Section title="Các Tuyến Xe Khác" eyebrow="Có thể bạn quan tâm">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedRoutes.map((item) => (
            <RouteCard key={item.slug} route={item} />
          ))}
        </div>
      </Section>
    </>
  );
}

function InfoBlock({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center text-center rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/40 ring-1 ring-slate-100 transition-transform hover:-translate-y-1">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-800)]">
        {icon}
      </div>
      <p className="text-sm font-medium uppercase tracking-wider text-slate-500 mb-2">{label}</p>
      <p className="font-heading text-lg font-bold text-[var(--color-navy-900)]">{value}</p>
    </div>
  );
}
