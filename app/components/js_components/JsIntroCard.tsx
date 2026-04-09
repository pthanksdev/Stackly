'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiArrowRight } from 'react-icons/fi';

type Language = 'en' | 'fr' | 'ar';

const jsDescription: Record<Language, { title: string; paragraph: string }> = {
  en: {
    title: "⚡ What is JavaScript?",
    paragraph: "JavaScript is a programming language essential for web development. It adds interactivity to websites—animations, form validation, dynamic updates without reloading. With JavaScript, you can manipulate the DOM to dynamically change content and style, creating interactive web applications. Think of JavaScript as the brain of every website—it gives the page its behavior and intelligence."
  },
  fr: {
    title: "⚡ Qu'est-ce que JavaScript ?",
    paragraph: "JavaScript est un langage de programmation essentiel pour le développement web. Il ajoute de l'interactivité aux sites web—animations, validation de formulaires, mises à jour dynamiques sans rechargement. Avec JavaScript, vous pouvez manipuler le DOM pour modifier dynamiquement le contenu et le style, créant ainsi des applications web interactives. Considérez JavaScript comme le cerveau de chaque site web—il donne à la page son comportement et son intelligence."
  },
  ar: {
    title: "⚡ ما هي لغة JavaScript؟",
    paragraph: "JavaScript هي لغة برمجة أساسية لتطوير الويب. تضيف التفاعلية إلى المواقع—الرسوم المتحركة، التحقق من صحة النماذج، التحديثات الديناميكية دون إعادة تحميل الصفحة. باستخدام JavaScript، يمكنك التعامل مع DOM لتغيير المحتوى والتصميم ديناميكيًا، مما يتيح إنشاء تطبيقات ويب تفاعلية. اعتبر JavaScript بمثابة الدماغ لكل موقع ويب—فهو يمنح الصفحة سلوكها وذكائها."
  }
};

interface JsIntroCardProps {
  activeLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onStartLearning: () => void;
}

export default function JsIntroCard({
  activeLanguage,
  onLanguageChange,
  onStartLearning,
}: JsIntroCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      id="js-intro"
      className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl overflow-hidden shadow-xl"
    >
      <div className="flex items-center justify-end gap-2 px-6 pt-4">
        <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 backdrop-blur">
          {(['en', 'fr', 'ar'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                activeLanguage === lang
                  ? 'bg-white text-amber-900'
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
            <FiCpu className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {jsDescription[activeLanguage].title}
          </h2>
        </div>
        <p className="text-lg text-white/90 leading-relaxed max-w-4xl">
          {jsDescription[activeLanguage].paragraph}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white/90">
            🧠 Brain of the web
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStartLearning}
            className="flex items-center gap-2 px-4 py-2 bg-white text-amber-900 rounded-lg text-sm font-medium shadow-lg"
          >
            Start Learning <FiArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
