export type RouteInfo = {
  slug: string;
  name: string;
  title: string;
  description: string;
  highlights: string[];
  priceFrom: string;
  audience: string;
};

export const routes: RouteInfo[] = [
  {
    slug: "xe-ghep-thai-binh-ha-noi",
    name: "Thái Bình - Hà Nội",
    title: "Xe ghép Thái Bình đi Hà Nội",
    description: "Đón tận nơi, trả tận nơi, chạy hằng ngày, phù hợp đi làm, đi viện, công tác hoặc về quê.",
    highlights: ["Đón tận nơi", "Trả tận nơi", "Chạy hằng ngày", "Giá rõ ràng"],
    priceFrom: "300K",
    audience: "Khách đi lẻ, gia đình nhỏ, người cần xe trong ngày.",
  },
  {
    slug: "xe-thai-binh-noi-bai",
    name: "Thái Bình - Nội Bài",
    title: "Xe Thái Bình đi Nội Bài",
    description: "Phù hợp đi sân bay, hỗ trợ hành lý, có thể đặt trước giờ sáng sớm hoặc chuyến muộn.",
    highlights: ["Đi sân bay", "Hỗ trợ hành lý", "Đặt trước tiện lợi", "Xe sạch"],
    priceFrom: "Liên hệ",
    audience: "Khách đi máy bay, gia đình có hành lý, khách cần giờ đón rõ.",
  },
  {
    slug: "xe-thai-binh-hai-phong",
    name: "Thái Bình - Hải Phòng",
    title: "Xe Thái Bình đi Hải Phòng",
    description: "Tuyến tiện chuyến cho công việc, thăm thân, di chuyển liên tỉnh nhanh gọn.",
    highlights: ["Nhanh chóng", "Tiết kiệm", "Tiện lợi", "Tài xế thân thiện"],
    priceFrom: "Liên hệ",
    audience: "Khách đi công việc, thăm thân, nhóm nhỏ cần xe linh hoạt.",
  },
  {
    slug: "xe-thai-binh-cat-ba",
    name: "Thái Bình - Cát Bà",
    title: "Xe Thái Bình đi Cát Bà",
    description: "Phù hợp đi du lịch, nhóm nhỏ, gia đình, có hỗ trợ hành lý theo chuyến.",
    highlights: ["Đi du lịch", "Nhóm nhỏ", "Gia đình", "Nhiều hành lý"],
    priceFrom: "Liên hệ",
    audience: "Gia đình, nhóm bạn, khách đi du lịch hoặc nghỉ dưỡng.",
  },
];

export function getRouteBySlug(slug: string) {
  return routes.find((route) => route.slug === slug);
}
