"use client";

import { motion } from "framer-motion";
import { FiFileText, FiBox, FiAlertCircle, FiCheck, FiCopy, FiTrendingUp, FiDatabase, FiCloud, FiImage, FiUsers, FiShield, FiBookOpen } from "react-icons/fi";
import { promptTemplates } from "./prompts_data";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const copyButtonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};


interface TemplatesSectionProps {
  copiedId: string | null;
  copyToClipboard: (text: string, id: string) => void;
}

export default function TemplatesSection({ copiedId, copyToClipboard }: TemplatesSectionProps) {
  return (
    <section id="templates">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            variants={fadeInUp}
            className="text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-page-bg rounded-full text-text-muted transition-colors border border-border-main"
          >
            Ready to Use
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mt-6 mb-6"
          >
            Prompt
            <br />
            <span className="bg-gradient-to-r from-text-main to-text-muted bg-clip-text text-transparent transition-colors">
              Templates
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-text-muted transition-colors">
            Copy-paste these templates and customize for your specific
            needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promptTemplates.map((template, index) => (
            <motion.div
              key={template.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-card-bg rounded-xl border-2 border-border-main overflow-hidden shadow-lg hover:border-text-main transition-all"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-lg bg-page-bg flex items-center justify-center mb-6 transition-colors border border-border-main">
                  {template.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-main transition-colors">
                  {template.title}
                </h3>
                <p className="text-text-muted mb-6 text-sm transition-colors">
                  {template.desc}
                </p>
                <motion.button
                  variants={copyButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() =>
                    copyToClipboard(template.content, template.id)
                  }
                  className="w-full bg-text-main text-page-bg hover:opacity-90 font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copiedId === template.id ? (
                    <>
                      <FiCheck /> Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy /> Copy Template
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
