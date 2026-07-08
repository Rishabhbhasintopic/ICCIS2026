import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { ArrowRight, FileText, CheckCircle2, Download } from 'lucide-react';


const domains = [
  {
    title: "Track 1: Artificial Intelligence & Machine Learning",
    topics: ["Deep Learning and Neural Networks", "Natural Language Processing (NLP)", "Computer Vision and Image Processing", "Generative AI and Large Language Models", "Explainable AI (XAI)"]
  },
  {
    title: "Track 2: Data Science & Analytics",
    topics: ["Big Data Analytics and Frameworks", "Predictive Modeling and Forecasting", "Data Mining and Knowledge Discovery", "Statistical Data Analysis"]
  },
  {
    title: "Track 3: Cyber Security & Privacy",
    topics: ["Network and Cloud Security", "Cryptography and Blockchains", "Threat Intelligence and Malware Analysis", "Privacy-Preserving Data Sharing"]
  },
  {
    title: "Track 4: Cloud, Edge & Distributed Computing",
    topics: ["Cloud Computing Architectures", "Edge and Fog Computing", "Distributed Systems and Middleware", "Internet of Things (IoT) Networks"]
  },
  {
    title: "Track 5: Software Engineering & Open Source",
    topics: ["Agile and DevOps Methodologies", "Software Quality Assurance and Testing", "Open Source Software Development", "Requirement Engineering"]
  },
  {
    title: "Track 6: High Performance Computing (HPC)",
    topics: ["Parallel and Distributed Algorithms", "Quantum Computing Applications", "Supercomputing Architectures"]
  },
  {
    title: "Track 7: Computing for Sustainability",
    topics: ["Smart Agriculture and Precision Farming", "Digital Health and Health Informatics", "E-Learning and Educational Technologies", "Green Computing and Energy Efficiency", "Ethical Computing and Social Inclusion"]
  }
];

const CallForPapers = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Call for Papers"
          subtitle="Submit your latest research and technological advancements to ICCIS2026."
        />

       {/* <div className="mt-16 bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-3xl p-8 md:p-12">
          </div>*/}
            <h3 id="scope-of-conference" className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-6 scroll-mt-24">Scope of the Conference</h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-8">
              The International Conference on Computing Innovations for Sustainability (ICCIS 2026) invites original research papers, innovative ideas, and practical case studies from academicians, researchers, industry professionals, and R&D organizations worldwide. The conference provides a multidisciplinary platform to discuss recent advancements, emerging trends, and research challenges in sustainable computing, intelligent systems, and next-generation technologies.

ICCIS 2026 promotes interdisciplinary collaboration in areas such as Artificial Intelligence, Machine Learning, IoT, Data Analytics, Cloud Computing, Cybersecurity, Smart Healthcare, Sustainable Agriculture, Intelligent Education Systems, and Emerging Technologies. </p>
<p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-8">All accepted and presented papers will be published in the official conference proceedings.

