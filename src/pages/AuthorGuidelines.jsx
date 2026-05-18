import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { FileText, Download, CheckCircle } from 'lucide-react';

const AuthorGuidelines = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Author Guidelines" 
          subtitle="Important instructions for formatting and submitting your manuscript."
        />

        <div className="mt-12 space-y-12">
          <section className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
              <FileText className="mr-3 text-primary-400" /> Paper Format
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
              All submissions must be in English. Regular papers should be 6-8 pages long, including figures, tables, and references. Short papers should be 4-5 pages.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Use the official double-column IEEE template.",
                "Font: Times New Roman, 10pt for main text.",
                "Margins: 1 inch on all sides.",
                "Ensure figures and images are high-resolution (300 dpi minimum).",
                "Do not add page numbers."
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle size={18} className="text-accent-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-700 text-zinc-900 dark:text-white rounded-lg transition-colors border border-zinc-700"
            >
              <Download size={16} className="mr-2" /> Download Word Template
            </a>
          </section>

          <section className="glass-card p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/50">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Submission Policy</h3>
            <div className="prose prose-invert max-w-none text-zinc-700 dark:text-zinc-300">
              <p>
                <strong>Originality:</strong> Submissions must be original work, not previously published, and not currently under review by another conference or journal.
              </p>
              <p>
                <strong>Plagiarism:</strong> All papers will be checked for plagiarism using standard software. Papers with a similarity index of more than 20% will be rejected without review.
              </p>
              <p>
                <strong>Double-Blind Review:</strong> ICCIS2026 employs a double-blind review process. Authors must remove their names, affiliations, and any identifying information from the initial submission.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
