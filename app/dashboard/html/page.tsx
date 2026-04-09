'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { htmlLessons, HTMLLesson } from '../../components/data/html';
import HtmlIntroCard from '../../components/html_components/HtmlIntroCard';
import HtmlStructureCard from '../../components/html_components/HtmlStructureCard';
import HtmlLessonCard from '../../components/html_components/HtmlLessonCard';
import HtmlSidebar from '../../components/html_components/HtmlSidebar';

type Language = 'en' | 'fr' | 'ar';

export default function HTMLCoursePage() {
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
    <DashboardLayout pageTitle="HTML Course" showBackButton={true}>
      <div className="flex gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          <HtmlIntroCard
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onStartLearning={() => scrollToSection(1)}
          />

          <HtmlStructureCard
            copiedId={copiedId}
            onCopy={copyToClipboard}
            onStartLessons={() => scrollToSection(1)}
          />

          {/* Lessons */}
          <div className="space-y-12">
            {htmlLessons.map((lesson: HTMLLesson) => (
              <div
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
              >
                <HtmlLessonCard
                  lesson={lesson}
                  copiedId={copiedId}
                  totalLessons={htmlLessons.length}
                  onCopy={copyToClipboard}
                  onNavigate={scrollToSection}
                />
              </div>
            ))}
          </div>

          <div className="text-center py-8">
            <p className="text-sm text-slate-500">HTML structures content, it doesn&apos;t &ldquo;think&rdquo;.</p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <HtmlSidebar
          lessons={htmlLessons}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onScrollToIntro={() =>
            document.getElementById('html-intro')?.scrollIntoView({ behavior: 'smooth' })
          }
          onScrollToStructure={() =>
            document.getElementById('html-structure')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
    </DashboardLayout>
  );
}