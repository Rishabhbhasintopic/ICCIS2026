import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { GraduationCap, Users, Briefcase, UserCheck, Info } from 'lucide-react';

const feeData = [
  {
    category: "Faculty",
    icon: GraduationCap,
    indian: "₹2000",
    foreign: "$100",
    highlighted: false,
  },
  {
    category: "Research Scholars / UG / PG Students",
    icon: Users,
    indian: "₹1500",
    foreign: "$80",
    highlighted: true,
  },
  {
    category: "Industrialists",
    icon: Briefcase,
    indian: "₹2500",
    foreign: "$120",
    highlighted: false,
  },
  {
    category: "Attendees / Co-authors",
    icon: UserCheck,
    indian: "₹1000",
    foreign: "$50",
    highlighted: false,
  }
];

const RegistrationFees = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Registration Fees" 
          subtitle="Participation fee structure for Indian and Foreign delegates."
        />

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeData.map((fee, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  fee.highlighted 
                    ? 'border-primary-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] transform md:-translate-y-4' 
                    : 'border-zinc-200 dark:border-zinc-800/50 hover:border-primary-500/30'
                }`}
              >
                {fee.highlighted && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400" />
                )}
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    fee.highlighted ? 'bg-primary-500/20 text-primary-400' : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    <fee.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 leading-snug">
                    {fee.category}
                  </h3>
                  
                  <div className="mt-8 space-y-6 flex-grow">
                    <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800/50">
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1 font-medium tracking-wide uppercase">Indian Delegates</p>
                      <p className={`text-4xl font-heading font-bold ${fee.highlighted ? 'text-primary-400' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {fee.indian}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1 font-medium tracking-wide uppercase">Foreign Delegates</p>
                      <p className={`text-3xl font-heading font-bold ${fee.highlighted ? 'text-accent-400' : 'text-zinc-700 dark:text-zinc-300'}`}>
                        {fee.foreign}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 flex items-start sm:items-center max-w-3xl mx-auto"
          >
            <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-4 flex-shrink-0 mt-1 sm:mt-0">
              <Info className="text-primary-400" size={20} />
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              <strong className="text-white">Note:</strong> Registration fee includes conference kit, participation certificate, and access to technical sessions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFees;
