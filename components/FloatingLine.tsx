'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_INFO } from '@/constants/data';

export default function FloatingLine() {
  return (
    <motion.a
      href={`https://line.me/ti/p/~${BRAND_INFO.lineId}`}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#06C755] text-white p-3 rounded-full shadow-xl hover:bg-[#05b04b] transition-all duration-300 group'
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      {/* Gentle Radar Pulse */}
      <span className='absolute inline-flex h-full w-full rounded-full bg-[#06C755] opacity-30 animate-ping -z-10 top-0 left-0'></span>

      {/* Elegant Line Icon (SVG) */}
      {/* <svg
        className='w-6 h-6 fill-current shrink-0'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M24 10.304c0-5.369-5.383-9.738-12-9.738s-12 4.369-12 9.738c0 4.814 4.269 8.843 10.029 9.613.39.084.92.258 1.054.592.12.302.079.775.038 1.082l-.167 1.002c-.05.303-.243 1.187 1.046.647 1.289-.54 6.953-4.095 9.479-7.009 1.761-1.921 2.521-3.834 2.521-5.927zm-17.14 3.656h-1.684a.422.422 0 01-.422-.422v-4.32a.422.422 0 01.422-.422h.422a.422.422 0 01.422.422v3.477h.84a.422.422 0 01.422.422v.421a.422.422 0 01-.422.422zm2.756-.422a.422.422 0 01-.422.422h-.422a.422.422 0 01-.422-.422v-4.32a.422.422 0 01.422-.422h.422a.422.422 0 01.422.422v4.32zm4.333-.422a.422.422 0 01-.422.422h-.422a.395.395 0 01-.3-.12l-2.029-2.73v2.428a.422.422 0 01-.422.422h-.422a.422.422 0 01-.422-.422v-4.32a.422.422 0 01.422-.422h.422c.119 0 .23.05.308.136l2.013 2.709v-2.423a.422.422 0 01.422-.422h.422a.422.422 0 01.422.422v4.32zm4.025-2.981h-1.157v.778h1.157a.422.422 0 01.422.422v.421a.422.422 0 01-.422.422h-1.157v.779h1.157a.422.422 0 01.422.422v.421a.422.422 0 01-.422.422h-1.999a.422.422 0 01-.422-.422v-4.32a.422.422 0 01.422-.422h1.999a.422.422 0 01.422.422v.421a.422.422 0 01-.422.422z' />
      </svg> */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='lucide lucide-user-icon lucide-user'
      >
        <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
        <circle cx='12' cy='7' r='4' />
      </svg>
      <span className='text-sm font-semibold max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[130px] transition-all duration-500 ease-in-out'>
        คุยไลน์กับเรา
      </span>
    </motion.a>
  );
}
