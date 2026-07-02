import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-zinc-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className={`text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto ${centered ? 'text-center' : 'text-left'}`}>
            {subtitle}
          </p>
        )}
        <div className={`h-1.5 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-6 ${centered ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
