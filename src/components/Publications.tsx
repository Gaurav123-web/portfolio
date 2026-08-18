import { motion } from 'framer-motion';
import { FileText, Award, HandHeart, GraduationCap } from 'lucide-react';
import useReveal from '@/hooks/useReveal';
import { publications, awards, engagement, workshops, recommendations } from '@/data/resume';

export default function Publications() {
  const { ref, inView } = useReveal();

  return (
    <section id="publications" ref={ref} className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-[#5eead4] mb-2">05 / Output</p>
          <h2 className="text-4xl md:text-5xl font-bold heading-line">Publications &amp; Recognition</h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
              <FileText size={18} className="text-[#5eead4]" /> Publications &amp; Scientific Communication
            </h3>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div key={pub.title} className="glass rounded-xl p-5 hover:border-[#5eead4]/30 transition-all">
                  <p className="text-sm font-medium text-white leading-snug">{pub.title}</p>
                  <p className="text-xs text-[#5eead4] mt-2 font-mono">{pub.authors} — {pub.type}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards + Engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
                <Award size={18} className="text-[#5eead4]" /> Honours &amp; Awards
              </h3>
              <div className="space-y-3">
                {awards.map((a) => (
                  <div key={a.title} className="glass rounded-xl p-4 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#5eead4] mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{a.title}</p>
                      <p className="text-xs text-[#8a93a8] mt-1">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
                <HandHeart size={18} className="text-[#5eead4]" /> Academic Service &amp; Engagement
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {engagement.map((e) => (
                  <div key={e.title} className="glass rounded-xl p-4">
                    <p className="text-sm font-medium text-white">{e.title}</p>
                    <p className="text-xs text-[#8a93a8] mt-1">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Workshops + Recommendations */}
        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
              <GraduationCap size={18} className="text-[#5eead4]" /> Workshops &amp; Training
            </h3>
            <div className="space-y-2">
              {workshops.map((w) => (
                <div key={w} className="flex items-start gap-3 text-sm text-[#8a93a8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 shrink-0" />
                  {w}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
              <FileText size={18} className="text-[#5eead4]" /> Recommendations
            </h3>
            <div className="space-y-4">
              {recommendations.map((r) => (
                <div key={r.name} className="glass rounded-xl p-5">
                  <p className="text-sm font-medium text-white">{r.name}</p>
                  <p className="text-xs text-[#8a93a8] mt-1">{r.org}</p>
                  <a href={`mailto:${r.email}`} className="text-xs text-[#5eead4] mt-2 inline-block hover:underline">
                    {r.email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
