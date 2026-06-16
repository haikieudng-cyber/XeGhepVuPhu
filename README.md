# Nhà Xe Vũ Phú - Codebase

Website dịch vụ cho Nhà Xe Vũ Phú: xe ghép, xe tiện chuyến, bao xe 5 chỗ/7 chỗ các tuyến Thái Bình - Hà Nội, Nội Bài, Hải Phòng, Cát Bà.

## Phạm vi Codex

Codex phụ trách codebase và nền kỹ thuật:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Data layer cho brand, routes, pricing, services, FAQ
- Pages/routes theo plan
- CTA gọi điện/Zalo
- SEO baseline: metadata, sitemap, robots, JSON-LD
- UI baseline đơn giản để Agent Antigravity tiếp tục polish

UI/UX final thuộc Agent Antigravity. Không đánh giá codebase này theo tiêu chí giao diện hoàn thiện cuối.

## Chạy local

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run lint
npm run build
```

## Cấu hình domain

Khi có domain thật, set:

```env
NEXT_PUBLIC_SITE_URL=https://domain-that.example
```

Nếu chưa set, code dùng fallback `https://example.com` cho sitemap/canonical.

## Vị trí sửa nội dung

- Brand/phone/Zalo/email: `src/data/site.ts`
- Tuyến xe: `src/data/routes.ts`
- Bảng giá: `src/data/pricing.ts`
- Dịch vụ/quy trình: `src/data/services.ts`
- FAQ: `src/data/faqs.ts`

## Pages

- `/`
- `/tuyen-xe`
- `/bang-gia`
- `/lien-he`
- `/xe-ghep-thai-binh-ha-noi`
- `/xe-thai-binh-noi-bai`
- `/xe-thai-binh-hai-phong`
- `/xe-thai-binh-cat-ba`

## Handoff cho Agent Antigravity

Đọc thêm: `plans/06-codex-antigravity-handoff.md`.

Các component hiện ở mức baseline, ưu tiên dễ sửa:

- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/sticky-mobile-cta.tsx`
- `src/components/route-card.tsx`
- `src/components/route-landing-page.tsx`
- `src/app/page.tsx`

