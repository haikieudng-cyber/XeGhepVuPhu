# ChatGPT Transcript

URL: https://chatgpt.com/g/g-p-6a3009ec250081919d94e626211f85e7-website-xe-ghep-xe-tien-chuyen/c/6a300a2e-1d2c-83ec-bb52-d68a1e346b1c?tab=sources
Title: website Xe Ghép - Xe Tiện Chuyến - Xây dựng website xe ghép
Messages: 4
BodyTextLength: 29777

## Last Assistant Message

Dưới đây là plan dạng master prompt để bạn dán thẳng cho Codex. Nội dung này ép Codex làm theo từng pha, có phạm vi rõ, có tiêu chí hoàn thành, tránh lan man xây app đặt xe phức tạp.

Sửa
MASTER PLAN CHO CODEX — BUILD WEBSITE “VŨ PHÚ JP | XE GHÉP – XE TIỆN CHUYẾN”
0. Vai trò của Codex

Bạn là coding agent triển khai repo local cho website dịch vụ Vũ Phú JP – Xe ghép, xe tiện chuyến.

Mục tiêu chính: xây dựng website Next.js chạy được local, deploy được Vercel, tối ưu chuyển đổi cuộc gọi / Zalo / đặt xe.

Không được biến dự án này thành app đặt xe phức tạp. Không làm login, dashboard, tracking tài xế, payment, bản đồ realtime, quản lý đơn, database, CMS, admin panel ở bản MVP này.

Website cần giống định hướng mockup đã gửi trong chat: giao diện hiện đại, chuyên nghiệp, trẻ trung, nhẹ, màu chủ đạo navy / gold / white, CTA gọi điện nổi bật, nội dung rõ ràng, tập trung vào tuyến xe và chuyển đổi.

1. Ngữ cảnh dự án
Thương hiệu

Tên thương hiệu:

Vũ Phú JP

Tagline:

An toàn – Uy tín – Chất lượng

Số điện thoại chính:

0963 467 577

Dịch vụ chính:

Xe ghép
Xe tiện chuyến
Đón tận nơi
Trả tận nơi
Chạy hằng ngày
Bao xe 5 chỗ
Bao xe 7 chỗ
Nhận chở hành lý, hàng hóa

Tuyến chính:

Thái Bình ⇄ Hà Nội
Thái Bình ⇄ Nội Bài
Thái Bình ⇄ Hải Phòng
Thái Bình ⇄ Cát Bà

Giá tham khảo:

Xe ghép: 300K – 400K
Bao xe 5 chỗ: 700K – 900K
Bao xe 7 chỗ: 900K – 1.1TR

Thông điệp chuyển đổi:

Gọi là có xe – Đi là thích ngay!
Đón tận nơi – Trả tận nơi – Có xe trong ngày
Tài xế xác nhận nhanh, giá rõ ràng, xe sạch, hỗ trợ hành lý
2. Nguyên tắc bắt buộc
2.1. Không đi lệch phạm vi

Không làm các tính năng sau trong MVP:

- Không authentication
- Không dashboard
- Không database
- Không payment
- Không map realtime
- Không quản lý tài xế
- Không quản lý chuyến xe động
- Không chatbot
- Không tích hợp API bên thứ ba phức tạp
- Không CMS
- Không animation quá nặng
- Không dùng thư viện UI nặng nếu không cần
2.2. Stack bắt buộc

Dùng:

Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
lucide-react
next/image
Vercel-ready

Không tự ý đổi sang:

Vue
Nuxt
Astro
Laravel
WordPress
React Router SPA
Plain HTML only
2.3. Ưu tiên chuyển đổi

Mỗi trang quan trọng phải có:

- H1 rõ intent tìm kiếm
- Số điện thoại 0963 467 577 hiển thị nổi bật
- Nút gọi ngay dùng tel:0963467577
- CTA Zalo hoặc “Nhắn Zalo báo điểm đón”
- Sticky CTA mobile dưới màn hình
- Nội dung tuyến xe rõ ràng
- FAQ xử lý băn khoăn
3. Quy trình làm việc bắt buộc cho Codex
Pha nào làm pha đó

Chỉ làm đúng pha hiện tại. Không nhảy sang pha khác khi chưa hoàn thành tiêu chí pha đó.

Sau mỗi pha, phải báo cáo:

- Đã tạo/sửa file nào
- Lý do sửa
- Lệnh đã chạy
- Kết quả lint/build
- Việc còn lại của pha tiếp theo
Khi gặp lỗi

Nếu build/lint lỗi:

- Đọc lỗi chính xác
- Sửa nguyên nhân gốc
- Không rewrite toàn bộ dự án
- Không đổi stack
- Không cài package mới nếu lỗi không bắt buộc
- Tối đa 2 vòng sửa cho cùng một lỗi
- Nếu sau 2 vòng vẫn lỗi, dừng và báo lỗi rõ ràng
Không tiêu token lan man

Không phân tích lại chiến lược quá dài trong quá trình code. Bám checklist. Không tự mở rộng tính năng.

4. Pha 1 — Khảo sát repo local
Mục tiêu

Xác định đây là folder rỗng hay repo đã có code.

Việc cần làm

Chạy:

pwd
ls -la
git status || true
find . -maxdepth 2 -type f | sed 's#^\./##' | sort | head -100

Nếu có package.json, đọc:

cat package.json

Nếu có src/app hoặc app, kiểm tra cấu trúc:

find . -maxdepth 3 -type f | sort | head -200
Quyết định

Nếu folder rỗng hoặc chưa phải Next.js app:

Tạo project Next.js mới.

Nếu đã là Next.js app:

Không tạo lại project. Chỉ chỉnh sửa theo cấu trúc hiện có.
Tiêu chí hoàn thành
- Biết rõ repo hiện tại đang trống hay có code
- Biết package manager đang dùng: pnpm/npm/yarn/bun
- Không sửa code ở pha này nếu chưa cần
5. Pha 2 — Khởi tạo Next.js nếu repo trống
Mục tiêu

Tạo Next.js app local sạch, gọn, đúng stack.

Nếu repo trống

Chạy một trong các lệnh sau. Ưu tiên pnpm nếu máy có pnpm:

pnpm create next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

Nếu không có pnpm:

npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

Sau đó cài shadcn/ui:

pnpm dlx shadcn@latest init

Nếu dùng npm:

npx shadcn@latest init

Cài component cần dùng:

pnpm dlx shadcn@latest add button card badge accordion separator sheet input textarea

Nếu npm:

npx shadcn@latest add button card badge accordion separator sheet input textarea

Cài icon:

pnpm add lucide-react

Hoặc:

npm install lucide-react
Nếu repo đã có Next.js

Không chạy create-next-app. Chỉ kiểm tra thiếu package nào thì cài package đó.

Tiêu chí hoàn thành

Chạy được:

pnpm lint
pnpm build

Hoặc nếu npm:

npm run lint
npm run build

Nếu project mới chưa có script lint phù hợp, dùng script có trong package.json.

6. Pha 3 — Thiết lập cấu trúc dữ liệu tĩnh
Mục tiêu

Tách toàn bộ nội dung website vào file data để dễ sửa, không hardcode lung tung trong component.

Tạo cấu trúc
src/
  data/
    site.ts
    routes.ts
    pricing.ts
    services.ts
    faqs.ts
Nội dung src/data/site.ts

Tạo object chứa:

export const siteConfig = {
  name: "Vũ Phú JP",
  tagline: "An toàn – Uy tín – Chất lượng",
  phone: "0963 467 577",
  phoneHref: "tel:0963467577",
  zaloHref: "https://zalo.me/0963467577",
  email: "vuphu.jp.transport@gmail.com",
  location: "Thái Bình, Việt Nam",
  serviceArea: ["Thái Bình", "Hà Nội", "Nội Bài", "Hải Phòng", "Cát Bà"],
  slogan: "Gọi là có xe – Đi là thích ngay!",
}

Nếu chưa chắc email/Zalo chính xác, vẫn để trong data để dễ đổi sau, không rải nhiều nơi.

Nội dung src/data/routes.ts

Tạo danh sách tuyến:

