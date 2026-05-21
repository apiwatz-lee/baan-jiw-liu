'use client';

import React from 'react';
import { Heart, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO, NAV_LINKS } from '@/constants/data';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#6B4F3A] text-[#F5EFE6] pt-16 pb-8 border-t border-[#D8C4B6]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Information */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#6B4F3A]">
              <Heart className="w-4 h-4 fill-current text-[#C8A97E]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-wide leading-tight">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] text-[#D8C4B6] font-medium tracking-widest uppercase">
                {BRAND_INFO.englishName}
              </span>
            </div>
          </div>
          <p className="text-sm text-[#D8C4B6] leading-relaxed mt-2">
            หอพักสตรีสไตล์มินิมอลคาเฟ่ ใกล้รถไฟฟ้า เดินทางสะดวก ปลอดภัย เป็นส่วนตัว ให้ความรู้สึกอุ่นใจเหมือนอยู่บ้านตัวเอง
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5 border-l-2 border-[#C8A97E] pl-3">
            ลิงก์ด่วน
          </h4>
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[#D8C4B6] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services & Security */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5 border-l-2 border-[#C8A97E] pl-3">
            กฎระเบียบและจุดเด่น
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#D8C4B6]">
            <li>• คัดกรองเฉพาะผู้หญิงเท่านั้น (หอพักสตรี)</li>
            <li>• ห้ามสัตว์เลี้ยง & ห้ามสูบบุหรี่</li>
            <li>• ระบบความปลอดภัยและ CCTV 24 ชั่วโมง</li>
            <li>• มีคาเฟ่และร้านอาหารใต้อาคาร</li>
            <li>• ฟรี Wi-Fi ทุกห้องพัก</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-5 border-l-2 border-[#C8A97E] pl-3">
            ติดต่อสอบถาม
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-[#D8C4B6]">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
              <span>100 เมตร จาก MRT ภาษีเจริญ แขวงบางแค เขตบางแค กรุงเทพมหานคร 10160</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C8A97E] shrink-0" />
              <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-white transition-colors">
                {BRAND_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#C8A97E] shrink-0 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hover:text-white cursor-default">{BRAND_INFO.facebook}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-5 font-bold text-xs text-[#C8A97E] text-center shrink-0">LINE</span>
              <a
                href={`https://line.me/ti/p/~${BRAND_INFO.lineId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {BRAND_INFO.lineId}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-[#D8C4B6]/10 max-w-7xl mx-auto my-8 px-6" />

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C4B6]">
        <span>© {new Date().getFullYear()} บ้านจิ๋วหลิว. สงวนลิขสิทธิ์ทั้งหมด.</span>
        <span>
          ออกแบบและพัฒนาอย่างประณีตด้วยความรัก <Heart className="w-3 h-3 text-[#C8A97E] inline fill-current" />
        </span>
      </div>
    </footer>
  );
}
