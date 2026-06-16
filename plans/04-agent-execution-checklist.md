# Agent Execution Checklist

## Acceptance Criteria

Chi duoc coi la hoan thanh khi dat tat ca muc duoi day.

### Product/content

- [ ] Dung brand chinh thuc `Nhà Xe Vũ Phú`.
- [ ] Dich vu chinh the hien ro la `xe ghép` va `xe tiện chuyến`.
- [ ] Dung so dien thoai `0963 467 577`.
- [ ] Dung tagline `An toan - Uy tin - Chat luong`.
- [ ] Dung cac tuyen chinh.
- [ ] Dung bang gia tham khao.
- [ ] Khong co lorem ipsum.
- [ ] Khong co text tieng Anh trong public UI, tru noi dung bat buoc nhu brand/link.
- [ ] Khong con brand cu trong UI/metadata/schema/README/source code: `Vũ Phú JP`, `Vũ Phụ`, `Vũ Phụ JP`. `Vũ Phú` chi duoc dung nhu short name.

### Pages

- [ ] `/`
- [ ] `/tuyen-xe`
- [ ] `/bang-gia`
- [ ] `/lien-he`
- [ ] `/xe-ghep-thai-binh-ha-noi`
- [ ] `/xe-thai-binh-noi-bai`
- [ ] `/xe-thai-binh-hai-phong`
- [ ] `/xe-thai-binh-cat-ba`

### Conversion

- [ ] Header co CTA goi.
- [ ] Hero co phone ro.
- [ ] Sticky mobile CTA co Goi/Zalo.
- [ ] Moi route card co CTA.
- [ ] Pricing co CTA.
- [ ] Final CTA co phone.
- [ ] Tat ca phone links dung `tel:0963467577`.

### Technical

- [ ] Next.js App Router.
- [ ] TypeScript.
- [ ] Tailwind.
- [ ] shadcn/ui.
- [ ] Khong backend/API khong can thiet.
- [ ] Khong database.
- [ ] Khong auth.
- [ ] Khong dashboard.
- [ ] `pnpm lint` pass hoac loi duoc ghi ro.
- [ ] `pnpm build` pass hoac loi duoc ghi ro.

### SEO

- [ ] Metadata rieng tung page.
- [ ] Sitemap.
- [ ] Robots.
- [ ] JSON-LD.
- [ ] Moi page co mot H1 chinh.
- [ ] Internal links giua cac tuyen.
- [ ] Khong fake review/rating.

### UX/UI

- [ ] Responsive baseline khong vo tren mobile.
- [ ] CTA thay trong man hinh dau mobile.
- [ ] Giao dien don gian, de Antigravity tiep tuc polish.
- [ ] Khong layout bi vo hoac che CTA/noi dung chinh.
- [ ] Khong ton token vao visual/animation phuc tap trong phan Codex.
- [ ] Khong anh meo/nhoe neu co dung anh.

### Responsibility split

- [ ] Codex chi hoan thien codebase, routing, data, SEO/schema, build readiness.
- [ ] UI/UX polished duoc ghi ro la phan ban giao cho Agent Antigravity.
- [ ] Cac component UI cua Codex o muc baseline: semantic, responsive toi thieu, de sua.

## Diem can xac nhan truoc public

1. So Zalo co dung la `0963 467 577` khong.
2. Email `vuphu.jp.transport@gmail.com` co dung khong.
3. Domain chinh thuc de set canonical/sitemap.
4. Logo/anh xe that neu muon public dep hon mockup.
5. Gia theo tuyen neu muon toi uu chuyen doi hon gia tham khao.

## Lenh ra soat brand

Chay sau khi build/cap nhat code:

```powershell
rg -n "Vu Phu JP|Vũ Phú JP|Vũ Phụ|Vu Phu JP" . -g "!node_modules" -g "!.next" -g "!.git" -g "!plans/_chatgpt-source/**"
```

Neu lenh con ket qua ngoai transcript lich su, phai sua ve `Nhà Xe Vũ Phú` hoac ghi ro ly do giu lai.

## Format bao cao sau khi agent lam

Bao cao cuoi phai gom:

- Trang thai: da lam duoc gi, chua lam gi.
- File da tao/sua.
- Lenh verify da chay va ket qua.
- Anh chup man hinh neu da kiem tra UI.
- Trang thai ban giao UI/UX cho Agent Antigravity.
- Cac diem can chu du an xac nhan tiep.