export const routes = [
  {
    slug: "xe-ghep-thai-binh-ha-noi",
    name: "Thái Bình ⇄ Hà Nội",
    title: "Xe ghép Thái Bình ⇄ Hà Nội",
    description: "Đón tận nơi, trả tận nơi, chạy hằng ngày, tài xế xác nhận nhanh.",
    highlights: ["Đón tận nơi", "Trả tận nơi", "Chạy hằng ngày", "Giá rõ ràng"],
    priceFrom: "300K",
  },
  {
    slug: "xe-thai-binh-noi-bai",
    name: "Thái Bình ⇄ Nội Bài",
    title: "Xe Thái Bình đi Nội Bài",
    description: "Phù hợp đi sân bay, hỗ trợ hành lý, có xe sáng sớm theo lịch đặt.",
    highlights: ["Đi sân bay", "Hỗ trợ hành lý", "Đặt trước tiện lợi", "Xe sạch"],
    priceFrom: "Liên hệ",
  },
  {
    slug: "xe-thai-binh-hai-phong",
    name: "Thái Bình ⇄ Hải Phòng",
    title: "Xe Thái Bình đi Hải Phòng",
    description: "Tuyến tiện chuyến, phù hợp công việc, thăm thân, di chuyển liên tỉnh.",
    highlights: ["Nhanh chóng", "Tiết kiệm", "Tiện lợi", "Tài xế thân thiện"],
    priceFrom: "Liên hệ",
  },
  {
    slug: "xe-thai-binh-cat-ba",
    name: "Thái Bình ⇄ Cát Bà",
    title: "Xe Thái Bình đi Cát Bà",
    description: "Phù hợp đi du lịch, nhóm nhỏ, gia đình, hỗ trợ hành lý.",
    highlights: ["Đi du lịch", "Nhóm nhỏ", "Gia đình", "Trọn vẹn niềm vui"],
    priceFrom: "Liên hệ",
  },
]
Nội dung src/data/pricing.ts
export const pricing = [
  {
    name: "Xe ghép",
    price: "300K - 400K",
    description: "Phù hợp khách đi lẻ, tiết kiệm chi phí.",
    features: ["Giá hợp lý", "Lịch trình linh hoạt", "Đón tận nơi", "Trả tận nơi"],
    popular: false,
  },
  {
    name: "Bao xe 5 chỗ",
    price: "700K - 900K",
    description: "Phù hợp gia đình nhỏ, nhóm nhỏ, chủ động thời gian.",
    features: ["Chủ động thời gian", "Riêng tư", "Phù hợp gia đình", "Không ghép khách"],
    popular: true,
  },
  {
    name: "Bao xe 7 chỗ",
    price: "900K - 1.1TR",
    description: "Phù hợp nhóm đông, nhiều hành lý, đi sân bay hoặc du lịch.",
    features: ["Không gian rộng", "Phù hợp nhóm", "Nhiều hành lý", "Thoải mái"],
    popular: false,
  },
]
Tiêu chí hoàn thành
- Có đầy đủ data files
- Component sau này chỉ import data
- Không lặp số điện thoại thủ công nhiều nơi
7. Pha 4 — Xây layout nền
Mục tiêu

Tạo giao diện nền nhất quán toàn site.

File cần tạo/sửa
src/app/layout.tsx
src/app/globals.css
src/components/site-header.tsx
src/components/site-footer.tsx
src/components/sticky-mobile-cta.tsx
src/components/container.tsx
Style direction

Giao diện phải:

- Modern
- Thanh mảnh
- Nhẹ nhàng
- Không bí bách
- Không quá nhiều viền dày
- Không gradient màu mè quá đậm
- Navy / Gold / White làm chủ đạo
- Card bo góc lớn, shadow nhẹ
- Typography rõ, mạnh ở headline và phone number
Màu gợi ý

Dùng CSS variables hoặc Tailwind class:

Navy: #082344 hoặc gần tương đương
Gold: #D8A23A hoặc gần tương đương
Soft gold: #F5D992 hoặc gần tương đương
Background: #FFFFFF / #F8FAFC
Text: #0F172A
Muted: #64748B

Không dùng quá nhiều màu phụ.

Header

Header desktop:

Logo trái
Nav giữa/phải: Trang chủ, Tuyến xe, Bảng giá, Dịch vụ, Liên hệ
CTA phải: Gọi ngay

Header mobile:

Logo trái
Nút menu hoặc nav đơn giản
CTA gọi nổi bật
Sticky mobile CTA

Bắt buộc tạo thanh fixed bottom trên mobile:

[Gọi ngay] [Nhắn Zalo]

Yêu cầu:

- Chỉ hiện mobile
- Không che nội dung footer: thêm padding-bottom cho body/main nếu cần
- tel:0963467577
- zaloHref lấy từ siteConfig
Tiêu chí hoàn thành
- Layout chạy responsive
- Header không vỡ mobile
- Sticky CTA mobile hoạt động
- Build không lỗi
8. Pha 5 — Homepage conversion-first
Mục tiêu

Build trang / hoàn chỉnh, tập trung chuyển đổi.

File chính
src/app/page.tsx
src/components/home/hero-section.tsx
src/components/home/service-benefits.tsx
src/components/home/routes-section.tsx
src/components/home/pricing-section.tsx
src/components/home/why-choose-us.tsx
src/components/home/booking-steps.tsx
src/components/home/faq-section.tsx
src/components/home/final-cta.tsx

Nếu muốn ít file hơn, có thể đặt trong src/components/sections/, nhưng phải rõ ràng.

8.1. Hero section

Hero phải có H1:

Xe ghép Thái Bình ⇄ Hà Nội / Nội Bài — đón tận nơi, có xe trong ngày

Subheadline:

Vũ Phú JP chuyên xe ghép, xe tiện chuyến, bao xe 5 chỗ, 7 chỗ. Tài xế xác nhận nhanh, giá rõ ràng, xe sạch, hỗ trợ hành lý.

CTA chính:

Gọi đặt xe: 0963 467 577

CTA phụ:

Nhắn Zalo báo điểm đón

Trust chips:

Đón tận nơi
Trả tận nơi
Chạy hằng ngày
Xe sạch
Tài xế thân thiện
Hỗ trợ 24/7

Visual hero:

- Có khu vực ảnh xe hoặc card minh họa
- Nếu chưa có ảnh thật, dùng gradient/card placeholder đẹp
- Không để hero trống
- Không dùng ảnh remote dễ lỗi

Yêu cầu mobile:

- H1 nhìn thấy ngay
- Phone number thấy trong màn hình đầu
- CTA gọi ngay không bị đẩy xuống quá sâu
8.2. Service benefits

Hiển thị 8 lợi ích:

Đón tận nơi
Trả tận nơi
Chạy hằng ngày
Gọi là có xe
Xe sạch sẽ
Điều hòa mát
Tài xế thân thiện
Nhận chở hành lý, hàng hóa

Mỗi card có icon lucide phù hợp.

8.3. Routes section

Hiển thị 4 tuyến:

Thái Bình ⇄ Hà Nội
Thái Bình ⇄ Nội Bài
Thái Bình ⇄ Hải Phòng
Thái Bình ⇄ Cát Bà

Mỗi card có:

- Tên tuyến
- Mô tả ngắn
- 3–4 highlight
- CTA “Gọi tuyến này”
- Link “Xem chi tiết”
8.4. Pricing section

3 pricing card:

Xe ghép: 300K - 400K
Bao xe 5 chỗ: 700K - 900K
Bao xe 7 chỗ: 900K - 1.1TR

Card “Bao xe 5 chỗ” gắn badge:

Phổ biến

Có note:

Giá trên là giá tham khảo. Giá thực tế phụ thuộc điểm đón, điểm trả, thời gian đi và loại xe. Gọi để được báo giá chính xác.
8.5. Why choose us

4 lý do:

Uy tín tạo niềm tin
An toàn lên hàng đầu
Chất lượng hàng đầu
Phục vụ tận tâm
8.6. Booking steps

3 bước:

1. Gọi hoặc nhắn Zalo
2. Báo điểm đón, điểm trả, thời gian đi
3. Tài xế xác nhận và đón tận nơi
8.7. FAQ

FAQ bắt buộc có:

Có đón tận nhà không?
Có trả tận nơi không?
Tôi đi Nội Bài sáng sớm có đặt được không?
Giá xe ghép tính thế nào?
Có bao xe riêng không?
Có chở hành lý hoặc hàng hóa không?
Nên đặt xe trước bao lâu?
8.8. Final CTA

Banner cuối trang:

Cần xe đi ngay? Gọi Vũ Phú JP
0963 467 577
Gọi là có xe – Đi là thích ngay!
Tiêu chí hoàn thành
- Homepage đủ section
- Mobile đẹp, CTA rõ
- Không có section rỗng
- Không lorem ipsum
- Không text tiếng Anh ngoài code
- Build pass
9. Pha 6 — Tạo các trang route money page
Mục tiêu

Tạo các trang SEO chuyển đổi theo từng tuyến.

Pages bắt buộc
src/app/tuyen-xe/page.tsx
src/app/xe-ghep-thai-binh-ha-noi/page.tsx
src/app/xe-thai-binh-noi-bai/page.tsx
src/app/xe-thai-binh-hai-phong/page.tsx
src/app/xe-thai-binh-cat-ba/page.tsx
Cấu trúc mỗi money page

Mỗi trang tuyến phải có:

