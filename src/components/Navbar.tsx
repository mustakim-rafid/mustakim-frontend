'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ui/theme-toggle';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { MobileNav } from './MobileNav';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg border-b' : 'bg-transparent'
    }`}>
      <div className="relative max-w-345 mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg text-neutral-0">
          <Image 
          src={"/logo.png"}
          alt='main-logo'
          height={20}
          width={20}
          />
          <span className='font-extralight'>PPA</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="#overview" className="text-neutral-300 hover:text-neutral-50 transition text-sm">
            Overview
          </Link>
          <Link href="#curriculum" className="text-neutral-300 hover:text-neutral-50 transition text-sm">
            Curriculum
          </Link>
          <Link href="#testimonials" className="text-neutral-300 hover:text-neutral-50 transition text-sm">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-neutral-300 hover:text-neutral-50 transition text-sm">
            Pricing
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button className='hidden md:flex rounded-xl p-5'>Enroll Now</Button>
          <MobileNav />
        </div>
      </div>
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary to-transparent" />
    </nav>
  );
}
