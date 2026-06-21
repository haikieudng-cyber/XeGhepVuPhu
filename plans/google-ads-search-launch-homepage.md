# Google Ads Search Launch Plan - Nha Xe Vu Phu Homepage

## 1. Ket luan chien luoc

Chay Google Search Ads cho homepage theo huong kiem soat chat: brand campaign nho + route-intent campaign dung exact/phrase match. Chua dung broad match o giai doan launch.

Muc tieu chinh: cuoc goi va click Zalo hoi xe co kha nang dat chuyen.

Khong nen bat campaign truoc khi tracking click goi dien va click Zalo hoat dong tren production.

## 2. Bang chung hien tai tu repo

- Homepage: `src/app/page.tsx`
- Landing URL chinh: `/`
- Phone: `0963 467 577`, tel link: `tel:0963467577`
- Zalo: `https://zalo.me/0963467577`
- Tuyen/dia ban: Thai Binh, Ha Noi, Noi Bai, Hai Phong, Cat Ba
- Dich vu: xe ghep, xe tien chuyen, bao xe 5 cho, bao xe 7 cho, don tra tan noi
- Gia tham khao: xe ghep `300K - 400K`, bao xe 5 cho `700K - 900K`, bao xe 7 cho `900K - 1.1TR`
- Homepage anchors hien co: `#services`, `#tuyen-xe`, `#bang-gia`, `#social-comments`, `#gallery`, `#testimonials`, `#faq`

## 3. Nguon chinh thuc da doi chieu

- Google Ads keyword match types: exact/phrase giup kiem soat muc do khop truy van; broad mo rong hon va can du lieu tot de dung an toan.
- Maximize Clicks: toi uu lay nhieu click trong ngan sach, co the dat CPC cap.
- Phone call conversion tracking: Google Ads ho tro do call tu ads, call assets va call/click tren website.
- Target Impression Share: toi uu vi tri hien thi top/absolute top, nhung la chien luoc visibility, khong dam bao lead quality.
- Advanced location option `Presence`: tap trung nguoi dang o hoac thuong xuyen o dia diem target.
- Call assets, sitelinks, responsive search ads va negative keywords la cac thanh phan can co cho Search campaign.

## 4. Campaign setup

### Campaign 1 - Brand

Ten campaign: `Search | VP | Brand | Homepage`

Muc tieu: giu truy van thuong hieu.

Cai dat:

- Type: Search
- Networks: Google Search only
- Display Network: Off
- Search Partners: Off trong 14 ngay dau
- Landing page: homepage
- Budget: 5-10% tong ngan sach/ngay
- Bidding launch: Maximize Clicks
- Max CPC cap: `5.000d`

Co the test Target Impression Share cho brand:

- Placement: Top of page
- Target impression share: 90%
- Max CPC cap: `8.000d`
- Khong dung Absolute top

Keywords:

```text
[nha xe vu phu]
"nha xe vu phu"
[xe ghep vu phu]
"xe ghep vu phu"
[vu phu xe ghep]
"vu phu xe ghep"
```

### Campaign 2 - Route Intent Homepage

Ten campaign: `Search | VP | Route Intent | Homepage | Exact Phrase`

Cai dat:

- Type: Search
- Networks: Google Search only
- Display Network: Off
- Search Partners: Off trong 14 ngay dau
- AI Max / Final URL expansion: Off
- Broad match: khong dung
- Language: All languages
- Location option: Presence only
- Schedule: theo gio nha xe that su nghe may/phan hoi. Neu chua xac nhan truc 24/7, dung `05:30 - 22:30`.
- Bidding launch: Maximize Clicks
- Max CPC cap mac dinh: `15.000d`
- Max CPC cap cho Nọi Bai / bao xe: `20.000d`
- Budget: 90-95% tong ngan sach/ngay

Location target khuyen nghi:

- Ha Noi
- Hai Phong
- Hung Yen / khu vuc Thai Binh cu
- Noi Bai / Soc Son neu Google Ads cho radius
- Cat Ba / Cat Hai neu Google Ads cho target nho

Luu y: tu ngay 01/07/2025, Thai Binh da sap nhap voi Hung Yen thanh tinh Hung Yen moi. Khi set location trong Google Ads, can kiem tra ca `Thai Binh`, `Hung Yen`, hoac radius quanh khu vuc cu tuy UI Google cap nhat the nao.

## 5. Quy tac Target Impression Share

Khong dung Target Impression Share cho campaign route ngay khi launch.

Chi test khi dat du dieu kien:

