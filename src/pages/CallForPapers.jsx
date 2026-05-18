import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

const domains = [
  {
    title: "Track 1: Healthcare Technologies",
    topics: ["Health Informatics", "Telemedicine", "Medical Image Processing", "Wearable Devices", "AI in Healthcare", "Bioinformatics"]
  },
  {
    title: "Track 2: Smart Agriculture",
    topics: ["Precision Farming", "IoT for Agriculture", "Crop Yield Prediction", "Smart Irrigation", "Agri-food Supply Chain", "Drones in Agriculture"]
  },
  {
    title: "Track 3: Educational Technologies",
    topics: ["E-Learning Systems", "Virtual & Augmented Reality", "Educational Data Mining", "Gamification", "Adaptive Learning", "Smart Classrooms"]
  },
  {
    title: "Track 4: Sustainability & Green Tech",
    topics: ["Green Computing", "Smart Grid Systems", "Renewable Energy Tech", "Smart Cities", "Waste Management Systems", "Environmental Monitoring"]
  },
  {
    title: "Track 5: Emerging Technologies",
    topics: ["Quantum Computing", "Blockchain & Web3", "Edge/Fog Computing", "Cybersecurity", "Next-Gen Networks (6G)", "Robotics"]
  },
  {
    title: "Track 6: AI & Data Science",
    topics: ["Deep Learning Architecture", "Natural Language Processing", "Big Data Analytics", "Computer Vision", "Predictive Modeling", "Ethical AI"]
  }
];

const CallForPapers = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Call for Papers" 
          subtitle="Submit your latest research findings and technological advancements to ICCIS2026."
        />

        <div className="mt-16 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-6">Scope of the Conference</h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-8">
              ICCIS2026 invites prospective authors to submit original, unpublished research papers. The conference aims to provide a platform for researchers and practitioners to present their latest findings in computing innovations applied to critical sectors such as healthcare, agriculture, education, and environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                Submit Manuscript <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-full glass-card text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                <FileText className="mr-2" size={18} /> Paper Template
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-heading font-bold text-center text-zinc-900 dark:text-white mb-12">Research Domains & Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl border-t-4 border-t-primary-500 border-x border-b border-x-zinc-200 dark:border-x-zinc-800/50 border-b-zinc-200 dark:border-b-zinc-800/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all"
              >
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">{domain.title}</h4>
                <ul className="space-y-3">
                  {domain.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start text-sm">
                      <CheckCircle2 size={16} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
