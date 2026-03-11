export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Remote' | 'Contract';
  description: string;
  requirements: string[];
  postedAt: string;
  logo: string;
  category: string;
}

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer (React)',
    company: 'TechFlow Solutions',
    location: 'TP. Hồ Chí Minh',
    salary: '2,500 - 4,000 USD',
    type: 'Full-time',
    description: 'Chúng tôi đang tìm kiếm một Senior Frontend Developer tài năng để dẫn dắt đội ngũ phát triển giao diện người dùng cho các sản phẩm SaaS quy mô lớn.',
    requirements: ['5+ năm kinh nghiệm với React', 'Thành thạo TypeScript và Tailwind CSS', 'Kinh nghiệm tối ưu hóa hiệu năng web'],
    postedAt: '2 giờ trước',
    logo: 'https://picsum.photos/seed/techflow/100/100',
    category: 'IT / Phần mềm'
  },
  {
    id: '2',
    title: 'Product Designer (UI/UX)',
    company: 'Creative Hub',
    location: 'Hà Nội',
    salary: '1,500 - 2,500 USD',
    type: 'Remote',
    description: 'Tham gia vào đội ngũ thiết kế năng động để tạo ra những trải nghiệm người dùng tuyệt vời cho ứng dụng di động của chúng tôi.',
    requirements: ['Kinh nghiệm thiết kế UI/UX cho Mobile App', 'Thành thạo Figma', 'Tư duy về trải nghiệm người dùng tốt'],
    postedAt: '5 giờ trước',
    logo: 'https://picsum.photos/seed/creative/100/100',
    category: 'Thiết kế'
  },
  {
    id: '3',
    title: 'Marketing Manager',
    company: 'Green Growth Corp',
    location: 'Đà Nẵng',
    salary: 'Thỏa thuận',
    type: 'Full-time',
    description: 'Xây dựng và triển khai các chiến dịch marketing đa kênh để thúc đẩy sự phát triển của thương hiệu.',
    requirements: ['3+ năm kinh nghiệm Marketing', 'Kỹ năng lập kế hoạch và quản lý ngân sách', 'Tiếng Anh giao tiếp tốt'],
    postedAt: '1 ngày trước',
    logo: 'https://picsum.photos/seed/green/100/100',
    category: 'Marketing'
  },
  {
    id: '4',
    title: 'Backend Engineer (Node.js)',
    company: 'FastShip Logistics',
    location: 'TP. Hồ Chí Minh',
    salary: '2,000 - 3,500 USD',
    type: 'Full-time',
    description: 'Phát triển hệ thống backend mạnh mẽ cho nền tảng logistics hàng đầu.',
    requirements: ['Kinh nghiệm với Node.js và Express', 'Hiểu biết về PostgreSQL và Redis', 'Kỹ năng thiết kế API RESTful'],
    postedAt: '2 ngày trước',
    logo: 'https://picsum.photos/seed/fastship/100/100',
    category: 'IT / Phần mềm'
  },
  {
    id: '5',
    title: 'Content Creator',
    company: 'Media Star',
    location: 'Hà Nội',
    salary: '10 - 15 triệu VNĐ',
    type: 'Part-time',
    description: 'Sáng tạo nội dung hấp dẫn cho các nền tảng mạng xã hội (Facebook, TikTok, Instagram).',
    requirements: ['Kỹ năng viết lách tốt', 'Biết sử dụng các công cụ chỉnh sửa video cơ bản', 'Nhanh nhạy với các xu hướng mới'],
    postedAt: '3 ngày trước',
    logo: 'https://picsum.photos/seed/media/100/100',
    category: 'Truyền thông'
  }
];
