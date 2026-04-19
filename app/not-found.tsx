'use client';

import Link from 'next/link';
import NotFoundCanvas from './components/NotFoundCanvas';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Three.js Background */}
      <NotFoundCanvas />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        <h1 className="animate-pulse text-9xl font-black tracking-tighter sm:text-[12rem]">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold sm:text-4xl text-indigo-400">
            Lost in the Digital Void
          </h2>
          <p className="max-w-md text-slate-400 sm:text-lg">
            The page you are looking for has drifted into deep space or never existed in this dimension.
          </p>
        </div>

        <Link
          href="/"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-600 px-8 py-3 font-bold text-white transition-all hover:bg-indigo-500 active:scale-95"
        >
          <span className="relative">Return to Reality</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </Link>
      </div>

      {/* Decorative Glitch Effect Elements */}
      <div className="pointer-events-none absolute inset-0 z-5 opacity-20">
        <div className="absolute h-px w-full bg-indigo-500/30 top-1/4 animate-[scan_3s_linear_infinite]" />
        <div className="absolute h-px w-full bg-purple-500/30 top-2/3 animate-[scan_4s_linear_infinite_reverse]" />
      </div>

      <style jsx global>{`
        @keyframes scan {
          from { transform: translateY(-100vh); }
          to { transform: translateY(100vh); }
        }
      `}</style>
    </main>
  );
}