- Da chay toi thieu 7 ngay
- Tracking phone/Zalo hoat dong dung
- Keyword exact da co lead that hoac tin hieu phone/Zalo tot
- Search terms sach, khong bi keo sang xe khach, ve xe, ben xe, logistics

Chi test voi exact keyword:

```text
[xe ghep thai binh ha noi]
[xe ghep ha noi thai binh]
[xe ghep thai binh noi bai]
[xe ghep noi bai thai binh]
[xe di noi bai tu thai binh]
[xe tu noi bai ve thai binh]
[bao xe thai binh noi bai]
```

Test setup:

- Placement: Top of page
- Target impression share: 70%
- Max CPC cap: `25.000d`
- Budget test: toi da 15-20% tong ngan sach/ngay
- Khong dung Absolute top
- Khong dung cho phrase/broad

Dung test neu:

- Chi phi/lead vuot nguong chiu duoc
- Khong co phone/Zalo click sau 20 click
- Search terms lech sang xe khach, ve xe, ben xe, logistics

Khong ep top cho keyword rong:

```text
xe di ha noi
xe di noi bai
xe thai binh
xe khach thai binh ha noi
xe ha noi hai phong
xe di cat ba
```

## 6. Ad groups va keyword

### Thai Binh - Ha Noi

```text
[xe ghep thai binh ha noi]
"xe ghep thai binh ha noi"
[xe ghep ha noi thai binh]
"xe ghep ha noi thai binh"
[xe tien chuyen thai binh ha noi]
"xe tien chuyen thai binh ha noi"
[xe tien chuyen ha noi thai binh]
"xe tien chuyen ha noi thai binh"
[xe di ha noi tu thai binh]
"xe di ha noi tu thai binh"
[xe di thai binh tu ha noi]
"xe di thai binh tu ha noi"
```

### Thai Binh - Noi Bai

```text
[xe ghep thai binh noi bai]
"xe ghep thai binh noi bai"
[xe ghep noi bai thai binh]
"xe ghep noi bai thai binh"
[xe di noi bai tu thai binh]
"xe di noi bai tu thai binh"
[xe tu noi bai ve thai binh]
"xe tu noi bai ve thai binh"
[xe san bay noi bai thai binh]
"xe san bay noi bai thai binh"
[bao xe thai binh noi bai]
"bao xe thai binh noi bai"
```

### Thai Binh - Hai Phong

```text
[xe ghep thai binh hai phong]
"xe ghep thai binh hai phong"
[xe ghep hai phong thai binh]
"xe ghep hai phong thai binh"
[xe tien chuyen thai binh hai phong]
"xe tien chuyen thai binh hai phong"
[xe di hai phong tu thai binh]
"xe di hai phong tu thai binh"
[xe tu hai phong ve thai binh]
"xe tu hai phong ve thai binh"
```

### Thai Binh - Cat Ba

```text
[xe ghep thai binh cat ba]
"xe ghep thai binh cat ba"
[xe ghep cat ba thai binh]
"xe ghep cat ba thai binh"
[xe di cat ba tu thai binh]
"xe di cat ba tu thai binh"
[xe tu cat ba ve thai binh]
"xe tu cat ba ve thai binh"
[bao xe thai binh cat ba]
"bao xe thai binh cat ba"
```

### Bao xe 5 cho / 7 cho

```text
[bao xe thai binh ha noi]
"bao xe thai binh ha noi"
[bao xe ha noi thai binh]
"bao xe ha noi thai binh"
[thue xe 5 cho thai binh ha noi]
"thue xe 5 cho thai binh ha noi"
[thue xe 7 cho thai binh ha noi]
"thue xe 7 cho thai binh ha noi"
[bao xe 5 cho thai binh ha noi]
"bao xe 5 cho thai binh ha noi"
[bao xe 7 cho thai binh ha noi]
"bao xe 7 cho thai binh ha noi"
```

## 7. Negative keywords

Them ngay:

```text
tuyen dung
viec lam
tuyen lai xe
tuyen tai xe
luong tai xe
hoc lai xe
bang lai xe
dang kiem
mua xe
ban xe
xe cu
phu tung
do choi xe
rua xe
bao hiem
phat nguoi
bien so
xe khach
ve xe khach
lich xe khach
ben xe
xe bus
xe buyt
limousine
grab
be
taxi mai linh
goi taxi
xe tai
container
chuyen nha
chuyen van phong
ban do
khoang cach
bao nhieu km
duong di
huong dan
wiki
youtube
facebook
hinh anh
tin tuc
```

Logistics/freight can loai, nhung khong chan hanh ly nho:

