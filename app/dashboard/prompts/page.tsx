"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

// Components
import HeroSection from "../../components/prompts_components/HeroSection";
import PromptNavigation from "../../components/prompts_components/PromptNavigation";
import FormulaSection from "../../components/prompts_components/FormulaSection";
import ContextSection from "../../components/prompts_components/ContextSection";
import SpecificitySection from "../../components/prompts_components/SpecificitySection";
import ConstraintsSection from "../../components/prompts_components/ConstraintsSection";
import TemplatesSection from "../../components/prompts_components/TemplatesSection";
import AdvancedTechniques from "../../components/prompts_components/AdvancedTechniques";
import PracticeSection from "../../components/prompts_components/PracticeSection";
import PromptFooter from "../../components/prompts_components/PromptFooter";

export default function PromptEngineeringPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("formula");

  // Copy to clipboard function
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveTab(sectionId);
    }
  };

  // Intersection Observer for active tab
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -80px 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-page-bg transition-colors">
        {/* Custom Styles */}
        <style jsx>{`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }
          @keyframes blink-caret {
            from,
            to {
              border-color: transparent;
            }
            50% {
              border-color: var(--color-text-main);
            }
          }
          .typewriter {
            overflow: hidden;
            border-right: 0.15em solid var(--color-text-main);
            white-space: nowrap;
            animation:
              typing 3.5s steps(40, end),
              blink-caret 0.75s step-end infinite;
          }
          .border-animate {
            position: relative;
            overflow: hidden;
          }
          .border-animate::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: var(--color-text-main);
            transition: left 0.3s ease;
          }
          .border-animate:hover::after {
            left: 0;
          }
          .tab-active {
            border-bottom: 2px solid var(--color-text-main);
            font-weight: 600;
            color: var(--color-text-main);
          }
          .highlight {
            position: relative;
            display: inline-block;
          }
          .highlight::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background-color: var(--color-border-main);
            z-index: -1;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        <HeroSection scrollToSection={scrollToSection} />

        <PromptNavigation 
          activeTab={activeTab} 
          scrollToSection={scrollToSection} 
        />

        <main className="container mx-auto max-w-6xl py-16 px-4 space-y-32">
          <FormulaSection />
          
          <ContextSection 
            copiedId={copiedId} 
            copyToClipboard={copyToClipboard} 
          />
          
          <SpecificitySection 
            copiedId={copiedId} 
            copyToClipboard={copyToClipboard} 
          />
          
          <ConstraintsSection 
            copiedId={copiedId} 
            copyToClipboard={copyToClipboard} 
          />
          
          <AdvancedTechniques />
          
          <TemplatesSection 
            copiedId={copiedId} 
            copyToClipboard={copyToClipboard} 
          />
          
          <PracticeSection />
        </main>

        <PromptFooter scrollToSection={scrollToSection} />
      </div>
    </DashboardLayout>
  );
}
