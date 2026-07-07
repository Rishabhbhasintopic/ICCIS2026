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
                className={`relative flex flex-col glass-card rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${fee.highlighted
                  ? 'border-primary-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] transform md:-translate-y-4'
                  : 'border-zinc-200 dark:border-zinc-800/50 hover:border-primary-500/30'
                  }`}
              >
                {fee.highlighted && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary-400 to-accent-400" />
                )}

                <div className="p-8 flex-grow flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${fee.highlighted ? 'bg-primary-500/20 text-primary-400' : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
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

          {/* Proceedings Notice */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 max-w-2xl mx-auto bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 flex items-center justify-center text-center gap-3 shadow-sm"
          >
            <Info className="text-amber-600 dark:text-amber-400 flex-shrink-0" size={18} />
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              * Conference Proceedings Publication may incur additional charges.
            </p>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-primary-600/10 to-accent-500/10 border border-primary-500/30 dark:border-primary-400/20 text-primary-700 dark:text-primary-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              Registrations will start 6th July onwards — Stay tuned!
            </div>
          </div>

          {/* Payment Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-8 max-w-3xl mx-auto shadow-sm"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">Bank Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="glass-card p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Account Name</p>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">Registrar, Guru Nanak Dev University, Amritsar</p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Bank Name</p>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">Punjab & Sind Bank</p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Account Number</p>
                <p className="text-xl font-mono font-bold text-primary-600 dark:text-primary-400">02881000007953</p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">IFSC Code</p>
                <p className="text-xl font-mono font-bold text-accent-600 dark:text-accent-400">PSIB0000288</p>
              </div>
              <div className="glass-card p-5 rounded-xl border border-zinc-200 dark:border-zinc-800/50 md:col-span-2">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Account Type</p>
                <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">Saving Account</p>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-4 flex items-start">
              <Info className="text-amber-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Please verify the account details from the official notification before making any payment.
              </p>
            </div>
          </motion.div>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-5 flex items-start max-w-3xl mx-auto shadow-sm"
          >
            <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
              <Info className="text-primary-600 dark:text-primary-400" size={16} />
            </div>
            <div className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              <p className="mb-1.5"><strong className="text-zinc-900 dark:text-white">Note:</strong> Registration fee includes conference kit, participation certificate, and access to technical sessions.</p>
              <ul className="list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-400">
                <li>Conference Proceedings Publication may incur additional charges.</li>
                <li>No TA/DA will be paid to the participants.</li>
                <li>Request for accommodations must be submitted at least a week before. The charges for the accommodation will be paid by the participant.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFees;
