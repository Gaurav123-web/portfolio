import { motion } from 'framer-motion';
import { Atom, Microscope, Dna, Globe2 } from 'lucide-react';
import useReveal from '@/hooks/useReveal';
import { profile, education, modelSystems, languages } from '@/data/resume';

const stats = [
  { icon: Microscope, label: 'Research Roles', value: '6+' },
  { icon: Dna, label: 'Model Systems', value: '4' },
  { icon: Atom, label: 'Publications', value: '4' },
  { icon: Globe2, label: 'Workshops', value: '5' },
];

export default function About() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" ref={ref} className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-[#5eead4] mb-2">01 / About</p>
          <h2 className="text-4xl md:text-5xl font-bold heading-line">The Researcher</h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-10">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-[#c0c8d8] leading-relaxed">{profile.summary}</p>

            <div className="mt-8">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#5eead4] mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map((i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm glass text-[#c0c8d8] hover:text-white hover:border-[#5eead4]/40 transition-all cursor-default"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#5eead4] mb-3">Model Systems</h3>
                <ul className="space-y-2">
                  {modelSystems.map((m) => (
                    <li key={m} className="text-sm text-[#8a93a8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#5eead4] mb-3">Languages</h3>
                <ul className="space-y-2">
                  {languages.map((m) => (
                    <li key={m} className="text-sm text-[#8a93a8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 text-center">
                  <s.icon size={20} className="text-[#5eead4] mx-auto mb-2" />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-[#8a93a8] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#5eead4] mb-4">Education</h3>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="border-l-2 border-[#5eead4]/20 pl-4">
                    <p className="text-sm font-medium text-white leading-snug">{e.degree}</p>
                    <p className="text-xs text-[#8a93a8] mt-1">{e.org}</p>
                    <p className="text-xs font-mono text-[#5eead4] mt-1">{e.period}</p>
                    {e.detail && <p className="text-xs text-[#8a93a8] mt-1">{e.detail}</p>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
