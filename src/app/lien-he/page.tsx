import { Section } from "@/components/section";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Liên hệ đặt xe",
  description: "Liên hệ Nhà Xe Vũ Phú để đặt xe ghép, xe tiện chuyến Thái Bình - Hà Nội, Nội Bài, Hải Phòng, Cát Bà.",
  path: "/lien-he",
});

export default function ContactPage() {
  return (
    <>
      <div className="bg-[var(--color-navy-900)] pt-16 pb-24 text-center text-white">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">Liên Hệ Đặt Xe</h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Tổng đài luôn mở 24/7 để tiếp nhận yêu cầu đặt xe ghép, xe tiện chuyến và bao xe của quý khách.</p>
      </div>

      <Section className="-mt-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-12 max-w-5xl mx-auto">
          <div className="lg:col-span-5 flex flex-col justify-center rounded-2xl bg-[var(--color-gold-400)] p-8 text-white shadow-xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Hotline Trực Tuyến</h2>
            
            <a href={siteConfig.phoneHref} className="group mb-8 flex flex-col items-center justify-center rounded-xl bg-white/20 p-6 text-center backdrop-blur-sm transition-all hover:bg-white/30">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--color-gold-500)] shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-white/80">Gọi ngay cho chúng tôi</p>
              <p className="mt-2 font-heading text-3xl font-bold">{siteConfig.phone}</p>
            </a>
            
            <a href={siteConfig.zaloHref} className="group flex flex-col items-center justify-center rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-[#0068FF]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0068FF] shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <p className="text-sm font-medium uppercase tracking-wider text-white/80">Hoặc nhắn tin qua</p>
              <p className="mt-2 font-heading text-2xl font-bold">Zalo</p>
            </a>
          </div>
          
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-navy-900)] mb-6">Thông Tin Liên Hệ Khác</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-800)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Khu vực phục vụ chính</h3>
                  <p className="mt-1 text-slate-600 leading-relaxed">{siteConfig.serviceArea.join(", ")}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-800)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email Hỗ trợ</h3>
                  <p className="mt-1 text-slate-600">{siteConfig.email}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-50)] text-[var(--color-navy-800)]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Giờ làm việc</h3>
                  <p className="mt-1 text-slate-600">Phục vụ 24/7 kể cả ngày Lễ, Tết.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 rounded-xl bg-slate-50 p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-3">💡 Lưu ý khi gọi đặt xe:</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-[var(--color-gold-500)]">•</span> Vui lòng cung cấp chính xác địa chỉ đón và trả.</li>
                <li className="flex gap-2"><span className="text-[var(--color-gold-500)]">•</span> Thông báo số lượng hành khách và hành lý cồng kềnh (nếu có).</li>
                <li className="flex gap-2"><span className="text-[var(--color-gold-500)]">•</span> Trẻ em cần ghế phụ vui lòng báo trước.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
