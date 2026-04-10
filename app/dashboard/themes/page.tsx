'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ThemeCard from '../../components/dashboard/ThemeCard';
import CategoryFilter from '../../components/dashboard/CategoryFilter';
import ThemeCardSkeleton from '../../components/dashboard/ThemeCardSkeleton';
import { themes, categories } from '../../components/data/themes';

export default function ThemesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  const filteredThemes = selectedCategory === 'all' 
    ? themes 
    : themes.filter(theme => theme.category === selectedCategory);

  const handleCategoryChange = async (categoryId: string) => {
    setIsLoading(true);
    scrollToTop();
    setSelectedCategory(categoryId);
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [filteredThemes, isLoading]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'var(--color-border-main)' }}
            >
              <svg className="w-5 h-5 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-main">CSS Themes</h1>
              <p className="text-text-muted">Discover and use beautiful color palettes for your projects</p>
            </div>
          </div>

            <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-text-main">{themes.length}</span>
              <span className="text-text-muted">Total Themes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-text-main">{categories.length - 1}</span>
              <span className="text-text-muted">Categories</span>
            </div>
          </div>
        </motion.div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          isLoading={isLoading}
        />

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
                <ThemeCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredThemes.map((theme, index) => (
                <ThemeCard key={theme.id} theme={theme} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && filteredThemes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-card-bg border border-border-main transition-colors"
            >
              <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text-main mb-2">No themes found</h3>
            <p className="text-text-muted">Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  );
}