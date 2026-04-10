'use client';

import { motion } from 'framer-motion';
import { FiCode, FiArrowRight } from 'react-icons/fi';

type Language = 'en' | 'fr' | 'ar';

const reactDescription: Record<Language, { title: string; paragraph: string }> = {
  en: {
    title: "⚛️ What is React?",
    paragraph: "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React's declarative nature makes it painless to create interactive UIs by designing simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
  },
  fr: {
    title: "⚛️ Qu'est-ce que React ?",
    paragraph: "React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Elle vous permet de composer des interfaces d'utilisateurs complexes à partir de petits morceaux de code isolés appelés 'composants'. La nature déclarative de React rend la création d'interfaces interactives indolore en concevant des vues simples pour chaque état de votre application, et React mettra à jour et rendra efficacement uniquement les bons composants lorsque vos données changent."
  },
  ar: {
    title: "⚛️ ما هو React؟",
    paragraph: "React هي مكتبة JavaScript لبناء واجهات المستخدم. تتيح لك تكوين واجهات مستخدم معقدة من أجزاء صغيرة ومعزولة من التعليمات البرمجية تسمى 'المكونات'. طبيعة React التصريحية تجعل من السهل إنشاء واجهات تفاعلية من خلال تصميم طرق عرض بسيطة لكل حالة في تطبيقك، وسوف يقوم React بتحديث وعرض المكونات المناسبة فقط بكفاءة عندما تتغير بياناتك."
  }
};

interface ReactIntroCardProps {
  activeLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onStartLearning: () => void;
}

export default function ReactIntroCard({
  activeLanguage,
  onLanguageChange,
  onStartLearning,
}: ReactIntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      id="react-intro"
      className="bg-gradient-to-br from-sky-900 to-sky-800 dark:from-black dark:to-slate-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
    >
      <div className="flex items-center justify-end gap-2 px-6 pt-4">
        <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
          {(['en', 'fr', 'ar'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                activeLanguage === lang
                  ? 'bg-white text-sky-900'
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
            <FiCode className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {reactDescription[activeLanguage].title}
          </h2>
        </div>
        <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
          {reactDescription[activeLanguage].paragraph}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">
            🧩 Component-based UI library
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartLearning}
            className="flex items-center gap-2 px-4 py-2 bg-white text-sky-900 rounded-lg text-sm font-medium shadow-lg"
          >
            Start Learning <FiArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
