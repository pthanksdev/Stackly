'use client';

import { motion } from 'framer-motion';
import { FiDroplet, FiArrowRight } from 'react-icons/fi';

type Language = 'en' | 'fr' | 'ar';

const cssDescription: Record<Language, { title: string; paragraph: string }> = {
  en: {
    title: "🎨 What is CSS?",
    paragraph: "CSS (Cascading Style Sheets) is the language that styles the web. It controls the visual presentation—colors, fonts, spacing, layout, and animations. If HTML is the skeleton of a website, CSS is the skin and clothes. It separates content from design, making websites beautiful, responsive, and maintainable."
  },
  fr: {
    title: "🎨 Qu'est-ce que le CSS ?",
    paragraph: "CSS (Cascading Style Sheets) est le langage qui habille le web. Il contrôle la présentation visuelle—couleurs, polices, espacements, disposition et animations. Si HTML est le squelette d'un site web, CSS est la peau et les vêtements. Il sépare le contenu du design, rendant les sites beaux, responsifs et faciles à maintenir."
  },
  ar: {
    title: "🎨 ما هي CSS؟",
    paragraph: "CSS (صفحات الأنماط المتتالية) هي اللغة التي تصمم الويب. تتحكم في المظهر البصري - الألوان والخطوط والمسافات والتخطيط والرسوم المتحركة. إذا كان HTML هو الهيكل العظمي للموقع، فإن CSS هي الجلد والملابس. تفصل المحتوى عن التصميم، مما يجعل المواقع جميلة ومتجاوبة وسهلة الصيانة."
  }
};

interface CssIntroCardProps {
  activeLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onStartStyling: () => void;
}

export default function CssIntroCard({
  activeLanguage,
  onLanguageChange,
  onStartStyling,
}: CssIntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      id="css-intro"
      className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="flex items-center justify-end gap-2 px-6 pt-4">
        <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
          {(['en', 'fr', 'ar'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${
                activeLanguage === lang
                  ? 'bg-white text-slate-900'
                  : 'text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`p-6 ${activeLanguage === 'ar' ? 'text-right' : 'text-left'}`}
        dir={activeLanguage === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-white/20 rounded-xl">
            <FiDroplet className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {cssDescription[activeLanguage].title}
          </h2>
        </div>
        <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
          {cssDescription[activeLanguage].paragraph}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">
            🎨 Makes the web beautiful
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartStyling}
            className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium shadow-lg"
          >
            Start Styling <FiArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
