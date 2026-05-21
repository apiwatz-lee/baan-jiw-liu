'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrainFront, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { BRAND_INFO } from '@/constants/data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#F5EFE6] via-[#F5EFE6] to-white"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#D8C4B6]/30 blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#C8A97E]/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Text Content Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col gap-6 text-left"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#C8A97E]/15 border border-[#C8A97E]/30 text-[#6B4F3A] px-4 py-2 rounded-full w-fit text-sm font-semibold shadow-sm"
          >
            <Heart className="w-4 h-4 text-[#C8A97E] fill-current" />
            <span>{BRAND_INFO.type}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#6B4F3A] tracking-wide leading-[1.15]"
          >
            หอพักสตรี ใกล้ <br />
            <span className="text-[#C8A97E] relative inline-block">
              MRT ภาษีเจริญ
              <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#D8C4B6]/50 -z-10 rounded-full" />
            </span>
            <br />
            เพียง <span className="font-black text-[#6B4F3A]">100 เมตร</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[#6B4F3A]/80 leading-relaxed font-medium"
          >
            สัมผัสความอบอุ่น ปลอดภัย สไตล์มินิมอลคาเฟ่
            คัดสรรเฉพาะผู้พักสุภาพสตรีเท่านั้น ห้องพักพรีเมียมเฟอร์แต่งครบ
            พร้อมร้านกาแฟหอมอร่อยใต้ตัวตึก ตอบโจทย์ทุกการเดินทางของคุณ
          </motion.p>

          {/* Quick Perks */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 border-t border-b border-[#D8C4B6]/30 py-4.5 my-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#C8A97E] shadow-sm">
                <TrainFront className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-[#6B4F3A]">เดิน 1 นาทีถึงรถไฟฟ้า</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#C8A97E] shadow-sm">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <span className="text-sm font-bold text-[#6B4F3A]">ระบบกล้อง CCTV 24 ชม.</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="#rooms"
              onClick={(e) => {
                const event = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                handleScrollTo(event, 'rooms');
              }}
            >
              ดูห้องพักที่ว่าง
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#contact"
              onClick={(e) => {
                const event = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                handleScrollTo(event, 'contact');
              }}
            >
              ติดต่อสอบถาม
            </Button>
          </motion.div>
        </motion.div>

        {/* Media Block (Visual) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full aspect-square max-w-[500px] lg:max-w-full rounded-[48px] overflow-hidden border-[8px] border-white shadow-xl shadow-[#6B4F3A]/5 bg-white">
            <Image
              src="/images/hero_dormitory.png"
              alt="บ้านจิ๋วหลิว หอพักสตรี ใกล้ MRT ภาษีเจริญ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Floating Price Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 bg-white/95 backdrop-blur-md border border-[#D8C4B6]/30 px-6 py-4.5 rounded-[24px] shadow-lg flex flex-col max-w-[200px]"
          >
            <span className="text-xs font-semibold text-[#C8A97E] tracking-wider uppercase mb-1">
              อัตราค่าเช่ารายเดือน
            </span>
            <div className="flex items-baseline gap-0.5">
              <span className="text-2xl font-black text-[#6B4F3A]">เริ่มต้น 5,000</span>
              <span className="text-xs font-bold text-[#6B4F3A]/70">฿</span>
            </div>
            <span className="text-[10px] text-[#6B4F3A]/60 font-semibold mt-0.5">
              *ว่างพร้อมเข้าอยู่วันนี้
            </span>
          </motion.div>

          {/* Small Floating Cafe Tag */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-12 right-4 bg-[#6B4F3A] text-white px-5 py-2.5 rounded-full shadow-md text-xs font-bold flex items-center gap-2 border border-[#6B4F3A]/20"
          >
            <span>☕</span>
            <span>มีคาเฟ่อยู่ชั้นล่าง</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
