import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { ArrowLeft, Clock } from 'lucide-react';

const ProgrammeSchedule = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex flex-col items-center justify-center relative">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading 
          title="Program Schedule" 
          subtitle="Detailed conference agenda and timeline."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-12 md:p-16 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 inline-flex flex-col items-center justify-center max-w-2xl mx-auto shadow-2xl">
            <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6">
              <Clock size={40} className="text-primary-600 dark:text-primary-400" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 dark:text-white mb-4">
              Will Be Updated Soon
            </h3>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-10 max-w-md">
              We are currently finalizing the conference schedule. Please check back later for the complete 2-day agenda.
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgrammeSchedule;
