"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Hexagon } from "lucide-react";
import { motion } from "framer-motion";

const bonusList = [
  {
    text: "Bonus: 1:1 coaching session to boost focus.",
  },
  {
    text: "Discount: Save 30% when you enroll now!",
  },
];

const featureList = [
  { text: "6h of videos – Step-by-step deep work strategies." },
  { text: "Templates & Trackers – Stay on track effortlessly." },
  { text: "Live Q&As – Expert guidance & accountability." },
  { text: "Exclusive Community – Connect with others." },
];

export default function PricingSection() {
  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 2,
    minutes: 41,
    seconds: 17,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, seconds: 59, minutes: prev.minutes - 1 };
        if (prev.hours > 0)
          return { ...prev, seconds: 59, minutes: 59, hours: prev.hours - 1 };
        return {
          ...prev,
          seconds: 59,
          minutes: 59,
          hours: 23,
          days: prev.days - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-24 px-6 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4">
        {/* Main Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-10 py-14 md:p-14 flex flex-col justify-center"
        >
          {/* Badge */}
          <div className="bg-neutral-900 self-start inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-4 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.2),inset_1px_1px_2px_rgba(22,92,255,0.2)]">
            <div className="w-2 h-2 rounded-full bg-[#165cff] shadow-[0_0_8px_#165cff]" />
            <span>Introducing</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-medium text-neutral-300 tracking-tight leading-tight mb-4">
            The Deep Work Blueprint
          </h2>
          <p className="text-neutral-500 text-lg mb-12">
            What extra you will get if you enroll now
          </p>

          <div className="space-y-6">
            {bonusList.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="relative flex items-center justify-center">
                  <div className="w-7.5 h-7.5 rounded-full border-2 border-[#165cff]/30 bg-[#0c0c0c] shadow-[0_0_15px_rgba(22,92,255,0.2),inset_0_0_5px_rgba(22,92,255,0.1)] transition-all duration-300" />
                  <Hexagon
                    className="absolute w-3.5 h-3.5 text-black fill-neutral-300 drop-shadow-[0_0_4px_rgba(22,92,255,0.15)] transition-all duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-neutral-500 font-light tracking-wide text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-105 relative group"
        >
          {/* High-end Border Glow Effect */}
          <div className="absolute -inset-px bg-linear-to-b from-[#165cff]/40 via-transparent to-[#165cff]/10 rounded-4xl pointer-events-none" />

          <div className="relative h-full bg-[#0c0c0c] border border-neutral-800 rounded-4xl p-10 px-8 flex flex-col">
            {/* Price Row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl text-neutral-300">$349</span>
                <span className="relative text-2xl text-neutral-600">
                  $500
                  <span className="absolute left-0 top-1/2 w-full h-0.5 bg-red-500/80 -rotate-12" />
                </span>
              </div>
              <div className="bg-primary text-neutral-300 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(22,92,255,0.3)]">
                30% off
              </div>
            </div>

            {/* Countdown Timer */}
            <p className="text-neutral-400 text-sm font-medium mb-12">
              30% off until {timeLeft.days}d : {timeLeft.hours}h :{" "}
              {timeLeft.minutes}m : {timeLeft.seconds}s
            </p>

            {/* Features List */}
            <div className="space-y-5 mb-12">
              {featureList.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center border border-[#165cff]/30 bg-neutral-950 shadow-[0_0_12px_rgba(22,92,255,0.15)] mt-0.5 text-white">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-neutral-400 font-medium tracking-tight">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full h-12 bg-primary hover:bg-[#1a64ff] text-neutral-300 font-semibold rounded-xl">
              Enroll now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
