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
      name: 'Program',
      dropdown: [
        { name: 'About Conference', path: '/about' },
        { name: 'Keynote Speakers', path: '/keynote-speakers' },
      ],
    },
    { name: 'Committee', path: '/committee' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    {
      name: 'Guide for Authors',
      dropdown: [
        { name: 'Programme Schedule', path: '/schedule' },
        { name: 'Author Guidelines', path: '/guidelines' },
        { name: 'Conference Tracks', path: '/tracks' },
      ],
    },
    { name: 'Registration', path: '/registration' },
    { name: 'Important Dates', path: '/dates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="w-full px-4 md:px-6 xl:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img src="/logo.PNG" alt="ICCIS2026 Logo" className="h-10 w-auto" onError={(e) => e.target.style.display = 'none'} />
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
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg glass-card py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {link.dropdown.map((sublink, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sublink.path}
                        className={cn(
                          "block px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors",
                          location.pathname === sublink.path ? "text-primary-600 dark:text-primary-400 bg-zinc-100 dark:bg-zinc-800/30" : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
                        )}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <ThemeToggle />

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
            >
              Submit Paper <ExternalLink size={14} className="ml-2" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-nav absolute top-full left-0 w-full border-t border-zinc-800/50 animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link, idx) => (
              <div key={idx}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-zinc-400 uppercase tracking-wider text-xs">
                      {link.name}
                    </div>
                    {link.dropdown.map((sublink, subIdx) => (
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
                href="#"
                className="flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-md bg-gradient-to-r from-primary-600 to-primary-500 text-white"
              >
                Submit Paper <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
