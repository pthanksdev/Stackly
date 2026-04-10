"use client";

interface PromptNavigationProps {
  activeTab: string;
  scrollToSection: (id: string) => void;
}

const navItems = [
  { id: "formula", label: "The Formula" },
  { id: "context", label: "Context" },
  { id: "specificity", label: "Specificity" },
  { id: "constraints", label: "Constraints" },
  { id: "templates", label: "Templates" },
  { id: "practice", label: "Practice" },
];

export default function PromptNavigation({ activeTab, scrollToSection }: PromptNavigationProps) {
  return (
    <nav className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex overflow-x-auto py-4 gap-2 hide-scrollbar">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`tab-item py-2 px-6 font-medium whitespace-nowrap border-animate transition-colors ${
                activeTab === tab.id
                  ? "tab-active text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
