export type SocialComment = {
  name: string;
  time: string;
  text: string;
  likes?: number;
  isAdmin?: boolean;
  replies?: SocialComment[];
};

export const socialComments: SocialComment[] = [
  {
    "name": "Minh Anh",
    "time": "5 phút trước",
    "text": "Anh Phú ơi mai em bay 9h ở Nội Bài, nhà em bên Quỳnh Phụ. Đi tầm mấy giờ thì vừa anh?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "4 phút trước",
        "text": "Tầm chuyến bay 9h thì nên đi sớm một chút em nhé. Em gửi anh địa chỉ cụ thể, anh xem đường rồi báo giờ đón cho chắc.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Nguyễn Thành",
    "time": "15 phút trước",
    "text": "Chiều nay em ở Trần Duy Hưng về thành phố Thái Bình, khoảng 5h30 mới xong việc. Có ghép được chuyến nào không anh?",
    "likes": 1,
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "12 phút trước",
        "text": "Có xe chiều Hà Nội về em nhé. Em nhắn số điện thoại với điểm trả ở Thái Bình, bên anh xếp chuyến gần giờ đó cho.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Thu Trang",
    "time": "30 phút trước",
    "text": "Em đi lần trước rồi anh ạ. Mai anh đón em ở chỗ cũ bên Nguyễn Trãi, trả về Đông Hưng như hôm trước nhé.",
    "likes": 2,
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "28 phút trước",
        "text": "Ừ anh nhớ rồi. Mai trước lúc qua tài xế gọi em trước, có đổi hành lý hay giờ đi thì nhắn anh sớm nhé.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Hoàng Dũng",
    "time": "1 giờ trước",
    "text": "Nhà xe còn chuyến nào từ Nội Bài về Thái Bình tối nay không? Em hạ cánh tầm 22h.",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "55 phút trước",
        "text": "Có thì anh ghép cho em chuyến tối. Em gửi mã chuyến bay hoặc giờ hạ cánh, lấy hành lý xong tài xế gọi đón ở sân bay.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Hải Nam",
    "time": "1 giờ trước",
    "text": "Anh ơi cuối tuần em đi công tác về muộn, khoảng 10h tối mới có mặt ở bến xe Nước Ngầm. Lúc đó còn chuyến nào về Thái Bình không?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "1 giờ trước",
        "text": "Em gửi giúp anh giờ cụ thể với số điện thoại nhé. Nếu còn xe phù hợp bên anh sẽ sắp xếp đón em tại khu vực bến để về luôn.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Anh Tú",
    "time": "2 giờ trước",
    "text": "Mai em cần đi từ Thái Bình lên Bạch Mai khám. Có chuyến nào đi sớm không anh?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "2 giờ trước",
        "text": "Có chuyến sáng. Em cho anh địa chỉ đón với giờ cần có mặt ở viện, anh tính giờ đi cho đỡ cập rập.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Phạm Hà",
    "time": "2 giờ trước",
    "text": "Từ Ocean Park về Tiền Hải có nhận không anh? Em đi 1 người, có 1 vali nhỏ.",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "1 giờ trước",
        "text": "Nhận em nhé. Ocean Park bên anh vẫn đón được, em nhắn giờ muốn về và điểm trả ở Tiền Hải là được.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Việt Hoàng",
    "time": "3 giờ trước",
    "text": "Anh ơi xe ghép Hà Nội về Thái Bình có bị vòng nhiều không? Em có việc nên sợ về muộn.",
    "likes": 3,
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "3 giờ trước",
        "text": "Có ghép thì vẫn phải gom theo tuyến, nhưng anh sẽ báo trước khoảng giờ về để em chủ động. Nếu cần đúng giờ hơn thì đi tiện chuyến riêng sẽ chắc hơn.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Ngọc Mai",
    "time": "4 giờ trước",
    "text": "Em đặt cho mẹ em đi từ Thái Bình lên Nội Bài. Mẹ em lớn tuổi, không quen đứng tìm xe lâu đâu anh.",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "3 giờ trước",
        "text": "Em yên tâm, tài xế gọi trước khi tới. Em gửi số của mẹ với địa chỉ nhà, anh dặn tài xế hỗ trợ hành lý cho cô.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Quang Huy",
    "time": "4 giờ trước",
    "text": "Tối nay từ Giáp Bát về Vũ Thư còn xe không anh? Em xong việc khoảng 8h.",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "4 giờ trước",
        "text": "Tầm đó có thể có xe về. Em nhắn anh số điện thoại, xong việc sớm hay muộn hơn chút thì báo để anh căn chuyến.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Bích Ngọc",
    "time": "5 giờ trước",
    "text": "Nhà xe có đi Hải Phòng không ạ? Em từ Thái Bình đi gần Lạch Tray sáng mai.",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "4 giờ trước",
        "text": "Có tuyến đó em nhé. Em gửi điểm đón ở Thái Bình, anh xem chuyến sáng mai rồi báo lại giờ đón.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Đức Mạnh",
    "time": "5 giờ trước",
    "text": "Anh Phú ơi em cần gửi cái túi đồ lên Hà Nội, người nhận ở Thanh Xuân. Không có người đi cùng được không anh?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "5 giờ trước",
        "text": "Gửi được em. Chụp giúp anh túi đồ với gửi số người nhận, có xe lên anh báo giờ qua lấy hoặc điểm gửi gần nhất.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Huyền My",
    "time": "6 giờ trước",
    "text": "Thứ 7 nhà em 3 người đi Cát Bà từ Thái Bình. Có nên đặt trước không anh hay sát ngày cũng được?",
    "likes": 5,
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "5 giờ trước",
        "text": "Đi Cát Bà cuối tuần thì nên chốt trước em nhé. Em gửi ngày đi, ngày về, số người và hành lý, anh báo xe phù hợp.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Lê Thắng",
    "time": "7 giờ trước",
    "text": "Em ở phố Vọng, muốn về Kiến Xương chiều mai. Nhà xe đón quanh khu đó được không?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "6 giờ trước",
        "text": "Đón được em. Em gửi địa chỉ hoặc định vị, chiều mai anh xem xe chạy qua khu đó rồi xếp cho tiện đường.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Lan Anh",
    "time": "8 giờ trước",
    "text": "Anh ơi mai em đi cùng bé nhỏ từ Hà Nội về Thái Bình. Xe có dừng nghỉ giữa đường không ạ?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "8 giờ trước",
        "text": "Có cần dừng thì báo tài xế em nhé. Đi cùng bé anh sẽ xếp chỗ ngồi thoải mái nhất có thể.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Trần Nam",
    "time": "9 giờ trước",
    "text": "Em từ Thái Bình lên sân bay, chuyến bay 7h sáng. Chắc phải đi sớm lắm anh nhỉ?",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "8 giờ trước",
        "text": "Ừ chuyến 7h thì phải đi rất sớm cho chắc. Em gửi địa chỉ nhà, anh báo giờ đón cụ thể để không bị vội.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Mai Phương",
    "time": "10 giờ trước",
    "text": "Hôm trước em đi xe anh tài xế tên Hưng thì phải. Mai còn xe đó không anh, em vẫn về chỗ cũ bên Quỳnh Côi.",
    "likes": 12,
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "10 giờ trước",
        "text": "Để anh xem lịch xe mai. Nếu anh Hưng chạy tuyến đó anh xếp cho em, không thì vẫn có xe khác đón đúng điểm như lần trước.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Tuấn Kiệt",
    "time": "11 giờ trước",
    "text": "Từ Mỹ Đình về Hưng Hà tối nay còn ghế không anh? Em có balo thôi, không nhiều đồ.",
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "10 giờ trước",
        "text": "Còn chuyến anh báo em. Em gửi số điện thoại với điểm trả ở Hưng Hà, xe gần khu Mỹ Đình anh cho tài xế gọi.",
        "isAdmin": true
      }
    ]
  },
  {
    "name": "Diễm Quỳnh",
    "time": "12 giờ trước",
    "text": "Anh Phú ơi em nhắn Zalo rồi nhé. Mai đón em ở Times City, về gần cầu Tân Đệ như lần trước ạ.",
    "likes": 1,
    "replies": [
      {
        "name": "NHÀ XE VŨ PHÚ",
        "time": "12 giờ trước",
        "text": "Ok em, anh thấy tin nhắn rồi. Mai trước giờ đón tài xế gọi, em để ý điện thoại giúp anh nhé.",
        "isAdmin": true
      }
    ]
  }
];
