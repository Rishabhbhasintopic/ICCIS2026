import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { User } from 'lucide-react';

const committeeCategories = [
  {
    title: 'Chief Patron',
    members: [
      { name: 'Prof.(Dr.) Karamjeet Singh', role: 'Vice Chancellor, GNDU', image: 'vc.jpg' }
    ]
  },
  {
    title: 'Patrons',
    members: [
      { name: 'Dr. Harvinder Singh Saini', role: 'Dean Academic Affairs', image: 'harvinder-singh.jpg' },
      { role: 'Registrar', name: 'Prof. (Dr.) Karamjit Singh Chahal', image: 'karamjit-singh.jpg' },
      { role: 'Director Research', name: 'Dr. Vandana Bhalla', image: 'director-research.jpg' },
      // { name: 'Syndicate Members', role: 'Guru Nanak Dev University', image: 'syndicate-members.jpg' },
    ]
  },
  {
    title: 'Convenor',
    members: [
      { name: 'Dr. Kuljit Kaur', role: 'Head, Department of Computer Science', image: 'kuljit-kaur.jpg' },
    ]
  },
  {
    title: 'Event Support',
    members: [
      { name: 'Dr. Harminder Singh', role: 'Coordinator, RUSA 2.0, GNDU, Amritsar', image: 'harminder-singh.webp' },
      { name: 'Dr. Pratap Kumar Pati', role: 'Professor, Centre for Agricultural Research and Innovation (CARI), GNDU', image: 'partap-kumar.jpg' },
    ]
  },
  {
    title: 'Organizing Secretary',
    members: [
      { name: 'Dr. Madanjit Singh', image: 'madanjit-singh.jpg' },
    ]
  },
  {
    title: 'Technical Committee',
    members: [
      { name: 'Dr. Gurvinder Singh', image: 'gurvinder-singh.jpg' },
      { name: 'Dr. Deepali Bassi', image: 'deepali-bassi.jpg' },
    ]
  },
  {
    title: 'Finance and Registration Committee',
    members: [
      { name: 'Dr. Jaswinder Singh', image: 'jaswinder-singh.jpg' },
      { name: 'Mr. Sandeep Waraich', image: 'sandeep-waraich.jpg' },
      { name: 'Ms. Manevpreet Kaur', image: 'manevpreet.jpg' },
    ]
  },
  {
    title: 'Publication and Outreach Committee',
    members: [
      { name: 'Dr. Pushpinder Singh', image: 'pushpinder-singh.jpg' },
      { name: 'Dr. Sarveshwar Bharti', image: 'sarveshwar-bharti.jpg' },
      { name: 'Dr. Prithvipal Singh', image: 'prithvipal-singh.jpg' },
    ]
  },
  {
    title: 'Hospitality and Local Organizing Committee',
    members: [
      { name: 'Dr. Parminder Kaur', image: 'parminder-kaur.jpg' },
      { name: 'Dr. Inderdeep Kaur', image: 'inderdeep-kaur.jpg' },
      { name: 'Dr. Samriti', image: 'samriti.jpg' },
    ]
  },
  {
    title: 'Coordination Committee',
    listOnly: true,
    members: [
      { name: 'Mr. Gurupdesh Singh' },
      { name: 'Ms. Sandeep Kaur' },
      { name: 'Ms. Harsimran Kaur' },
      { name: 'Ms. Sapandeep Kaur' },
      { name: 'Mr. Ravi Patni' },
      { name: 'Ms. Kiranbir Kaur' },
      { name: 'Ms. Puneet Kaur' },
      { name: 'Ms. Kumari Sarita' },
      { name: 'Mr. Kashish Sharma' },
      { name: 'Mr. Pritpal Singh' },
      { name: 'Mr. Mohit' },
      { name: 'Ms. Jyoti' },
      { name: 'Ms. Krishali Patharia' },
      { name: 'Ms. Ramnik Kaur' },
      { name: 'Ms. Gungeet Khurana' },
      { name: 'Mr. Rahul Verma' },
      { name: 'Mr. Arvind Sharma' },
      { name: 'Mr. Simranjit Singh' },
      { name: 'Mr. Gauravbir Singh' },
      { name: 'Ms. Harjit Kaur' }
    ]
  }
];

const Committee = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Committees"
          subtitle="Meet the dedicated teams bringing ICCIS2026 to life."
        />

        <div className="mt-16 space-y-20">
          {committeeCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-8 border-l-4 border-primary-500 pl-4">
                {category.title}
              </h3>

              {category.listOnly ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.members.map((member, mIdx) => (
                    <motion.div
                      key={mIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: mIdx * 0.02 }}
                      className="glass-card p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/50 flex items-center justify-center text-center hover:border-primary-500/50 transition-colors"
                    >
                      <h4 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-white">{member.name}</h4>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {category.members.map((member, mIdx) => (
                    <motion.div
                      key={mIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: mIdx * 0.1 }}
                      className="glass-card p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 flex items-center space-x-4 hover:border-primary-500/50 hover:shadow-md transition-all group"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-100 dark:bg-zinc-800/50 flex-shrink-0 flex items-center justify-center relative overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500/50 transition-colors">
                        <img
                          src={`${import.meta.env.BASE_URL}${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 hidden flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
                          <User size={24} className="opacity-50" />
                        </div>
                      </div>

                      <div className="flex-grow min-w-0">
                        <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-0.5 group-hover:text-primary-500 transition-colors" title={member.name}>
                          {member.name}
                        </h4>
                        {member.role && (
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2" title={member.role}>
                            {member.role}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
