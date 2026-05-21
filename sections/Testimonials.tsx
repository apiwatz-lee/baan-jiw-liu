'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants/data';
import GlassCard from '@/components/ui/GlassCard';

export default function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id='testimonials'
      className='py-24 bg-gradient-to-b from-white to-[#F5EFE6] relative overflow-hidden'
    >
      {/* Decorative Orbs */}
      <div className='absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#D8C4B6]/20 blur-[100px] -z-10' />

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3'>
          <span className='text-xs font-bold text-[#C8A97E] tracking-widest uppercase'>
            รีวิวความประทับใจ
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#6B4F3A]'>
            เสียงสะท้อนจากผู้พักอาศัยจริง
          </h2>
          <p className='text-sm sm:text-base text-[#6B4F3A]/70 leading-relaxed font-medium'>
            ความสุขและความอุ่นใจของผู้อยู่อาศัยคือหัวใจสำคัญของเรา
            มาดูความรู้สึกของเหล่านักศึกษาและคนทำงานรุ่นใหม่ที่ได้สัมผัสชีวิตที่บ้านจิ๋วหลิว
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className='flex h-full'
            >
              <GlassCard
                hoverEffect={true}
                className='flex flex-col justify-between p-8 text-left bg-white rounded-[32px] border-none shadow-sm relative h-full flex-grow group'
              >
                {/* Quote Icon Overlay */}
                <div className='absolute top-6 right-8 text-[#C8A97E]/10 group-hover:text-[#C8A97E]/20 transition-colors duration-300'>
                  <Quote className='w-14 h-14 fill-current rotate-180' />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className='flex items-center gap-1.5 mb-5 text-[#C8A97E]'>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-current stroke-[2.5]'
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className='text-sm sm:text-base text-[#6B4F3A]/85 leading-relaxed italic mb-8 font-medium'>
                    "{t.comment}"
                  </p>
                </div>

                {/* Profile Meta */}
                <div className='flex items-center gap-4 border-t border-[#D8C4B6]/20 pt-6'>
                  {/* Custom Cozy Initials Avatar to avoid blank Unsplash loads */}
                  <div className='w-12 h-12 rounded-full bg-[#6B4F3A] flex items-center justify-center text-white font-extrabold shadow-inner text-sm tracking-wide'>
                    {t.name.split('(')[1]?.replace(')', '') || t.name.charAt(0)}
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <span className='text-sm font-bold text-[#6B4F3A]'>
                      {t.name}
                    </span>
                    <span className='text-xs text-[#C8A97E] font-semibold'>
                      {t.role}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
