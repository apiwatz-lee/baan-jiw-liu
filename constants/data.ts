export interface Feature {
  id: string;
  iconName: string; // Used to select Lucide icons dynamically
  title: string;
  description: string;
}

export interface RoomType {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  tag: string;
  features: string[];
  description: string;
}

export interface NearbyLocation {
  id: string;
  name: string;
  distance: string;
  time: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

export const NAV_LINKS = [
  { label: 'หน้าแรก', href: '#hero' },
  { label: 'เกี่ยวกับเรา', href: '#about' },
  { label: 'สิ่งอำนวยความสะดวก', href: '#features' },
  { label: 'ห้องพัก', href: '#rooms' },
  { label: 'ราคา', href: '#pricing' },
  { label: 'สถานที่ใกล้เคียง', href: '#nearby' },
  { label: 'รีวิวจากผู้พัก', href: '#testimonials' },
  { label: 'ติดต่อเรา', href: '#contact' },
];

export const BRAND_INFO = {
  name: 'บ้านจิ๋วหลิว',
  englishName: 'Baan Jiw Liu',
  type: 'หอพักสตรีสไตล์คาเฟ่ (Women Only Dormitory)',
  concept: 'ปลอดภัย อบอุ่น สะดวกสบาย ใกล้ MRT ภาษีเจริญ เพียง 100 เมตร',
  phone: '063-595-4524',
  lineId: '@THAICONDOHOMELAND',
  facebook: 'บ้านจิ๋วหลิว',
  locationDetails: 'ใกล้ MRT ภาษีเจริญ, ซีคอน บางแค และสำนักงาน UOB บางแค',
};

export const FEATURES: Feature[] = [
  {
    id: 'mrt',
    iconName: 'TrainFront',
    title: 'ใกล้ MRT 100 เมตร',
    description: 'เดินเพียง 1-2 นาทีถึงสถานีภาษีเจริญ เชื่อมต่อทุกการเดินทางอย่างรวดเร็วและปลอดภัย',
  },
  {
    id: 'security',
    iconName: 'ShieldCheck',
    title: 'ความปลอดภัย 24 ชม.',
    description: 'ระบบกล้อง CCTV ทั่วอาคาร ประตูคีย์การ์ด และทางเข้าออกแบบสตรีโดยเฉพาะ อุ่นใจได้แน่นอน',
  },
  {
    id: 'furnished',
    iconName: 'BedDouble',
    title: 'เฟอร์นิเจอร์แต่งครบ',
    description: 'เตียงคุณภาพดี ตู้เสื้อผ้า โต๊ะทำงาน เครื่องปรับอากาศ และเครื่องทำน้ำอุ่น หิ้วกระเป๋าเข้าอยู่ได้ทันที',
  },
  {
    id: 'cafe',
    iconName: 'Coffee',
    title: 'คาเฟ่สไตล์โฮมมี่ใต้หอ',
    description: 'ร้านกาแฟและอาหารอร่อยๆ ด้านล่าง ให้คุณจิบกาแฟแก้วโปรด ทำงาน หรือทานมื้อเช้าได้อย่างสะดวกสบาย',
  },
  {
    id: 'bathroom',
    iconName: 'Bath',
    title: 'ห้องน้ำส่วนตัว',
    description: 'ดีไซน์แยกเป็นสัดส่วน สะอาด ทันสมัย และมีความเป็นส่วนตัวสูงในทุกตารางเมตร',
  },
  {
    id: 'wifi',
    iconName: 'Wifi',
    title: 'อินเทอร์เน็ต WiFi ฟรี',
    description: 'อินเทอร์เน็ตความเร็วสูง ครอบคลุมทั่วทั้งอาคาร ตอบโจทย์การเรียนออนไลน์และการทำงาน Work from Home',
  },
  {
    id: 'cleaning',
    iconName: 'Sparkles',
    title: 'แม่บ้านดูแลพื้นที่ส่วนกลาง',
    description: 'รักษาความสะอาดบริเวณทางเดิน บันได และพื้นที่ส่วนกลางอย่างสม่ำเสมอ ให้บรรยากาศน่าอยู่เสมอ',
  },
  {
    id: 'women-only',
    iconName: 'Heart',
    title: 'หอพักสตรี 100%',
    description: 'คัดกรองผู้พักอาศัยเป็นสุภาพสตรีเท่านั้น มอบความสบายใจ ความเป็นส่วนตัว และความปลอดภัยสูงสุด',
  },
];

export const ROOMS: RoomType[] = [
  {
    id: 'standard',
    name: 'Standard Cozy Room',
    price: 5000,
    size: '22 ตร.ม.',
    image: '/images/room_standard.png',
    tag: 'คุ้มค่า อบอุ่นลงตัว',
    features: [
      'เตียงเดี่ยว 3.5 ฟุต พร้อมฟูกหนานุ่ม',
      'โต๊ะทำงาน & เก้าอี้เขียนหนังสือ',
      'ตู้เสื้อผ้าขนาดกะทัดรัด',
      'เครื่องปรับอากาศประหยัดไฟเบอร์ 5',
      'ห้องน้ำส่วนตัวแยกโซน',
      'ฟรี Wi-Fi ความเร็วสูง',
    ],
    description: 'ห้องพักเริ่มต้นที่มอบความอบอุ่นและเป็นส่วนตัวสูง เหมาะสำหรับนักศึกษาหรือคนทำงานรุ่นใหม่ที่ต้องการความคล่องตัว ในงบประมาณที่คุ้มค่าที่สุด',
  },
  {
    id: 'deluxe',
    name: 'Deluxe Cafe Room',
    price: 6000,
    size: '26 ตร.ม.',
    image: '/images/room_deluxe.png',
    tag: 'ยอดนิยม สไตล์คาเฟ่',
    features: [
      'เตียงคู่ 5 ฟุต พร้อมชุดเครื่องนอนพรีเมียม',
      'โต๊ะทำงานไม้สไตล์มินิมอลแบบยาว',
      'ตู้เสื้อผ้าบิวต์อินพร้อมกระจกเงาบานใหญ่',
      'เครื่องปรับอากาศ & เครื่องทำน้ำอุ่นรุ่นใหม่',
      'ระเบียงส่วนตัวสำหรับซักล้างหรือแต่งสวนเล็กๆ',
      'ฟรี Wi-Fi ความเร็วสูง',
    ],
    description: 'ห้องยอดนิยมที่มีพื้นที่กว้างขวางขึ้น ตกแต่งด้วยโทนไม้ธรรมชาติสไตล์คาเฟ่โฮมมี่ มีพื้นที่ทำงานริมหน้าต่างรับแสงธรรมชาติได้อย่างเต็มที่',
  },
  {
    id: 'premium',
    name: 'Premium Suite Room',
    price: 7000,
    size: '32 ตร.ม.',
    image: '/images/room_premium.png',
    tag: 'หรูหรา กว้างขวางที่สุด',
    features: [
      'เตียงคิงไซส์ 6 ฟุต ดีไซน์หรูระดับโรงแรม',
      'โซฟาเลาจน์มุมพักผ่อนส่วนตัวพร้อมโต๊ะกาแฟ',
      'โต๊ะเครื่องแป้งและตู้เสื้อผ้าขนาดใหญ่จุใจ',
      'สมาร์ตทีวี, ตู้เย็น, แอร์ และเครื่องทำน้ำอุ่นครบครัน',
      'ห้องน้ำตกแต่งหรูหราแยกส่วนเปียก-แห้งชัดเจน',
      'ฟรี Wi-Fi ความเร็วสูง',
    ],
    description: 'ที่สุดของการพักอาศัยเหมือนอยู่โรงแรมระดับพรีเมียม กว้างขวางด้วยพื้นที่นั่งเล่นแยกสัดส่วน พร้อมเครื่องใช้ไฟฟ้าครบชุด เหมาะสำหรับการอยู่อาศัยระยะยาว',
  },
];

export const NEARBY_LOCATIONS: NearbyLocation[] = [
  {
    id: 'mrt',
    name: 'MRT สถานีภาษีเจริญ',
    distance: '100 เมตร',
    time: 'เดิน 1 นาที',
    description: 'เพียงไม่กี่ก้าวจากประตูหอพัก ปลอดภัยแม้เดินทางช่วงค่ำ ทางเดินมีไฟสว่างตลอดคืน',
  },
  {
    id: 'seacon',
    name: 'ห้างสรรพสินค้าซีคอน บางแค',
    distance: '250 เมตร',
    time: 'เดิน 3 นาที',
    description: 'แหล่งช้อปปิ้ง ร้านอาหาร ซูเปอร์มาร์เก็ต และโรงภาพยนตร์ ตอบโจทย์ทุกไลฟ์สไตล์วันหยุด',
  },
  {
    id: 'uob',
    name: 'อาคารสำนักงาน UOB บางแค',
    distance: '300 เมตร',
    time: 'เดิน 4 นาที',
    description: 'เหมาะอย่างยิ่งสำหรับพนักงานธนาคาร UOB ประหยัดเวลาและค่าเดินทาง เดินไปทำงานได้สบายๆ',
  },
  {
    id: 'cafe-down',
    name: 'คาเฟ่และร้านอาหารชั้นล่าง',
    distance: '0 เมตร',
    time: 'อยู่ใต้อาคาร',
    description: 'คาเฟ่สุดชิคใต้หอพัก บริการเครื่องดื่ม ชา กาแฟ เบเกอรี่โฮมเมด และอาหารจานเดียวร้อนๆ',
  },
  {
    id: 'convenient',
    name: '7-Eleven และร้านค้าชุมชน',
    distance: '50 เมตร',
    time: 'เดิน 30 วินาที',
    description: 'หาซื้อของกินของใช้ได้สะดวกสบายตลอด 24 ชั่วโมง มีร้านขายยาและร้านซักรีดใกล้เคียง',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'คุณณิชา (แพร)',
    role: 'พนักงานบริษัท UOB บางแค',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
    comment: 'ชอบที่นี่มากๆ ค่ะ เดินไปทำงานที่ตึก UOB สะดวกสุดๆ แค่ 4 นาทีก็ถึง แถมข้างล่างมีคาเฟ่ของโปรด ตื่นเช้ามาแวะซื้อกาแฟก่อนไปทำงานได้เลย หอพักสตรีสะอาด ปลอดภัย เงียบสงบ ไม่มีเสียงรบกวนเลยค่ะ',
  },
  {
    id: '2',
    name: 'น้องพิมชนก (พิม)',
    role: 'นักศึกษา มหาวิทยาลัยสยาม',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    comment: 'เรื่องความปลอดภัยดีมากค่ะ คีย์การ์ดสแกนตั้งแต่หน้าประตู และมี CCTV ถ่ายเห็นทางเข้าตลอด คุณแม่สบายใจมากที่ให้พักที่นี่ ใกล้รถไฟฟ้าด้วย วันไหนตื่นสายก็นั่ง MRT ไปเรียนแป๊บเดียว สะดวกจริงๆ ค่ะ',
  },
  {
    id: '3',
    name: 'คุณมัสยา (กิ๊ฟ)',
    role: 'Freelancer / Designer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    rating: 5,
    comment: 'เช่าห้อง Deluxe ตกแต่งมินิมอลอบอุ่นมากค่ะ โต๊ะทำงานยาวริมหน้าต่างแสงสวยมาก ทำงานได้ทั้งวัน พื้นที่จัดสรรได้ดี ห้องน้ำกว้างแยกสัดส่วนชัดเจน ที่สำคัญไม่มีค่าส่วนกลางกวนใจค่ะ คุ้มค่าเงินมากๆ',
  },
];

export const OTHER_FEES = {
  water: '100 บาท / คน / เดือน (เหมาจ่าย)',
  electricity: '6 บาท / หน่วย (จ่ายตามจริง)',
  wifi: 'ฟรี Wi-Fi ความเร็วสูงสำหรับทุกห้องพัก',
  commonArea: 'ไม่มีค่าใช้จ่ายส่วนกลางเพิ่มเติม',
  stayOptions: 'รองรับการเช่าทั้งระยะสั้น (Short-term) และระยะยาว (Long-term)',
};
