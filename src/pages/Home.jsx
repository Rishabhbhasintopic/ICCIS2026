import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, BookOpen, Users, Globe, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-auto md:h-[calc(100vh-5rem)] min-h-[750px] overflow-hidden pt-12 md:pt-0 pb-12 flex flex-col">
        {/* Background Image and Filter */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
            alt="Department Building"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop';
            }}
          />
          {/* Translucent backdrop filter */}
          <div className="absolute inset-0 bg-white/60 dark:bg-zinc-950/70 backdrop-blur-[2px]" />

          {/* Subtle gradients to blend with content */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px]" />
        </div>

        {/* Centered Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col justify-center pb-20 md:pb-10 pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-start justify-between w-full gap-4 lg:gap-8"
          >
            {/* Left Logo (Desktop) */}
            <img
              src={`${import.meta.env.BASE_URL}gndu-logo.png`}
              alt="GNDU Logo"
              className="hidden lg:block h-24 md:h-28 lg:h-32 xl:h-40 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            <div className="flex flex-col items-center flex-1 w-full max-w-6xl mx-auto px-0 md:px-4">
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold font-heading text-zinc-800 dark:text-white tracking-tight leading-tight text-center mb-6 md:mb-12 pt-2 lg:pt-0">
                Guru Nanak Dev University, Amritsar <br />
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold font-heading text-gradient dark:text-white tracking-tight leading-tight text-center mb-1 pt-2 lg:pt-0">
                International Conference on <br />
                </h1>
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-5xl font-bold font-heading text-gradient dark:text-white tracking-tight leading-tight text-center mb-4 md:mb-6 pt-2 lg:pt-0">
                Computing Innovations for Sustainability <br />
                </h1>
              
                {/*<span className="text-gradient font-extrabold">International Conference on</span> <br className="hidden md:block" />
                <span className="text-gradient font-extrabold">Computing Innovations for Sustainability</span>*/}
              
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 w-full mb-6 md:mb-10 font-medium text-center">
                Healthcare, Education, Agriculture, and Emerging Technologies
              </p>
              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 w-full mb-2 md:mb-4 font-medium text-center">
                Organized by Department of Computer Science
              </p>
              <p className="text-sm md:text-base text-zinc-800 dark:text-zinc-200 font-semibold w-full max-w-4xl mb-8 md:mb-12 text-center">
                Event supported by Centre for Agricultural Research and Innovation (CARI), GNDU, Amritsar under RUSA 2.0.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 w-full max-w-5xl mx-auto">
                <div className="flex items-center text-zinc-700 dark:text-zinc-300 glass-card px-4 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap order-1">
                  <Calendar className="text-primary-500 dark:text-primary-400 mr-1.5 sm:mr-2.5" size={16} />
                  <span className="font-bold">17–18 July, 2026</span>
                </div>
                <div className="flex items-center text-zinc-700 dark:text-zinc-300 glass-card px-4 py-2 rounded-full text-xs sm:text-sm md:text-base whitespace-nowrap order-2 md:order-3">
                  <Video className="text-emerald-500 dark:text-emerald-400 mr-1.5 sm:mr-2.5" size={16} />
                  <span className="font-bold">Hybrid Mode</span>
                </div>
                <div className="flex justify-center order-3 md:order-2 w-full md:w-auto mt-1 md:mt-0">
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300 glass-card px-4 py-2 rounded-full text-xs sm:text-sm md:text-base text-center">
                    <MapPin className="text-accent-500 dark:text-accent-400 mr-1.5 sm:mr-2.5" size={16} />
                    <span className="font-bold">Golden Jubilee Convention Center, GNDU</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto mb-8 px-4 sm:px-0">
                <a
                  href="https://cmt3.research.microsoft.com/GNDUICCIS2026"
                  className="w-full sm:w-auto px-9 py-3.5 rounded-full border-2 border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-700 hover:text-white transition-all duration-300 font-bold flex items-center justify-center gap-2"
                >
                  Submit Paper
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/registration"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-700 hover:text-white transition-all duration-300 font-bold flex items-center justify-center"
                >
                  Register
                </Link>
                <a
                  href={`${import.meta.env.BASE_URL}ICCIS2026.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full border-2 border-blue-700 text-blue-700 dark:text-blue-400 hover:bg-blue-700 hover:text-white transition-all duration-300 font-bold flex items-center justify-center"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right Logo (Desktop) */}
            <img
              src={`${import.meta.env.BASE_URL}logo.PNG`}
              alt="ICCIS2026 Logo"
              className="hidden lg:block h-24 md:h-28 lg:h-32 xl:h-40 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        </div>
      </section>

      

      {/* About Preview Section */}
      <section className="py-24 relative z-10 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*<SectionHeading
            title="About The Conference"
            subtitle="ICCIS2026 provides a premier interdisciplinary platform for researchers, practitioners, academicians, and educators to present and discuss recent innovations and research advancements in Healthcare, Education, Agriculture, and Emerging Technologies, fostering collaboration for sustainable and intelligent computing solutions."
          />*/}
          <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">About The Conference</h3>
          <p className="text-zinc-900 text-xl dark:text-white">ICCIS2026 provides a premier interdisciplinary platform for researchers, practitioners, academicians, and educators to present and discuss recent innovations and research advancements in Healthcare, Education, Agriculture, and Emerging Technologies, fostering collaboration for sustainable and intelligent computing solutions.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: BookOpen, title: "Scholarly Excellence", desc: "Showcase innovative research contributions through internationally recognized publication platforms." },
              { icon: Globe, title: "Global Innovative Platform", desc: "Gain global visibility and collaborate with participants worldwide." },
              { icon: BookOpen, title: "GNDU Proceedings", desc: "Accepted papers will appear in the official GNDU proceedings." },
              { icon: Users, title: "Networking", desc: "Connect with industry leaders, researchers, and global academics." }
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
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-left">
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
              We invite researchers to submit their original, unpublished work in the fields of Computing, Sustainability, Healthcare, and more.
            </p>
            <Link
              to="/call-for-papers"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Call for Papers <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
