'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { NAV_LINKS, BRAND_INFO } from '@/constants/data';
import { cn } from '@/lib/utils';
import Button from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll observer to highlight current navigation item
      const scrollPosition = window.scrollY + 120;
      const links = NAV_LINKS.map((link) => link.href.substring(1));

      for (const section of links) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar offset height
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
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4',
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg border-b border-[#D8C4B6]/20 shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#6B4F3A] flex items-center justify-center text-white shadow-sm shadow-[#6B4F3A]/20 transition-transform duration-300 group-hover:scale-105">
              <Heart className="w-5 h-5 fill-current text-[#F5EFE6]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#6B4F3A] tracking-wide leading-tight">
                {BRAND_INFO.name}
              </span>
              <span className="text-[10px] text-[#C8A97E] font-medium tracking-widest uppercase">
                {BRAND_INFO.englishName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-300 py-1.5',
                    isActive ? 'text-[#6B4F3A]' : 'text-[#6B4F3A]/70 hover:text-[#6B4F3A]'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A97E] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Header Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-[#6B4F3A] hover:text-[#C8A97E] transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-[#C8A97E]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <Button
              variant="gold"
              size="sm"
              href="#contact"
              onClick={(e) => {
                const event = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                handleLinkClick(event, '#contact');
              }}
            >
              จองเลย
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#6B4F3A] hover:bg-[#D8C4B6]/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white/95 backdrop-blur-xl border-b border-[#D8C4B6]/30 shadow-lg lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5 max-w-md mx-auto">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      'text-base font-semibold py-2 px-4 rounded-xl transition-all duration-300',
                      isActive
                        ? 'bg-[#6B4F3A]/5 text-[#6B4F3A]'
                        : 'text-[#6B4F3A]/80 hover:bg-[#F5EFE6]'
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
              <hr className="border-[#D8C4B6]/30 my-2" />
              <div className="flex flex-col gap-4 px-4">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-3 text-[#6B4F3A] font-semibold text-sm justify-center py-2"
                >
                  <Phone className="w-4 h-4 text-[#C8A97E]" />
                  <span>โทร: {BRAND_INFO.phone}</span>
                </a>
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={(e) => {
                    const event = e as unknown as React.MouseEvent<HTMLAnchorElement>;
                    handleLinkClick(event, '#contact');
                  }}
                  className="w-full text-center"
                >
                  ติดต่อสอบถาม / จองห้องพัก
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
