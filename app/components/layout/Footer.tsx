'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiPhone, FiCalendar, FiHeart } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-card-bg border-t border-border-main mt-auto transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left section - Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
              style={{ backgroundColor: '#c5e6ff' }}
            >
              <span className="text-sm font-bold text-black dark:text-gray-900">D</span>
            </div>
            <span className="text-sm font-semibold text-text-main">
              Stackly
            </span>
            <span className="text-xs text-text-muted hidden sm:inline">|</span>
            <span className="text-xs text-text-muted hidden sm:inline">
              Developer Dashboard
            </span>
          </div>

          {/* Center section - Developer info */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-text-muted">Built with</span>
              <FiHeart className="text-pink-400" size={14} />
              <span className="text-text-muted">by</span>
              <span className="font-semibold text-text-main">pthanksdev</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              {/* Date */}
              <div className="flex items-center gap-1.5 text-text-muted">
                <FiCalendar size={14} className="text-text-muted" />
                <span>{currentDate || 'Loading...'}</span>
              </div>

              {/* GitHub */}
              <Link
                href="https://github.com/pthanksdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-text-muted hover:text-text-main transition-colors group"
              >
                <FiGithub size={14} className="group-hover:scale-110 transition-transform" />
                <span className="hover:underline">pthanksdev</span>
              </Link>

              {/* Phone */}
              <div className="flex items-center gap-1.5 text-text-muted">
                <FiPhone size={14} className="text-text-muted" />
                <span className="font-mono">+234-911-749-2061</span>
              </div>
            </div>
          </div>

          {/* Right section - Year */}
          <div className="flex items-center">
            <span className="text-xs text-text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>

        {/* Mobile view - Bottom line */}
        <div className="mt-6 pt-6 border-t border-border-main md:hidden text-center">
          <p className="text-xs text-text-muted">
            Developer Dashboard • pthanksdev • {currentDate?.split(',')[1]?.trim() || new Date().getFullYear()}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}