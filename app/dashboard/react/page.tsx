'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ReactCard from '../../components/dashboard/ReactCard';
import CategoryFilter from '../../components/dashboard/CategoryFilter';
import Pagination from '../../components/dashboard/Pagination';
import ReactCardSkeleton from '../../components/dashboard/ReactCardSkeleton';
import { reactLessons, reactCategories } from '../../components/data/react';
import { FiCode } from 'react-icons/fi';
import { useProgress } from '../../hooks/useProgress';

const ITEMS_PER_PAGE = 6;

export default function ReactCoursePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { completedLessons, isReady } = useProgress('react');

  // Scroll to top function - use useCallback to memoize
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Fallback for browsers that don't support smooth scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  // Filter lessons based on selected category
  const filteredLessons = selectedCategory === 'all' 
    ? reactLessons 
    : reactLessons.filter(lesson => lesson.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredLessons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedLessons = filteredLessons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to first page when category changes with loading state
  const handleCategoryChange = async (categoryId: string) => {
    setIsLoading(true);
    
    // Scroll to top IMMEDIATELY
    scrollToTop();
    
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    
    // Simulate minimum loading time for smooth transition
    await new Promise(resolve => setTimeout(resolve, 600));
    setIsLoading(false);
  };

  // Handle page change with loading state
  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    setCurrentPage(page);
    
    // Simulate minimum loading time for smooth transition
    await new Promise(resolve => setTimeout(resolve, 400));
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
  }, [displayedLessons, isLoading]);

  return (
    <DashboardLayout pageTitle="React.js Course" showBackButton={true}>
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: '#c5e6ff' }}
            >
              <FiCode className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">React.js Course</h1>
              <p className="text-gray-600">Master building interactive user interfaces with modern React</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{reactLessons.length}</span>
              <span className="text-gray-600">Total Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">
                {isReady ? completedLessons.length : 0}
              </span>
              <span className="text-gray-600">Completed</span>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <CategoryFilter
          categories={reactCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          isLoading={isLoading}
        />

        {/* Themes Grid with Loading State */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <ReactCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {displayedLessons.map((lesson, index) => (
                <ReactCard key={lesson.id} item={lesson} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && displayedLessons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#ffb7c5' }}
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No lessons found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Pagination */}
        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
