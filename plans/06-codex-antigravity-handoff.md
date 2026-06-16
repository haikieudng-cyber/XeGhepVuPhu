# Codex / Agent Antigravity Handoff

Ngay tao: 2026-06-15

## Ket luan phan vai

Du an nay chia ro vai tro:

- `Codex`: lam codebase va nen ky thuat.
- `Agent Antigravity`: lam UI/UX polished va hoan thien giao dien.

Codex khong can va khong nen ton nhieu token cho visual design. Khi can render UI de verify, Codex chi tao giao dien baseline don gian, sach, responsive toi thieu.

## Codex phu trach

Codex can hoan thien:

- Khoi tao/cau truc Next.js App Router.
- TypeScript/Tailwind/shadcn setup neu can.
- Data layer: `site`, `routes`, `pricing`, `services`, `faqs`.
- Pages/routes:
  - `/`
  - `/tuyen-xe`
  - `/bang-gia`
  - `/lien-he`
  - `/xe-ghep-thai-binh-ha-noi`
  - `/xe-thai-binh-noi-bai`
  - `/xe-thai-binh-hai-phong`
  - `/xe-thai-binh-cat-ba`
- CTA logic:
  - phone link `tel:0963467577`
  - Zalo link `https://zalo.me/0963467577`
  - sticky mobile CTA baseline
- SEO:
  - metadata rieng tung page
  - sitemap
  - robots
  - JSON-LD LocalBusiness/TaxiService
  - semantic heading
- README:
  - cach chay local
  - cach build
  - vi tri sua brand/phone/routes/pricing
- Verification:
  - lint/build neu co script
  - smoke check route/page co render du lieu chinh

## Codex UI baseline duoc phep lam

Codex chi can UI o muc:

- Layout 1 cot hoac grid don gian.
- Header/footer co link dung.
- Section co heading va noi dung dung.
- Button/anchor CTA dung href.
- Card don gian neu can hien route/pricing.
- Mobile khong vo layout.

Khong can:

- Pixel-perfect.
- Animation.
- Decorative graphics.
- Hero visual phuc tap.
- Color/spacing polish chi tiet.
- Nhieu option giao dien.
- Design system hoan chinh.

## Agent Antigravity phu trach

Agent Antigravity se tiep nhan codebase va lam:

- UI/UX polished.
- Visual hierarchy.
- Mobile-first refinement.
- Hero/section composition.
- Typography, spacing, color, icon treatment.
- Interaction state.
- Final conversion design.
- Anh/asset/logo neu co.

## Nguyen tac de Antigravity de tiep nhan

Codex nen viet code theo huong:

- Data-driven: noi dung nam trong `src/data`.
- Component de doc, de sua.
- Ten component ro nghia.
- Khong inline hardcode noi dung lap lai.
- Khong CSS phuc tap kho sua.
- Khong tao abstraction UI qua nang.
- Khong dung style qua cau ky de Antigravity phai go bo.

## Acceptance cho phan Codex

Phan Codex hoan thanh khi:

- App chay local.
- Pages/routes ton tai va render content chinh.
- Brand la `Nhà Xe Vũ Phú`.
- Dich vu `xe ghép`, `xe tiện chuyến` xuat hien ro.
- Cac tuyen chinh xuat hien ro.
- CTA phone/Zalo dung link.
- SEO baseline co metadata/sitemap/robots/schema.
- Build/lint pass hoac loi duoc ghi ro.
- README va handoff cho Antigravity ro rang.

Khong danh gia Codex theo tieu chi UI final. UI final thuoc Agent Antigravity.

