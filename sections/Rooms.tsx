'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROOMS } from '@/constants/data';
import Image from 'next/image';
import RoomModal from '@/components/RoomModal';
import { Maximize2, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<(typeof ROOMS)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (room: (typeof ROOMS)[0]) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  return (
    <section id="rooms" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#F5EFE6] blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#D8C4B6]/15 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#C8A97E] tracking-widest uppercase">
            ประเภทห้องพักและบริการ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6B4F3A]">
            ห้องพักสวยตกแต่งครบครัน
          </h2>
          <p className="text-sm sm:text-base text-[#6B4F3A]/70 leading-relaxed font-medium">
            ดีไซน์ให้ความรู้สึกผ่อนคลายเหมือนอยู่บ้าน เฟอร์นิเจอร์และระบบความปลอดภัยครบครัน 
            ตอบสนองความชอบและขนาดพื้นที่ที่คุณต้องการได้อย่างลงตัว
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col h-full bg-[#F5EFE6]/50 border border-[#D8C4B6]/25 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#6B4F3A]/5 transition-all duration-500"
              onClick={() => handleOpenModal(room)}
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#6B4F3A]/10 group-hover:bg-[#6B4F3A]/0 transition-colors duration-500" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#6B4F3A] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-[#D8C4B6]/20">
                  {room.tag}
                </div>

                {/* Open/Zoom Indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4 h-4 text-[#6B4F3A]" />
                </div>
              </div>

              {/* Text / Info Details */}
              <div className="p-6.5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-baseline justify-between mb-2.5">
                    <h3 className="text-xl font-bold text-[#6B4F3A] group-hover:text-[#C8A97E] transition-colors duration-300">
                      {room.name}
                    </h3>
                    <span className="text-xs font-medium text-[#6B4F3A]/60">
                      ขนาด {room.size}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B4F3A]/70 leading-relaxed mb-6 line-clamp-3">
                    {room.description}
                  </p>
                </div>

                <div className="border-t border-[#D8C4B6]/20 pt-5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#6B4F3A]/50 font-bold uppercase tracking-wider">
                      ราคาเริ่มต้น
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-black text-[#6B4F3A]">
                        {room.price.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-[#6B4F3A]/80">฿ / เดือน</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-[#6B4F3A] group-hover:text-[#F5EFE6] pointer-events-none"
                  >
                    ดูรายละเอียด
                  </Button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Elegant Room Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <RoomModal
            room={selectedRoom}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
