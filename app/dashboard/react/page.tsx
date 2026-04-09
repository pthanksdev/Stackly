'use client';

import { useState, useEffect, useRef } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { reactLessons, ReactLesson, reactCategories } from '../../components/data/react';

import ReactIntroCard from '../../components/react_components/ReactIntroCard';
import ReactStructureCard from '../../components/react_components/ReactStructureCard';
import ReactLessonCard from '../../components/react_components/ReactLessonCard';
import ReactSidebar from '../../components/react_components/ReactSidebar';

type Language = 'en' | 'fr' | 'ar';

export default function ReactCoursePage() {
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
    <DashboardLayout pageTitle="React.js Course" showBackButton={true}>
      <div className="flex gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-8">
          
          <ReactIntroCard
            activeLanguage={activeLanguage}
            onLanguageChange={setActiveLanguage}
            onStartLearning={() => scrollToSection(1)}
          />

          <ReactStructureCard
            copiedId={copiedId}
            onCopy={copyToClipboard}
            onStartLessons={() => scrollToSection(1)}
          />

          {/* ALL LESSONS */}
          <div className="space-y-12 mt-8">
            {reactLessons.map((lesson: ReactLesson) => (
              <div
                key={lesson.id}
                id={`lesson-${lesson.id}`}
                ref={(el) => { sectionRefs.current[lesson.id] = el; }}
              >
                <ReactLessonCard
                  lesson={lesson}
                  copiedId={copiedId}
                  totalLessons={reactLessons.length}
                  onCopy={copyToClipboard}
                  onNavigate={scrollToSection}
                />
              </div>
            ))}
          </div>

          <div className="text-center py-12">
            <p className="text-sm text-slate-500">
              React makes it painless to create interactive UIs. Design simple views for each state in your application!
            </p>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <ReactSidebar
          lessons={reactLessons}
          categories={reactCategories}
          activeSection={activeSection}
          onNavigate={scrollToSection}
          onScrollToIntro={() =>
            document.getElementById('react-intro')?.scrollIntoView({ behavior: 'smooth' })
          }
          onScrollToStructure={() =>
            document.getElementById('react-structure')?.scrollIntoView({ behavior: 'smooth' })
          }
        />
      </div>
    </DashboardLayout>
  );
}
