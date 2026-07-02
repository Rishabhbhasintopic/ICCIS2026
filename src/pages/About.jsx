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
        {/*<div className="mb-20">
          <SectionHeading
            title="Guru Nanak Dev University"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative min-h-[300px] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800/50"
            >
              <img
                src={`${import.meta.env.BASE_URL}gndu-image.jpg`}
                alt="Guru Nanak Dev University"
                className="absolute inset-0 w-full h-full object-cover z-10"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="text-center p-6 relative z-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-medium block mb-2">Image Placeholder</span>
                <span className="text-zinc-400 dark:text-zinc-500 text-sm">Add 'gndu-image.jpg' to public folder</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 prose prose-invert prose-lg text-zinc-700 dark:text-zinc-300 max-w-none flex"
            >
              <div className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 flex items-center">
                <p className="text-justify">
                  <strong>Guru Nanak Dev University, Amritsar</strong> — Established in 1969 to commemorate the 500th birth anniversary of Guru Nanak Dev Ji, GNDU stands as a beacon of education, research, and innovation. Rooted in the ideals of equality and service, the university has achieved national and international recognition for its academic excellence and community impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mb-20">
          <SectionHeading
            title="Department of Computer Science"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative min-h-[300px] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800/50"
            >
              <img
                src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
                alt="Department of Computer Science"
                className="absolute inset-0 w-full h-full object-cover z-10"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="text-center p-6 relative z-0">
                <span className="text-zinc-500 dark:text-zinc-400 font-medium block mb-2">Image Placeholder</span>
                <span className="text-zinc-400 dark:text-zinc-500 text-sm">Add 'dept-image.jpg' to public folder</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-7 prose prose-invert prose-lg text-zinc-700 dark:text-zinc-300 max-w-none flex"
            >
              <div className="glass-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 flex items-center">
                <p className="text-justify">
                  The <strong>Department of Computer Science</strong> excels in computing education, research, and innovation. With strong foundations in Artificial Intelligence, Software Engineering, Cloud Computing, and Emerging Technologies, the Department provides a dynamic learning environment supported by advanced laboratories and experienced faculty. It empowers students to become creative problem-solvers, technology leaders, and responsible researchers capable of addressing real-world challenges through innovation, collaboration, and ethical computing practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
*/}
        <SectionHeading
          title="About ICCIS2026"
          /* subtitle="A premier interdisciplinary platform for researchers, practitioners and educators."*/
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-lg text-zinc-700 dark:text-zinc-300"
          >
            <p className="mb-1 text-justify">
              The International Conference on Computing Innovations for Sustainability (ICCIS 2026) serves as a distinguished global platform for academicians, researchers, scientists, industry professionals, and research scholars to exchange knowledge, share research findings, and discuss recent advancements in computing innovations for sustainable development. The conference promotes interdisciplinary collaboration by bringing together experts from diverse domains to explore emerging trends, innovative technologies, practical challenges, and transformative solutions in Healthcare, Education, Agriculture, and Emerging Technologies.
            </p>
            
            <p className="text-justify">
              ICCIS 2026 highlights the importance of advanced computing technologies such as Artificial Intelligence, Machine Learning, Internet of Things (IoT), Data Analytics, Cloud Computing, and Intelligent Systems in addressing critical societal and industrial challenges. Through keynote lectures, technical sessions, research presentations, and collaborative discussions, the conference aims to encourage innovation, strengthen global research partnerships, and inspire sustainable, intelligent, and technology-driven solutions for a smarter, healthier, and more connected future.
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
