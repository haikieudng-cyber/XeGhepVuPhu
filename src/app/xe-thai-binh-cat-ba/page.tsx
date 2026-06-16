import { RouteLandingPage } from "@/components/route-landing-page";
import { getRouteBySlug } from "@/data/routes";
import { createPageMetadata } from "@/lib/metadata";

const route = getRouteBySlug("xe-thai-binh-cat-ba");

export const metadata = createPageMetadata({
  title: "Xe Thái Bình đi Cát Bà",
  description: "Xe Thái Bình đi Cát Bà cho gia đình, nhóm nhỏ, du lịch cùng Nhà Xe Vũ Phú.",
  path: "/xe-thai-binh-cat-ba",
});

export default function Page() {
  return <RouteLandingPage route={route!} />;
}
