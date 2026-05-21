'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  target,
  rel,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[#6B4F3A] text-[#F5EFE6] hover:bg-[#5A4230] shadow-md shadow-[#6B4F3A]/10 focus:ring-[#6B4F3A]',
    gold: 'bg-[#C8A97E] text-white hover:bg-[#bfa075] shadow-md shadow-[#C8A97E]/10 focus:ring-[#C8A97E]',
    secondary:
      'bg-[#D8C4B6] text-[#6B4F3A] hover:bg-[#cbb5a5] focus:ring-[#D8C4B6]',
    outline:
      'bg-transparent border border-[#6B4F3A] text-[#6B4F3A] hover:bg-[#6B4F3A] hover:text-[#F5EFE6] focus:ring-[#6B4F3A]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className='inline-block'>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}
