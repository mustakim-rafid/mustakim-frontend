"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  id: number;
  type: "text" | "video";
  avatarSrc: string;
  name: string;
  title: string;
  content: string;
  videoThumbnailSrc?: string;
};

const testimonialData: Testimonial[] = [
  {
    id: 1,
    type: "text",
    avatarSrc: "/student-1.png",
    name: "Alex Carter",
    title: "Freelance Designer",
    content:
      "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
  },
  {
    id: 2,
    type: "video",
    avatarSrc: "/student-4.png",
    videoThumbnailSrc: "/testimonial-video-1.jpg",
    name: "Daniel Foster",
    title: "Content creator",
    content: "",
  },
  {
    id: 3,
    type: "text",
    avatarSrc: "/student-2.png",
    name: "Mark Davidson",
    title: "Software Developer",
    content:
      "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
  },
  {
    id: 4,
    type: "video",
    avatarSrc: "/student-5.png",
    videoThumbnailSrc: "/testimonial-video-2.jpg",
    name: "Tom David",
    title: "Entrepreneur",
    content: "",
  },
  {
    id: 5,
    type: "text",
    avatarSrc: "/student-3.png",
    name: "Jane Doe",
    title: "Content Strategist",
    content:
      "Process, course, consistency, actions, Skyrocket! The deep work methodologies are a game-changer.", // Partial text from image
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const isVideo = testimonial.type === "video";

  return (
    <div
      className={`relative h-105 w-full shrink-0 rounded-3xl overflow-hidden border border-neutral-900 
                 ${isVideo ? "p-0" : "bg-[#0c0c0c] p-6 flex flex-col justify-between"}`}
    >
      {isVideo ? (
        <>
          {/* Video Thumbnail */}
          <Image
            src={testimonial.videoThumbnailSrc!}
            alt={`${testimonial.name}'s testimonial`}
            fill
            className="object-cover"
          />
          {/* Avatar Overlay (top left) */}
          <div className="absolute top-8 left-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#0c0c0c]/30">
              <Image
                src={testimonial.avatarSrc}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Play Button Overlay (center) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(22,92,255,0.4)]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary"
              >
                <path
                  d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59661 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          {/* Name/Title */}
          <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-linear-to-t from-black via-black/90 to-transparent">
            <h4 className="text-xl text-neutral-300 tracking-tight">
              {testimonial.name}
            </h4>
            <p className="text-sm font-medium text-neutral-400 mt-0.5">
              {testimonial.title}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text Testimonial Structure */}
          <div className="space-y-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-800">
              <Image
                src={testimonial.avatarSrc}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-md font-medium text-neutral-500 leading-relaxed tracking-tight">
              {testimonial.content}
            </p>
          </div>
          <div className="mt-auto pt-10">
            <h4 className="text-xl text-neutral-300 tracking-tight">
              {testimonial.name}
            </h4>
            <p className="text-sm font-medium text-neutral-400 mt-0.5">
              {testimonial.title}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default function TestimonialsSection() {
  const visibleCards = { sm: 1, md: 2, lg: 4 };
  const gapPixels = 16;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(visibleCards.sm);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      if (window.innerWidth >= 1024) setVisibleCount(visibleCards.lg);
      else if (window.innerWidth >= 768) setVisibleCount(visibleCards.md);
      else setVisibleCount(visibleCards.sm);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const cardWidth =
    (containerWidth - (visibleCount - 1) * gapPixels) / visibleCount;

  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* 1. Badge */}
        <div className="bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-5 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.3),inset_1px_1px_2px_rgba(22,92,255,0.3)]">
          <div className="w-2 h-2 rounded-full bg-[#165cff] animate-pulse" />
          <span>Testimonials</span>
        </div>

        {/* 2. Primary Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-4xl text-center text- mb-20 md:mb-28 tracking-tight leading-tight max-w-4xl">
          Real Results from
          <br />
          Real People
        </h2>

        {/* 3. Sub-header & Controls */}
        <div className="w-full flex items-center justify-between mb-12">
          <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
            Join with 5K other students
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-neutral-800 bg-[#0c0c0c] flex items-center justify-center text-neutral-400 disabled:opacity-30 transition-all hover:border-neutral-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(testimonialData.length - visibleCount, prev + 1),
                )
              }
              disabled={currentIndex >= testimonialData.length - visibleCount}
              className="w-12 h-12 rounded-full border border-neutral-800 bg-[#0c0c0c] flex items-center justify-center text-neutral-400 disabled:opacity-30 transition-all hover:border-neutral-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4. The Dynamic Track */}
        <div ref={containerRef} className="w-full">
          <motion.div
            className="flex"
            style={{ gap: `${gapPixels}px` }}
            animate={{ x: -(currentIndex * (cardWidth + gapPixels)) }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{ width: `${cardWidth}px` }}
                className="shrink-0"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
