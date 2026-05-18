import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { MessageCircle, Briefcase, Globe } from 'lucide-react';

const speakers = [
  {
    name: 'Dr. Jane Smith',
    role: 'Professor of AI, University of Technology',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
    topic: 'The Future of Sustainable AI in Healthcare',
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Director of Smart AgriTech Institute',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    topic: 'Precision Agriculture using IoT and Edge Computing',
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Researcher, Global EdTech Foundation',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
    topic: 'Next-Generation E-Learning Ecosystems',
  },
  {
    name: 'Prof. David Williams',
    role: 'Head of Green Computing Lab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    topic: 'Achieving Carbon Neutrality in Data Centers',
  }
];

const KeynoteSpeakers = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Keynote Speakers" 
          subtitle="Learn from distinguished experts shaping the future of technology and sustainability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/50 group"
            >
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white dark:bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:text-white transition-colors">
                    <Briefcase size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-300 hover:text-white transition-colors">
                    <MessageCircle size={14} />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center text-zinc-300 hover:text-white transition-colors">
                    <Globe size={14} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-sm text-primary-400 mb-4">{speaker.role}</p>
                <div className="h-px w-full bg-zinc-800/50 mb-4" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Keynote Topic:</p>
                <p className="text-zinc-300 mt-1 leading-snug">{speaker.topic}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
