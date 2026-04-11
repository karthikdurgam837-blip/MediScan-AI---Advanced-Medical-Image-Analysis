import React from "react";
import { Activity, Github, Database, Code, FileText } from "lucide-react";
import { Header } from "./components/Header";
import { AnalysisTool } from "./components/AnalysisTool";
import { ProofOfWork } from "./components/ProofOfWork";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500/30">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        {/* Main Tool Section */}
        <section id="analysis" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              Medical Image <span className="text-blue-600">Analysis</span>
            </h1>
            <p className="text-zinc-600 text-base">
              Professional AI-assisted diagnostics for X-rays and MRIs. 
              Upload a scan to generate a detailed clinical report.
            </p>
          </div>
          
          <AnalysisTool />
        </section>

        {/* Technical Proof Section */}
        <section id="proof" className="pt-12 border-t border-zinc-100">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center">
              <Code className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-zinc-900">Technical Implementation</h2>
          </div>
          <ProofOfWork />
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-12 mt-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Activity className="text-blue-600 w-5 h-5" />
            <span className="font-bold text-zinc-900">MediScan AI</span>
          </div>
          <p className="text-zinc-500 text-xs">
            © 2026 Portfolio Project. Built with Gemini Vision & React.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" className="text-zinc-400 hover:text-blue-600 transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
