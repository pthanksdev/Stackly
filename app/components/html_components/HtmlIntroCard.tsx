'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';

type Language = 'en' | 'fr' | 'ar';

const htmlDescription: Record<Language, { title: string; paragraph: string }> = {
  en: {
    title: '🌐 What is HTML?',
    paragraph:
      'HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using elements called tags. These tags tell the browser how to display content like headings, paragraphs, links, images, and more. Think of HTML as the skeleton of every website—it gives the page its shape and organization.',
  },
  fr: {
    title: "🌐 Qu'est-ce que le HTML ?",
    paragraph:
      "HTML (HyperText Markup Language) est le langage standard pour créer des pages web. Il décrit la structure d'une page web à l'aide d'éléments appelés balises. Ces balises indiquent au navigateur comment afficher le contenu comme les titres, les paragraphes, les liens, les images, etc. Considérez HTML comme le squelette de chaque site web—il donne à la page sa forme et son organisation.",
  },
  ar: {
    title: '🌐 ما هي لغة HTML؟',
    paragraph:
      'HTML (لغة ترميز النص التشعبي) هي اللغة القياسية لإنشاء صفحات الويب. تصف بنية صفحة الويب باستخدام عناصر تسمى الوسوم. تخبر هذه الوسوم المتصفح بكيفية عرض المحتوى مثل العناوين والفقرات والروابط والصور وغير ذلك. اعتبر HTML بمثابة الهيكل العظمي لكل موقع ويب - فهو يعطي الصفحة شكلها وتنظيمها.',
  },
};

interface HtmlIntroCardProps {
  activeLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onStartLearning: () => void;
}

export default function HtmlIntroCard({
  activeLanguage,
  onLanguageChange,
  onStartLearning,
}: HtmlIntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      id="html-intro"
      className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="flex items-center justify-end gap-2 px-6 pt-4">
        <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
          {(['en', 'fr', 'ar'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium ${
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
            <FiGlobe className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {htmlDescription[activeLanguage].title}
          </h2>
        </div>
        <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
          {htmlDescription[activeLanguage].paragraph}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">
            📖 Foundation of the web
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartLearning}
            className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium shadow-lg"
          >
            Start Learning <FiArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
