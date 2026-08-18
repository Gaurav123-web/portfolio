import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import Scene3D from './Scene3D';
import { profile } from '@/data/resume';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-[#05060a]" />}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#05060a]/60 via-transparent to-[#05060a]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#05060a]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5eead4] pulse-ring relative" />
            <span className="text-xs font-mono text-[#8a93a8]">Available for research opportunities</span>
          </div>

          <p className="font-mono text-sm text-[#5eead4] mb-3 tracking-wider">GENOMICS · GUT MICROBIOME · BIOINFORMATICS</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <p className="mt-5 text-xl md:text-2xl text-[#8a93a8] font-light">
            {profile.title}
          </p>

          <p className="mt-4 text-base text-[#8a93a8]/80 max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-[#5eead4] text-[#05060a] font-medium hover:bg-white transition-colors duration-300 glow-accent"
            >
              Let's collaborate
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-full border border-[#5eead4]/30 text-white hover:border-[#5eead4] transition-colors duration-300"
            >
              View research
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#8a93a8]">
            <span className="flex items-center gap-2"><Mail size={14} className="text-[#5eead4]" /> {profile.email}</span>
            <span className="flex items-center gap-2"><Phone size={14} className="text-[#5eead4]" /> {profile.phone}</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[#5eead4]" /> {profile.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-[#8a93a8]">scroll</span>
        <ArrowDown size={16} className="text-[#5eead4] animate-bounce" />
      </motion.div>
    </section>
  );
}
