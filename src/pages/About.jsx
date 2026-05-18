import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { HeartPulse, GraduationCap, Sprout, Cpu, Leaf, Brain } from 'lucide-react';

const focusAreas = [
  { icon: HeartPulse, title: 'Healthcare', desc: 'Digital health, medical imaging, bioinformatics, and health informatics systems.' },
  { icon: GraduationCap, title: 'Education', desc: 'E-learning paradigms, educational data mining, and smart learning environments.' },
  { icon: Sprout, title: 'Agriculture', desc: 'Precision agriculture, IoT in farming, and smart crop management solutions.' },
  { icon: Cpu, title: 'Emerging Tech', desc: 'Quantum computing, blockchain, IoT, and next-generation networks.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Green computing, sustainable smart cities, and renewable energy technologies.' },
  { icon: Brain, title: 'AI & ML', desc: 'Deep learning, natural language processing, computer vision, and autonomous systems.' },
];

const About = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About ICCIS2026" 
          subtitle="A premier interdisciplinary platform for researchers, practitioners and educators."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-lg text-zinc-700 dark:text-zinc-300"
          >
            <p className="mb-6">
              The International Conference on Computing Innovations and Sustainability (ICCIS2026) aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Computing Innovations.
            </p>
            <p>
              It also provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in the fields of Healthcare, Education, Agriculture, and Emerging Technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full" />
            <div className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 relative z-10">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Conference Objectives</h3>
              <ul className="space-y-4">
                {[
                  'Facilitate international collaboration in tech innovation.',
                  'Address sustainability challenges through computing.',
                  'Bridge the gap between academia and industry.',
                  'Showcase cutting-edge solutions for societal impact.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                      ✓
                    </div>
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <SectionHeading title="Focus Areas" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-zinc-800/50 hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <area.icon className="text-primary-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
