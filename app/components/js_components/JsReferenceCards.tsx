'use client';

import { motion } from 'framer-motion';

// Quick ref items have this structure based on the JS data file
interface QuickRef {
  title: string;
  items: string[];
  color: string;
}

interface JsReferenceCardsProps {
  references: QuickRef[];
}

export default function JsReferenceCards({ references }: JsReferenceCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {references.map((ref, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-card-bg rounded-xl border border-border-main p-4 hover:shadow-md transition-all duration-300"
          style={{ borderTop: `4px solid ${ref.color}` }}
        >
          <h3 className="text-sm font-bold text-text-main mb-3">{ref.title}</h3>
          <ul className="space-y-1.5">
            {ref.items.map((item, i) => (
              <li key={i} className="text-xs text-text-muted flex items-start gap-1.5">
                <span className="text-text-muted mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
