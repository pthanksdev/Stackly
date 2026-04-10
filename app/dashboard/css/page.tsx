// app/dashboard/css/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { cssLessons, CSSLesson } from '../../components/data/css';
import CssIntroCard from '../../components/css_components/CssIntroCard';
import CssStructureCard from '../../components/css_components/CssStructureCard';
import CssLessonCard from '../../components/css_components/CssLessonCard';
import CssSidebar from '../../components/css_components/CssSidebar';

type Language = 'en' | 'fr' | 'ar';

export default function CSSCoursePage() {
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
    <DashboardLayout pageTitle="CSS Course" showBackButton={true}>
      <div className="flex gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          <CssIntroCard
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onStartStyling={() => scrollToSection(1)}
          />

          <CssStructureCard
            copiedId={copiedId}
            onCopy={copyToClipboard}
            onStartLessons={() => scrollToSection(1)}
          />

          {/* Lessons */}
          <div className="space-y-16">
            {cssLessons.map((lesson: CSSLesson) => (
              <div
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
              >
                <CssLessonCard
                  lesson={lesson}
                  copiedId={copiedId}
                  totalLessons={cssLessons.length}
                  onCopy={copyToClipboard}
                  onNavigate={scrollToSection}
                />
              </div>
            ))}
          </div>

          <div className="text-center py-12 border-t border-border-main transition-colors">
            <p className="text-sm text-text-muted italic">
              "CSS is the paint, the polish, and the magic that turns structure into art."
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <CssSidebar
          lessons={cssLessons}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onScrollToIntro={() =>
            document.getElementById('css-intro')?.scrollIntoView({ behavior: 'smooth' })
          }
          onScrollToStructure={() =>
            document.getElementById('css-structure')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
    </DashboardLayout>
  );
}