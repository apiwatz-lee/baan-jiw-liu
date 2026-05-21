'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info, Heart } from 'lucide-react';
import { ROOMS, OTHER_FEES, BRAND_INFO } from '@/constants/data';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

export default function Pricing() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
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
      id='pricing'
      className='py-24 bg-gradient-to-b from-[#F5EFE6] via-[#F5EFE6] to-white relative overflow-hidden'
    >
      {/* Decorative Orbs */}
      <div className='absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#D8C4B6]/25 blur-[110px] -z-10 animate-pulse' />

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3'>
          <span className='text-xs font-bold text-[#C8A97E] tracking-widest uppercase'>
            อัตราค่าเช่าและแผนราคา
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#6B4F3A]'>
            อัตราค่าบริการรายเดือน
          </h2>
          <p className='text-sm sm:text-base text-[#6B4F3A]/70 leading-relaxed font-medium'>
            โปร่งใส ไม่มีค่าส่วนกลางจุกจิก สัญญายืดหยุ่นเป็นธรรม
            มอบสิ่งอำนวยความสะดวกที่คุ้มค่าที่สุด
            ให้คุณเลือกแผนพักอาศัยที่ลงตัวกับงบประมาณ
          </p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-60px' }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16'
        >
          {ROOMS.map((room, index) => {
            const isPopular = room.id === 'deluxe';
            return (
              <motion.div
                key={room.id}
                variants={cardVariants}
                className={`relative rounded-[36px] bg-white p-4 shadow-md flex flex-col justify-between transition-all duration-500 border ${
                  isPopular
                    ? 'border-[#C8A97E] ring-2 ring-[#C8A97E]/10 shadow-lg shadow-[#6B4F3A]/5 scale-102 z-10'
                    : 'border-[#D8C4B6]/30'
                }`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className='absolute -top-5 -right-28 -translate-x-1/2 bg-[#C8A97E] text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-md flex items-center gap-1.5 border border-[#C8A97E]/30'>
                    <Heart className='w-3.5 h-3.5 fill-current' />
                    <span>ได้รับความนิยมสูงสุด</span>
                  </div>
                )}

                <div>
                  {/* Name and Tag */}
                  <div className='mb-4'>
                    <span className='text-xs font-bold text-[#C8A97E] tracking-widest uppercase mb-1 block'>
                      {room.tag}
                    </span>
                    <h3 className='text-2xl font-black text-[#6B4F3A]'>
                      {room.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className='flex items-baseline gap-1 mb-6 border-b border-[#D8C4B6]/20 pb-6'>
                    <span className='text-4xl font-extrabold text-[#6B4F3A]'>
                      {room.price.toLocaleString()}
                    </span>
                    <span className='text-sm font-medium text-[#6B4F3A]/70'>
                      บาท / เดือน
                    </span>
                  </div>

                  {/* Checklist */}
                  <ul className='flex flex-col gap-3.5 mb-8'>
                    {room.features.slice(0, 5).map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-3 text-sm text-[#6B4F3A]/85'
                      >
                        <Check className='w-4.5 h-4.5 text-[#C8A97E] stroke-[3.5] shrink-0 mt-0.5' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <Button
                  variant={isPopular ? 'primary' : 'outline'}
                  className='w-full text-sm font-bold py-3.5 rounded-2xl'
                  href='#contact'
                  onClick={(e) => {
                    const event =
                      e as unknown as React.MouseEvent<HTMLAnchorElement>;
                    handleScrollTo(event, 'contact');
                  }}
                >
                  สอบถามและจองห้องพัก
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detailed Utility Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard
            hoverEffect={false}
            className='p-8 max-w-4xl mx-auto rounded-[32px] border-none bg-white/70'
          >
            <div className='flex items-center gap-2.5 mb-6 justify-center'>
              <Info className='w-5 h-5 text-[#C8A97E]' />
              <h3 className='text-lg font-bold text-[#6B4F3A] tracking-wide'>
                รายละเอียดค่าใช้จ่ายเพิ่มเติม & สัญญาเช่า
              </h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left'>
              <div className='flex flex-col'>
                <span className='text-xs text-[#6B4F3A]/60 font-bold uppercase tracking-wider mb-1'>
                  ค่าน้ำประปา
                </span>
                <span className='text-sm font-bold text-[#6B4F3A]'>
                  {OTHER_FEES.water}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-[#6B4F3A]/60 font-bold uppercase tracking-wider mb-1'>
                  ค่ากระแสไฟฟ้า
                </span>
                <span className='text-sm font-bold text-[#6B4F3A]'>
                  {OTHER_FEES.electricity}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-[#6B4F3A]/60 font-bold uppercase tracking-wider mb-1'>
                  ความเร็วอินเทอร์เน็ต
                </span>
                <span className='text-sm font-bold text-[#6B4F3A]'>
                  {OTHER_FEES.wifi}
                </span>
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-[#6B4F3A]/60 font-bold uppercase tracking-wider mb-1'>
                  ค่าส่วนกลางรายเดือน
                </span>
                <span className='text-sm font-bold text-emerald-600 font-bold'>
                  {OTHER_FEES.commonArea}
                </span>
              </div>
            </div>

            <div className='mt-6 border-t border-[#D8C4B6]/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B4F3A]/70 font-semibold'>
              <span>
                * เงินประกันสัญญาเพียง 1 เดือน + ค่าเช่าล่วงหน้า 1 เดือน
                พร้อมเข้าอยู่ได้เลย
              </span>
              <span>{OTHER_FEES.stayOptions}</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
