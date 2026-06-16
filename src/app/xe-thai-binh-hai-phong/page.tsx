import { RouteLandingPage } from "@/components/route-landing-page";
import { getRouteBySlug } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = getRouteBySlug("xe-thai-binh-hai-phong");

export const metadata = createPageMetadata({
  title: "Xe Thái Bình đi Hải Phòng",
  description: "Xe Thái Bình đi Hải Phòng, xe ghép và xe tiện chuyến Nhà Xe Vũ Phú.",
  path: "/xe-thai-binh-hai-phong",
});

export default function Page() {
  return <RouteLandingPage route={route!} />;
}