- H1 riêng
- Mô tả tuyến
- CTA gọi ngay ngay đầu trang
- Lợi ích tuyến đó
- Giá tham khảo hoặc “liên hệ báo giá”
- Quy trình đặt xe
- FAQ tuyến
- Internal links sang tuyến khác
- CTA cuối trang
Nội dung H1 đề xuất
/xe-ghep-thai-binh-ha-noi
H1: Xe ghép Thái Bình đi Hà Nội — đón tận nơi, trả tận nơi

/xe-thai-binh-noi-bai
H1: Xe Thái Bình đi Nội Bài — đặt xe sân bay nhanh, hỗ trợ hành lý

/xe-thai-binh-hai-phong
H1: Xe Thái Bình đi Hải Phòng — tiện chuyến, giá rõ ràng

/xe-thai-binh-cat-ba
H1: Xe Thái Bình đi Cát Bà — phù hợp du lịch, gia đình, nhóm nhỏ
Cách implement

Ưu tiên tạo component dùng chung:

src/components/route-page/route-hero.tsx
src/components/route-page/route-benefits.tsx
src/components/route-page/route-faq.tsx
src/components/route-page/related-routes.tsx

Nếu muốn nhanh hơn, có thể tạo một component:

src/components/route-page/route-landing-page.tsx

Sau đó mỗi page import data route theo slug.

Tiêu chí hoàn thành
- Tất cả money pages chạy được
- Mỗi trang có metadata riêng
- Không duplicate title y hệt nhau
- CTA gọi/Zalo hiện rõ
- Có link nội bộ giữa các tuyến
10. Pha 7 — Trang bảng giá và liên hệ
10.1. Trang /bang-gia

Nội dung:

H1: Bảng giá xe ghép, xe tiện chuyến Vũ Phú JP
Mô tả: Giá tham khảo cho xe ghép, bao xe 5 chỗ, bao xe 7 chỗ.

Bắt buộc có:

- 3 pricing cards
- Note giá phụ thuộc điểm đón/trả
- CTA gọi để báo giá chính xác
- FAQ về giá

FAQ giá:

Giá xe ghép từ bao nhiêu?
Bao xe 5 chỗ giá bao nhiêu?
Bao xe 7 chỗ giá bao nhiêu?
Giá có thay đổi theo giờ đi không?
Tôi muốn báo giá chính xác thì cần cung cấp gì?
10.2. Trang /lien-he

Nội dung:

H1: Liên hệ đặt xe Vũ Phú JP

Hiển thị:

- Số điện thoại lớn
- Nút Gọi ngay
- Nút Nhắn Zalo
- Email
- Khu vực phục vụ
- Form đặt xe nhanh đơn giản

Form đặt xe nhanh chỉ là UI, không cần backend ở MVP.

Fields:

Họ tên
Số điện thoại
Điểm đón
Điểm trả
Thời gian đi
Ghi chú

Khi submit:

- Không cần gửi server
- Có thể tạo link tel hoặc hiện thông báo “Vui lòng gọi 0963 467 577 để được xác nhận nhanh nhất”

Không làm API route nếu chưa cần.

Tiêu chí hoàn thành
- /bang-gia đầy đủ
- /lien-he đầy đủ
- Form không gây lỗi hydration
- CTA rõ
11. Pha 8 — SEO kỹ thuật
Mục tiêu

Chuẩn bị site deploy Vercel và index tốt.

Việc cần làm
11.1. Metadata

Trong từng page, tạo metadata riêng.

Homepage title:

Vũ Phú JP | Xe ghép Thái Bình Hà Nội, Nội Bài, Hải Phòng, Cát Bà

Homepage description:

Xe ghép, xe tiện chuyến Vũ Phú JP. Đón tận nơi, trả tận nơi, chạy hằng ngày, tài xế xác nhận nhanh. Gọi đặt xe 0963 467 577.
11.2. Sitemap

Tạo:

src/app/sitemap.ts

Bao gồm:

/
 /tuyen-xe
 /bang-gia
 /lien-he
 /xe-ghep-thai-binh-ha-noi
 /xe-thai-binh-noi-bai
 /xe-thai-binh-hai-phong
 /xe-thai-binh-cat-ba

Nếu chưa có domain chính thức, dùng env hoặc fallback:

https://example.com

Nhưng để biến dễ đổi:

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
11.3. Robots

Tạo:

src/app/robots.ts

Cho phép index:

User-agent: *
Allow: /
Sitemap: /sitemap.xml
11.4. JSON-LD

Tạo component:

src/components/seo/local-business-json-ld.tsx

Schema nên mô tả:

LocalBusiness
TaxiService
Tên: Vũ Phú JP
Phone: 0963 467 577
Area served: Thái Bình, Hà Nội, Nội Bài, Hải Phòng, Cát Bà

Không fake review/rating nếu không có dữ liệu thật.

11.5. Semantic HTML

Đảm bảo:

- Mỗi page có đúng 1 H1 chính
- Section có h2 rõ ràng
- Button/link có accessible label
- Ảnh có alt tiếng Việt
Tiêu chí hoàn thành
- Có metadata từng trang
- Có sitemap
- Có robots
- Có JSON-LD
- Không fake review
- Build pass
12. Pha 9 — Responsive, polish UI, conversion audit
Mục tiêu

Hoàn thiện UI để đẹp, nhẹ, không quê, không rối.

Checklist UI

Kiểm tra ở viewport:

375px mobile
768px tablet
1024px desktop
1440px desktop large

Yêu cầu:

- Header không vỡ
- Hero không quá cao trên mobile
- Phone number rõ
- Sticky CTA mobile không che nội dung
- Cards không bị lệch
- Spacing thoáng
- Không text quá nhỏ
- Không icon quá to gây quê
- Không shadow nặng
- Không quá nhiều border vàng
- Không dùng ảnh méo
Conversion checklist

Trên mobile, trong 5 giây đầu phải thấy:

- Dịch vụ là gì
- Đi tuyến nào
- Số điện thoại
- Nút gọi ngay

CTA phải xuất hiện ở:

- Header
- Hero
- Mỗi route card
- Pricing section
- Final CTA
- Sticky mobile bottom
Nội dung cần rà

Không để các câu chung chung quá yếu như:

Dịch vụ tốt nhất
Chất lượng số một
Uy tín hàng đầu

Thay bằng câu cụ thể:

Đón tận nơi tại Thái Bình, trả tận nơi tại Hà Nội/Nội Bài
Tài xế xác nhận nhanh sau khi gọi
Giá báo trước theo điểm đón, điểm trả
Có xe ghép và bao xe riêng 5 chỗ, 7 chỗ
Tiêu chí hoàn thành
- UI sạch, hiện đại
- Mobile tốt
- CTA mạnh
- Không có lorem ipsum
- Không lỗi console nghiêm trọng
13. Pha 10 — Kiểm tra build, cleanup, hướng dẫn chạy
Mục tiêu

Repo sạch, chạy được local, sẵn deploy Vercel.

Lệnh kiểm tra

Chạy:

pnpm lint
pnpm build

Nếu dùng npm:

npm run lint
npm run build

Có thể chạy:

pnpm dev

Hoặc:

npm run dev
Tạo hoặc cập nhật README.md

README phải có:

# Vũ Phú JP — Xe ghép, xe tiện chuyến

## Tech stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Chạy local
pnpm install
pnpm dev

## Build
pnpm build

## Deploy Vercel
- Push repo lên GitHub
- Import vào Vercel
- Set NEXT_PUBLIC_SITE_URL nếu có domain thật

## Nội dung chính
- Phone/Zalo chỉnh ở src/data/site.ts
- Tuyến xe chỉnh ở src/data/routes.ts
- Giá chỉnh ở src/data/pricing.ts
Cleanup

Xóa:

- Component demo không dùng
- Text boilerplate
- Ảnh/demo asset không dùng
- Import thừa
- Console.log không cần thiết
Tiêu chí hoàn thành cuối
- pnpm build pass hoặc npm run build pass
- Tất cả page truy cập được
- README đầy đủ
- Nội dung đúng Vũ Phú JP
- Không scope creep
14. Cấu trúc file mục tiêu

Kết quả cuối nên gần giống:

src/
  app/
    bang-gia/
      page.tsx
    lien-he/
      page.tsx
    tuyen-xe/
      page.tsx
    xe-ghep-thai-binh-ha-noi/
      page.tsx
    xe-thai-binh-noi-bai/
      page.tsx
    xe-thai-binh-hai-phong/
      page.tsx
    xe-thai-binh-cat-ba/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts

  components/
    home/
      booking-steps.tsx
      faq-section.tsx
      final-cta.tsx
      hero-section.tsx
      pricing-section.tsx
      routes-section.tsx
      service-benefits.tsx
      why-choose-us.tsx
    route-page/
      related-routes.tsx
      route-landing-page.tsx
    seo/
      local-business-json-ld.tsx
    container.tsx
    site-footer.tsx
    site-header.tsx
    sticky-mobile-cta.tsx
    ui/
      button.tsx
      card.tsx
      badge.tsx
      accordion.tsx
      separator.tsx
      input.tsx
      textarea.tsx

  data/
    faqs.ts
    pricing.ts
    routes.ts
    services.ts
    site.ts

