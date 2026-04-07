"use client";

import { motion } from "framer-motion";
import { Lightbulb, Brain, CheckCircle2, Repeat } from "lucide-react";

const blueprintSteps = [
  {
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    title: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <Brain className="w-5 h-5 text-white" />,
    title: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    title: "Overcome procrastination & get more done.",
  },
  {
    icon: <Repeat className="w-5 h-5 text-white" />,
    title: "Build lasting habits for long-term success.",
  },
];

export default function BlueprintSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-black py-40 px-2 md:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        {/* 1. Badge */}
        <div className="bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-5 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.3),inset_1px_1px_2px_rgba(22,92,255,0.3)]">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>The Deep Work Blueprint</span>
        </div>

        {/* 2. Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-20 tracking-tight leading-tight">
          A self-paced, results-driven
          <br />
          course designed to help you
        </h2>

        {/* 3. The Timeline List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative space-y-12 w-full max-w-lg ml-24 md:ml-44"
        >
          {blueprintSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start gap-14 group"
            >
              {/* Vertical Connector Line */}
              <div
                className="absolute left-1.75 top-6 w-0.5 h-[calc(100%+48px)]"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(22, 92, 255, 0.1) 20%, #165cff 50%, rgba(22, 92, 255, 0.1) 70%, transparent 100%)",
                }}
              />

              {/* Glowing Dot */}
              <div className="relative mt-2">
                <div className="w-4 h-4 rounded-full bg-[#165cff] shadow-[0_0_15px_rgba(22,92,255,0.8)]" />
              </div>

              {/* Content Block */}
              <div className="flex flex-col gap-4 pt-5">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full border border-[#165cff]/20 bg-neutral-950 flex items-center justify-center shadow-[0_0_15px_rgba(22,92,255,0.1)]">
                  {step.icon}
                </div>

                {/* Text */}
                <p className="max-w-60 text-lg md:text-xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
