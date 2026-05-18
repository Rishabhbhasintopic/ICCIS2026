import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, BookOpen, Users, Globe, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image and Filter */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop" 
            alt="Department Building" 
            className="w-full h-full object-cover"
          />
          {/* Translucent backdrop filter */}
          <div className="absolute inset-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm" />
          
          {/* Subtle gradients to blend with content */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center max-w-5xl mx-auto"
          >
            <img 
              src="/logo.PNG" 
              alt="ICCIS2026 Logo" 
              className="h-24 md:h-28 lg:h-32 w-auto mb-5 drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
              onError={(e) => e.target.style.display = 'none'} 
            />
            <span className="inline-block py-1 px-3 rounded-full glass-card text-primary-600 dark:text-primary-400 font-medium text-xs md:text-sm mb-4 border border-primary-500/30">
              International Conference 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-zinc-900 dark:text-white tracking-tight mb-4 leading-tight">
              Computing Innovations <br className="hidden md:block" />
              <span className="text-gradient">&amp; Sustainability</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto mb-8 font-light">
              Healthcare, Education, Agriculture and Emerging Technologies
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10 flex-wrap">
              <div className="flex items-center text-zinc-700 dark:text-zinc-300 glass-card px-5 py-2.5 rounded-full text-sm md:text-base">
                <Calendar className="text-primary-500 dark:text-primary-400 mr-2.5" size={18} />
                <span>23–24 July, 2026</span>
              </div>
              <div className="flex items-center text-zinc-700 dark:text-zinc-300 glass-card px-5 py-2.5 rounded-full text-sm md:text-base">
                <MapPin className="text-accent-500 dark:text-accent-400 mr-2.5" size={18} />
                <span className="hidden lg:inline">Dept. of Computer Science, GNDU, Amritsar</span>
                <span className="lg:hidden">GNDU, Amritsar</span>
              </div>
              <div className="flex items-center text-zinc-700 dark:text-zinc-300 glass-card px-5 py-2.5 rounded-full text-sm md:text-base">
                <Video className="text-emerald-500 dark:text-emerald-400 mr-2.5" size={18} />
                <span>Hybrid Mode</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center"
              >
                Submit Paper <ArrowRight className="ml-2" size={18} />
              </a>
              <Link
                to="/about"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-medium rounded-full glass-card text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative z-10 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About The Conference" 
            subtitle="ICCIS2026 provides a premier interdisciplinary platform for researchers, practitioners and educators to present and discuss the most recent innovations."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: BookOpen, title: "Publishing", desc: "Accepted papers will be published in Scopus indexed proceedings." },
              { icon: Users, title: "Networking", desc: "Connect with industry leaders, researchers, and global academics." },
              { icon: Globe, title: "Global Reach", desc: "Participants from over 40 countries sharing diverse perspectives." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary-600 dark:text-primary-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call for Papers CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 rounded-3xl border-primary-500/30 border shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">Ready to Submit Your Research?</h2>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-10 max-w-2xl mx-auto">
              We invite researchers to submit their original, unpublished work in the fields of computing, sustainability, healthcare, and more.
            </p>
            <Link
              to="/call-for-papers"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View Call for Papers <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
