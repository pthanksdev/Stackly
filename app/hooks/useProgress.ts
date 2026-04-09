'use client';

import { useState, useEffect } from 'react';

// Maps course identifier to an array of completed lesson IDs
type ProgressMap = Record<string, number[]>;

export function useProgress(courseKey: string) {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('stackly_progress');
      if (stored) {
        const progress: ProgressMap = JSON.parse(stored);
        if (progress[courseKey]) {
          setCompletedLessons(progress[courseKey]);
        }
      }
    } catch (e) {
      console.error('Failed to parse progress', e);
    }
    setIsReady(true);
  }, [courseKey]);

  // Save to local storage whenever state changes
  const toggleComplete = (id: number) => {
    setCompletedLessons(prev => {
      const isCompleted = prev.includes(id);
      const newCompletion = isCompleted 
        ? prev.filter(lessonId => lessonId !== id)
        : [...prev, id];

      try {
        const stored = localStorage.getItem('stackly_progress');
        const progress: ProgressMap = stored ? JSON.parse(stored) : {};
        progress[courseKey] = newCompletion;
        localStorage.setItem('stackly_progress', JSON.stringify(progress));
      } catch (e) {
        console.error('Failed to save progress', e);
      }

      return newCompletion;
    });
  };

  const isCompleted = (id: number) => completedLessons.includes(id);

  return { completedLessons, toggleComplete, isCompleted, isReady };
}
