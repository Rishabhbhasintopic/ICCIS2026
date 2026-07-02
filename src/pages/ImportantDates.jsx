import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Calendar, CheckCircle } from 'lucide-react';

const dates = [
  { event: "Full Paper Submission", date: "June 27, 2026", status: "upcoming" },
  { event: "Notification of Acceptance", date: "July 6, 2026", status: "upcoming" },
  { event: "Author Registration Deadline", date: "July 13, 2026", status: "upcoming" },
  { event: "Camera-Ready Submission", date: "July 15, 2026", status: "upcoming" },
  { event: "Conference Dates", date: "July 17-18, 2026", status: "upcoming" },
];

const ImportantDates = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Important Dates" 
          subtitle="Keep track of key deadlines for submissions and registration."
        />

        <div className="mt-16 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800/80 md:-ml-px" />

          <div className="space-y-12">
            {dates.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 transform -translate-x-1/2 md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 hover:border-primary-500/50 transition-colors inline-block w-full max-w-sm">
                    <div className={`flex items-center mb-3 ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      <Calendar size={18} className="text-primary-600 dark:text-primary-400 mr-2" />
                      <span className="text-primary-600 dark:text-primary-400 font-mono font-medium">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{item.event}</h4>
                    <div className={`flex items-center text-sm ${item.status === 'upcoming' ? 'text-zinc-600 dark:text-zinc-400' : 'text-emerald-600 dark:text-emerald-400'} ${idx % 2 === 0 ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      {item.status === 'upcoming' ? 'Upcoming' : <><CheckCircle size={14} className="mr-1" /> Passed</>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