public/
  images/
    hero-car-placeholder.svg
    route-ha-noi.svg
    route-noi-bai.svg
    route-hai-phong.svg
    route-cat-ba.svg

Nếu chưa có ảnh thật, tạo placeholder SVG local đẹp, không dùng link ảnh remote.

15. Copywriting bắt buộc ưu tiên

Dùng các câu sau trong website, phân bổ tự nhiên:

Xe ghép Thái Bình ⇄ Hà Nội / Nội Bài — đón tận nơi, có xe trong ngày

Gọi là có xe – Đi là thích ngay!

Đón tận nơi, trả tận nơi, chạy hằng ngày.

Tài xế xác nhận nhanh, giá rõ ràng, xe sạch, hỗ trợ hành lý.

Cần đi Hà Nội, Nội Bài, Hải Phòng, Cát Bà? Gọi Vũ Phú JP để được sắp xe nhanh.

Giá tham khảo có thể thay đổi theo điểm đón, điểm trả và thời gian đi. Gọi để được báo giá chính xác.

Không viết nội dung quá chung chung. Luôn gắn với tuyến xe, điểm đón/trả, số điện thoại và lợi ích cụ thể.

16. Quy tắc hoàn thành nghiêm ngặt

Chỉ coi là hoàn thành khi:

- Website chạy local
- Build pass
- Có đủ page yêu cầu
- Có CTA gọi điện trên toàn site
- Có sticky CTA mobile
- Có SEO metadata
- Có sitemap/robots
- Có JSON-LD
- README hướng dẫn rõ

Nếu chưa đạt các mục trên, chưa được báo hoàn thành.

17. Báo cáo cuối cùng phải ngắn gọn

Khi hoàn tất, báo cáo theo format:

Đã hoàn thành website Vũ Phú JP.

Files chính:
- ...
- ...

Pages:
- /
- /tuyen-xe
- /bang-gia
- /lien-he
- /xe-ghep-thai-binh-ha-noi
- /xe-thai-binh-noi-bai
- /xe-thai-binh-hai-phong
- /xe-thai-binh-cat-ba

Kiểm tra:
- lint: pass/fail
- build: pass/fail

Cách chạy:
pnpm dev

Ghi chú:
- Phone/Zalo chỉnh ở src/data/site.ts
- Giá chỉnh ở src/data/pricing.ts
- Tuyến chỉnh ở src/data/routes.ts

Không viết báo cáo dài lan man.

Cách dùng trong Codex

Bạn dán nguyên khối trên vào Codex, rồi thêm 3 dòng khóa phạm vi này ở cuối prompt:

Bắt đầu từ Pha 1. Không nhảy pha. Không thêm tính năng ngoài plan. Sau mỗi pha phải báo cáo ngắn và hỏi tôi xác nhận trước khi sang pha tiếp theo nếu có thay đổi lớn.

Điểm quan trọng nhất để Codex không làm lan man là: không cho nó tự thiết kế app booking, chỉ làm marketing website + CTA gọi/Zalo + route money pages + Vercel-ready build.

## All Messages

### 0 user

cần xây dựng website xe ghép - xe tiện chuyến dự trên nội dung đang có. hãy tìm hiểu repo nào phù hợp, dùng nextjs và build vercel. quan trong là thông tin, hook mạnh để người dùng chuyển đổi CTA gọi đặt xe
### 1 assistant

Tôi đã xem mockup và rà các repo/template public phù hợp. Kết luận: không nên lấy repo taxi booking app làm nền chính. Website này cần landing/service site tối ưu chuyển đổi cuộc gọi, không cần app đặt xe phức tạp. Nên dùng Next.js + Tailwind + shadcn/ui, deploy Vercel, content tách thành data để dễ nhân bản tuyến xe.

Repo/template nên chọn
Lựa chọn	Đánh giá	Nên dùng thế nào
Launch UI	Phù hợp nhất để làm website dịch vụ hiện đại: Next.js, shadcn/ui, Tailwind, TypeScript, responsive, SEO-oriented; repo ghi rõ hỗ trợ React 19, Tailwind v4, Next.js 16. 
GitHub
	Dùng làm component/block kit, lấy hero, feature, pricing, FAQ, CTA, footer rồi custom thành xe ghép.
nobruf/shadcn-landing-page	Có sẵn Navbar, Hero, Benefits, Features, Testimonials, Contact, Pricing, FAQ, Services, Footer; MIT, responsive, Next.js + TypeScript + Tailwind + shadcn. 
GitHub
	Phù hợp làm base landing page nhanh, ít phải dựng từ đầu.
akash3444/shadcn-ui-landing-page	Modern, responsive, Next.js 15, Tailwind, shadcn UI/Blocks, có hướng dẫn thay ảnh/text. 
GitHub
	Phương án dự phòng nếu muốn base gọn, clean.
DriverUP-Company	Đúng ngách taxi, nhưng repo dùng JavaScript, template cũ, README còn khuyến nghị Node 14+, ít sao hơn. 
GitHub
	Chỉ nên tham khảo layout/nội dung taxi, không nên làm nền chính.
nextjs/saas-starter	Có auth, Stripe, dashboard, RBAC, Postgres. 
GitHub
	Không phù hợp vì quá nặng cho website gọi đặt xe.

Chốt kỹ thuật: tạo repo mới bằng Next.js App Router, rồi copy/custom blocks từ Launch UI hoặc nobruf. shadcn/ui phù hợp vì nó đưa code component vào project để sửa trực tiếp, không bị khóa bởi component library đóng gói. 
ui.shadcn.com

Hook chính nên đổi mạnh hơn mockup hiện tại

Mockup đang dùng “Xe ghép – Xe tiện chuyến” khá đúng ngành, nhưng hook chuyển đổi cần cụ thể hơn theo nhu cầu tìm kiếm:

Hero đề xuất:

Xe ghép Thái Bình ⇄ Hà Nội / Nội Bài — đón tận nơi, có xe trong ngày
Gọi là có xe, tài xế xác nhận nhanh, giá rõ ràng, hỗ trợ hành lý — phù hợp đi sân bay, đi viện, về quê, công tác.

CTA chính:

Gọi đặt xe: 0963 467 577

CTA phụ:

Nhắn Zalo báo điểm đón

Trust bar ngay dưới CTA:

Đón tận nơi • Trả tận nơi • Chạy hằng ngày • Xe sạch • Tài xế thân thiện • Hỗ trợ 24/7

Điểm quan trọng: CTA gọi phải xuất hiện trong 5 giây đầu, đặc biệt mobile. Không để ảnh hero chiếm quá nhiều chiều cao làm người dùng phải cuộn mới thấy số điện thoại.

Cấu trúc website nên build

Nên chia thành các trang tiền chuyển đổi, không chỉ 1 homepage:

Trang	Mục tiêu
/	Landing tổng: xe ghép, xe tiện chuyến, số điện thoại lớn, tuyến chính
/tuyen-xe	Danh sách tuyến
/xe-ghep-thai-binh-ha-noi	Money page chính
/xe-thai-binh-noi-bai	Money page sân bay, intent mạnh
/xe-thai-binh-hai-phong	Tuyến phụ
/xe-thai-binh-cat-ba	Tuyến du lịch
/bang-gia	Giá tham khảo + CTA gọi chốt giá
/lien-he	Gọi, Zalo, địa chỉ, form đặt xe nhanh

Với SEO Next.js, dùng Metadata API cho title/description/OG theo từng route; Next.js có API metadata chính thức cho SEO và social sharing. 
nextjs.org
+1

Layout homepage nên triển khai

Thứ tự section nên là:

Hero chuyển đổi cao
H1 theo tuyến chính, số điện thoại cực lớn, nút Gọi ngay, nút Zalo, quick form: Điểm đón / Điểm trả / Ngày đi.

Tuyến chạy hằng ngày
Thái Bình ⇄ Hà Nội, Nội Bài, Hải Phòng, Cát Bà. Mỗi card có CTA “Gọi tuyến này”.

Lý do chọn Vũ Phú JP
Đón tận nơi, trả tận nơi, xe sạch, tài xế thân thiện, lịch chạy hằng ngày, hỗ trợ hành lý.

Bảng giá tham khảo
Xe ghép 300K–400K, bao xe 5 chỗ 700K–900K, bao xe 7 chỗ 900K–1.1TR. Ghi rõ “giá có thể thay đổi theo điểm đón/trả, gọi để báo giá chính xác”.

