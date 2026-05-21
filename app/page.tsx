import React from 'react';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Features from '@/sections/Features';
import Rooms from '@/sections/Rooms';
import Pricing from '@/sections/Pricing';
import Nearby from '@/sections/Nearby';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. About Concept */}
      <About />

      {/* 3. Highlight Features */}
      <Features />

      {/* 4. Room Showcase Gallery */}
      <Rooms />

      {/* 5. Pricing Plans */}
      <Pricing />

      {/* 6. Transit Landmarks & Locations */}
      <Nearby />

      {/* 7. Tenants Testimonials */}
      <Testimonials />

      {/* 8. Contact Booking & Google Maps */}
      <Contact />
    </div>
  );
}
