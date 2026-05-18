import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Mail, Briefcase } from 'lucide-react';

const committeeCategories = [
  {
    title: 'Honorary Chairs',
    members: [
      { name: 'Dr. Robert Einstein', role: 'President, Tech University', affiliation: 'Tech University, USA' },
      { name: 'Prof. Marie Curie', role: 'Director General', affiliation: 'Institute of Advanced Science, UK' },
    ]
  },
  {
    title: 'General Chairs',
    members: [
      { name: 'Dr. Alan Turing', role: 'Head of Computer Science', affiliation: 'Global Tech Institute, Canada' },
      { name: 'Prof. Grace Hopper', role: 'Dean of Engineering', affiliation: 'Innovation University, Australia' },
      { name: 'Dr. Ada Lovelace', role: 'Director of Research', affiliation: 'European Tech Council, Germany' },
    ]
  },
  {
    title: 'Technical Program Committee',
    members: [
      { name: 'Dr. John von Neumann', role: 'Professor', affiliation: 'Princeton University, USA' },
      { name: 'Prof. Claude Shannon', role: 'Senior Researcher', affiliation: 'MIT, USA' },
      { name: 'Dr. Tim Berners-Lee', role: 'Professor', affiliation: 'Oxford University, UK' },
      { name: 'Dr. Vint Cerf', role: 'Chief Internet Evangelist', affiliation: 'Google, USA' },
      { name: 'Prof. Barbara Liskov', role: 'Institute Professor', affiliation: 'MIT, USA' },
      { name: 'Dr. Margaret Hamilton', role: 'Software Engineer', affiliation: 'NASA, USA' },
    ]
  }
];

const Committee = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Organizing Committee" 
          subtitle="Meet the dedicated team bringing ICCIS2026 to life."
        />

        <div className="mt-16 space-y-20">
          {committeeCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-8 border-l-4 border-primary-500 pl-4">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.members.map((member, mIdx) => (
                  <motion.div
                    key={mIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: mIdx * 0.1 }}
                    className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 flex flex-col h-full hover:border-primary-500/50 transition-colors group"
                  >
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-primary-400 transition-colors">{member.name}</h4>
                      <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-3">{member.role}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.affiliation}</p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/50 flex space-x-3">
                      <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                        <Mail size={18} />
                      </a>
                      <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                        <Briefcase size={18} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
