"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ButtonCard from "../../components/dashboard/ButtonCard";
import ButtonCardSkeleton from "../../components/dashboard/ButtonCardSkeleton";
import CodeTypeToggle from "../../components/dashboard/CodeTypeToggle";
import { ButtonData, buttonData } from "../../components/data/buttons";

export default function ButtonsPage() {
  const [codeType, setCodeType] = useState<"html" | "tailwind">("html");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  // Handle code type change
  const handleCodeTypeChange = (type: "html" | "tailwind") => {
    setCodeType(type);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{ backgroundColor: "var(--color-border-main)" }}
            >
              <svg
                className="w-5 h-5 text-text-main"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-main">
                Button Gallery
              </h1>
              <p className="text-text-muted">
                Beautiful, ready-to-use buttons with HTML/CSS and Tailwind code
              </p>
            </div>
          </div>

          {/* Stats and Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-text-main">
                  {buttonData.length}
                </span>
                <span className="text-text-muted">Buttons</span>
              </div>
            </div>

            {/* Code Type Toggle */}
            <CodeTypeToggle
              codeType={codeType}
              onChange={handleCodeTypeChange}
            />
          </div>
        </motion.div>

        {/* Buttons Grid with Loading State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <ButtonCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="buttons-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {buttonData.map((button: { id: any }, index: any) => (
                <ButtonCard
                  key={button.id}
                  button={button as ButtonData} 
                  index={index}
                  codeType={codeType}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
