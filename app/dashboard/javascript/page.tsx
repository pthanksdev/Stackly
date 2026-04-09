// app/dashboard/javascript/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { javascriptCourseData, JavaScriptConcept, javascriptCategories, javascriptQuickReference } from '../../components/data/js';

import JsIntroCard from '../../components/js_components/JsIntroCard';
import JsStructureCard from '../../components/js_components/JsStructureCard';
import JsReferenceCards from '../../components/js_components/JsReferenceCards';
import JsLessonCard from '../../components/js_components/JsLessonCard';
import JsSidebar from '../../components/js_components/JsSidebar';

type Language = 'en' | 'fr' | 'ar';

export default function JavaScriptCoursePage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<Language>('en');
  const [activeSection, setActiveSection] = useState<number>(1);
  const sectionRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  const copyToClipboard = (text: string, id: number) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const scrollToSection = (id: number) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id.replace('lesson-', ''));
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DashboardLayout pageTitle="JavaScript Course" showBackButton={true}>
      <div className="flex gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          
          <JsIntroCard
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onStartLearning={() => scrollToSection(1)}
          />

          <JsStructureCard
            copiedId={copiedId}
            onCopy={copyToClipboard}
            onStartLessons={() => scrollToSection(1)}
          />

          {/* QUICK REFERENCE CARDS */}
          <JsReferenceCards references={javascriptQuickReference} />

          {/* ALL LESSONS */}
          <div className="space-y-12 mt-8">
            {javascriptCourseData.map((lesson: JavaScriptConcept) => (
              <div
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
              >
                <JsLessonCard
                  lesson={lesson}
                  copiedId={copiedId}
                  totalLessons={javascriptCourseData.length}
                  onCopy={copyToClipboard}
                  onNavigate={scrollToSection}
                />
              </div>
            ))}
          </div>

          <div className="text-center py-12">
            <p className="text-sm text-slate-500">
              JavaScript brings your web pages to life. It&apos;s not just a language—it&apos;s the magic behind the web.
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <JsSidebar
          lessons={javascriptCourseData}
          categories={javascriptCategories}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onScrollToIntro={() =>
            document.getElementById('js-intro')?.scrollIntoView({ behavior: 'smooth' })
          }
          onScrollToStructure={() =>
            document.getElementById('js-structure')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
    </DashboardLayout>
  );
}