import { motion } from 'framer-motion';
import { Beaker } from 'lucide-react';
import useReveal from '@/hooks/useReveal';
import { projects } from '@/data/resume';

export default function Projects() {
  const { ref, inView } = useReveal();

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm text-[#5eead4] mb-2">03 / Research</p>
          <h2 className="text-4xl md:text-5xl font-bold heading-line">Academic Projects</h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:glow-accent transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#5eead4]/5 group-hover:bg-[#5eead4]/10 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5eead4]/10 flex items-center justify-center">
                    <Beaker size={18} className="text-[#5eead4]" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#05060a]/60 text-[#38bdf8] border border-[#38bdf8]/20">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#5eead4] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[#8a93a8] leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Skills snapshot card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: projects.length * 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#5eead4]/5 to-transparent"
          >
            <p className="text-4xl font-bold gradient-text">~1000</p>
            <p className="text-sm text-[#8a93a8] mt-2">microbiome samples analysed with R &amp; phyloseq</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
