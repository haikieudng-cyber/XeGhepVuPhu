export type Testimonial = {
  name: string;
  route: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Anh Dũng",
    route: "Thái Bình ⇄ Nội Bài",
    text: "Xe chạy rất êm, bác tài xế nhiệt tình xách hộ hành lý. Xe đưa đón tận nhà đúng giờ nên mình không lo muộn chuyến bay.",
    rating: 5,
  },
  {
    name: "Chị Ngọc",
    route: "Thái Bình ⇄ Hà Nội",
    text: "Mình hay bị say xe nhưng đi xe của Vũ Phú thì ngủ quên lúc nào không biết. Xe sạch sẽ không có mùi hôi, giá lại cực kỳ hợp lý.",
    rating: 5,
  },
  {
    name: "Chú Hưng",
    route: "Bao xe 7 chỗ",
    text: "Gia đình tôi thuê nguyên xe về quê ăn cưới. Giá cả rõ ràng không phát sinh phụ phí, tài xế lái cẩn thận, an toàn tuyệt đối.",
    rating: 5,
  },
  {
    name: "Em Mai",
    route: "Thái Bình ⇄ Cát Bà",
    text: "Mùa du lịch đặt xe khó khăn mà nhà xe Vũ Phú hỗ trợ cực kỳ nhiệt tình. Chuyến đi suôn sẻ, sẽ tiếp tục ủng hộ lâu dài!",
    rating: 5,
  },
];
