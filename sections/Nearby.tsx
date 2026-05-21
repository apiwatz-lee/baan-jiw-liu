'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Train, ShoppingBag, Landmark, Coffee, Compass } from 'lucide-react';
import { NEARBY_LOCATIONS } from '@/constants/data';
import GlassCard from '@/components/ui/GlassCard';

// Map icons dynamically
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mrt: Train,
  seacon: ShoppingBag,
  uob: Landmark,
  'cafe-down': Coffee,
  convenient: Compass,
};

export default function Nearby() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="nearby" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#D8C4B6]/15 blur-[100px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#C8A97E] tracking-widest uppercase">
            แผนที่และสถานที่สำคัญใกล้เคียง
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6B4F3A]">
            เชื่อมต่อชีวิตเมืองได้อย่างสะดวกสบาย
          </h2>
          <p className="text-sm sm:text-base text-[#6B4F3A]/70 leading-relaxed font-medium">
            หมดห่วงเรื่องเดินทางที่ติดขัดและการหาแหล่งอำนวยความสะดวก บ้านจิ๋วหลิวอยู่ท่ามกลาง
            แหล่งช้อปปิ้ง สถานีรถไฟฟ้า และตึกออฟฟิศขนาดใหญ่ในทำเลภาษีเจริญ
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (Desktop Only) */}
          <div className="absolute left-8.5 top-2 bottom-2 w-[2px] bg-dashed bg-gradient-to-b from-[#C8A97E] via-[#D8C4B6] to-[#6B4F3A]/20 hidden md:block" />

          {/* Timeline Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8"
          >
            {NEARBY_LOCATIONS.map((loc, index) => {
              const IconComponent = iconMap[loc.id] || MapPin;
              return (
                <motion.div
                  key={loc.id}
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-6 items-start relative group"
                >
                  {/* Icon Circle (Timeline Anchor) */}
                  <div className="w-16 h-16 rounded-full bg-[#F5EFE6] border-2 border-[#C8A97E] flex items-center justify-center text-[#6B4F3A] shadow-md shrink-0 z-10 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  {/* Details Card */}
                  <GlassCard
                    hoverEffect={true}
                    className="flex-grow w-full text-left p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-none bg-[#F5EFE6]/40"
                  >
                    <div className="flex flex-col gap-2 max-w-xl">
                      {/* Badge and Title */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-bold text-[#6B4F3A] group-hover:text-[#C8A97E] transition-colors duration-300">
                          {loc.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6B4F3A]/70 leading-relaxed font-medium">
                        {loc.description}
                      </p>
                    </div>

                    {/* Distance Details Badge */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-t-0 sm:border-l border-[#D8C4B6]/30 pt-3 sm:pt-0 sm:pl-6">
                      <div className="bg-[#C8A97E] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-sm whitespace-nowrap">
                        {loc.distance}
                      </div>
                      <span className="text-xs font-bold text-[#6B4F3A]/80 whitespace-nowrap">
                        ⏳ {loc.time}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
