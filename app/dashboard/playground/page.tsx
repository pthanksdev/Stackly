'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPlay, FiCopy, FiCheck, FiRefreshCw,
  FiMaximize2, FiMinimize2, FiCode, FiPlus, 
  FiFileText, FiTrash2, FiDownload,
  FiFolder, FiChevronRight, FiEdit3
} from 'react-icons/fi';
import JSZip from 'jszip';
import DashboardLayout from '../../components/layout/DashboardLayout';

interface File {
  name: string;
  content: string;
  language: 'html' | 'css' | 'javascript';
}

const DEFAULT_FILES: File[] = [
  {
    name: 'index.html',
    language: 'html',
    content: `<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Stackly Playground</h1>
    <p>Welcome to your multi-file development environment!</p>
    <button id="btn">Click me</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`
  },
  {
    name: 'style.css',
    language: 'css',
    content: `body {
  font-family: system-ui, sans-serif;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
  text-align: center;
}

h1 { color: #d2b7ff; }

button {
  background: #ffb7c5;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover { transform: scale(1.05); }`
  },
  {
    name: 'script.js',
    language: 'javascript',
    content: `document.getElementById('btn').addEventListener('click', () => {
  alert('Hello from script.js!');
});`
  }
];

export default function PlaygroundPage() {
  const [files, setFiles] = useState<File[]>(DEFAULT_FILES);
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [runningCode, setRunningCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isAutoRun, setIsAutoRun] = useState(true);
  const [showFileSidebar, setShowFileSidebar] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activeFile = files[activeFileIndex];

  // Helper to generate preview code
  const generatePreview = useCallback(() => {
    const htmlFile = files.find(f => f.name.endsWith('.html')) || files[0];
    const cssFiles = files.filter(f => f.language === 'css');
    const jsFiles = files.filter(f => f.language === 'javascript');

    let combinedCode = htmlFile.content;

    // Inject CSS
    cssFiles.forEach(css => {
      combinedCode = combinedCode.replace(
        new RegExp(`<link.*?href=["']${css.name}["'].*?>`, 'g'),
        `<style>${css.content}</style>`
      );
    });

    // Inject JS
    jsFiles.forEach(js => {
      combinedCode = combinedCode.replace(
        new RegExp(`<script.*?src=["']${js.name}["'].*?></script>`, 'g'),
        `<script>${js.content}</script>`
      );
    });

    return combinedCode;
  }, [files]);

  // Debounced auto-run
  useEffect(() => {
    if (!isAutoRun) return;
    const timer = setTimeout(() => {
      setRunningCode(generatePreview());
    }, 500);
    return () => clearTimeout(timer);
  }, [files, isAutoRun, generatePreview]);

  const runCode = () => {
    setIsRunning(true);
    setRunningCode(generatePreview());
    setTimeout(() => setIsRunning(false), 500);
  };

  const handleEditorChange = (content: string) => {
    const newFiles = [...files];
    newFiles[activeFileIndex].content = content;
    setFiles(newFiles);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // ! + Enter shortcut for HTML5 Boilerplate
    if (e.key === 'Enter' && activeFile.language === 'html' && activeFile.content.trim().endsWith('!')) {
      const cursorPosition = (e.target as HTMLTextAreaElement).selectionStart;
      const text = activeFile.content;
      
      // Only trigger if ! is the last char before cursor
      if (text[cursorPosition - 1] === '!') {
        e.preventDefault();
        const boilerplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>`;
        const newContent = text.slice(0, cursorPosition - 1) + boilerplate + text.slice(cursorPosition);
        handleEditorChange(newContent);
        
        // Wait for render then adjust cursor (approximate)
        setTimeout(() => {
          const textarea = e.target as HTMLTextAreaElement;
          textarea.selectionStart = cursorPosition + 180; // Rough body offset
          textarea.selectionEnd = cursorPosition + 180;
        }, 0);
      }
    }
  };

  const addFile = () => {
    const name = prompt('Enter filename (e.g. about.html, theme.css):');
    if (!name) return;
    
    if (files.some(f => f.name === name)) {
      alert('File already exists!');
      return;
    }

    const language = name.endsWith('.html') ? 'html' : name.endsWith('.css') ? 'css' : 'javascript';
    const newFile: File = { name, language, content: '' };
    setFiles([...files, newFile]);
    setActiveFileIndex(files.length);
  };

  const deleteFile = (index: number) => {
    if (files.length === 1) return;
    if (!confirm(`Delete ${files[index].name}?`)) return;
    
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (activeFileIndex >= newFiles.length) {
      setActiveFileIndex(newFiles.length - 1);
    }
  };

  const downloadProject = async () => {
    setIsRunning(true); // Re-use isRunning for loading state
    try {
      const zip = new JSZip();
      files.forEach(file => {
        zip.file(file.name, file.content);
      });
      
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'stackly-project.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setIsRunning(false);
    }
  };

  const resetProject = () => {
    if (confirm('Reset all files to default? This will clear your current changes.')) {
      setFiles(DEFAULT_FILES);
      setActiveFileIndex(0);
    }
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(activeFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardLayout pageTitle="Pro Playground" showBackButton={true}>
      <div className={`flex flex-col h-[calc(100vh-140px)] ${isFullscreen ? 'fixed inset-0 z-50 bg-page-bg p-4' : ''} transition-all duration-300`}>
        
        {/* Main Interface Wrapper */}
        <div className="flex flex-1 gap-4 overflow-hidden">
          
          {/* File Explorer Sidebar */}
          <AnimatePresence>
            {showFileSidebar && (
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 240, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-card-bg rounded-xl border border-border-main flex flex-col overflow-hidden"
              >
                <div className="p-4 border-b border-border-main flex items-center justify-between bg-page-bg/50">
                  <span className="text-xs font-bold text-text-muted flex items-center gap-2 uppercase tracking-wider">
                    <FiFolder /> Explorer
                  </span>
                  <button onClick={addFile} className="p-1 hover:bg-border-main rounded-md text-text-muted hover:text-text-main transition-colors">
                    <FiPlus size={16} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-auto p-2 space-y-1">
                  {files.map((file, idx) => (
                    <div 
                      key={file.name}
                      onClick={() => setActiveFileIndex(idx)}
                      className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                        activeFileIndex === idx ? 'bg-text-main text-page-bg' : 'text-text-muted hover:bg-page-bg'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {file.language === 'html' ? <FiCode size={14} /> : file.language === 'css' ? <FiFileText size={14} /> : <FiEdit3 size={14} />}
                        <span className="text-sm font-medium truncate">{file.name}</span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteFile(idx); }}
                        className={`opacity-0 group-hover:opacity-100 p-1 rounded-md transition-opacity ${
                          activeFileIndex === idx ? 'hover:bg-page-bg/20 text-page-bg' : 'hover:bg-border-main text-red-400'
                        }`}
                      >
                        <FiTrash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-border-main space-y-2">
                  <button 
                    onClick={downloadProject}
                    disabled={isRunning}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-text-main text-page-bg rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-all disabled:opacity-50"
                  >
                    {isRunning ? <FiRefreshCw size={14} className="animate-spin" /> : <FiDownload size={14} />}
                    Download ZIP
                  </button>
                  <button 
                    onClick={resetProject}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-page-bg text-text-muted rounded-lg text-xs font-medium hover:text-red-400 transition-all"
                  >
                    <FiRefreshCw size={12} />
                    Reset Project
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Editor + Preview Column */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            
            {/* Toolbar */}
            <div className="bg-card-bg rounded-xl border border-border-main p-3 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowFileSidebar(!showFileSidebar)}
                  className={`p-2 rounded-lg transition-colors ${showFileSidebar ? 'bg-text-main text-page-bg' : 'text-text-muted hover:bg-page-bg'}`}
                >
                  <FiFolder size={18} />
                </button>
                <div className="h-6 w-px bg-border-main" />
                <div className="flex items-center gap-1.5 px-3 py-1 bg-page-bg rounded-lg">
                  <span className="text-xs font-bold text-text-muted uppercase">{activeFile.language}</span>
                  <span className="text-sm font-medium text-text-main">{activeFile.name}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 mr-2">
                  <span className="text-xs font-medium text-text-muted">Auto-run</span>
                  <button 
                    onClick={() => setIsAutoRun(!isAutoRun)}
                    className={`w-10 h-5 rounded-full transition-colors relative flex items-center ${isAutoRun ? 'bg-green-500' : 'bg-border-main'}`}
                  >
                    <div className={`w-3 h-3 bg-white rounded-full absolute transition-all ${isAutoRun ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={runCode}
                  disabled={isRunning || isAutoRun}
                  className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold shadow-sm transition-all ${
                    isAutoRun ? 'bg-border-main text-text-muted cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isRunning ? <FiRefreshCw size={16} className="animate-spin" /> : <FiPlay size={16} />}
                  Run
                </motion.button>

                <div className="h-6 w-px bg-border-main mx-1" />

                <button onClick={copyCode} className="p-2 text-text-muted hover:bg-page-bg rounded-lg transition-colors" title="Copy Code">
                  {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
                </button>
                
                <button 
                  onClick={() => setIsFullscreen(!isFullscreen)} 
                  className="p-2 text-text-muted hover:bg-page-bg rounded-lg transition-colors"
                >
                  {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                </button>
              </div>
            </div>

            {/* Split View */}
            <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
              
              {/* Editor Panel */}
              <div className="flex-1 flex flex-col bg-gray-950 rounded-xl overflow-hidden border border-gray-800 shadow-xl group">
                <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${activeFile.language === 'html' ? 'bg-red-400' : activeFile.language === 'css' ? 'bg-blue-400' : 'bg-yellow-400'}`} />
                    <span className="text-xs font-mono text-gray-400">{activeFile.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono hidden group-hover:inline">! + Enter for boilerplate</span>
                </div>
                
                <div className="flex-1 flex overflow-hidden">
                  {/* Line Numbers Simulation */}
                  <div className="bg-gray-900/50 px-3 py-4 text-right select-none border-r border-gray-800">
                    {activeFile.content.split('\n').map((_, i) => (
                      <div key={i} className="text-[10px] font-mono text-gray-600 leading-6">{i + 1}</div>
                    ))}
                  </div>
                  
                  <textarea
                    value={activeFile.content}
                    onChange={(e) => handleEditorChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 p-4 font-mono text-sm bg-transparent text-gray-100 resize-none outline-none leading-6"
                    spellCheck="false"
                    placeholder={`Write your ${activeFile.language} here...`}
                  />
                </div>
              </div>

              {/* Preview Panel */}
              <div className="flex-1 flex flex-col bg-white rounded-xl border border-border-main overflow-hidden shadow-sm shadow-black/5">
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-border-main">
                  <div className="flex items-center gap-2">
                    <FiChevronRight className="text-text-muted" />
                    <span className="text-sm font-bold text-text-main uppercase tracking-tight">Live Preview</span>
                  </div>
                  {isAutoRun && (
                    <div className="flex items-center gap-2 text-[10px] font-bold text-green-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>
                
                <div className="flex-1 bg-white">
                  {runningCode ? (
                    <iframe
                      ref={iframeRef}
                      srcDoc={runningCode}
                      className="w-full h-full border-0"
                      title="preview"
                      sandbox="allow-scripts allow-forms allow-same-origin"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-text-muted/30">
                      <div className="text-center animate-pulse">
                        <FiPlay size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="text-sm font-medium">Preview ready</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}