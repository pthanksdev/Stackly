'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Pagination from '../../components/dashboard/Pagination';
import { iconData } from '../../components/icons_components/iconData';
import IconCard from '../../components/icons_components/IconCard';
import IconCardSkeleton from '../../components/icons_components/IconCardSkeleton';
import IconsHeader from '../../components/icons_components/IconsHeader';
import IconsSearchBar from '../../components/icons_components/IconsSearchBar';
import IconsCategoryFilter from '../../components/icons_components/IconsCategoryFilter';
import IconsEmptyState from '../../components/icons_components/IconsEmptyState';

const ITEMS_PER_PAGE = 12;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function IconsGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  // Filter icons based on category and search
  const filteredIcons = iconData.filter((icon) => {
    const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      icon.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredIcons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedIcons = filteredIcons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    scrollToTop();
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    setCurrentPage(page);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setIsLoading(false);
  };

  const copyToClipboard = (name: string, id: string) => {
    navigator.clipboard.writeText(name);
    setCopiedName(id);
    setTimeout(() => setCopiedName(null), 2000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <IconsHeader />

        <IconsSearchBar searchQuery={searchQuery} onSearch={handleSearch} />

        <IconsCategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Results count */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{displayedIcons.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{filteredIcons.length}</span> icons
          </p>
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages || 1}
          </p>
        </div>

        {/* Icons Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <IconCardSkeleton key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedCategory + currentPage + searchQuery}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {displayedIcons.map((icon) => (
                <IconCard
                  key={icon.id}
                  icon={icon}
                  copiedName={copiedName}
                  onCopy={copyToClipboard}
                  variants={fadeInUp}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {!isLoading && displayedIcons.length === 0 && (
          <IconsEmptyState
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
          />
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