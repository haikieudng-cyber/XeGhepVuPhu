import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-12 w-11 shrink-0 place-items-center rounded-lg border-[3px] border-[var(--color-gold-500)] bg-[#fff8e6] font-heading text-sm font-black text-[var(--color-navy-900)]">
              VP
            </span>
            <span>
              <span className="block whitespace-nowrap font-heading text-[22px] font-black leading-none tracking-tight text-[var(--color-navy-950)] sm:text-2xl">
                {siteConfig.name.toUpperCase()}
              </span>
              <span className="mt-1 block text-xs font-semibold text-[var(--color-navy-800)]">
                {siteConfig.trustMessage}
              </span>
            </span>
          </Link>
          <p className="max-w-sm text-sm font-medium leading-relaxed">
            {siteConfig.name} chuyên cung cấp dịch vụ xe ghép, xe tiện chuyến chất lượng cao, an toàn, tiện lợi, đúng giờ.
          </p>
          <div className="flex gap-2">
            {["f", "Zalo", "Tik", "You"].map((item) => (
              <span
                className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-gold-500)] text-[10px] font-black text-white hover:bg-[var(--color-gold-400)] transition-colors"
                key={item}
              >
                {item.slice(0, 1)}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="mb-4 font-heading text-sm font-black uppercase text-[var(--color-navy-950)]">Thông tin liên hệ</h3>
          <ul className="grid gap-3 text-sm font-semibold">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-[var(--color-gold-500)]" /> {siteConfig.location}</li>
            <li><a href={siteConfig.phoneHref} data-cta-location="footer" className="flex items-center gap-2 hover:text-[var(--color-gold-600)]"><Phone size={16} className="text-[var(--color-gold-500)]" /> {siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[var(--color-gold-600)]"><Mail size={16} className="text-[var(--color-gold-500)]" /> {siteConfig.email}</a></li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-[var(--color-gold-500)]" /> Nhận tư vấn đặt xe hằng ngày</li>
          </ul>
        </div>
        
        <div>
          <h3 className="mb-4 font-heading text-sm font-black uppercase text-[var(--color-navy-950)]">Liên kết nhanh</h3>
          <ul className="grid gap-2 text-sm font-semibold">
            <li><Link href="/" className="hover:text-[var(--color-gold-600)]">Trang chủ</Link></li>
            <li><Link href="/#tuyen-xe" className="hover:text-[var(--color-gold-600)]">Tuyến xe</Link></li>
            <li><Link href="/#bang-gia" className="hover:text-[var(--color-gold-600)]">Bảng giá</Link></li>
            <li><Link href="/#services" className="hover:text-[var(--color-gold-600)]">Dịch vụ</Link></li>
            <li><Link href="#footer" className="hover:text-[var(--color-gold-600)]">Liên hệ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-black uppercase text-[var(--color-navy-950)]">Kết nối với chúng tôi</h3>
          <div className="flex gap-2">
            {["f", "Z", "T", "Y"].map((item) => (
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-gold-500)] text-xs font-black text-white hover:bg-[var(--color-gold-400)] transition-colors" key={item}>
                {item}
              </span>
            ))}
          </div>
          <a href={siteConfig.zaloHref} data-cta-location="footer" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-[var(--color-navy-900)] hover:border-[#0068FF] hover:text-[#0068FF]">
            <MessageCircle size={17} />
            Chat qua Zalo
          </a>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-[var(--color-gold-500)]/40 bg-[#fffaf0] px-4 py-3 text-sm font-black text-[var(--color-navy-900)]">
            <ShieldCheck size={28} className="text-[var(--color-gold-500)]" />
            <span>Cam kết chất lượng<br /><small className="font-semibold">{siteConfig.trustMessage}</small></span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-slate-500 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
