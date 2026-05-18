import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageCircle, Briefcase, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-heading font-bold text-gradient inline-block mb-4">
              ICCIS2026
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-6 leading-relaxed">
              International Conference on Computing Innovations and Sustainability: Healthcare, Education, Agriculture and Emerging Technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-primary-400 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-primary-400 transition-colors">
                <Briefcase size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-zinc-400 hover:text-primary-400 transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-zinc-900 dark:text-white font-heading font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Conference</Link>
              </li>
              <li>
                <Link to="/call-for-papers" className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Call for Papers</Link>
              </li>
              <li>
                <Link to="/dates" className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Important Dates</Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Author Guidelines</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-zinc-900 dark:text-white font-heading font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-600 dark:text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">Department of Computer Science,<br />Guru Nanak Dev University, Amritsar</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-600 dark:text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">contact@iccis2026.example.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-600 dark:text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} ICCIS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
