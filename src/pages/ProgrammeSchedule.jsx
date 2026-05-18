import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Clock } from 'lucide-react';

const schedule = [
  {
    day: "Day 1 - July 23, 2026",
    events: [
      { time: "08:00 AM - 09:00 AM", title: "Registration & Welcome Coffee", type: "General" },
      { time: "09:00 AM - 10:30 AM", title: "Opening Ceremony & Keynote 1", type: "Plenary" },
      { time: "10:30 AM - 11:00 AM", title: "Networking Break", type: "Break" },
      { time: "11:00 AM - 01:00 PM", title: "Technical Sessions: Track 1 & 2", type: "Session" },
      { time: "01:00 PM - 02:00 PM", title: "Lunch Break", type: "Break" },
      { time: "02:00 PM - 04:00 PM", title: "Technical Sessions: Track 3 & 4", type: "Session" },
      { time: "04:00 PM - 05:30 PM", title: "Panel Discussion: Future of AI", type: "Plenary" },
    ]
  },
  {
    day: "Day 2 - July 24, 2026",
    events: [
      { time: "09:00 AM - 10:30 AM", title: "Keynote 2 & 3", type: "Plenary" },
      { time: "10:30 AM - 11:00 AM", title: "Coffee Break & Poster Session", type: "Break" },
      { time: "11:00 AM - 01:00 PM", title: "Technical Sessions: Track 5 & 6", type: "Session" },
      { time: "01:00 PM - 02:00 PM", title: "Lunch Break", type: "Break" },
      { time: "02:00 PM - 04:00 PM", title: "Industry Track & Workshop", type: "Session" },
      { time: "04:00 PM - 05:00 PM", title: "Closing Ceremony & Future Roadmap", type: "Plenary" },
    ]
  }
];

const getTypeColor = (type) => {
  switch(type) {
    case 'Plenary': return 'bg-accent-500/20 text-accent-400 border-accent-500/30';
    case 'Session': return 'bg-primary-500/20 text-primary-400 border-primary-500/30';
    case 'Break': return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    default: return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
  }
};

const ProgrammeSchedule = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Programme Schedule" 
          subtitle="A comprehensive 3-day agenda covering keynotes, technical sessions, and networking events."
        />

        <div className="mt-16 space-y-16">
          {schedule.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-primary-500 rounded-full mr-4" />
                {day.day}
              </h3>
              
              <div className="glass-card rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/50">
                {day.events.map((event, eIdx) => (
                  <div 
                    key={eIdx}
                    className={`flex flex-col md:flex-row border-b border-zinc-200 dark:border-zinc-800/50 last:border-0 p-4 md:p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800/30 transition-colors ${event.type === 'Break' ? 'bg-zinc-100/50 dark:bg-zinc-900/30' : ''}`}
                  >
                    <div className="md:w-1/3 flex items-start md:items-center mb-2 md:mb-0">
                      <Clock size={18} className="text-zinc-500 mr-2 mt-1 md:mt-0" />
                      <span className="text-zinc-600 dark:text-zinc-300 font-mono text-sm">{event.time}</span>
                    </div>
                    <div className="md:w-2/3 flex flex-col md:flex-row md:items-center justify-between">
                      <span className="text-lg font-medium text-zinc-900 dark:text-white mb-2 md:mb-0">{event.title}</span>
                      <span className={`inline-block px-3 py-1 text-xs rounded-full border ${getTypeColor(event.type)} w-max`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammeSchedule;