Quy trình đặt xe 3 bước
Gọi/Zalo → báo điểm đón/trả → tài xế xác nhận.

FAQ xử lý do dự
Có đón tận nhà không? Có đi sân bay sáng sớm không? Có nhận hành lý không? Có xe 7 chỗ không? Đặt trước bao lâu?

CTA cuối trang + sticky CTA mobile
Thanh cố định dưới màn hình mobile: “Gọi ngay” + “Zalo”.

Yêu cầu kỹ thuật cho repo Next.js

Nên dùng:

Bash
npx create-next-app@latest vu-phu-jp-xe-ghep --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

Sau đó cài shadcn:

Bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card badge accordion sheet navigation-menu input textarea separator

Cấu trúc thư mục nên như sau:

src/
  app/
    page.tsx
    tuyen-xe/page.tsx
    bang-gia/page.tsx
    lien-he/page.tsx
    xe-ghep-thai-binh-ha-noi/page.tsx
    xe-thai-binh-noi-bai/page.tsx
    layout.tsx
    sitemap.ts
    robots.ts
  components/
    site-header.tsx
    hero-section.tsx
    route-card.tsx
    pricing-section.tsx
    trust-section.tsx
    faq-section.tsx
    sticky-mobile-cta.tsx
    footer.tsx
  data/
    site.ts
    routes.ts
    pricing.ts

Ảnh nên dùng next/image để tối ưu kích thước, định dạng và hạn chế layout shift; Next.js có Image component cho size optimization, lazy loading và visual stability. 
nextjs.org
+1

Deploy thì dùng Vercel là hợp nhất với Next.js. Vercel hỗ trợ deploy qua Git, CLI, preview URL cho mỗi lần deploy; tài liệu Vercel cũng có danh mục template Next.js và Marketing Sites để khởi tạo nhanh. 
Vercel
+1

SEO + Local SEO cần có ngay từ đầu

Cần gắn JSON-LD cho business/service. Google có hướng dẫn LocalBusiness structured data để khai báo thông tin doanh nghiệp như giờ mở cửa, phòng ban, review nếu có dữ liệu hợp lệ. 
Google for Developers
 Với ngành này, có thể dùng thêm TaxiService vì Schema.org định nghĩa đây là dịch vụ xe có tài xế cho di chuyển địa phương. 
schema.org

Nội dung NAP phải nhất quán:

Tên: Vũ Phú JP
SĐT: 0963 467 577
Khu vực phục vụ: Thái Bình, Hà Nội, Nội Bài, Hải Phòng, Cát Bà
Dịch vụ: Xe ghép, xe tiện chuyến, bao xe 5 chỗ, bao xe 7 chỗ

Google Business Profile cũng khuyến nghị dùng số điện thoại địa phương/do doanh nghiệp kiểm soát trực tiếp. 
Trợ Giúp Google

Brief giao cho Codex/AI agent

Dán đoạn này cho agent implement:

Goal: Build a high-converting Vietnamese service website for “Vũ Phú JP – Xe ghép, xe tiện chuyến” using Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, deployable to Vercel.

Do not build a complex ride-hailing app. This is a conversion-focused marketing website. Main KPI: phone call / Zalo click / booking inquiry.

Brand:
- Name: Vũ Phú JP
- Phone: 0963 467 577
- Positioning: An toàn – Uy tín – Chất lượng
- Services: Xe ghép, xe tiện chuyến, đón tận nơi, trả tận nơi, chạy hằng ngày, bao xe 5 chỗ, bao xe 7 chỗ
- Routes: Thái Bình ⇄ Hà Nội, Thái Bình ⇄ Nội Bài, Thái Bình ⇄ Hải Phòng, Thái Bình ⇄ Cát Bà
- Price anchors: Xe ghép 300K–400K, bao xe 5 chỗ 700K–900K, bao xe 7 chỗ 900K–1.1TR

Tech:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react icons
- next/image
- Vercel-ready build

Pages:
- /
- /tuyen-xe
- /bang-gia
- /lien-he
- /xe-ghep-thai-binh-ha-noi
- /xe-thai-binh-noi-bai
- /xe-thai-binh-hai-phong
- /xe-thai-binh-cat-ba

Homepage sections:
1. Header with logo, nav, call button
2. Hero: “Xe ghép Thái Bình ⇄ Hà Nội / Nội Bài — đón tận nơi, có xe trong ngày”
3. CTA: tel:0963467577 and Zalo CTA
4. Service benefits
5. Route cards
6. Pricing cards
7. Why choose us
8. FAQ
9. Final CTA banner
10. Footer
11. Sticky mobile CTA bottom bar

SEO:
- Unique metadata for every page
- sitemap.ts and robots.ts
- JSON-LD LocalBusiness + TaxiService
- Clean semantic headings
- Internal links between route pages
- All phone numbers clickable using tel:0963467577

UX:
- Mobile-first
- CTA visible above the fold
- Sticky bottom CTA on mobile
- Fast loading images
- No heavy booking engine
- Form is optional; phone and Zalo are primary

Khuyến nghị cuối: dùng Launch UI làm nguồn block/component, hoặc nobruf/shadcn-landing-page làm base repo nhanh. Với mục tiêu của site này, thắng thua nằm ở hook tuyến xe + số điện thoại nổi bật + CTA sticky mobile + money page theo từng tuyến, không nằm ở việc làm app đặt xe phức tạp.
### 2 user

hãy lên plan chi tiết từng pha và hướng dẫn chi tiết để codex đọc toàn bộ nội dung chat trong đoạn chat project này để xây dựng repo local. yêu cầu từng pha có hướng dẫn đầy đủ và thật chi tiết để ép codex bám theo plan ko đi lạc hướng làm liên miên mãi ko xong tốn token.
### 3 assistant

Dưới đây là plan dạng master prompt để bạn dán thẳng cho Codex. Nội dung này ép Codex làm theo từng pha, có phạm vi rõ, có tiêu chí hoàn thành, tránh lan man xây app đặt xe phức tạp.

Sửa
MASTER PLAN CHO CODEX — BUILD WEBSITE “VŨ PHÚ JP | XE GHÉP – XE TIỆN CHUYẾN”
0. Vai trò của Codex

Bạn là coding agent triển khai repo local cho website dịch vụ Vũ Phú JP – Xe ghép, xe tiện chuyến.

Mục tiêu chính: xây dựng website Next.js chạy được local, deploy được Vercel, tối ưu chuyển đổi cuộc gọi / Zalo / đặt xe.

Không được biến dự án này thành app đặt xe phức tạp. Không làm login, dashboard, tracking tài xế, payment, bản đồ realtime, quản lý đơn, database, CMS, admin panel ở bản MVP này.

Website cần giống định hướng mockup đã gửi trong chat: giao diện hiện đại, chuyên nghiệp, trẻ trung, nhẹ, màu chủ đạo navy / gold / white, CTA gọi điện nổi bật, nội dung rõ ràng, tập trung vào tuyến xe và chuyển đổi.

1. Ngữ cảnh dự án
Thương hiệu

Tên thương hiệu:

Vũ Phú JP

Tagline:

An toàn – Uy tín – Chất lượng

Số điện thoại chính:

0963 467 577

Dịch vụ chính:

Xe ghép
Xe tiện chuyến
Đón tận nơi
Trả tận nơi
Chạy hằng ngày
Bao xe 5 chỗ
Bao xe 7 chỗ
Nhận chở hành lý, hàng hóa

Tuyến chính:

Thái Bình ⇄ Hà Nội
Thái Bình ⇄ Nội Bài
Thái Bình ⇄ Hải Phòng
Thái Bình ⇄ Cát Bà

Giá tham khảo:

Xe ghép: 300K – 400K
Bao xe 5 chỗ: 700K – 900K
Bao xe 7 chỗ: 900K – 1.1TR

Thông điệp chuyển đổi:

Gọi là có xe – Đi là thích ngay!
Đón tận nơi – Trả tận nơi – Có xe trong ngày
Tài xế xác nhận nhanh, giá rõ ràng, xe sạch, hỗ trợ hành lý
2. Nguyên tắc bắt buộc
2.1. Không đi lệch phạm vi

Không làm các tính năng sau trong MVP:

- Không authentication
- Không dashboard
- Không database
- Không payment
- Không map realtime
- Không quản lý tài xế
- Không quản lý chuyến xe động
- Không chatbot
- Không tích hợp API bên thứ ba phức tạp
- Không CMS
- Không animation quá nặng
- Không dùng thư viện UI nặng nếu không cần
2.2. Stack bắt buộc

Dùng:

Next.js App Router
TypeScript
Tailwind CSS
shadcn/ui
lucide-react
next/image
Vercel-ready

Không tự ý đổi sang:

