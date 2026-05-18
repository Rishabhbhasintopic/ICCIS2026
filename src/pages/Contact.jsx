import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Get in touch with the organizing committee for any queries."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mr-4 flex-shrink-0 text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Conference Venue</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Department of Computer Science<br />
                      Guru Nanak Dev University, Amritsar<br />
                      Punjab, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mr-4 flex-shrink-0 text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium mb-1">Email Us</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">contact@iccis2026.example.com<br />support@iccis2026.example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center mr-4 flex-shrink-0 text-primary-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium mb-1">Call Us</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">+1 (555) 123-4567<br />Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Embedded Map Placeholder */}
            <div className="h-64 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900 relative group">
              <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center backdrop-blur-sm group-hover:backdrop-blur-none group-hover:bg-transparent transition-all duration-500 z-10">
                <span className="px-4 py-2 bg-white dark:bg-zinc-900/80 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 font-medium">Interactive Map Placeholder</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 grayscale"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800/50"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Send us a Message</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">Fill out the form below and our team will get back to you shortly.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-zinc-600"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-zinc-600"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-zinc-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Subject</label>
                <select 
                  id="subject" 
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Paper Submission</option>
                  <option>Registration</option>
                  <option>Sponsorship</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-zinc-600 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] flex items-center justify-center"
              >
                Send Message <Send className="ml-2" size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
