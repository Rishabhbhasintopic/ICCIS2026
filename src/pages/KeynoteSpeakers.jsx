import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Mail, Globe, User } from 'lucide-react';

const speakers = [
  {
    name: 'Dr. D.K. Lobiyal',
    role: 'Professor, Department of Computer Science',
    affiliation: 'Jawaharlal Nehru University, New Delhi',
    image: 'speakers/lobiyal_0_0.jpg',
  },
  {
    name: 'Dr. Valentina Emilia Balas',
    role: 'Professor, Department of Automatics and Applied Software',
    affiliation: 'Faculty of Engineering, “Aurel Vlaicu” University, Arad, Romania',
    image: 'speakers/Emilia.jfif',
  },
  {
    name: 'Dr. Sukhjeet Kaur Ranade',
    role: 'Professor, Department of Computer Science',
    affiliation: 'Punjabi University, Patiala',
    image: 'speakers/sukhjeet_kaur_ranade.jfif',
  },
  {
    name: 'Dr. Vandana Bhattacharjee',
    role: 'Professor, Department of Computer Science and Engineering',
    affiliation: 'Birla Institute of Technology, Mesra, Ranchi, Jharkhand',
    image: 'speakers/vandana_bhattacharjee.jpg',
  },
  {
    name: 'Dr. Amritpal Singh',
    role: 'Senior IT Specialist',
    affiliation: 'Pacific Rim School District, British Columbia, Canada',
    image: 'speakers/amritpal-singh.jpg',
  },
  {
    name: 'Dr. Gurjit Singh',
    role: 'Assistant Professor',
    affiliation: 'University of Guelph, Guelph, Canada',
    image: 'speakers/Gurjit_singh.jfif',
  },
  {
    name: 'Dr. Sugandh Seth',
    role: 'Postdoctoral Research Associate',
    affiliation: 'University of Manchester, United Kingdom',
    image: 'speakers/Sugandh_seth.jfif',
  }
];

const KeynoteSpeakers = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resource Persons"
          subtitle="Learn from distinguished experts shaping the future of technology and sustainability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="relative group h-full"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/30 via-zinc-200/50 dark:via-zinc-800/50 to-accent-500/30 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full glass-card rounded-3xl p-8 flex flex-col items-center text-center border border-zinc-200/80 dark:border-zinc-800/80 hover:border-primary-500/50 transition-colors z-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl">

                {/* Large Circular Image */}
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-6 p-1.5 bg-gradient-to-tr from-primary-500 to-accent-500 group-hover:scale-105 transition-transform duration-500 shadow-xl flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${speaker.image}`}
                      alt={speaker.name}
                      className="w-full h-full object-cover z-10 relative"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
                      <User size={48} className="mb-2 opacity-50" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{speaker.name}</h3>

                <p className="text-sm md:text-base font-semibold text-accent-600 dark:text-accent-400 mb-2 leading-relaxed">
                  {speaker.role}
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow leading-relaxed">
                  {speaker.affiliation}
                </p>

                {/* Social Icons Placeholder */}
                {/* <div className="flex space-x-3 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800/50 w-full justify-center">
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white transition-all hover:scale-110">
                    <Globe size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all hover:scale-110">
                    <Mail size={18} />
                  </a>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