Vue
Nuxt
Astro
Laravel
WordPress
React Router SPA
Plain HTML only
2.3. Ưu tiên chuyển đổi

Mỗi trang quan trọng phải có:

- H1 rõ intent tìm kiếm
- Số điện thoại 0963 467 577 hiển thị nổi bật
- Nút gọi ngay dùng tel:0963467577
- CTA Zalo hoặc “Nhắn Zalo báo điểm đón”
- Sticky CTA mobile dưới màn hình
- Nội dung tuyến xe rõ ràng
- FAQ xử lý băn khoăn
3. Quy trình làm việc bắt buộc cho Codex
Pha nào làm pha đó

Chỉ làm đúng pha hiện tại. Không nhảy sang pha khác khi chưa hoàn thành tiêu chí pha đó.

Sau mỗi pha, phải báo cáo:

- Đã tạo/sửa file nào
- Lý do sửa
- Lệnh đã chạy
- Kết quả lint/build
- Việc còn lại của pha tiếp theo
Khi gặp lỗi

Nếu build/lint lỗi:

- Đọc lỗi chính xác
- Sửa nguyên nhân gốc
- Không rewrite toàn bộ dự án
- Không đổi stack
- Không cài package mới nếu lỗi không bắt buộc
- Tối đa 2 vòng sửa cho cùng một lỗi
- Nếu sau 2 vòng vẫn lỗi, dừng và báo lỗi rõ ràng
Không tiêu token lan man

Không phân tích lại chiến lược quá dài trong quá trình code. Bám checklist. Không tự mở rộng tính năng.

4. Pha 1 — Khảo sát repo local
Mục tiêu

Xác định đây là folder rỗng hay repo đã có code.

Việc cần làm

Chạy:

pwd
ls -la
git status || true
find . -maxdepth 2 -type f | sed 's#^\./##' | sort | head -100

Nếu có package.json, đọc:

cat package.json

Nếu có src/app hoặc app, kiểm tra cấu trúc:

find . -maxdepth 3 -type f | sort | head -200
Quyết định

Nếu folder rỗng hoặc chưa phải Next.js app:

Tạo project Next.js mới.

Nếu đã là Next.js app:

Không tạo lại project. Chỉ chỉnh sửa theo cấu trúc hiện có.
Tiêu chí hoàn thành
- Biết rõ repo hiện tại đang trống hay có code
- Biết package manager đang dùng: pnpm/npm/yarn/bun
- Không sửa code ở pha này nếu chưa cần
5. Pha 2 — Khởi tạo Next.js nếu repo trống
Mục tiêu

Tạo Next.js app local sạch, gọn, đúng stack.

Nếu repo trống

Chạy một trong các lệnh sau. Ưu tiên pnpm nếu máy có pnpm:

pnpm create next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

Nếu không có pnpm:

npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

Sau đó cài shadcn/ui:

pnpm dlx shadcn@latest init

Nếu dùng npm:

npx shadcn@latest init

Cài component cần dùng:

pnpm dlx shadcn@latest add button card badge accordion separator sheet input textarea

Nếu npm:

npx shadcn@latest add button card badge accordion separator sheet input textarea

Cài icon:

pnpm add lucide-react

Hoặc:

npm install lucide-react
Nếu repo đã có Next.js

Không chạy create-next-app. Chỉ kiểm tra thiếu package nào thì cài package đó.

Tiêu chí hoàn thành

Chạy được:

pnpm lint
pnpm build

Hoặc nếu npm:

npm run lint
npm run build

Nếu project mới chưa có script lint phù hợp, dùng script có trong package.json.

6. Pha 3 — Thiết lập cấu trúc dữ liệu tĩnh
Mục tiêu

Tách toàn bộ nội dung website vào file data để dễ sửa, không hardcode lung tung trong component.

Tạo cấu trúc
src/
  data/
    site.ts
    routes.ts
    pricing.ts
    services.ts
    faqs.ts
Nội dung src/data/site.ts

Tạo object chứa:

export const siteConfig = {
  name: "Vũ Phú JP",
  tagline: "An toàn – Uy tín – Chất lượng",
  phone: "0963 467 577",
  phoneHref: "tel:0963467577",
  zaloHref: "https://zalo.me/0963467577",
  email: "vuphu.jp.transport@gmail.com",
  location: "Thái Bình, Việt Nam",
  serviceArea: ["Thái Bình", "Hà Nội", "Nội Bài", "Hải Phòng", "Cát Bà"],
  slogan: "Gọi là có xe – Đi là thích ngay!",
}

Nếu chưa chắc email/Zalo chính xác, vẫn để trong data để dễ đổi sau, không rải nhiều nơi.

Nội dung src/data/routes.ts

Tạo danh sách tuyến:

export const routes = [
  {
    slug: "xe-ghep-thai-binh-ha-noi",
    name: "Thái Bình ⇄ Hà Nội",
    title: "Xe ghép Thái Bình ⇄ Hà Nội",
    description: "Đón tận nơi, trả tận nơi, chạy hằng ngày, tài xế xác nhận nhanh.",
    highlights: ["Đón tận nơi", "Trả tận nơi", "Chạy hằng ngày", "Giá rõ ràng"],
    priceFrom: "300K",
  },
  {
    slug: "xe-thai-binh-noi-bai",
    name: "Thái Bình ⇄ Nội Bài",
    title: "Xe Thái Bình đi Nội Bài",
    description: "Phù hợp đi sân bay, hỗ trợ hành lý, có xe sáng sớm theo lịch đặt.",
    highlights: ["Đi sân bay", "Hỗ trợ hành lý", "Đặt trước tiện lợi", "Xe sạch"],
    priceFrom: "Liên hệ",
  },
  {
    slug: "xe-thai-binh-hai-phong",
    name: "Thái Bình ⇄ Hải Phòng",
    title: "Xe Thái Bình đi Hải Phòng",
    description: "Tuyến tiện chuyến, phù hợp công việc, thăm thân, di chuyển liên tỉnh.",
    highlights: ["Nhanh chóng", "Tiết kiệm", "Tiện lợi", "Tài xế thân thiện"],
    priceFrom: "Liên hệ",
  },
  {
    slug: "xe-thai-binh-cat-ba",
    name: "Thái Bình ⇄ Cát Bà",
    title: "Xe Thái Bình đi Cát Bà",
    description: "Phù hợp đi du lịch, nhóm nhỏ, gia đình, hỗ trợ hành lý.",
    highlights: ["Đi du lịch", "Nhóm nhỏ", "Gia đình", "Trọn vẹn niềm vui"],
    priceFrom: "Liên hệ",
  },
]
Nội dung src/data/pricing.ts
export const pricing = [
  {
    name: "Xe ghép",
    price: "300K - 400K",
    description: "Phù hợp khách đi lẻ, tiết kiệm chi phí.",
    features: ["Giá hợp lý", "Lịch trình linh hoạt", "Đón tận nơi", "Trả tận nơi"],
    popular: false,
  },
  {
    name: "Bao xe 5 chỗ",
    price: "700K - 900K",
    description: "Phù hợp gia đình nhỏ, nhóm nhỏ, chủ động thời gian.",
    features: ["Chủ động thời gian", "Riêng tư", "Phù hợp gia đình", "Không ghép khách"],
    popular: true,
  },
  {
    name: "Bao xe 7 chỗ",
    price: "900K - 1.1TR",
    description: "Phù hợp nhóm đông, nhiều hành lý, đi sân bay hoặc du lịch.",
    features: ["Không gian rộng", "Phù hợp nhóm", "Nhiều hành lý", "Thoải mái"],
    popular: false,
  },
]
Tiêu chí hoàn thành
- Có đầy đủ data files
- Component sau này chỉ import data
- Không lặp số điện thoại thủ công nhiều nơi
7. Pha 4 — Xây layout nền
Mục tiêu

Tạo giao diện nền nhất quán toàn site.

File cần tạo/sửa
src/app/layout.tsx
src/app/globals.css
src/components/site-header.tsx
src/components/site-footer.tsx
src/components/sticky-mobile-cta.tsx
src/components/container.tsx
Style direction

Giao diện phải:

- Modern
- Thanh mảnh
- Nhẹ nhàng
- Không bí bách
- Không quá nhiều viền dày
- Không gradient màu mè quá đậm
- Navy / Gold / White làm chủ đạo
- Card bo góc lớn, shadow nhẹ
- Typography rõ, mạnh ở headline và phone number
Màu gợi ý

Dùng CSS variables hoặc Tailwind class:

Navy: #082344 hoặc gần tương đương
Gold: #D8A23A hoặc gần tương đương
Soft gold: #F5D992 hoặc gần tương đương
Background: #FFFFFF / #F8FAFC
Text: #0F172A
Muted: #64748B

Không dùng quá nhiều màu phụ.

