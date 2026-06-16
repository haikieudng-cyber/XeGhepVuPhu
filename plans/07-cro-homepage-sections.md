# Kế hoạch bổ sung tính năng tăng chuyển đổi (CRO) cho Trang chủ

Mục tiêu: Bổ sung các khu vực "Cảm nhận khách hàng" (Testimonials/Zalo Feedback) và "Câu hỏi thường gặp" (FAQ) nhằm gia tăng độ tin cậy và tỷ lệ chốt khách trực tiếp từ Trang chủ.

## 1. Cấu trúc dữ liệu mới
- **Tạo file**: `src/data/testimonials.ts`
- **Nội dung**: Chứa mảng dữ liệu mô phỏng các lời khen, đánh giá 5 sao từ Zalo của khách hàng. Bao gồm Tên khách, Đánh giá, Tuyến đi và số sao.

## 2. Thay đổi Trang chủ (`src/app/page.tsx`)
Bổ sung 2 Section mới vào phía trên (trước) section "Vì sao nên chọn":

### 2.1 Section Cảm nhận khách hàng (Testimonials)
- Bố cục dạng Grid 3 cột.
- Mỗi cột là một thẻ (Card) có thiết kế giống tin nhắn Zalo hoặc đánh giá 5 sao chuẩn mực.
- Cấu trúc: 
  - 5 ngôi sao màu vàng (`fill-var(--color-gold-500)`).
  - Nội dung text review.
  - Tên khách hàng (viết tắt hoặc có dấu `***` bảo mật).

### 2.2 Section Câu hỏi thường gặp (FAQ)
- Tận dụng lại file dữ liệu `src/data/faqs.ts` đã có.
- Trích xuất 4-5 câu hỏi hay gặp nhất (Hủy chuyến có mất phí không, đón trả tận nơi không, v.v.).
- Thiết kế dạng Accordion (sử dụng thẻ `<details>` và `<summary>`) để ẩn/hiện câu trả lời khi click, tiết kiệm diện tích.

## 3. Cập nhật Navigation
- Thêm link neo (anchor link) `#faq` và `#testimonials` vào `site-header.tsx` hoặc `site-footer.tsx` (nếu cần thiết).

## 4. Xác minh (Verification)
- Chạy `npm run build` để đảm bảo code không dính lỗi TypeScript.
- Xem giao diện trực tiếp trên Responsive (Mobile, Tablet, PC) để đảm bảo không vỡ khung.