```text
chanh xe
van tai
van chuyen hang hoa
gui hang so luong lon
gui hang cong ty
gui hang cod
ship cod
kho bai
pallet
container
xe tai cho hang
ghep hang
boc xep
chuyen phat nhanh
```

Khong phu dinh toan bo `gui hang` o launch vi website co noi dung nhan cho hanh ly/hang hoa nho. Khong mua keyword gui hang trong campaign chinh; neu search term "gui do nho/gui hanh ly" co lead that thi sau nay tach ad group rieng.

## 8. RSA copy

### RSA route chung

Headlines:

```text
Nha Xe Vu Phu
Xe Ghep Thai Binh
Xe Ghep Ha Noi
Thai Binh - Ha Noi
Thai Binh - Noi Bai
Thai Binh - Hai Phong
Thai Binh - Cat Ba
Xe Tien Chuyen Vu Phu
Don Tra Tan Noi
Goi 0963 467 577
Dat Xe Qua Zalo
Bao Xe 5 Cho, 7 Cho
Gia Tu 300K-400K
Hoi Xe Hom Nay
```

Descriptions:

```text
Xe ghep, xe tien chuyen Thai Binh di Ha Noi, Noi Bai, Hai Phong, Cat Ba. Goi/Zalo de hoi tuyen va dat chuyen.
Don tra tan noi theo lich da xac nhan. Co xe ghep, bao xe 5 cho va 7 cho theo tuyen.
Gia tham khao hien thi ro tren trang chu. Lien he Nha Xe Vu Phu de kiem tra chuyen phu hop.
```

### RSA Noi Bai

Headlines:

```text
Xe Thai Binh Noi Bai
Xe Noi Bai Thai Binh
Di San Bay Noi Bai
Nha Xe Vu Phu
Goi 0963 467 577
Dat Xe Qua Zalo
Don Tra Tan Noi
Bao Xe Di Noi Bai
Hoi Gio Xe Hom Nay
```

Descriptions:

```text
Can di Noi Bai tu Thai Binh hoac ve Thai Binh tu san bay? Goi/Zalo Vu Phu de hoi xe.
Xe ghep, xe tien chuyen va bao xe theo tuyen. Gia va lich duoc tu van truoc khi dat.
```

### RSA bao xe

Headlines:

```text
Bao Xe 5 Cho, 7 Cho
Bao Xe Thai Binh
Bao Xe Di Ha Noi
Bao Xe Di Noi Bai
Nha Xe Vu Phu
Goi 0963 467 577
Dat Xe Qua Zalo
Don Tra Tan Noi
Gia Ro Tren Trang Chu
```

Descriptions:

```text
Bao xe 5 cho, 7 cho theo tuyen Thai Binh, Ha Noi, Noi Bai, Hai Phong, Cat Ba.
Phu hop khach can di rieng theo lich. Goi/Zalo de hoi tuyen, gia va thoi gian don.
```

Khong dung claim:

```text
Re nhat
Nhanh nhat
Cam ket co xe
Cam ket dung gio 100%
Phuc vu 24/7
Nha xe so 1
Uy tin nhat
```

## 9. Assets

Call asset:

- Phone: `0963 467 577`
- Schedule: theo gio that su nghe may
- Conversion: Calls from ads
- Minimum call length: 45-60 giay

Zalo:

- Khong gia dinh Google Ads account co Message Asset ho tro Zalo.
- Launch ban dau: Zalo la CTA tren website va duoc track click `zalo.me/0963467577`.
- Khong dung Zalo lam sitelink ngoai domain o giai doan dau.
- Neu UI Google Ads co Message Asset ho tro Zalo va duoc duyet, co the test sau, khong thay the phone call tracking.

Sitelinks dung homepage anchors hien co:

- Tuyen Xe Dang Chay: `/#tuyen-xe`
- Bang Gia Tham Khao: `/#bang-gia`
- Dich Vu Xe Ghep: `/#services`
- Cau Hoi Thuong Gap: `/#faq`
- Hinh Anh Xe: `/#gallery`
- Phan Hoi Khach Hang: `/#testimonials`

Route pages chi dung sau 14-30 ngay neu tuyen do co lead tot. Khi do tao campaign/ad group rieng tro thang route page de tang relevance.

Callout assets:

```text
Xe Ghep Theo Tuyen
Xe Tien Chuyen
Don Tra Tan Noi
Bao Xe 5 Cho
Bao Xe 7 Cho
Tu Van Qua Zalo
Gia Tham Khao Ro
```

