import React from "react";
import { Activity, Github } from "lucide-react";

export const Header = () => (
  <header className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Activity className="text-blue-600 w-5 h-5" />
        <span className="font-bold text-lg tracking-tight text-zinc-900">
          MediScan <span className="text-blue-600">AI</span>
        </span>
      </div>
      
      <nav className="flex items-center gap-6">
        <a href="#analysis" className="text-xs font-semibold text-zinc-500 hover:text-blue-600 uppercase tracking-wider transition-colors">Analysis</a>
        <a href="#proof" className="text-xs font-semibold text-zinc-500 hover:text-blue-600 uppercase tracking-wider transition-colors">Implementation</a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-zinc-400 hover:text-blue-600 transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
      </nav>
    </div>
  </header>
);
