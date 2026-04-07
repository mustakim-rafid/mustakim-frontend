import { Button } from '@/components/ui/button'; 
import HeroVideoDialog from './ui/hero-video-dialog';

export default function HeroSection() {
  return (
    <main className="relative min-h-screen bg-[#020202] text-white pt-18 md:pt-30 overflow-hidden">
      
      <div className="hero-visual-wrapper pointer-events-none">
        <div className="hero-glow" />
        <div className="hero-lines" />
        <div className="hero-flare" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        <div className="bg-neutral-900 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1d1d1f] text-xs mb-5 text-neutral-400 shadow-[inset_-1px_-1px_2px_rgba(22,92,255,0.3),inset_1px_1px_2px_rgba(22,92,255,0.3)]">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>30% off until</span>
          <span>4d : 2h : 41m : 17s</span>
        </div>

        <h1 className="text-4xl md:text-5xl tracking-tighter leading-[1.1] max-w-4xl mb-6">
          Master Focus & Get<br />More Done in Less Time
        </h1>

        <p className="description-paragraph max-w-xs md:max-w-sm text-neutral-400 text-xs md:text-sm mb-5">
          A step-by-step system to eliminate procrastination, train your brain
          for deep work, and boost productivity effortlessly.
        </p>

        <div className="flex items-center gap-4 mb-16">
          <Button size="lg" className="rounded-xl px-8 bg-[#165cff] hover:bg-[#165cff]/80">
            Enroll now
          </Button>
          <Button size="lg" variant="secondary" className="rounded-xl px-8 border-[#1d1d1f] bg-neutral-900 text-white hover:bg-neutral-800">
            Curriculum
          </Button>
        </div>

        <div className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border-2 border-[#165cff] shadow-[0_0_60px_-10px_rgba(22,92,255,0.4)]">
          <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/ZK-rNEhJIDs?si=GS1IXxINbTIwOTk1"
              thumbnailSrc="/hero-video-thumbnail.png"
              thumbnailAlt="Hero Video"
            />
        </div>
      </div>
    </main>
  );
}