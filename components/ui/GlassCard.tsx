'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  delay = 0,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={
        hoverEffect
          ? {
              y: -8,
              boxShadow: '0 20px 30px -10px rgba(107, 79, 58, 0.08)',
              borderColor: 'rgba(200, 169, 126, 0.4)', // Accent soft gold on hover
            }
          : undefined
      }
      className={cn(
        'bg-white/80 backdrop-blur-md border border-white/50 rounded-3xl p-6 shadow-sm shadow-[#6B4F3A]/5 transition-all duration-500',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
