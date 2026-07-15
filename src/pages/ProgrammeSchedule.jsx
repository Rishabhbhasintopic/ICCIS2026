import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { 
  Clock, 
  ArrowLeft, 
  Calendar, 
  Coffee, 
  Utensils, 
  Search, 
  Award, 
  Download, 
  User, 
  Filter,
  CheckCircle,
  MapPin
} from 'lucide-react';

const scheduleData = {
  day1: {
    date: "17-07-2026",
    label: "Day 1",
    formattedDate: "Friday, July 17, 2026",
    venue: "Conference Hall, Guru Nanak Bhawan",
    events: [
      {
        id: "d1-e1",
        time: "10:00 AM - 11:30 AM",
        title: "Inaugural Ceremony",
        category: "ceremony",
        description: "Official opening ceremony of the conference, welcoming remarks, introduction of the conference theme, keynote address, and vote of thanks.",
        speakers: [
          {
            name: "Prof. (Dr.) Karamjeet Singh",
            role: "Chief Guest & Vice Chancellor",
            affiliation: "Guru Nanak Dev University, Amritsar",
            image: "karamjit-singh.jpg"
          },
          {
            name: "Prof. (Dr) Kuljit Kaur Chahal",
            role: "Conference Convener & Welcome Address",
            affiliation: "Deptt of Computer Science, GNDU",
            image: "kuljit-kaur.jpg"
          },
          {
            name: "Dr. Valentina Emilia Balas",
            role: "Keynote Address",
            affiliation: "Professor, Aurel Vlaicu University, Arad, Romania",
            image: "speakers/Emilia.jfif"
          },
          {
            name: "Mr. Rajesh Gupta",
            role: "Guest of Honour Address",
            affiliation: "GM Strategic Accounts, INVAS Technologies (P) Ltd., New Delhi",
            image: null
          },
          {
            name: "Dr. Gurvinder Singh",
            role: "Vote of Thanks",
            affiliation: "Professor, Department of Computer Science, GNDU",
            image: "gurvinder-singh.jpg"
          }
        ]
      },
      {
        id: "d1-e2",
        time: "11:30 AM - 12:00 PM",
        title: "High TEA",
        category: "break",
        description: "Refreshment break and networking opportunity for delegates and guests.",
        speakers: []
      },
      {
        id: "d1-e3",
        time: "12:00 PM - 2:00 PM",
        title: "Technical Session-I",
        category: "technical",
        description: "Presentations and discussions on Computing Innovations for Sustainability: Healthcare, Education, and Agriculture.",
        speakers: [
          {
            name: "Dr. Gurjit Singh",
            role: "Special Lecture",
            affiliation: "Assistant Professor, University of Guelph, Guelph, Canada",
            image: "speakers/Gurjit_singh.jfif"
          }
        ]
      },
      {
        id: "d1-e4",
        time: "2:00 PM - 2:30 PM",
        title: "Lunch Break",
        category: "break",
        description: "Networking lunch at the University Dining Hall.",
        speakers: []
      },
      {
        id: "d1-e5",
        time: "2:30 PM - 4:30 PM",
        title: "Technical Session-II",
        category: "technical",
        description: "Focus on Emerging Technologies, advanced computational systems, algorithms, and sustainability practices.",
        speakers: [
          {
            name: "Dr. Vandana Bhattacharjee",
            role: "Special Lecture",
            affiliation: "Professor, Birla Institute of Technology, Mesra, Ranchi, Jharkhand",
            image: "speakers/vandana_bhattacharjee.jpg"
          }
        ]
      }
    ]
  },
  day2: {
    date: "18-07-2026",
    label: "Day 2",
    formattedDate: "Saturday, July 18, 2026",
    venue: "Conference Hall, Guru Nanak Bhawan",
    events: [
      {
        id: "d2-e1",
        time: "10:00 AM - 11:30 AM",
        title: "Technical Session-III",
        category: "technical",
        description: "Specialized lectures on sustainable AI systems, eco-friendly systems design, and advanced algorithms.",
        speakers: [
          {
            name: "Dr. Amritpal Singh",
            role: "Special Lecture",
            affiliation: "Senior IT Specialist, Pacific Rim School District, British Columbia, Canada",
            image: "speakers/amritpal-singh.jpg"
          },
          {
            name: "Dr. D. K. Lobiyal",
            role: "Special Lecture",
            affiliation: "Professor, School of Computer & Systems Sciences, JNU, New Delhi",
            image: "speakers/lobiyal_0_0.jpg"
          }
        ]
      },
      {
        id: "d2-e2",
        time: "11:30 AM - 12:00 PM",
        title: "High TEA",
        category: "break",
        description: "Morning tea and networking in the reception lobby.",
        speakers: []
      },
      {
        id: "d2-e3",
        time: "12:00 PM - 2:00 PM",
        title: "Technical Session-IV",
        category: "technical",
        description: "Exploring computational models for solving modern environmental, healthcare, and education challenges.",
        speakers: [
          {
            name: "Dr. Sukhjeet Kaur Ranade",
            role: "Special Lecture",
            affiliation: "Professor, Punjabi University, Patiala",
            image: "speakers/sukhjeet_kaur_ranade.jfif"
          },
          {
            name: "Dr. Sugandh Seth",
            role: "Special Lecture",
            affiliation: "Postdoctoral Research Associate, University of Manchester, United Kingdom",
            image: "speakers/Sugandh_seth.jfif"
          }
        ]
      },
      {
        id: "d2-e4",
        time: "2:00 PM - 2:30 PM",
        title: "Lunch Break",
        category: "break",
        description: "Lunch and informal discussions between participants and speakers.",
        speakers: []
      },
      {
        id: "d2-e5",
        time: "2:30 PM - 4:30 PM",
        title: "Valedictory Session",
        category: "ceremony",
        description: "Concluding remarks, distribution of certificates, award ceremony for outstanding presentations, and final vote of thanks.",
        speakers: [
          {
            name: "Prof. Karamjit Singh Chahal",
            role: "Registrar",
            affiliation: "Guru Nanak Dev University, Amritsar",
            image: "karamjit-singh.jpg"
          },
          {
            name: "Dr. D. K. Lobiyal",
            role: "Special Invitee",
            affiliation: "Professor, School of Computer & Systems Sciences, JNU, New Delhi",
            image: "speakers/lobiyal_0_0.jpg"
          },
          {
            name: "Dr. Sukhjeet Kaur Ranade",
            role: "Special Invitee",
            affiliation: "Professor, Punjabi University, Patiala",
            image: "speakers/sukhjeet_kaur_ranade.jfif"
          }
        ]
      }
    ]
  }
};

