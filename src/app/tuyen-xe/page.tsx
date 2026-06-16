import { RouteCard } from "@/components/route-card";
import { Section } from "@/components/section";
import { routes } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Tuyến xe ghép, xe tiện chuyến",
  description: "Các tuyến xe Nhà Xe Vũ Phú: Thái Bình - Hà Nội, Nội Bài, Hải Phòng, Cát Bà.",
  path: "/tuyen-xe",
});

export default function RoutesPage() {
  return (
    <>
      <div className="bg-[var(--color-navy-900)] pt-16 pb-24 text-center text-white">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">Các Tuyến Xe Phục Vụ</h1>
        <p className="mt-4 text-slate-300">Nhà Xe Vũ Phú chuyên chạy các tuyến chính, đón trả tận nơi đúng giờ.</p>
      </div>
      <Section className="-mt-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {routes.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>
      </Section>
    </>
  );
}
