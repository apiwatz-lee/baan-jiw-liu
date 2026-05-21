'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  TrainFront,
  ShieldCheck,
  BedDouble,
  Coffee,
  Bath,
  Wifi,
  Sparkles,
  Heart,
} from 'lucide-react';
import { FEATURES } from '@/constants/data';
import GlassCard from '@/components/ui/GlassCard';

// Map icons dynamically
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrainFront,
  ShieldCheck,
  BedDouble,
  Coffee,
  Bath,
  Wifi,
  Sparkles,
  Heart,
};

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-[#F5EFE6] relative overflow-hidden"
    >
      {/* Decorative Orbs */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-[#D8C4B6]/20 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#C8A97E] tracking-widest uppercase">
            สิ่งอำนวยความสะดวกครบครัน
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6B4F3A]">
            ยกระดับความสะดวกสบายในการใช้ชีวิต
          </h2>
          <p className="text-sm sm:text-base text-[#6B4F3A]/70 leading-relaxed font-medium">
            คัดสรรสิ่งอำนวยความสะดวกที่จำเป็นต่อชีวิตประจำวัน เพื่อความคล่องตัว ความเป็นส่วนตัว
            และความสุขในการอยู่อาศัยของสุภาพสตรีทุกคน
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Heart;
            return (
              <GlassCard
                key={feature.id}
                delay={index * 0.05}
                hoverEffect={true}
                className="flex flex-col gap-4 text-left p-6.5"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-[#6B4F3A]">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6B4F3A]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
