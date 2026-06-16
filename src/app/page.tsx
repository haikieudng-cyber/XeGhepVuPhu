import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Car,
  CheckCircle2,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Snowflake,
  Star,
  UserRound,
  Users,
  ChevronDown,
  ThumbsUp,
  Camera,
} from "lucide-react";
import { pricing } from "@/data/pricing";
import { routes } from "@/data/routes";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { socialComments } from "@/data/comments";
import { galleryItems } from "@/data/gallery";
import { siteConfig } from "@/data/site";
import { SocialCommentsSection } from "@/components/social-comments-section";

export const metadata: Metadata = {
  title: "Nhà Xe Vũ Phú | Xe ghép Thái Bình Hà Nội, Nội Bài, Hải Phòng, Cát Bà",
  description:
    "Nhà Xe Vũ Phú chuyên xe ghép, xe tiện chuyến. Đón tận nơi, trả tận nơi các tuyến Thái Bình - Hà Nội, Nội Bài, Hải Phòng, Cát Bà. Gọi đặt xe 0963 467 577.",
};

const heroBenefits = [
  { label: "Đón / Trả tận nơi", icon: MapPin },
  { label: "Chạy hằng ngày", icon: CalendarDays },
  { label: "Gọi là có xe", icon: Phone },
];

const serviceCards = [
  { title: "Đón tận nơi", copy: "Đón bạn tại nhà đúng giờ, đúng hẹn", icon: Home },
  { title: "Trả tận nơi", copy: "Trả bạn tại điểm đến yêu cầu", icon: MapPin },
  { title: "Chạy hằng ngày", copy: "Lịch trình liên tục, chạy mỗi ngày", icon: CalendarDays },
  { title: "Gọi là có xe", copy: "Gọi là có xe ngay, không phải chờ lâu", icon: Phone },
  { title: "Xe sạch sẽ", copy: "Xe luôn sạch sẽ, được vệ sinh thường xuyên", icon: Car },
  { title: "Điều hòa mát", copy: "Điều hòa mát lạnh, thoải mái suốt hành trình", icon: Snowflake },
  { title: "Tài xế thân thiện", copy: "Tài xế lịch sự, nhiệt tình, kinh nghiệm", icon: UserRound },
  { title: "Nhận chở hành lý, hàng hóa", copy: "Nhận chở hành lý, hàng hóa an toàn", icon: BriefcaseBusiness },
];

const routeImages = [
  "/images/vuphu/route-hanoi.png",
  "/images/vuphu/route-noibai.png",
  "/images/vuphu/route-haiphong.png",
  "/images/vuphu/route-catba.png",
];

const routeCopies = [
  "Thoải mái - Đúng giờ - An toàn",
  "Đa điểm đón - Không lo trễ chuyến",
  "Nhanh chóng - Tiết kiệm - Tiện lợi",
  "Nhiều khung giờ - Trọn vẹn niềm vui",
];

const priceImages = [
  "/images/vuphu/car-price-1.png",
  "/images/vuphu/car-price-2.png",
  "/images/vuphu/car-price-3.png",
];

