import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Layers } from 'lucide-react';

const tracks = [
  {
    id: "Track 1",
    name: "Healthcare Innovations",
    desc: "Focuses on the intersection of computing and medical sciences to improve patient care and health systems.",
    keywords: ["Telehealth", "Medical IoT", "AI Diagnostics", "Electronic Health Records", "Wearable Sensors"]
  },
  {
    id: "Track 2",
    name: "Smart Agriculture",
    desc: "Exploring technological advancements to optimize agricultural practices and ensure food security.",
    keywords: ["Precision Farming", "Crop Monitoring", "Automated Irrigation", "Agri-Robotics", "Supply Chain Analytics"]
  },
  {
    id: "Track 3",
    name: "Educational Technology",
    desc: "Innovations reshaping the educational landscape and improving learning outcomes.",
    keywords: ["E-Learning", "VR/AR in Education", "Adaptive Learning", "Learning Analytics", "Gamification"]
  },
  {
    id: "Track 4",
    name: "Sustainability & Green IT",
    desc: "Computing solutions aimed at environmental conservation and sustainable development.",
    keywords: ["Green Computing", "Smart Grids", "Energy Optimization", "Smart Cities", "Waste Management Tech"]
  },
  {
    id: "Track 5",
    name: "Emerging Technologies",
    desc: "Next-generation computing paradigms and disruptive technologies.",
    keywords: ["Quantum Computing", "Blockchain", "6G Networks", "Edge Computing", "Cybersecurity"]
  }
];

const ConferenceTracks = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Conference Tracks" 
          subtitle="Detailed breakdown of the research areas covered in ICCIS2026."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 hover:border-accent-500/50 transition-all flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Layers className="text-accent-400" size={24} />
                </div>
                <div>
                  <span className="text-sm font-mono text-primary-400 font-semibold">{track.id}</span>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{track.name}</h3>
                </div>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6 flex-grow">{track.desc}</p>
              
              <div>
                <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 uppercase tracking-wider">Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {track.keywords.map((keyword, kIdx) => (
                    <span 
                      key={kIdx} 
                      className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md border border-zinc-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConferenceTracks;
