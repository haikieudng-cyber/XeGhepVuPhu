export const siteConfig = {
  name: "Nhà Xe Vũ Phú",
  shortName: "Vũ Phú",
  tagline: "Xe ghép - Xe tiện chuyến",
  trustMessage: "An toàn - Uy tín - Chất lượng",
  phone: "0963 467 577",
  phoneHref: "tel:0963467577",
  zaloHref: "https://zalo.me/0963467577",
  email: "vuphu.jp.transport@gmail.com",
  location: "Thái Bình, Việt Nam",
  serviceArea: ["Thái Bình", "Hà Nội", "Nội Bài", "Hải Phòng", "Cát Bà"],
  slogan: "Gọi là có xe - Đi là thích ngay!",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
} as const;
