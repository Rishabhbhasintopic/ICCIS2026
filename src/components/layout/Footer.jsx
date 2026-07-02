import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageCircle, Briefcase, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div>
            <h3 className="text-zinc-900 dark:text-white font-heading font-semibold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-600 dark:text-primary-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">Department of Computer Science,<br />Guru Nanak Dev University, Amritsar</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-600 dark:text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">ICCIS2026@gndu.ac.in</span>
              </li>
             {/*} <li className="flex items-center">
                <Phone size={20} className="text-primary-600 dark:text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">0183-2258802 to 09 (Ext. 3201)</span>
                <span className="text-zinc-600 dark:text-zinc-400">Dr. Madanjit Singh (+91) 9501715960</span>
                <span className="text-zinc-600 dark:text-zinc-400">Dr. Inderdeep Kaur (+91) 9815910666</span>
              </li>*/}
              <li className="flex items-start">
                <Phone size={20} className="text-primary-600 dark:text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="block text-zinc-600 dark:text-zinc-400">0183-2258802 to 09 (Ext. 3201), (+91) 9501715960, (+91) 9815910666 </span>
              </div>
</li>
            </ul>
          </div>

          <div className="md:text-right">
            <h3 className="text-zinc-900 dark:text-white font-heading font-semibold mb-4 text-lg">Quick Links</h3>
            <ul >
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
                <Link to="/call-for-papers#submission-guidelines" className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Author Guidelines</Link>
              </li>
              <li>
                <a href={`${import.meta.env.BASE_URL}ICCIS2026.pdf`} className="text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Download Brochure</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 pb-6 border-t border-zinc-200 dark:border-zinc-800/50 text-center">
          <p className="text-zinc-700 dark:text-zinc-300 font-medium">
            Event supported by Centre for Agricultural Research and Innovation (CARI), GNDU, Amritsar under RUSA 2.0.
          </p>
        </div>
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-zinc-500 text-sm mb-1.5">
              &copy; {new Date().getFullYear()} ICCIS. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm">
              Website managed and developed by <a href="https://rishabhbhasinpf.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">Rishabh Bhasin</a>
            </p>
          </div>
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
