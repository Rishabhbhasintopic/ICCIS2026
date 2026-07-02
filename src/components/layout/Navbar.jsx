import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'ICCIS2026', path: '/about' },
        { name: 'Guru Nanak Dev University', path: 'https://online.gndu.ac.in/', external: true, className: 'whitespace-nowrap'
 },
        { name: 'Travel & Accommodation', path: '/travel' },
      ],
    },
    { name: 'Resource Persons', path: '/resource-persons' },
    { name: 'Committees', path: '/committee' },
    { 
      name: 'Call for Papers', path: '/call-for-papers' ,
      dropdown: [
        { name: 'Scope of Conference', path: '/call-for-papers#scope-of-conference' },
        { name: 'Author Guidelines', path: '/call-for-papers#submission-guidelines' },
        { name: 'Download Brochure', path: '/download_brochure' },
      ],
    },
    {
      name: 'Program',
      dropdown: [
        
        { name: 'Schedule', path: '/schedule' },
      ],
    },
    { name: 'Registration', path: '/registration' },
    { name: 'Important Dates', path: '/dates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={cn(
      "fixed left-0 right-0 z-50 flex justify-center transition-all duration-300",
      scrolled ? "top-3 sm:top-4 px-2 sm:px-4" : "top-0 px-0"
    )}>
      <nav
        className={cn(
          'w-full transition-all duration-500 relative',
          scrolled ? 'glass-nav py-3 rounded-full shadow-xl border border-zinc-200/50 dark:border-zinc-700/50' : 'bg-transparent py-5 rounded-none border border-transparent'
        )}
      >
        <div className={cn(
          "w-full transition-all duration-500",
          scrolled ? "px-4 sm:px-6" : "px-6 sm:px-10"
        )}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src={`${import.meta.env.BASE_URL}logo.PNG`} alt="ICCIS2026 Logo" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
            <Link to="/" className="text-2xl font-heading font-bold text-gradient">
              ICCIS<span className="text-zinc-900 dark:text-zinc-50">2026</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(idx)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {link.dropdown ? (
                  <button className="flex items-center space-x-1 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <span>{link.name}</span>
                    <ChevronDown size={14} className={cn("transition-transform", dropdownOpen === idx && "rotate-180")} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white",
                      location.pathname === link.path ? "text-primary-600 dark:text-white" : "text-zinc-600 dark:text-zinc-300"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && dropdownOpen === idx && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <div className="rounded-md shadow-lg glass-card py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                      {link.dropdown.map((sublink, subIdx) => (
                        sublink.external ? (
                          <a
                            key={subIdx}
                            href={sublink.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm  whitespace-nowrap hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                          >
                            {sublink.name}
                          </a>
                        ) : (
                          <Link
                            key={subIdx}
                            to={sublink.path}
                            className={cn(
                              "block px-4 py-2 text-sm whitespace-nowrap hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors",
                              location.pathname === sublink.path ? "text-primary-600 dark:text-primary-400 bg-zinc-100 dark:bg-zinc-800/30" : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white "
                            )}
                          >
                            {sublink.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <ThemeToggle />

            <a
              href="https://cmt3.research.microsoft.com/GNDUICCIS2026"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              Submit Paper <ExternalLink size={14} className="ml-2" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={cn(
          "lg:hidden glass-nav absolute left-0 w-full animate-in fade-in slide-in-from-top-2 overflow-hidden",
          scrolled ? "top-[calc(100%+0.5rem)] rounded-2xl shadow-xl border border-zinc-200/50 dark:border-zinc-700/50" : "top-full border-t border-zinc-200 dark:border-zinc-800/50 rounded-b-2xl"
        )}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-zinc-400 uppercase tracking-wider text-xs">
                      {link.name}
                    </div>
                    {link.dropdown.map((sublink, subIdx) => (
                      sublink.external ? (
                        <a
                          key={subIdx}
                          href={sublink.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-2 text-base font-medium rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
                        >
                          {sublink.name}
                        </a>
                      ) : (
                        <Link
                          key={subIdx}
                          to={sublink.path}
                          className={cn(
                            "block px-6 py-2 text-base font-medium rounded-md",
                            location.pathname === sublink.path ? "text-primary-600 dark:text-primary-400 bg-zinc-100 dark:bg-zinc-800/30" : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
                          )}
                        >
                          {sublink.name}
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md",
                      location.pathname === link.path ? "text-primary-600 dark:text-primary-400 bg-zinc-100 dark:bg-zinc-800/30" : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-3">
              <a
                href="https://cmt3.research.microsoft.com/GNDUICCIS2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-md bg-gradient-to-r from-primary-600 to-primary-500 text-white"
              >
                Submit Paper <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </div>
  );
};

export default Navbar;
