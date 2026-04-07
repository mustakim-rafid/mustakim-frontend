"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Terms & conditions", href: "#" },
  { name: "Refund policy", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Support", href: "#" },
];

const avatars = [
  "/student-1.png",
  "/student-2.png",
  "/student-3.png",
];

export default function Footer() {
  return (
    <footer className="bg-nutral-800 pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Branding & CTA Card */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          
          {/* Branding */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium text-neutral-300 tracking-tighter leading-tight max-w-50">
              The Deep Work Blueprint
            </h2>
            <p className="text-neutral-500 text-lg font-light">
              Master Focus & Get More Done in Less Time
            </p>
          </div>

          {/* Blue CTA Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="h-50 w-full sm:w-95 bg-[#165cff] rounded-3xl p-4 md:p-6 flex flex-col justify-between gap-8 relative overflow-hidden group hover:cursor-pointer"
          >
            <div className="flex justify-between items-start">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-2 border-[#165cff] overflow-hidden bg-neutral-800">
                    <Image 
                      src={src} 
                      alt="Student" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                ))}
              </div>

              {/* Arrow Button */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#165cff] transition-transform duration-300 group-hover:-rotate-45 shadow-lg">
                <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
              </div>
            </div>

            <p className="text-white text-lg font-medium tracking-tight">
              Join with 5K other students
            </p>
          </motion.div>
        </div>

        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-neutral-900" />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#165cff]/40 to-transparent" />
        </div>

        {/* Copyright & Links */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm font-light">
            © Copyright 2024, All Rights Reserved
          </p>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white text-sm transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}