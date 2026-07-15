import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Plane, Train, Bus, MapPin, Building, CloudRain, Phone, Mail, Navigation } from 'lucide-react';

const Travel = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Travel & Accommodation"
          subtitle="Everything you need to know about reaching the venue and your stay."
        />

        {/* Venue Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 text-primary-600 dark:text-primary-400">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Venue Overview</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                The International Conference on Computing Innovations for Sustainability (ICCIS2026) will be held at the{' '}
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">Conference Hall, Guru Nanak Bhawan, Guru Nanak Dev University (GNDU)</span>, 
                Amritsar, Punjab, India. GNDU is highly ranked and serves as a premier institution for research and education.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Reach */}
        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8 text-center">How to Reach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Plane,
              title: 'By Air',
              details: [
                'Sri Guru Ram Dass Jee International Airport (ATQ)',
                'Distance: ~11 km from GNDU',
                'Travel Time: 20 – 30 minutes',
                'Options: Pre-paid Taxi, Uber/Ola'
              ]
            },
            {
              icon: Train,
              title: 'By Train',
              details: [
                'Amritsar Junction (ASR)',
                'Distance: ~7 km from GNDU',
                'Travel Time: 15 – 20 minutes',
                'Direct trains available from New Delhi, Mumbai, Kolkata, etc.'
              ]
            },
            {
              icon: Bus,
              title: 'By Road',
              details: [
                'Inter-State Bus Terminal (ISBT)',
                'Distance: ~8 km from GNDU',
                'Well connected by NH-3',
                'AC/Volvo buses frequently available from New Delhi and Chandigarh'
              ]
            },
            {
              icon: Navigation,
              title: 'Local Transport',
              details: [
                'Auto rickshaws easily available',
                'BRTS (Metro Bus) service runs across the city',
                'Uber/Ola/inDrive cabs operate 24/7',
                'E-rickshaws for short distances'
              ]
            }
          ].map((mode, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary-500/50 transition-colors group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <mode.icon className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{mode.title}</h4>
              <ul className="space-y-2 flex-grow">
                {mode.details.map((detail, i) => (
                  <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm flex items-start">
                    <span className="mr-2 text-primary-500">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Accommodation and Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50"
          >
            <div className="flex items-center mb-6">
              <Building className="text-accent-500 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Accommodation</h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Participants are requested to book their accommodation directly. Amritsar offers a wide range of hotels suited for all budgets, ranging from luxury heritage hotels near the Golden Temple to comfortable budget options.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              We recommend booking hotels near <span className="text-zinc-900 dark:text-zinc-200">Ranjit Avenue</span> or <span className="text-zinc-900 dark:text-zinc-200">Mall Road</span> for easy access to the university.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50"
          >
            <div className="flex items-center mb-6">
              <CloudRain className="text-blue-500 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Weather in July</h3>
            </div>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 w-32">Temperature:</span> 26°C – 35°C
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 w-32">Season:</span> Monsoon
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200 w-32">Advisory:</span> Carry an umbrella and light cotton clothing.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Travel Assistance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 p-8 rounded-2xl border border-primary-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Need Travel Assistance?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            If you need any help planning your travel or have queries regarding how to reach the venue, please reach out to our organizing committee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center text-zinc-900 dark:text-white font-medium">
              <Mail className="text-primary-500 mr-3" size={20} />
              ICCIS2026@gndu.ac.in
            </div>
            <div className="flex items-center text-zinc-900 dark:text-white font-medium">
              <Phone className="text-primary-500 mr-3" size={20} />
              0183-282-3289, Ext. 3201
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Travel;
