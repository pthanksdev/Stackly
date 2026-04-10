"use client";

import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

interface PromptFooterProps {
  scrollToSection: (id: string) => void;
}

export default function PromptFooter({ scrollToSection }: PromptFooterProps) {
  return (
    <footer className="bg-black text-white py-16 mt-32 border-t border-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="mb-10 lg:mb-0">
            <h3 className="text-3xl font-black mb-6">
              AI Prompt Engineering
            </h3>
            <p className="text-gray-400 max-w-md text-lg">
              Master the art of communicating with AI. <br />
              <span className="text-white font-medium">
                Black and white methodology for perfect results.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-white">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("formula")}
                    className="hover:text-white border-animate transition-colors"
                  >
                    The Formula
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("context")}
                    className="hover:text-white border-animate transition-colors"
                  >
                    Context Layer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("specificity")}
                    className="hover:text-white border-animate transition-colors"
                  >
                    Specificity Matrix
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("templates")}
                    className="hover:text-white border-animate transition-colors"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("practice")}
                    className="hover:text-white border-animate transition-colors"
                  >
                    Practice
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white border-animate transition-colors"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                >
                  <FiTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                >
                  <FiGithub />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:bg-white hover:text-black transition-all"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center text-gray-500">
          <p>
            © 2026 AI Prompt Engineering Guide. All techniques tested with
            ChatGPT, Claude, Gemini, and DeepSeek.
          </p>
          <p className="mt-2 text-sm">
            Master the art of communication with artificial intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
