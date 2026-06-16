import { RouteLandingPage } from "@/components/route-landing-page";
import { getRouteBySlug } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = getRouteBySlug("xe-thai-binh-noi-bai");

export const metadata = createPageMetadata({
  title: "Xe Thái Bình đi Nội Bài",
  description: "Xe Thái Bình đi Nội Bài của Nhà Xe Vũ Phú. Hỗ trợ hành lý, đặt xe sân bay nhanh.",
  path: "/xe-thai-binh-noi-bai",
});

export default function Page() {
  return <RouteLandingPage route={route!} />;
}
