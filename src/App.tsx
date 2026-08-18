import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SkillsMarquee from '@/components/SkillsMarquee';

function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-[#e8edf7] overflow-x-hidden">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
