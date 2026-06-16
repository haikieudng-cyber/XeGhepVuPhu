import { RouteLandingPage } from "@/components/route-landing-page";
import { getRouteBySlug } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = getRouteBySlug("xe-ghep-thai-binh-ha-noi");

export const metadata = createPageMetadata({
  title: "Xe ghép Thái Bình đi Hà Nội",
  description: "Xe ghép Thái Bình đi Hà Nội của Nhà Xe Vũ Phú. Đón tận nơi, trả tận nơi, có xe trong ngày.",
  path: "/xe-ghep-thai-binh-ha-noi",
});

export default function Page() {
  return <RouteLandingPage route={route!} />;
}