const whyCards = [
  { title: "Uy tín tạo niềm tin", copy: "Cam kết đúng giờ, đúng tuyến, đúng chất lượng", icon: ShieldCheck },
  { title: "An toàn lên hàng đầu", copy: "Xe đời mới, bảo dưỡng định kỳ, đảm bảo an toàn tuyệt đối", icon: CheckCircle2 },
  { title: "Chất lượng hàng đầu", copy: "Dịch vụ chuyên nghiệp, trải nghiệm thoải mái", icon: BadgeCheck },
  { title: "Phục vụ tận tâm", copy: "Hỗ trợ nhanh chóng, phục vụ 24/7", icon: Users },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 flex items-center justify-center gap-2 text-center font-heading text-lg font-black tracking-tight text-[var(--color-navy-950)] min-[375px]:gap-3 min-[375px]:text-xl sm:text-3xl">
      <span className="block h-px w-8 bg-gradient-to-r from-transparent to-[var(--color-gold-500)] sm:w-20" />
      <span className="h-2 w-2 shrink-0 rounded-full border-2 border-[var(--color-gold-500)]" />
      <span>{children}</span>
      <span className="h-2 w-2 shrink-0 rounded-full border-2 border-[var(--color-gold-500)]" />
      <span className="block h-px w-8 bg-gradient-to-l from-transparent to-[var(--color-gold-500)] sm:w-20" />
    </h2>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex flex-col overflow-hidden bg-white md:block md:min-h-[480px]">
        {/* MOBILE HERO IMAGE (Shows both cars in landscape) */}
        <div className="relative z-0 h-[260px] w-full overflow-hidden sm:h-[300px] md:hidden">
          <Image
            src="/images/vuphu/vinfast_hero-mobile.png"
            alt="Nhà Xe Vũ Phú trên cung đường ven biển"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_100%)]" />
        </div>

        {/* DESKTOP HERO IMAGE (Absolute on the right) */}
        <div className="absolute inset-y-0 right-0 z-0 hidden w-full max-w-[1200px] md:block">
          <Image
            src="/images/vuphu/hero-vinfast-2.png"
            alt="Nhà Xe Vũ Phú trên cung đường ven biển"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-[85%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_25%,rgba(255,255,255,.5)_38%,rgba(255,255,255,0)_52%)]" />
        </div>
        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto w-full max-w-6xl px-4 pb-10 pt-2 sm:px-6 md:py-8 lg:px-8">
          <div className="max-w-[480px] text-center md:text-left">
            <h1 className="whitespace-nowrap font-heading text-[clamp(1.15rem,6.2vw,2rem)] font-black leading-[1.05] tracking-tighter text-[var(--color-navy-950)] sm:text-4xl md:text-5xl lg:text-[54px]">
              Xe ghép - Xe tiện chuyến
            </h1>
            <p className="mt-2 font-heading text-xl font-black text-[var(--color-gold-600)] sm:text-2xl lg:text-[26px]">
              {siteConfig.trustMessage}
            </p>
            <div className="mx-auto my-4 h-1 w-20 rounded-full bg-[var(--color-gold-500)] md:mx-0 md:my-5" />
            <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-slate-700 md:mx-0 md:text-base">
              {siteConfig.name} mang đến dịch vụ xe ghép, xe tiện chuyến chuyên nghiệp, tiện lợi và an toàn tuyệt đối. Đón tận nơi - Trả tận nơi - Gọi là có xe!
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {heroBenefits.map((item) => (
                <div className="flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/80 px-3.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur" key={item.label}>
                  <item.icon size={15} className="text-[var(--color-gold-600)]" />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-6 grid max-w-[360px] grid-cols-[48px_1fr] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 md:mx-0 md:p-5">
              <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-[var(--color-gold-500)]/30 bg-[#fffaf0] text-[var(--color-gold-600)]">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{siteConfig.slogan}</p>
                <a className="block font-heading text-3xl font-black text-[var(--color-navy-950)] sm:text-4xl" href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-7">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>Dịch vụ của chúng tôi</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {serviceCards.map((item) => (
              <article className="group flex flex-col items-center justify-start gap-2.5 rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:border-[var(--color-gold-200)] hover:shadow-md sm:flex-row sm:text-left" key={item.title}>
                <div className="flex shrink-0 items-center justify-center text-[var(--color-gold-500)] transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300 group-hover:fill-[var(--color-gold-500)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-heading text-[13px] font-black leading-tight text-[var(--color-navy-950)] sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-slate-500 sm:text-xs">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tuyen-xe" className="bg-white py-7">
        <div className="mx-auto max-w-6xl px-0 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <SectionTitle>Tuyến chạy hằng ngày</SectionTitle>
          </div>
          <div className="flex snap-x snap-mandatory overflow-x-auto px-4 pb-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0 sm:pb-0 lg:grid-cols-4">
            {routes.map((route, index) => (
              <a className="group relative mr-4 h-[240px] w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-md sm:mr-0 sm:h-[220px] sm:w-auto" href={`/${route.slug}`} key={route.slug}>
                <Image src={routeImages[index]} alt={route.name} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-navy-950)] via-[var(--color-navy-950)]/80 to-transparent p-5 pt-20 text-center text-white">
                  <h3 className="font-heading text-xl font-black">{route.name.replace(" - ", " ⇄ ")}</h3>
                  <p className="mt-1 flex items-center justify-center gap-1.5 text-xs font-bold text-[#ffe2a7]">
                    <MapPin size={14} /> {routeCopies[index]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="bang-gia" className="bg-white py-7">
        <div className="mx-auto max-w-6xl px-0 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <SectionTitle>Bảng giá dịch vụ</SectionTitle>
          </div>
          <div className="flex snap-x snap-mandatory overflow-x-auto px-4 pb-6 sm:px-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:pb-0">
            {pricing.map((item, index) => (
              <article
                className={`relative mr-4 w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl border bg-white px-6 pb-6 pt-8 text-center shadow-md lg:mr-0 lg:w-auto ${index === 1 ? "border-2 border-[var(--color-gold-500)] shadow-xl" : "border-slate-100"}`}
                key={item.name}
              >
                {index === 1 ? (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap rounded-b-lg bg-gradient-to-b from-[#d69d38] to-[#bf8324] px-6 py-1.5 text-[10px] font-black uppercase tracking-wider text-white sm:px-8 sm:text-xs">
                    <Star size={12} className="mr-1 inline pb-0.5" /> Phổ biến nhất
                  </div>
                ) : null}
                <h3 className="mt-2 font-heading text-sm font-black uppercase tracking-wider text-[var(--color-navy-950)]">{item.name}</h3>
                <p className={`mt-1 font-heading text-3xl font-black sm:mt-2 sm:text-4xl ${index === 1 ? "text-[var(--color-gold-600)]" : "text-[var(--color-navy-950)]"}`}>
                  {item.price}
                </p>
                <div className="relative mx-auto mt-4 h-32 max-w-[240px] overflow-hidden sm:h-36 sm:max-w-[260px]">
                  <Image src={priceImages[index]} alt={item.name} fill sizes="(max-width:640px) 240px, 260px" className="object-contain mix-blend-multiply scale-[1.4] contrast-[1.2] brightness-[1.05]" />
                </div>
                <ul className="mx-auto mt-4 inline-grid list-disc gap-2 pl-4 text-left text-sm font-semibold text-slate-600 sm:pl-5">
                  {item.features.slice(0, 3).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className={`mt-6 flex h-11 items-center justify-center gap-2 rounded-xl border-2 text-sm font-black transition-transform hover:scale-[1.02] active:scale-95 ${index === 1 ? "border-[var(--color-gold-500)] bg-gradient-to-b from-[var(--color-gold-400)] to-[var(--color-gold-600)] !text-white" : "border-[var(--color-navy-900)] text-[var(--color-navy-900)]"}`} href={siteConfig.phoneHref}>
                  Đặt xe ngay <ArrowRight size={18} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="social-comments" className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-0 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <SectionTitle>Hoạt động gần đây</SectionTitle>
          </div>
          <SocialCommentsSection />
        </div>
      </section>

      <section id="gallery" className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>
            <span className="flex flex-col">
              <span>Hàng ngàn chuyến đi</span>
              <span className="uppercase">an toàn & vui vẻ</span>
            </span>
          </SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 gap-2">
                  <Camera size={24} />
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Ảnh thực tế {idx + 1}</span>
                </div>
                <img src={item.src} alt={`Hành khách ${idx + 1}`} className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-10 text-center sm:text-left">
                  <p className="text-xs font-medium leading-snug text-white sm:text-sm shadow-sm">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-0 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <SectionTitle>
              <span className="flex flex-col sm:inline">
                <span>Khách hàng nói gì </span>
                <span>về chúng tôi?</span>
              </span>
            </SectionTitle>
          </div>
          <div className="flex snap-x snap-mandatory overflow-x-auto px-4 pb-4 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 sm:pb-0">
            {testimonials.map((item, idx) => (
              <article key={idx} className="mr-4 w-[280px] shrink-0 snap-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:mr-0 sm:w-auto">
                <div className="flex gap-1 text-[var(--color-gold-500)]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 italic">"{item.text}"</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-heading text-sm font-black text-[var(--color-navy-950)]">{item.name}</p>
                  <p className="mt-0.5 text-xs font-semibold text-slate-500">{item.route}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>Câu hỏi thường gặp</SectionTitle>
          <div className="grid gap-3">
            {faqs.slice(0, 5).map((faq) => (
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden" key={faq.question}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-base font-semibold text-[var(--color-navy-900)]">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[var(--color-gold-500)]" />
                </summary>
                <p className="mt-4 leading-relaxed text-sm text-slate-600 border-t border-slate-100 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-7">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>
            <span className="flex flex-col sm:inline">
              <span>Vì sao nên chọn </span>
              <span>Nhà Xe Vũ Phú?</span>
            </span>
          </SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((item) => (
              <article className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm" key={item.title}>
                <item.icon size={36} className="shrink-0 text-[var(--color-gold-500)]" />
                <div>
                  <h3 className="font-heading text-base font-black leading-tight text-[var(--color-navy-950)]">{item.title}</h3>
                  <p className="mt-1 text-xs font-medium leading-relaxed text-slate-500">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl items-center gap-5 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#061d40,#0a315d)] px-5 py-8 text-center text-white shadow-2xl shadow-slate-900/20 sm:grid-cols-[100px_1fr_200px] sm:px-8 sm:py-6 sm:text-left lg:px-10">
            <div className="mx-auto grid h-20 w-20 shrink-0 place-items-center rounded-full border-[3px] border-[var(--color-gold-400)] bg-white/10 text-[var(--color-gold-300)] shadow-inner backdrop-blur-md">
              <Phone size={36} />
            </div>
            <div>
              <p className="font-heading text-lg font-medium text-slate-300 sm:text-xl sm:italic">{siteConfig.slogan}</p>
              <a href={siteConfig.phoneHref} className="mt-1 block font-heading text-4xl font-black tracking-tight text-[#ffd88c] sm:text-5xl">
                {siteConfig.phone}
              </a>
            </div>
            <div className="text-center">
              <a className="inline-flex h-12 w-full max-w-[200px] items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[var(--color-gold-400)] to-[var(--color-gold-600)] text-base font-black text-white shadow-lg transition-transform hover:scale-105 active:scale-95" href={siteConfig.phoneHref}>
                <Phone size={18} /> Gọi ngay
              </a>
              <small className="mt-3 block text-xs font-bold text-slate-300">Phục vụ 24/7 • Hỗ trợ nhanh</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
