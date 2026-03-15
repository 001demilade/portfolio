"use client";

import React from 'react';
import { Home, ChevronLeft, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F0A1F] flex flex-col items-center justify-center px-6 overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full animate-pulse delay-700" />

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="relative inline-block">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-white/5 leading-none tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertCircle size={80} className="text-purple-500 animate-bounce" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Lost in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Cyberspace?</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-lg leading-relaxed">
            The page you're looking for has been moved, deleted, or never existed in this dimension.
          </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl shadow-purple-500/20"
          >
            <Home size={20} />
            Back to Reality
          </a>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-2xl transition-all"
          >
            <ChevronLeft size={20} />
            Go Back
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
        MUSE.DEV // ERROR_PROTOCOL_404
      </div>
    </div>
  );
}