const ProgrammeSchedule = () => {
  const [activeTab, setActiveTab] = useState('day1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const activeDay = scheduleData[activeTab];

  // Helper to filter events by search query and category filter
  const filteredEvents = activeDay.events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.speakers.some(speaker => 
        speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.affiliation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (speaker.role && speaker.role.toLowerCase().includes(searchQuery.toLowerCase()))
      );

    const matchesCategory = 
      activeFilter === 'all' || 
      event.category === activeFilter;

    return matchesSearch && matchesCategory;
  });

  const getInitials = (name) => {
    return name
      .replace(/^(Prof\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s+/g, '')
      .split(' ')
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const getEventIcon = (category) => {
    switch (category) {
      case 'break':
        return <Coffee className="text-amber-500 dark:text-amber-400" size={20} />;
      case 'ceremony':
        return <Award className="text-primary-500 dark:text-primary-400" size={20} />;
      case 'technical':
      default:
        return <Calendar className="text-accent-500 dark:text-accent-400" size={20} />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'break':
        return 'border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/10 text-amber-600 dark:text-amber-400';
      case 'ceremony':
        return 'border-primary-500/30 bg-primary-500/5 dark:bg-primary-950/10 text-primary-600 dark:text-primary-400';
      case 'technical':
      default:
        return 'border-accent-500/30 bg-accent-500/5 dark:bg-accent-950/10 text-accent-600 dark:text-accent-400';
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Program Schedule" 
          subtitle="Detailed conference agenda, sessions, special lectures, and speaker list."
        />

        {/* Quick Actions (Download PDF Brochure) */}
        <div className="flex justify-center -mt-8 mb-12">
          <a
            href={`${import.meta.env.BASE_URL}ICCIS2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium rounded-full bg-zinc-900/10 hover:bg-zinc-900/20 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 transition-all hover:scale-105"
          >
            <Download size={16} />
            Download Program Brochure (PDF)
          </a>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="glass-card p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800/50 mb-12 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xl flex flex-col gap-6">
          {/* Day Selector Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200/50 dark:border-zinc-700/50">
              {Object.keys(scheduleData).map((dayKey) => {
                const day = scheduleData[dayKey];
                const isActive = activeTab === dayKey;
                return (
                  <button
                    key={dayKey}
                    onClick={() => {
                      setActiveTab(dayKey);
                      // keep filter but reset search or adapt view
                    }}
                    className={`relative px-6 py-3 rounded-xl font-heading font-semibold text-sm md:text-base transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg' 
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {day.label} ({day.date})
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800" />

          {/* Search and Filters Grid */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search session, speaker..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-500/50 text-zinc-800 dark:text-zinc-100 transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-2 justify-center w-full md:w-auto">
              <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mr-2 hidden sm:inline flex-shrink-0">
                Filter Type:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'ceremony', label: 'Ceremonies' },
                { id: 'technical', label: 'Technical Sessions' },
                { id: 'break', label: 'Breaks' }
              ].map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all border ${
                      isActive 
                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border-zinc-900 dark:border-white shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Venue Info Banner */}
        <div className="flex items-center gap-2.5 px-5 py-3 mb-8 rounded-2xl bg-primary-500/5 border border-primary-500/10 text-primary-700 dark:text-primary-400 text-sm">
          <MapPin size={16} className="flex-shrink-0 text-primary-500" />
          <span className="font-medium">Conference Venue:</span>
          <span>{activeDay.venue}</span>
        </div>

        {/* Timeline Events List */}
        <div className="relative">
          {/* Vertical timeline line on desktop */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-primary-500/10 hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeFilter}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, eventIdx) => {
                  const isBreak = event.category === 'break';
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: eventIdx * 0.05 }}
                      className={`relative flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                        isBreak ? 'opacity-85' : ''
                      }`}
                    >
                      {/* Timeline Dot/Icon */}
                      <div className="flex-shrink-0 z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-md transform transition-all group-hover:scale-110 ml-0.5">
                        {getEventIcon(event.category)}
                      </div>

                      {/* Content Card */}
                      <div className="flex-grow w-full">
                        <div className={`glass-card p-6 md:p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl relative ${
                          isBreak 
                            ? 'border-amber-500/10 dark:border-amber-500/5 bg-amber-500/[0.01] hover:border-amber-500/30' 
                            : 'border-zinc-200 dark:border-zinc-800/80 hover:border-primary-500/50 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl'
                        }`}>
                          {/* Top Badge & Time Row */}
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(event.category)}`}>
                                {event.category.toUpperCase()}
                              </span>
                              
                              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-sm font-mono font-medium ml-1">
                                <Clock size={14} className="text-primary-500" />
                                {event.time}
                              </div>
                            </div>
                          </div>

                          {/* Event Title */}
                          <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight">
                            {event.title}
                          </h3>

                          {/* Event Description */}
                          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-left text-justify">
                            {event.description}
                          </p>

                          {/* Speakers Grid (if any) */}
                          {event.speakers && event.speakers.length > 0 && (
                            <div className="pt-6 border-t border-zinc-150 dark:border-zinc-800/80">
                              <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                                {event.title === 'Valedictory Session' || event.title === 'Inaugural Ceremony' 
                                  ? 'Speakers & Panelists' 
                                  : 'Speaker Details'}
                              </h4>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                {event.speakers.map((speaker, sIdx) => (
                                  <div 
                                    key={sIdx}
                                    className="flex items-start gap-4 p-3.5 rounded-2xl bg-zinc-50/50 dark:bg-zinc-950/30 border border-zinc-100 dark:border-zinc-800/30 hover:border-accent-500/20 dark:hover:border-accent-500/10 hover:bg-zinc-100/50 dark:hover:bg-zinc-950/50 transition-colors"
                                  >
                                    {/* Speaker Circle Avatar */}
                                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-tr from-primary-500 to-accent-500 p-0.5 shadow-md">
                                      <div className="w-full h-full rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                                        {speaker.image ? (
                                          <img
                                            src={`${import.meta.env.BASE_URL}${speaker.image}`}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                              e.target.style.display = 'none';
                                              e.target.nextElementSibling.style.display = 'flex';
                                            }}
                                          />
                                        ) : null}
                                        <div 
                                          className={`w-full h-full items-center justify-center font-bold text-xs text-primary-700 dark:text-primary-300 font-heading bg-primary-100 dark:bg-primary-950/50 ${
                                            speaker.image ? 'hidden' : 'flex'
                                          }`}
                                        >
                                          {getInitials(speaker.name)}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Speaker Info */}
                                    <div className="flex-grow min-w-0">
                                      <h5 className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                                        {speaker.name}
                                      </h5>
                                      {speaker.role && (
                                        <p className="text-xs font-semibold text-accent-600 dark:text-accent-400 leading-normal mb-0.5 truncate">
                                          {speaker.role}
                                        </p>
                                      )}
                                      <p className="text-[11px] text-zinc-500 dark:text-zinc-500 leading-normal truncate">
                                        {speaker.affiliation}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center py-16 glass-card rounded-3xl border border-zinc-200 dark:border-zinc-800/50 p-8 max-w-md mx-auto">
                  <Filter className="mx-auto text-zinc-300 dark:text-zinc-700 mb-4" size={48} />
                  <h4 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">No Sessions Found</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    No events matches the filter or search phrase "{searchQuery}". Try clearing some parameters.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilter('all');
                    }}
                    className="mt-6 px-5 py-2.5 text-xs font-semibold rounded-full bg-primary-600 text-white hover:bg-primary-500 transition-colors shadow-md"
                  >
                    Clear Filter & Search
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeSchedule;

