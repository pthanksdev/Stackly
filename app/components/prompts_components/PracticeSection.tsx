"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiCheck, FiInfo } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const exercises = [
  {
    id: 1,
    title: "The Simple Request",
    vague: '"Build a blog"',
    optimized: `"Create a Next.js 14 blog with:
- App Router structure
- MDX for blog posts with code syntax highlighting
- Dark/light mode toggle
- SEO-optimized meta tags
- Prisma with SQLite for comments
- Vercel deployment config
- TypeScript interfaces for all data

Folder structure:
/app/(blog)/[slug]/page.tsx
/components/BlogCard.tsx
/lib/mdx.ts
/prisma/schema.prisma

Constraints:
- No external CMS, filesystem-based
- Use server components where possible
- Implement OG image generation"`,
    explanation: "The optimized version provides clear direction, specific requirements, and constraints that guide the AI to produce exactly what you need.",
  },
  {
    id: 2,
    title: "Feature Request",
    vague: '"Add search to my app"',
    optimized: `"Implement a search feature for a React application using:
- Fuse.js for client-side fuzzy searching
- A search input component with debounce (300ms)
- Highlighted matching text in results
- Keyboard shortcuts (Cmd+K to focus)
- Results grouped by category (Users, Posts, Settings)

Context:
- We have an array of 500+ items in local state
- Tailwind CSS for styling

Constraints:
- Do NOT make API calls for searching (local only)
- Must be accessible (ARIA labels, keyboard nav)
- Mobile-friendly overlay on small screens"`,
    explanation: "Including the specific library (Fuse.js) and UX details like debouncing and keyboard shortcuts saves time and ensures a premium feel.",
  },
  {
    id: 3,
    title: "Bug Fix",
    vague: '"Fix this error: undefined is not an object"',
    optimized: `"Debug and fix a 'TypeError: undefined is not an object' in a React component's useEffect.

Current Code:
useEffect(() => {
  const fetchData = async () => {
    const res = await fetch('/api/user');
    const data = await res.json();
    setUserData(data.profile.name); // Error happens here
  };
  fetchData();
}, []);

Requirements:
1. Add proper null checks/optional chaining
2. Implement an AbortController for cleaning up the fetch
3. Handle loading and error states properly
4. Add TypeScript types for the API response

Context:
- Next.js 14 environment
- The API might return 404 if the user isn't logged in"`,
    explanation: "Providing the code snippet and the likely cause (Next.js environment, async fetch) helps the AI narrow down the fix and provide best practices like AbortController.",
  },
];

export default function PracticeSection() {
  const [showAnswerIdx, setShowAnswerIdx] = useState<number | null>(null);

  return (
    <section id="practice">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="rounded-3xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#475569" }}
      >
        <div className="p-10 md:p-16 text-white">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase px-3 py-1 bg-white/10 rounded-full text-gray-200">
              Apply Your Knowledge
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
              Practice
              <br />
              <span className="text-gray-300">Exercises</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Rewrite these vague prompts using everything you've learned.
            </p>
          </div>

          <div className="grid gap-12 max-w-4xl mx-auto">
            {exercises.map((ex, idx) => (
              <div key={ex.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="text-2xl font-black">{ex.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{ex.title}</h3>
                    <p className="text-gray-200">
                      Challenge: Optimize this prompt
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 p-8 rounded-lg mb-8 border border-white/20">
                  <p className="text-2xl md:text-3xl font-medium text-center">
                    {ex.vague}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowAnswerIdx(showAnswerIdx === idx ? null : idx)}
                  className="w-full bg-white text-black hover:bg-gray-100 font-bold py-5 px-6 rounded-xl text-lg flex items-center justify-center gap-3 transition-all shadow-xl"
                >
                  <FiEye size={20} />
                  {showAnswerIdx === idx
                    ? "Hide Optimized Version"
                    : "Reveal Optimized Version"}
                </motion.button>

                <AnimatePresence>
                  {showAnswerIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white text-black p-8 rounded-xl shadow-2xl mt-8">
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mr-4">
                            <FiCheck className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">
                              Optimized Prompt
                            </h3>
                            <p className="text-gray-600">
                              See how specificity transforms the request
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 font-mono text-sm mb-6 whitespace-pre-wrap">
                          {ex.optimized}
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-start gap-3">
                            <FiInfo className="text-gray-500 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">
                              {ex.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
