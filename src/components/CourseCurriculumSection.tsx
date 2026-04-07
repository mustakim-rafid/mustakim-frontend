"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PlayCircle,
  CheckCircle2,
  Users,
  MessageCircle,
  Triangle,
} from "lucide-react";

const curriculumData = [
  {
    id: "module1",
    moduleTitle: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        active: true,
        preview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        active: false,
        preview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        active: false,
        preview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        active: false,
        preview: false,
      },
    ],
  },
  {
    id: "module2",
    moduleTitle: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        active: true,
        preview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        active: false,
        preview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        active: false,
        preview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        active: false,
        preview: false,
      },
    ],
  },
  {
    id: "module3",
    moduleTitle: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        active: true,
        preview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        active: false,
        preview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        active: false,
        preview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        active: false,
        preview: false,
      },
    ],
  },
  {
    id: "module4",
    moduleTitle: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        active: true,
        preview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        active: false,
        preview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        active: false,
        preview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        active: false,
        preview: false,
      },
    ],
  },
];

const featureList = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    text: "6h of videos – Step-by-step deep work strategies.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    text: "Templates & Trackers – Stay on track effortlessly.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    text: "Live Q&As – Expert guidance & accountability.",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
    text: "Exclusive Community – Connect with others.",
  },
];

export default function CourseCurriculumSection() {
  const [openItem, setOpenItem] = useState("module1");

  return (
    <section className="bg-black py-24 px-6 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-5 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.3),inset_1px_1px_2px_rgba(22,92,255,0.3)]">
            <div className="w-2 h-2 rounded-full bg-[#165cff] animate-pulse" />
            <span>Course Curriculum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight max-w-xl">
            Mastering Deep Work: A Structured Path to Peak Productivity
          </h2>
        </div>

        {/* Layout Grid: */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
          
          {/* Accordion Part */}
          <div className="w-full lg:w-3/5 order-2 lg:order-1">
            <Accordion
              type="single"
              collapsible
              defaultValue="module1"
              onValueChange={setOpenItem}
              className="w-full space-y-3"
            >
              {curriculumData.map((module) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="border border-neutral-800/80 rounded-2xl overflow-hidden bg-black transition-all duration-300"
                >
                  <AccordionTrigger className="relative flex flex-row items-center justify-between p-6 px-7 text-left group hover:no-underline hover:bg-[#0c0c0c]/30">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-xl md:text-2xl font-thin text-neutral-300 tracking-tight">
                        {module.moduleTitle}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-neutral-500">
                        {module.duration}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="bg-[#0c0c0c] border-t border-neutral-800/80 p-0">
                    <div className="flex flex-col">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="relative">
                          <div className="group/lesson flex items-center justify-between gap-3 p-6 px-7 border-b [border-image:linear-gradient(to_right,transparent,rgba(22,92,255,0.3),transparent)1]">
                            <div className="flex items-center gap-5">
                              {/* Play Button */}
                              <div className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-500
                                ${lesson.active 
                                  ? "border-[#165cff]/60 bg-[#165cff]/10 shadow-[0_0_15px_rgba(22,92,255,0.25)]" 
                                  : "border-neutral-800/80 hover:border-neutral-700 bg-black/40"}`}
                              >
                                <PlayCircle className={`w-5 h-5 transition-colors duration-500
                                  ${lesson.active ? "text-neutral-300 drop-shadow-[0_0_10px_#165cff]" : "text-neutral-600 group-hover/lesson:text-neutral-400"}`} 
                                />
                              </div>
                              <span className={`text-lg md:text-xl font-thin transition-colors duration-500
                                ${lesson.active ? "text-neutral-300" : "text-neutral-400 group-hover/lesson:text-neutral-500"}`}>
                                {lesson.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-4">
                              {lesson.preview && (
                                <div className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900 shadow-[inset_0_0_8px_rgba(22,92,255,0.05)]">
                                  <span className="text-xs md:text-sm font-thin text-blue-400">
                                    Preview
                                  </span>
                                </div>
                              )}
                              <span className={`text-sm md:text-base transition-colors duration-500 
                                ${lesson.active ? "text-neutral-300" : "text-neutral-500 group-hover/lesson:text-neutral-400"}`}>
                                {lesson.time}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Feature Card */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32 order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-px bg-linear-to-b from-[#165cff]/40 via-transparent to-[#165cff]/10 rounded-4xl pointer-events-none" />
              
              <div className="relative h-full bg-[#0c0c0c] border border-neutral-700 rounded-4xl p-10 flex flex-col gap-14">
                <h3 className="text-2xl md:text-3xl font-thin text-neutral-300 tracking-tight">
                  Not only video lessons!
                </h3>

                <div className="space-y-5">
                  {featureList.map((item, i) => (
                    <div key={i} className="flex items-start gap-3.5">
                      <div className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center border border-[#165cff]/30 bg-neutral-950 shadow-[0_0_12px_rgba(22,92,255,0.15)] mt-0.5 text-white">
                        {item.icon}
                      </div>
                      <p className="text-sm font-medium text-neutral-400 leading-snug py-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full h-12 mt-auto py-2 rounded-xl bg-primary text-white font-medium text-lg hover:bg-blue-600 transition-all shadow-[0_10px_20px_rgba(22,92,255,0.2)] active:scale-[0.98]">
                  Enroll now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
