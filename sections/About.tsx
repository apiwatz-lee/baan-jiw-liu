'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';
import { BRAND_INFO } from '@/constants/data';
import { Heart, Coffee, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#F5EFE6] blur-[80px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Elegant visual border */}
            <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-xl shadow-[#6B4F3A]/5 border-[6px] border-[#F5EFE6] bg-[#F5EFE6]">
              <Image
                src="/images/cafe_downstairs.png"
                alt="คาเฟ่บรรยากาศอบอุ่นใต้อาคาร บ้านจิ๋วหลิว"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Small overlay testimonial badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-[#6B4F3A] text-white p-6 rounded-[30px] shadow-lg max-w-[240px] hidden sm:block border border-white/10"
            >
              <p className="text-xs font-medium italic text-[#D8C4B6]">
                "ชอบทานมื้อเช้าที่คาเฟ่ใต้ตึกมากค่ะ ขนมอร่อย กาแฟดีมาก ไม่ต้องไปคาเฟ่ไกลๆ เลย"
              </p>
              <p className="text-[10px] text-white/60 font-bold mt-2 text-right">
                — รีวิวจากคุณแพร
              </p>
            </motion.div>
          </motion.div>

          {/* Texts Column */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#C8A97E] tracking-widest uppercase">
                ยินดีต้อนรับสู่ {BRAND_INFO.englishName}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6B4F3A] leading-tight">
                แนวคิดหอพักสตรีสไตล์คาเฟ่ <br />
                ที่อบอุ่นเหมือนบ้านตัวเอง
              </h2>
            </div>
            
            <p className="text-[#6B4F3A]/80 leading-relaxed text-base">
              <strong>“บ้านจิ๋วหลิว”</strong> ถูกออกแบบขึ้นภายใต้แนวคิดหอพักหญิงที่มอบความอุ่นใจ ปลอดภัย และสะดวกสบายขั้นสุด 
              เราเชื่อว่าที่อยู่อาศัยที่ดีไม่เพียงแต่ใช้สำหรับนอนพักผ่อน แต่ต้องมอบบรรยากาศและสุนทรียภาพในการใช้ชีวิตที่รื่นรมย์
            </p>
            
            <p className="text-[#6B4F3A]/80 leading-relaxed text-base">
              จุดเด่นของเรานอกจากทำเลที่ห่างจากสถานีรถไฟฟ้า <strong>MRT ภาษีเจริญ เพียง 100 เมตร</strong> แล้ว 
              เรายังมีพื้นที่พักผ่อนหย่อนใจใต้อาคารในรูปแบบ <strong>คาเฟ่สไตล์โฮมมี่</strong> 
              ที่ให้บริการชากาแฟ เครื่องดื่ม และเมนูแสนอร่อยเพื่อซัพพอร์ตไลฟ์สไตล์วันทำงานและวันเรียนของทุกคนได้อย่างไร้รอยต่อ
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <GlassCard hoverEffect={true} className="p-4 rounded-2xl border-none bg-[#F5EFE6]/60" delay={0.1}>
                <div className="w-8 h-8 rounded-full bg-[#6B4F3A] flex items-center justify-center text-white mb-2 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#F5EFE6]" />
                </div>
                <h4 className="text-sm font-bold text-[#6B4F3A] mb-1">ปลอดภัยสูง</h4>
                <p className="text-[11px] text-[#6B4F3A]/70 leading-normal">
                  คีย์การ์ดสแกนทางเข้าเฉพาะผู้หญิง และ CCTV 24 ชม.
                </p>
              </GlassCard>

              <GlassCard hoverEffect={true} className="p-4 rounded-2xl border-none bg-[#F5EFE6]/60" delay={0.2}>
                <div className="w-8 h-8 rounded-full bg-[#C8A97E] flex items-center justify-center text-white mb-2 shadow-sm">
                  <Coffee className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-bold text-[#6B4F3A] mb-1">คาเฟ่ไลฟ์สไตล์</h4>
                <p className="text-[11px] text-[#6B4F3A]/70 leading-normal">
                  มีร้านกาแฟ เครื่องดื่ม และอาหาร บริการด้านล่างอาคาร
                </p>
              </GlassCard>

              <GlassCard hoverEffect={true} className="p-4 rounded-2xl border-none bg-[#F5EFE6]/60" delay={0.3}>
                <div className="w-8 h-8 rounded-full bg-[#D8C4B6] flex items-center justify-center text-[#6B4F3A] mb-2 shadow-sm">
                  <Heart className="w-4 h-4 fill-current text-[#6B4F3A]" />
                </div>
                <h4 className="text-sm font-bold text-[#6B4F3A] mb-1">ความเป็นส่วนตัว</h4>
                <p className="text-[11px] text-[#6B4F3A]/70 leading-normal">
                  สังคมคุณภาพ เงียบสงบ ปราศจากความวุ่นวายภายนอก
                </p>
              </GlassCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
