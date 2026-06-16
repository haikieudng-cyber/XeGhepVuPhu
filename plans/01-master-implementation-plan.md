# Website Nhà Xe Vũ Phú Implementation Plan

> For agentic workers: REQUIRED: bam theo cac checkbox trong file nay va cap nhat trang thai sau moi phase. Neu build code, verify bang lenh that truoc khi bao cao hoan thanh.

**Goal:** Xay website dich vu xe ghép/xe tiện chuyến cho Nhà Xe Vũ Phú de khach hang goi dien hoac nhan Zalo dat xe nhanh.

**Architecture:** Next.js App Router voi noi dung tinh trong `src/data`, UI component theo section, CTA dung chung toan site, SEO metadata/schema nam trong app va component SEO rieng. MVP khong can backend.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, lucide-react, next/image, Vercel.

**Responsibility Split:** Codex phu trach codebase va nen ky thuat. Agent Antigravity phu trach UI/UX polished. Khi Codex dung UI, chi tao giao dien don gian, semantic, responsive toi thieu de verify route/content/CTA/SEO, khong ton token cho thiet ke chi tiet.

---

## Phase 1: Kiem tra baseline repo

- [ ] Chay `Get-ChildItem -Force`.
- [ ] Chay `git status` neu repo co `.git`.
- [ ] Kiem tra `package.json` neu ton tai.
- [ ] Xac dinh repo dang trong hay da co Next.js.
- [ ] Khong sua code lan man truoc khi biet baseline.

Hoan thanh khi:

- Biet package manager dang dung.
- Biet can khoi tao Next.js moi hay tiep tuc tren code san co.
- Ghi ro trong bao cao neu repo khong phai git repository.

## Phase 2: Setup Next.js neu repo dang trong

Neu repo chua co app:

```powershell
pnpm create next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card badge accordion separator sheet input textarea
pnpm add lucide-react
```

Hoan thanh khi:

- [ ] Co `src/app`.
- [ ] Co Tailwind config/globals CSS.
- [ ] Co shadcn/ui setup.
- [ ] `pnpm lint` chay duoc.
- [ ] `pnpm build` chay duoc hoac loi duoc ghi ro.

## Phase 3: Tao data layer

Tao cac file:

- [ ] `src/data/site.ts`
- [ ] `src/data/routes.ts`
- [ ] `src/data/pricing.ts`
- [ ] `src/data/services.ts`
- [ ] `src/data/faqs.ts`

Quy tac:

- Phone, Zalo, email chi khai bao mot lan trong `site.ts`.
- Route, pricing, FAQ lay tu data, khong hardcode lap lai khap component.
- De sau nay doi so dien thoai/tuyen/gia ma khong phai sua nhieu noi.

## Phase 4: Layout nen

Tao/sua:

- [ ] `src/app/layout.tsx`
- [ ] `src/app/globals.css`
- [ ] `src/components/container.tsx`
- [ ] `src/components/site-header.tsx`
- [ ] `src/components/site-footer.tsx`
- [ ] `src/components/sticky-mobile-cta.tsx`

Yeu cau:

- Header responsive.
- Sticky mobile CTA gom `Goi ngay` va `Zalo`.
- UI toi thieu, sach, de Antigravity tiep tuc polish.
- Khong dau tu token vao animation, visual phuc tap, trang tri cau ky.
- Khong can dat muc thiet ke cuoi cung trong phase Codex.

## Phase 5: Homepage MVP

Tao:

- [ ] `src/app/page.tsx`
- [ ] `src/components/home/hero-section.tsx`
- [ ] `src/components/home/service-benefits.tsx`
- [ ] `src/components/home/routes-section.tsx`
- [ ] `src/components/home/pricing-section.tsx`
- [ ] `src/components/home/why-choose-us.tsx`
- [ ] `src/components/home/booking-steps.tsx`
- [ ] `src/components/home/faq-section.tsx`
- [ ] `src/components/home/final-cta.tsx`

Homepage sections:

- Header.
- Hero co H1, subheadline, CTA goi dien, CTA Zalo, trust chips.
- Dich vu/loi ich.
- Tuyen chay hang ngay.
- Bang gia dich vu.
- Vi sao chon Nhà Xe Vũ Phú.
- Quy trinh dat xe.
- FAQ.
- Final CTA.
- Footer.

Ghi chu UI:

- Codex chi can render dung section, data, CTA, link va semantic heading.
- Dung layout don gian bang Tailwind/shadcn neu can.
- Khong can tao hero phuc tap, decorative assets, micro-interaction, hover state nang, typography system chi tiet; cac viec do giao Agent Antigravity.

## Phase 6: Money pages theo tuyen

Tao:

- [ ] `src/app/tuyen-xe/page.tsx`
- [ ] `src/app/xe-ghep-thai-binh-ha-noi/page.tsx`
- [ ] `src/app/xe-thai-binh-noi-bai/page.tsx`
- [ ] `src/app/xe-thai-binh-hai-phong/page.tsx`
- [ ] `src/app/xe-thai-binh-cat-ba/page.tsx`

Moi page can co:

- H1 rieng theo intent tuyen.
- CTA dau trang.
- Loi ich cua tuyen.
- Gia tham khao hoac CTA goi bao gia.
- FAQ.
- Related routes.
- CTA cuoi trang.

## Phase 7: Bang gia va lien he

Tao:

- [ ] `src/app/bang-gia/page.tsx`
- [ ] `src/app/lien-he/page.tsx`

Trang bang gia:

- Xe ghep: `300K-400K`.
- Bao xe 5 cho: `700K-900K`.
- Bao xe 7 cho: `900K-1.1TR`.
- Ghi chu: gia tham khao, goi de bao gia chinh xac.

Trang lien he:

- Phone lon.
- Nut goi ngay.
- Nut Zalo.
- Email neu xac nhan dung.
- Khu vuc phuc vu.
- Form UI don gian neu can, khong backend trong MVP.

## Phase 8: SEO ky thuat

Tao:

- [ ] `src/app/sitemap.ts`
- [ ] `src/app/robots.ts`
- [ ] `src/components/seo/local-business-json-ld.tsx`

Yeu cau:

- Metadata rieng tung page.
- JSON-LD LocalBusiness/TaxiService.
- Sitemap du URL MVP.
- Robots allow crawl.
- Khong fake review/rating/dia chi.

## Phase 9: Polish responsive va conversion

Phase nay doi ten thuc te la `Codex baseline responsive check`, khong phai UI polish cuoi cung.

Kiem tra viewport toi thieu:

- [ ] 375px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px

Rang buoc:

- Header khong vo.
- Hero mobile khong qua cao.
- Phone number ro.
- Sticky CTA khong che noi dung quan trong.
- Card spacing khong vo layout.
- CTA xuat hien o cac diem chuyen doi chinh.
- Khong can dat muc visual final; Antigravity se polish UI/UX.

## Phase 10: README va verify

Cap nhat:

- [ ] `README.md`

README can co:

- Tech stack.
- Cach chay local.
- Cach build.
- Cach deploy Vercel.
- Vi tri sua phone/Zalo/routes/pricing.

Lenh verify cuoi:

```powershell
pnpm lint
pnpm build
```

Chi bao cao "xong" khi co ket qua verify moi.

## Out of scope cho Codex

- Thiet ke UI/UX cao cap.
- Pixel-perfect homepage.
- Animation, parallax, scroll effect.
- Visual direction chi tiet.
- Tao nhieu bien the giao dien.
- Toi uu mau sac/khoang cach/microcopy o muc designer.

Nhung muc nay thuoc Agent Antigravity sau khi codebase, routing, data va SEO baseline da san sang.