Header

Header desktop:

Logo trái
Nav giữa/phải: Trang chủ, Tuyến xe, Bảng giá, Dịch vụ, Liên hệ
CTA phải: Gọi ngay

Header mobile:

Logo trái
Nút menu hoặc nav đơn giản
CTA gọi nổi bật
Sticky mobile CTA

Bắt buộc tạo thanh fixed bottom trên mobile:

[Gọi ngay] [Nhắn Zalo]

Yêu cầu:

- Chỉ hiện mobile
- Không che nội dung footer: thêm padding-bottom cho body/main nếu cần
- tel:0963467577
- zaloHref lấy từ siteConfig
Tiêu chí hoàn thành
- Layout chạy responsive
- Header không vỡ mobile
- Sticky CTA mobile hoạt động
- Build không lỗi
8. Pha 5 — Homepage conversion-first
Mục tiêu

Build trang / hoàn chỉnh, tập trung chuyển đổi.

File chính
src/app/page.tsx
src/components/home/hero-section.tsx
src/components/home/service-benefits.tsx
src/components/home/routes-section.tsx
src/components/home/pricing-section.tsx
src/components/home/why-choose-us.tsx
src/components/home/booking-steps.tsx
src/components/home/faq-section.tsx
src/components/home/final-cta.tsx

Nếu muốn ít file hơn, có thể đặt trong src/components/sections/, nhưng phải rõ ràng.

8.1. Hero section

Hero phải có H1:

Xe ghép Thái Bình ⇄ Hà Nội / Nội Bài — đón tận nơi, có xe trong ngày

Subheadline:

Vũ Phú JP chuyên xe ghép, xe tiện chuyến, bao xe 5 chỗ, 7 chỗ. Tài xế xác nhận nhanh, giá rõ ràng, xe sạch, hỗ trợ hành lý.

CTA chính:

Gọi đặt xe: 0963 467 577

CTA phụ:

Nhắn Zalo báo điểm đón

Trust chips:

Đón tận nơi
Trả tận nơi
Chạy hằng ngày
Xe sạch
Tài xế thân thiện
Hỗ trợ 24/7

Visual hero:

- Có khu vực ảnh xe hoặc card minh họa
- Nếu chưa có ảnh thật, dùng gradient/card placeholder đẹp
- Không để hero trống
- Không dùng ảnh remote dễ lỗi

Yêu cầu mobile:

- H1 nhìn thấy ngay
- Phone number thấy trong màn hình đầu
- CTA gọi ngay không bị đẩy xuống quá sâu
8.2. Service benefits

Hiển thị 8 lợi ích:

Đón tận nơi
Trả tận nơi
Chạy hằng ngày
Gọi là có xe
Xe sạch sẽ
Điều hòa mát
Tài xế thân thiện
Nhận chở hành lý, hàng hóa

Mỗi card có icon lucide phù hợp.

8.3. Routes section

Hiển thị 4 tuyến:

Thái Bình ⇄ Hà Nội
Thái Bình ⇄ Nội Bài
Thái Bình ⇄ Hải Phòng
Thái Bình ⇄ Cát Bà

Mỗi card có:

- Tên tuyến
- Mô tả ngắn
- 3–4 highlight
- CTA “Gọi tuyến này”
- Link “Xem chi tiết”
8.4. Pricing section

3 pricing card:

Xe ghép: 300K - 400K
Bao xe 5 chỗ: 700K - 900K
Bao xe 7 chỗ: 900K - 1.1TR

Card “Bao xe 5 chỗ” gắn badge:

Phổ biến

Có note:

Giá trên là giá tham khảo. Giá thực tế phụ thuộc điểm đón, điểm trả, thời gian đi và loại xe. Gọi để được báo giá chính xác.
8.5. Why choose us

4 lý do:

Uy tín tạo niềm tin
An toàn lên hàng đầu
Chất lượng hàng đầu
Phục vụ tận tâm
8.6. Booking steps

3 bước:

1. Gọi hoặc nhắn Zalo
2. Báo điểm đón, điểm trả, thời gian đi
3. Tài xế xác nhận và đón tận nơi
8.7. FAQ

FAQ bắt buộc có:

Có đón tận nhà không?
Có trả tận nơi không?
Tôi đi Nội Bài sáng sớm có đặt được không?
Giá xe ghép tính thế nào?
Có bao xe riêng không?
Có chở hành lý hoặc hàng hóa không?
Nên đặt xe trước bao lâu?
8.8. Final CTA

Banner cuối trang:

Cần xe đi ngay? Gọi Vũ Phú JP
0963 467 577
Gọi là có xe – Đi là thích ngay!
Tiêu chí hoàn thành
- Homepage đủ section
- Mobile đẹp, CTA rõ
- Không có section rỗng
- Không lorem ipsum
- Không text tiếng Anh ngoài code
- Build pass
9. Pha 6 — Tạo các trang route money page
Mục tiêu

Tạo các trang SEO chuyển đổi theo từng tuyến.

Pages bắt buộc
src/app/tuyen-xe/page.tsx
src/app/xe-ghep-thai-binh-ha-noi/page.tsx
src/app/xe-thai-binh-noi-bai/page.tsx
src/app/xe-thai-binh-hai-phong/page.tsx
src/app/xe-thai-binh-cat-ba/page.tsx
Cấu trúc mỗi money page

Mỗi trang tuyến phải có:

- H1 riêng
- Mô tả tuyến
- CTA gọi ngay ngay đầu trang
- Lợi ích tuyến đó
- Giá tham khảo hoặc “liên hệ báo giá”
- Quy trình đặt xe
- FAQ tuyến
- Internal links sang tuyến khác
- CTA cuối trang
Nội dung H1 đề xuất
/xe-ghep-thai-binh-ha-noi
H1: Xe ghép Thái Bình đi Hà Nội — đón tận nơi, trả tận nơi

/xe-thai-binh-noi-bai
H1: Xe Thái Bình đi Nội Bài — đặt xe sân bay nhanh, hỗ trợ hành lý

/xe-thai-binh-hai-phong
H1: Xe Thái Bình đi Hải Phòng — tiện chuyến, giá rõ ràng

/xe-thai-binh-cat-ba
H1: Xe Thái Bình đi Cát Bà — phù hợp du lịch, gia đình, nhóm nhỏ
Cách implement

Ưu tiên tạo component dùng chung:

src/components/route-page/route-hero.tsx
src/components/route-page/route-benefits.tsx
src/components/route-page/route-faq.tsx
src/components/route-page/related-routes.tsx

Nếu muốn nhanh hơn, có thể tạo một component:

src/components/route-page/route-landing-page.tsx

Sau đó mỗi page import data route theo slug.

Tiêu chí hoàn thành
- Tất cả money pages chạy được
- Mỗi trang có metadata riêng
- Không duplicate title y hệt nhau
- CTA gọi/Zalo hiện rõ
- Có link nội bộ giữa các tuyến
10. Pha 7 — Trang bảng giá và liên hệ
10.1. Trang /bang-gia

Nội dung:

H1: Bảng giá xe ghép, xe tiện chuyến Vũ Phú JP
Mô tả: Giá tham khảo cho xe ghép, bao xe 5 chỗ, bao xe 7 chỗ.

Bắt buộc có:

- 3 pricing cards
- Note giá phụ thuộc điểm đón/trả
- CTA gọi để báo giá chính xác
- FAQ về giá

FAQ giá:

Giá xe ghép từ bao nhiêu?
Bao xe 5 chỗ giá bao nhiêu?
Bao xe 7 chỗ giá bao nhiêu?
Giá có thay đổi theo giờ đi không?
Tôi muốn báo giá chính xác thì cần cung cấp gì?
10.2. Trang /lien-he

Nội dung:

H1: Liên hệ đặt xe Vũ Phú JP

Hiển thị:

- Số điện thoại lớn
- Nút Gọi ngay
- Nút Nhắn Zalo
- Email
- Khu vực phục vụ
- Form đặt xe nhanh đơn giản

Form đặt xe nhanh chỉ là UI, không cần backend ở MVP.

Fields:

Họ tên
Số điện thoại
Điểm đón
Điểm trả
Thời gian đi
Ghi chú

Khi submit:

- Không cần gửi server
- Có thể tạo link tel hoặc hiện thông báo “Vui lòng gọi 0963 467 577 để được xác nhận nhanh nhất”

Không làm API route nếu chưa cần.

Tiêu chí hoàn thành
- /bang-gia đầy đủ
- /lien-he đầy đủ
- Form không gây lỗi hydration
- CTA rõ
11. Pha 8 — SEO kỹ thuật
Mục tiêu

Chuẩn bị site deploy Vercel và index tốt.

Việc cần làm
11.1. Metadata

Trong từng page, tạo metadata riêng.

Homepage title:

