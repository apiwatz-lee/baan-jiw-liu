'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Phone } from 'lucide-react';
import { RoomType, BRAND_INFO } from '@/constants/data';
import Image from 'next/image';
import Button from './ui/Button';

interface RoomModalProps {
  room: RoomType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function RoomModal({ room, isOpen, onClose }: RoomModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!room || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#6B4F3A]/40 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative bg-[#F5EFE6] border border-[#D8C4B6]/30 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#6B4F3A] hover:text-[#C8A97E] shadow-md flex items-center justify-center transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Grid Columns */}
        <div className="relative h-64 md:h-auto md:col-span-5 bg-stone-100 min-h-[300px]">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
          {/* Floating Tag */}
          <div className="absolute top-4 left-4 bg-[#C8A97E] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
            {room.tag}
          </div>
        </div>

        {/* Contents Column */}
        <div className="p-8 md:p-10 md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="text-2xl font-bold text-[#6B4F3A]">{room.name}</h3>
              <span className="text-sm font-semibold text-[#C8A97E]">({room.size})</span>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-[#6B4F3A]">
                {room.price.toLocaleString()}
              </span>
              <span className="text-sm font-medium text-[#6B4F3A]/70">บาท / เดือน</span>
            </div>

            <p className="text-[#6B4F3A]/80 text-sm leading-relaxed mb-6">
              {room.description}
            </p>

            {/* List of features */}
            <h4 className="text-sm font-bold text-[#6B4F3A] uppercase tracking-wider mb-3">
              สิ่งอำนวยความสะดวกในห้องพัก
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {room.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2.5 text-sm text-[#6B4F3A]/90">
                  <div className="w-5 h-5 rounded-full bg-[#C8A97E]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#C8A97E] stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="border-t border-[#D8C4B6]/30 pt-6 flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-8"
              href={`https://line.me/ti/p/~${BRAND_INFO.lineId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              จองห้องนี้ทาง LINE
            </Button>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-[#6B4F3A] hover:text-[#C8A97E] transition-colors py-3 text-center"
            >
              <Phone className="w-4 h-4 text-[#C8A97E]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
