
import { AgendaItem } from './types';

export const EVENT_DATE = new Date('2026-02-10T19:00:00');

export const VENUE = {
  name: "D16 PRIVATE LOUNGE",
  address: "Quận 1, TP. Hồ Chí Minh",
  mapLink: "https://maps.google.com",
  room: "The Glass Suite"
};

export const CONTACT = {
  hotline: "0909 000 160",
  email: "connect@d16media.vn",
  support: "Ban Tổ Chức - D16 Media"
};

export const AGENDA: AgendaItem[] = [
  {
    time: "18:30 - 19:00",
    content: "Chào Đón & Tiệc Trà Thượng Hạng",
    note: "Khởi đầu nhẹ nhàng với trà hoa và âm hưởng acoustic tinh tế."
  },
  {
    time: "19:00 - 19:30",
    content: "Khai Tiệc & Looking Back",
    note: "Khoảnh khắc nhìn lại hành trình rực rỡ và những cột mốc đáng nhớ."
  },
  {
    time: "19:30 - 21:00",
    content: "Đêm Tiệc Vinh Danh",
    subContent: [
      "Lễ vinh danh kiệt tác cá nhân",
      "Thực đơn Fine Dining đẳng cấp",
      "Trình diễn nghệ thuật thị giác"
    ]
  },
  {
    time: "21:00 - 22:30",
    content: "Lucky Draw & Mini Games",
    note: "Những phần quà giá trị dành riêng cho những vị khách may mắn nhất."
  },
  {
    time: "22:30 - Late",
    content: "After Party",
    note: "Tự do hòa mình vào không gian âm nhạc sôi động."
  }
];

export const HIGHLIGHTS = [
  "Trải nghiệm ẩm thực Fine Dining tinh hoa từ đầu bếp quốc tế.",
  "Không gian nghệ thuật thị giác được thiết kế độc bản cho D16.",
  "Chương trình biểu diễn từ các nghệ sĩ khách mời đặc biệt.",
  "Hệ thống giải thưởng tri ân với tổng giá trị hơn 500 triệu đồng.",
  "Quà tặng lưu niệm chế tác thủ công dành riêng cho mỗi khách mời."
];
