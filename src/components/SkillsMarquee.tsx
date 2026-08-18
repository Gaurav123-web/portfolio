const items = [
  '16S rRNA', 'qPCR', 'Metagenomics', 'Transcriptomics', 'R', 'Python', 'Linux / HPC',
  'phyloseq', 'Microbiome Profiling', 'Molecular Cloning', 'DNA Extraction', 'Primer Design',
  'Multi-Omics', 'One Health', 'Differential Expression', 'Bacterial Culture',
];

export default function SkillsMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative py-6 border-y border-white/5 bg-[#0a0d14] overflow-hidden">
      <div className="marquee-track gap-12">
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-mono text-[#8a93a8] whitespace-nowrap flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4]/50" />
            {item}
          </span>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0d14] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0d14] to-transparent pointer-events-none" />
    </div>
  );
}