We welcome submissions in, but not limited to, the following thematic tracks:</p>
            

        <div className="mt-24">
          <h3 className="text-3xl font-heading font-bold text-center text-zinc-900 dark:text-white mb-12">Research Domains & Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl border-t-4 border-t-primary-500 border-x border-b border-x-zinc-200 dark:border-x-zinc-800/50 border-b-zinc-200 dark:border-b-zinc-800/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all"
              >
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">{domain.title}</h4>
                <ul className="space-y-3">
                  {domain.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start text-sm">
                      <CheckCircle2 size={16} className="text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        {/*<div className="bg-primary-50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-800/30 rounded-2xl p-6 mb-8">
              <p className="text-zinc-800 dark:text-zinc-200 font-medium">
                <strong>Submission Portal:</strong> Submissions must be made electronically through the Microsoft CMT submission portal.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${import.meta.env.BASE_URL}Sample_format.docx`}
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-full glass-card text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors border-2 border-primary-500/20 hover:border-primary-500/50"
              >
                <FileText className="mr-2 text-primary-500" size={18} /> Sample Format
              </a>
            </div>*/}
          <div className="mt-12 space-y-12">
          {/*<section className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50">*/}
            <h3 id="submission-guidelines" className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center scroll-mt-24">
              <FileText className="mr-3 text-primary-400" /> Submission Guidelines
            </h3>
           
            
            {/*<p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
              All submissions must be in English. Regular papers should be 6-8 pages long, including figures, tables, and references. Short papers should be 4-5 pages.
            </p>*/}
            {/*<ul className="space-y-3 mb-6">
              {[
                "Authors are invited to submit original, unpublished research papers that are not under consideration for publication elsewhere.",
                "Manuscripts should be prepared according to the Springer LNNS Conference format (A4 size, single column, PDF)",
                "All submissions must be in English. Regular papers should be 6-8 pages long, including figures, tables, and references. Short papers should be 4-5 pages.",
                "All submitted papers will undergo a double-blind peer-review process by at least two independent reviewers.",
                "Submissions must be made electronically through the <a href= 'https://cmt3.research.microsoft.com/GNDUICCIS2026'>Microsoft CMT submission portal.</a>",
                "Please visit Microsoft CMT Portal and click on Create New Submission.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 size={18} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>*/}
            <ul className="space-y-3 mb-6">
  {[
    "Authors are invited to submit original, unpublished research papers that are not under consideration for publication elsewhere.",

    "Manuscripts should be prepared according to the Springer Conference format (A4 size, single column, PDF)",

    "All submissions must be in English. Regular papers should be 6-8 pages long, including figures, tables, and references. Short papers should be 4-5 pages.",
    "Papers exceeding the prescribed page limit will incur extra charges per additional page.",

    "All submitted papers will undergo a double-blind peer-review process by at least two independent reviewers.",
  ].map((item, i) => (
    <li key={i} className="flex items-start">
      <CheckCircle2
        size={18}
        className="text-accent-400 mt-1 mr-3 flex-shrink-0"
      />
      <span className="text-zinc-700 dark:text-zinc-300">
        {item}
      </span>
    </li>
  ))}

  <li className="flex items-start">
    <CheckCircle2
      size={18}
      className="text-accent-400 mt-1 mr-3 flex-shrink-0"
    />

    <span className="text-zinc-700 dark:text-zinc-300">
      Submissions must be made electronically through the{" "}
      <a
        href="https://cmt3.research.microsoft.com/GNDUICCIS2026"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 dark:text-primary-400 hover:underline hover:text-purple-500"
      >
        Microsoft CMT Submission portal
      </a>.
    </span>
  </li>

  <li className="flex items-start">
    <CheckCircle2
      size={18}
      className="text-accent-400 mt-1 mr-3 flex-shrink-0"
    />

    <span className="text-zinc-700 dark:text-zinc-300">
      Please visit <a
        href="https://cmt3.research.microsoft.com/GNDUICCIS2026"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 dark:text-primary-400 hover:underline hover:text-purple-500"
      >
      Microsoft CMT Submission Portal </a> and click on
      <strong> Create New Submission</strong>.
    </span>
  </li>
</ul>
            <a
              href={`${import.meta.env.BASE_URL}ICCIS2026_Sample_Format.docx`}
              className="inline-flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-lg transition-colors border border-zinc-700"
            >
              <Download size={16} className="mr-2" /> Sample Paper Format (.docx)
            </a>
          

          {/*<section className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50">*/}
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Submission Policy</h3>
            <div className="prose prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
              <p className='mb-6'>
                <strong>Submission Portal:</strong> Submissions must be made electronically through the Microsoft CMT submission portal.
              </p>
              <p className='mb-6'>
                <strong>Originality:</strong> Submissions must be original work, not previously published, and not currently under review by another conference or journal.
              </p>
              <p className='mb-6'>
                <strong>Plagiarism & AI Policy:</strong> All submitted papers must be accompanied by a plagiarism and AI-generated content detection report at the time of submission. Submissions with a similarity index exceeding 10% and containing unacceptable levels of AI-generated content without proper disclosure or originality will be rejected without review.
              </p>
              <p className='mb-6'>
                <strong>Double-Blind Review:</strong> ICCIS2026 employs a double-blind review process. Authors must remove their names, affiliations, and any identifying information from the initial submission.
              </p>
            </div>
        </div>
        {/*<p>* The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>*/}
      </div>
      
    </div>
  );
};


export default CallForPapers;
