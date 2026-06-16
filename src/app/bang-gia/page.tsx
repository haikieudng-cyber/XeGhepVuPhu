import { CtaLink } from "@/components/cta-link";
import { Section } from "@/components/section";
import { pricing } from "@/data/pricing";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { CheckCircle2 } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Bảng giá xe ghép, xe tiện chuyến",
  description: "Bảng giá tham khảo xe ghép, bao xe 5 chỗ, bao xe 7 chỗ của Nhà Xe Vũ Phú.",
  path: "/bang-gia",
});

export default function PricingPage() {
  return (
    <>
      <div className="bg-[var(--color-navy-900)] pt-16 pb-24 text-center text-white">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">Bảng Giá Dịch Vụ</h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Cam kết giá cả hợp lý, minh bạch. Dưới đây là mức giá tham khảo cho các loại hình dịch vụ vận tải của Nhà Xe Vũ Phú.</p>
      </div>
      
      <Section className="-mt-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-3">
          {pricing.map((item, idx) => (
            <article className={`relative overflow-hidden flex flex-col rounded-2xl border bg-white p-8 transition-all hover:shadow-xl ${idx === 1 ? 'border-[var(--color-gold-300)] shadow-lg md:-mt-4 md:mb-4 scale-100 md:scale-105' : 'border-slate-200'}`} key={item.name}>
              {idx === 1 && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-lg bg-gradient-to-b from-[#d69d38] to-[#bf8324] px-6 py-1.5 text-[10px] font-black uppercase tracking-wider text-white sm:px-8 sm:text-xs">
                  <Star size={12} className="mr-1 inline pb-0.5" /> Phổ biến nhất
                </div>
              )}
              <h2 className="font-heading text-2xl font-bold text-[var(--color-navy-900)]">{item.name}</h2>
              <div className="mt-4 flex items-baseline text-[var(--color-navy-900)]">
                <span className="text-4xl font-extrabold tracking-tight">{item.price}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
              
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-400)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6">
                <CtaLink href={siteConfig.phoneHref} variant={idx === 1 ? "secondary" : "outline"} className="w-full">
                  Gọi báo giá chính xác
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 rounded-xl bg-slate-50 border border-slate-100 p-6 text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-slate-700 italic">
            * Lưu ý: Giá cước có thể thay đổi tùy thuộc vào điểm đón, điểm trả chính xác, thời gian khởi hành (ngày lễ tết, đêm khuya) và loại xe yêu cầu. 
          </p>
        </div>
      </Section>
    </>
  );
}