Vũ Phú JP | Xe ghép Thái Bình Hà Nội, Nội Bài, Hải Phòng, Cát Bà

Homepage description:

Xe ghép, xe tiện chuyến Vũ Phú JP. Đón tận nơi, trả tận nơi, chạy hằng ngày, tài xế xác nhận nhanh. Gọi đặt xe 0963 467 577.
11.2. Sitemap

Tạo:

src/app/sitemap.ts

Bao gồm:

/
 /tuyen-xe
 /bang-gia
 /lien-he
 /xe-ghep-thai-binh-ha-noi
 /xe-thai-binh-noi-bai
 /xe-thai-binh-hai-phong
 /xe-thai-binh-cat-ba

Nếu chưa có domain chính thức, dùng env hoặc fallback:

https://example.com

Nhưng để biến dễ đổi:

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
11.3. Robots

Tạo:

src/app/robots.ts

Cho phép index:

User-agent: *
Allow: /
Sitemap: /sitemap.xml
11.4. JSON-LD

Tạo component:

src/components/seo/local-business-json-ld.tsx

Schema nên mô tả:

LocalBusiness
TaxiService
Tên: Vũ Phú JP
Phone: 0963 467 577
Area served: Thái Bình, Hà Nội, Nội Bài, Hải Phòng, Cát Bà

Không fake review/rating nếu không có dữ liệu thật.

11.5. Semantic HTML

Đảm bảo:

- Mỗi page có đúng 1 H1 chính
- Section có h2 rõ ràng
- Button/link có accessible label
- Ảnh có alt tiếng Việt
Tiêu chí hoàn thành
- Có metadata từng trang
- Có sitemap
- Có robots
- Có JSON-LD
- Không fake review
- Build pass
12. Pha 9 — Responsive, polish UI, conversion audit
Mục tiêu

Hoàn thiện UI để đẹp, nhẹ, không quê, không rối.

Checklist UI

Kiểm tra ở viewport:

375px mobile
768px tablet
1024px desktop
1440px desktop large

Yêu cầu:

- Header không vỡ
- Hero không quá cao trên mobile
- Phone number rõ
- Sticky CTA mobile không che nội dung
- Cards không bị lệch
- Spacing thoáng
- Không text quá nhỏ
- Không icon quá to gây quê
- Không shadow nặng
- Không quá nhiều border vàng
- Không dùng ảnh méo
Conversion checklist

Trên mobile, trong 5 giây đầu phải thấy:

- Dịch vụ là gì
- Đi tuyến nào
- Số điện thoại
- Nút gọi ngay

CTA phải xuất hiện ở:

- Header
- Hero
- Mỗi route card
- Pricing section
- Final CTA
- Sticky mobile bottom
Nội dung cần rà

Không để các câu chung chung quá yếu như:

Dịch vụ tốt nhất
Chất lượng số một
Uy tín hàng đầu

Thay bằng câu cụ thể:

Đón tận nơi tại Thái Bình, trả tận nơi tại Hà Nội/Nội Bài
Tài xế xác nhận nhanh sau khi gọi
Giá báo trước theo điểm đón, điểm trả
Có xe ghép và bao xe riêng 5 chỗ, 7 chỗ
Tiêu chí hoàn thành
- UI sạch, hiện đại
- Mobile tốt
- CTA mạnh
- Không có lorem ipsum
- Không lỗi console nghiêm trọng
13. Pha 10 — Kiểm tra build, cleanup, hướng dẫn chạy
Mục tiêu

Repo sạch, chạy được local, sẵn deploy Vercel.

Lệnh kiểm tra

Chạy:

pnpm lint
pnpm build

Nếu dùng npm:

npm run lint
npm run build

Có thể chạy:

pnpm dev

Hoặc:

npm run dev
Tạo hoặc cập nhật README.md

README phải có:

# Vũ Phú JP — Xe ghép, xe tiện chuyến

## Tech stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Chạy local
pnpm install
pnpm dev

## Build
pnpm build

## Deploy Vercel
- Push repo lên GitHub
- Import vào Vercel
- Set NEXT_PUBLIC_SITE_URL nếu có domain thật

## Nội dung chính
- Phone/Zalo chỉnh ở src/data/site.ts
- Tuyến xe chỉnh ở src/data/routes.ts
- Giá chỉnh ở src/data/pricing.ts
Cleanup

Xóa:

- Component demo không dùng
- Text boilerplate
- Ảnh/demo asset không dùng
- Import thừa
- Console.log không cần thiết
Tiêu chí hoàn thành cuối
- pnpm build pass hoặc npm run build pass
- Tất cả page truy cập được
- README đầy đủ
- Nội dung đúng Vũ Phú JP
- Không scope creep
14. Cấu trúc file mục tiêu

Kết quả cuối nên gần giống:

src/
  app/
    bang-gia/
      page.tsx
    lien-he/
      page.tsx
    tuyen-xe/
      page.tsx
    xe-ghep-thai-binh-ha-noi/
      page.tsx
    xe-thai-binh-noi-bai/
      page.tsx
    xe-thai-binh-hai-phong/
      page.tsx
    xe-thai-binh-cat-ba/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts

  components/
    home/
      booking-steps.tsx
      faq-section.tsx
      final-cta.tsx
      hero-section.tsx
      pricing-section.tsx
      routes-section.tsx
      service-benefits.tsx
      why-choose-us.tsx
    route-page/
      related-routes.tsx
      route-landing-page.tsx
    seo/
      local-business-json-ld.tsx
    container.tsx
    site-footer.tsx
    site-header.tsx
    sticky-mobile-cta.tsx
    ui/
      button.tsx
      card.tsx
      badge.tsx
      accordion.tsx
      separator.tsx
      input.tsx
      textarea.tsx

  data/
    faqs.ts
    pricing.ts
    routes.ts
    services.ts
    site.ts

public/
  images/
    hero-car-placeholder.svg
    route-ha-noi.svg
    route-noi-bai.svg
    route-hai-phong.svg
    route-cat-ba.svg

Nếu chưa có ảnh thật, tạo placeholder SVG local đẹp, không dùng link ảnh remote.

15. Copywriting bắt buộc ưu tiên

Dùng các câu sau trong website, phân bổ tự nhiên:

Xe ghép Thái Bình ⇄ Hà Nội / Nội Bài — đón tận nơi, có xe trong ngày

Gọi là có xe – Đi là thích ngay!

Đón tận nơi, trả tận nơi, chạy hằng ngày.

Tài xế xác nhận nhanh, giá rõ ràng, xe sạch, hỗ trợ hành lý.

Cần đi Hà Nội, Nội Bài, Hải Phòng, Cát Bà? Gọi Vũ Phú JP để được sắp xe nhanh.

Giá tham khảo có thể thay đổi theo điểm đón, điểm trả và thời gian đi. Gọi để được báo giá chính xác.

Không viết nội dung quá chung chung. Luôn gắn với tuyến xe, điểm đón/trả, số điện thoại và lợi ích cụ thể.

16. Quy tắc hoàn thành nghiêm ngặt

Chỉ coi là hoàn thành khi:

- Website chạy local
- Build pass
- Có đủ page yêu cầu
- Có CTA gọi điện trên toàn site
- Có sticky CTA mobile
- Có SEO metadata
- Có sitemap/robots
- Có JSON-LD
- README hướng dẫn rõ

Nếu chưa đạt các mục trên, chưa được báo hoàn thành.

17. Báo cáo cuối cùng phải ngắn gọn

Khi hoàn tất, báo cáo theo format:

Đã hoàn thành website Vũ Phú JP.

Files chính:
- ...
- ...

Pages:
- /
- /tuyen-xe
- /bang-gia
- /lien-he
- /xe-ghep-thai-binh-ha-noi
- /xe-thai-binh-noi-bai
- /xe-thai-binh-hai-phong
- /xe-thai-binh-cat-ba

Kiểm tra:
- lint: pass/fail
- build: pass/fail

Cách chạy:
pnpm dev

Ghi chú:
- Phone/Zalo chỉnh ở src/data/site.ts
- Giá chỉnh ở src/data/pricing.ts
- Tuyến chỉnh ở src/data/routes.ts

Không viết báo cáo dài lan man.

Cách dùng trong Codex

Bạn dán nguyên khối trên vào Codex, rồi thêm 3 dòng khóa phạm vi này ở cuối prompt:

Bắt đầu từ Pha 1. Không nhảy pha. Không thêm tính năng ngoài plan. Sau mỗi pha phải báo cáo ngắn và hỏi tôi xác nhận trước khi sang pha tiếp theo nếu có thay đổi lớn.

Điểm quan trọng nhất để Codex không làm lan man là: không cho nó tự thiết kế app booking, chỉ làm marketing website + CTA gọi/Zalo + route money pages + Vercel-ready build.