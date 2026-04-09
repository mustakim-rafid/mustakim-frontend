"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function StruggleSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text =
    "If you struggle to focus, feel overwhelmed by endless tasks, or procrastinate instead of making progress, you’re not alone.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative h-[750vh] md:h-[1200vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 gap-8 overflow-hidden">
        {/* Badge */}
        <div className="bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-5 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.3),inset_1px_1px_2px_rgba(22,92,255,0.3)]">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Are Distractions Holding You Back?</span>
        </div>

        {/* The Animated Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-thin md:text-4xl tracking-tight leading-[1.1] flex flex-wrap justify-center gap-x-[0.25em] gap-y-1">
            {words.map((word, i) => {
              const start = i / (words.length * 1.5);
              const end = (i + 1) / (words.length * 1.5);

              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </h2>
        </div>

        {/* 3. The Image Gallery */}
        <div className="flex flex-wrap justify-center gap-2">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="relative w-28 h-28 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900"
            >
              <Image
                src={`/person${num}.png`}
                alt="Struggling person"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1], {
    clamp: true,
  });

  return (
    <motion.span style={{ opacity }} className="text-white">
      {children}
    </motion.span>
  );
}
