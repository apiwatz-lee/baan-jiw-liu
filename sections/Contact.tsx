'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send, MapPin, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO, ROOMS } from '@/constants/data';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: 'standard',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Simulate inquiry submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', roomType: 'standard', message: '' });
    }, 4000);
  };

  return (
    <section id='contact' className='py-24 bg-white relative overflow-hidden'>
      {/* Decorative Orbs */}
      <div className='absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-[#F5EFE6] blur-[120px] -z-10 animate-pulse' />
      <div className='absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#D8C4B6]/15 blur-[90px] -z-10' />

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative'>
        {/* Header */}
        <div className='text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3'>
          <span className='text-xs font-bold text-[#C8A97E] tracking-widest uppercase'>
            นัดหมายชมโครงการ & ติดต่อ
          </span>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-[#6B4F3A]'>
            ติดต่อสอบถามหรือลงทะเบียนจอง
          </h2>
          <p className='text-sm sm:text-base text-[#6B4F3A]/70 leading-relaxed font-medium'>
            นัดเวลาเข้าชมห้องจริง ลงทะเบียนสอบถามสิทธิ์ห้องว่าง
            หรือแชทคุยกับแม่บ้านได้โดยตรง เราพร้อมให้คำแนะนำในทุกรายละเอียด
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch'>
          {/* Column 1: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='lg:col-span-6 flex'
          >
            <GlassCard
              hoverEffect={false}
              className='w-full p-8.5 rounded-[36px] bg-[#F5EFE6]/40 border border-[#D8C4B6]/20 shadow-sm flex flex-col justify-between'
            >
              {isSubmitted ? (
                <div className='flex flex-col items-center justify-center text-center py-16 gap-4.5 my-auto'>
                  <div className='w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2 shadow-inner'>
                    <CheckCircle2 className='w-9 h-9 stroke-[2.2]' />
                  </div>
                  <h3 className='text-xl font-bold text-[#6B4F3A]'>
                    ส่งข้อมูลสำเร็จเรียบร้อย
                  </h3>
                  <p className='text-sm text-[#6B4F3A]/70 max-w-xs leading-relaxed'>
                    เจ้าหน้าที่ได้รับคำขอจอง/สอบถามของคุณแล้ว
                    จะเร่งติดต่อกลับผ่านเบอร์โทรศัพท์โดยเร็วที่สุดค่ะ
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='flex flex-col gap-5.5 w-full'
                >
                  <h3 className='text-lg font-bold text-[#6B4F3A] mb-1'>
                    ฟอร์มส่งคำขอสอบถาม
                  </h3>

                  {/* Name Input */}
                  <div className='flex flex-col gap-2 text-left'>
                    <label
                      htmlFor='name'
                      className='text-xs font-bold text-[#6B4F3A]/70 uppercase tracking-wider'
                    >
                      ชื่อ-นามสกุลของคุณ
                    </label>
                    <input
                      id='name'
                      type='text'
                      required
                      placeholder='กรอกชื่อ-นามสกุล'
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className='w-full bg-white border border-[#D8C4B6]/40 rounded-2xl px-5 py-3 text-sm text-[#6B4F3A] focus:outline-none focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/10 placeholder-[#6B4F3A]/40 transition-all duration-300'
                    />
                  </div>

                  {/* Phone Input */}
                  <div className='flex flex-col gap-2 text-left'>
                    <label
                      htmlFor='phone'
                      className='text-xs font-bold text-[#6B4F3A]/70 uppercase tracking-wider'
                    >
                      เบอร์โทรศัพท์ติดต่อ
                    </label>
                    <input
                      id='phone'
                      type='tel'
                      required
                      placeholder='เช่น 089-xxx-xxxx'
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className='w-full bg-white border border-[#D8C4B6]/40 rounded-2xl px-5 py-3 text-sm text-[#6B4F3A] focus:outline-none focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/10 placeholder-[#6B4F3A]/40 transition-all duration-300'
                    />
                  </div>

                  {/* Room Selection */}
                  <div className='flex flex-col gap-2 text-left'>
                    <label
                      htmlFor='roomType'
                      className='text-xs font-bold text-[#6B4F3A]/70 uppercase tracking-wider'
                    >
                      ห้องพักที่สนใจ
                    </label>
                    <select
                      id='roomType'
                      value={formData.roomType}
                      onChange={(e) =>
                        setFormData({ ...formData, roomType: e.target.value })
                      }
                      className='w-full bg-white border border-[#D8C4B6]/40 rounded-2xl px-5 py-3 text-sm text-[#6B4F3A] focus:outline-none focus:border-[#C8A97E] transition-all duration-300 cursor-pointer'
                    >
                      {ROOMS.map((room) => (
                        <option key={room.id} value={room.id}>
                          {room.name} ({room.price.toLocaleString()} ฿/เดือน)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className='flex flex-col gap-2 text-left'>
                    <label
                      htmlFor='message'
                      className='text-xs font-bold text-[#6B4F3A]/70 uppercase tracking-wider'
                    >
                      ข้อความเพิ่มเติม / นัดหมายวันเข้าชม
                    </label>
                    <textarea
                      id='message'
                      rows={3}
                      placeholder='ระบุวันที่ต้องการเข้าชม หรือข้อสอบถามอื่น ๆ'
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className='w-full bg-white border border-[#D8C4B6]/40 rounded-2xl px-5 py-3 text-sm text-[#6B4F3A] focus:outline-none focus:border-[#C8A97E] focus:ring-2 focus:ring-[#C8A97E]/10 placeholder-[#6B4F3A]/40 transition-all duration-300 resize-none'
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type='submit'
                    variant='primary'
                    className='w-full py-4.5 rounded-2xl mt-2 flex items-center justify-center gap-2'
                  >
                    <Send className='w-4.5 h-4.5' />
                    <span>ส่งข้อมูลติดต่อกลับ</span>
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Column 2: Direct Contact details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='lg:col-span-6 flex flex-col justify-between gap-6'
          >
            {/* Quick Contacts Bar */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className='flex items-center gap-3 bg-[#F5EFE6]/50 border border-[#D8C4B6]/20 p-5 rounded-2xl hover:border-[#6B4F3A] hover:bg-white transition-all duration-300 group shadow-sm text-left'
              >
                <div className='w-9 h-9 rounded-full bg-[#6B4F3A]/10 text-[#6B4F3A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300'>
                  <Phone className='w-4.5 h-4.5' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-[#6B4F3A]/60 font-bold uppercase tracking-wider'>
                    โทรสายตรง
                  </span>
                  <span className='text-xs font-bold text-[#6B4F3A]'>
                    {BRAND_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={`https://line.me/ti/p/~${BRAND_INFO.lineId}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 bg-[#F5EFE6]/50 border border-[#D8C4B6]/20 p-4 rounded-2xl hover:border-[#06C755] hover:bg-white transition-all duration-300 group shadow-sm text-left'
              >
                <div className='w-9 h-9 rounded-full bg-[#06C755]/10 text-[#06C755] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300'>
                  <MessageCircle className='w-4.5 h-4.5 fill-current' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-[#6B4F3A]/60 font-bold uppercase tracking-wider'>
                    LINE แชท
                  </span>
                  <span className='text-xs font-bold text-[#6B4F3A] text-wrap'>
                    {BRAND_INFO.lineId}
                  </span>
                </div>
              </a>

              <div className='flex items-center gap-3 bg-[#F5EFE6]/50 border border-[#D8C4B6]/20 p-5 rounded-2xl shadow-sm text-left'>
                <div className='w-9 h-9 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0'>
                  <svg
                    className='w-4.5 h-4.5 fill-current'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-[#6B4F3A]/60 font-bold uppercase tracking-wider'>
                    Facebook
                  </span>
                  <span className='text-xs font-bold text-[#6B4F3A]'>
                    {BRAND_INFO.facebook}
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className='relative flex-grow min-h-[300px] w-full rounded-[36px] overflow-hidden border border-[#D8C4B6]/25 shadow-sm shadow-[#6B4F3A]/5 bg-stone-100'>
              <iframe
                title='Baan Jiw Liu Location Map - MRT Phasi Charoen'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4441.358823624227!2d100.43447387565695!3d13.71269738667511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e297bcf73c8ba9%3A0x79ec247faf019239!2z4Lia4LmJ4Liy4LiZ4LiI4Li04LmL4Lin4Lir4Lil4Li04Lin!5e1!3m2!1sth!2sth!4v1779369461718!5m2!1sth!2sth'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />

              {/* Soft visual overlays */}
              <div className='absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full flex items-center gap-2 shadow-md border border-[#D8C4B6]/20'>
                <MapPin className='w-4 h-4 text-[#C8A97E]' />
                <span className='text-xs font-bold text-[#6B4F3A]'>
                  100 เมตร จาก MRT ภาษีเจริญ
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