Structured snippets:

```text
Dich vu: Xe ghep, Xe tien chuyen, Bao xe 5 cho, Bao xe 7 cho
Tuyen: Thai Binh, Ha Noi, Noi Bai, Hai Phong, Cat Ba
```

## 10. Wording an toan

Neu nha xe chua xac nhan truc may 24/7, khong dung:

```text
Phuc vu 24/7
Ho tro 24/7
Goi luc nao cung co xe
Luon co xe ngay
```

Dung wording an toan:

```text
Nhan tu van dat xe hang ngay
Goi/Zalo de kiem tra chuyen phu hop
Don tra tan noi theo lich da xac nhan
Ho tro hoi tuyen, gia va thoi gian don
Lien he truoc de nha xe sap lich
Nhan Zalo, nha xe phan hoi khi co nguoi truc
```

Neu co gio truc that, ghi cu the:

```text
Goi/Zalo: 05:30 - 22:30
Don tra theo lich da xac nhan
```

## 11. Conversion tracking bat buoc

Primary conversions:

- `ads_phone_click`
- `ads_zalo_click`
- `Calls from ads`

Secondary conversions:

- `ads_route_click`
- Contact/scroll intent neu can

Event payload can co:

- `event`
- `cta_location`
- `route`
- `page_path`
- `href`

Khong scale campaign neu Google Ads chua ghi nhan conversion hoac Tag Assistant chua xac nhan tag hoat dong.

## 12. Launch checklist Google Ads

Truoc khi bat campaign:

- [ ] GTM/Google tag hoat dong tren production
- [ ] Click `tel:0963467577` ban event `ads_phone_click`
- [ ] Click `https://zalo.me/0963467577` ban event `ads_zalo_click`
- [ ] Google Ads conversion actions da set dung Primary/Secondary
- [ ] Call asset da them so `0963 467 577`
- [ ] Call asset chi chay theo gio nghe may that
- [ ] Campaign chi chay Google Search
- [ ] Display Network Off
- [ ] Search Partners Off
- [ ] AI Max Off
- [ ] Final URL expansion Off
- [ ] Khong co broad keyword
- [ ] Location dung Presence only
- [ ] Ads khong dung claim 24/7 neu chua chac truc 24/7
- [ ] Homepage khong con claim qua da: re nhat, nhanh nhat, cam ket 100%, so 1
- [ ] Sitelinks dung dung anchor hien co: `#services`, `#tuyen-xe`, `#bang-gia`, `#faq`
- [ ] Negative keyword list da add o account/campaign level

Sau launch 24-72h:

- [ ] Kiem tra disapproval/limited policy
- [ ] Kiem tra Search Terms moi ngay
- [ ] Them negative cho xe khach, ve xe, ben xe, logistics neu phat sinh
- [ ] Kiem tra location report, loai vung ngoai pham vi
- [ ] Kiem tra gio nao co click nhung khong co phone/Zalo
- [ ] Khong tang bid chi vi impression share thap neu chua co lead

Ngay 7:

- [ ] Tang CPC cap 10-20% cho exact keyword co phone/Zalo click
- [ ] Pause phrase keyword keo search term rac
- [ ] Tach Noi Bai neu co lead tot
- [ ] Khong bat broad neu conversion con it

Ngay 14:

- [ ] Neu co lead that, test Target Impression Share cho exact keyword thang
- [ ] Target: Top of page 70%
- [ ] Max CPC cap: `25.000d`
- [ ] Budget test: toi da 15-20%
- [ ] Khong dung Absolute top

Ngay 30:

- [ ] Route nao co lead tot thi can nhac chuyen final URL sang route page rieng
- [ ] Tao campaign rieng cho tuyen thang neu can scale
- [ ] Chi test broad match khi tracking sach va negative list du day
- [ ] Neu chi co click nhung khong co goi/Zalo, khong tang ngan sach

## 13. Repo implementation checklist

Files can theo doi:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/components/AdsConversionTracker.tsx`
- `.env.local.example`
- `plans/google-ads-search-launch-homepage.md`

Can dam bao:

- [ ] GTM load khi co `NEXT_PUBLIC_GTM_ID`
- [ ] `AdsConversionTracker` mount global
- [ ] Click `tel:` push `ads_phone_click`
- [ ] Click `zalo.me` push `ads_zalo_click`
- [ ] CTA co `data-cta-location`
- [ ] Route card co `data-route`
- [ ] Khong con claim 24/7 neu chua duoc xac nhan
- [ ] `npm run lint` pass
- [ ] `npm run build` pass
