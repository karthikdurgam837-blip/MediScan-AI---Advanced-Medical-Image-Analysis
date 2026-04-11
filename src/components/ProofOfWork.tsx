import React from "react";
import { Database, Layers, Terminal, Code, Github, FileText, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { PYTHON_TRAINING_CODE, PROJECT_README } from "../constants/assets";

export const ProofOfWork = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Database, title: "Public Datasets", desc: "NIH Chest X-ray & RSNA datasets." },
          { icon: Layers, title: "CNN Architecture", desc: "12-layer CNN optimized for medical features." },
          { icon: Terminal, title: "Modular Pipeline", desc: "Clean, documented Python production code." }
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-xl border border-zinc-100 bg-zinc-50">
            <item.icon className="w-5 h-5 text-blue-600 mb-3" />
            <h3 className="text-sm font-bold text-zinc-900 mb-1">{item.title}</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-100 bg-zinc-50 overflow-hidden">
        <div className="p-4 border-b border-zinc-100 bg-white flex items-center gap-2">
          <Code className="text-blue-600 w-4 h-4" />
          <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">model_training.py</span>
        </div>
        <div className="p-6 bg-zinc-900 font-mono text-[11px] overflow-x-auto text-blue-400/90 leading-relaxed">
          <pre>{PYTHON_TRAINING_CODE}</pre>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <Github className="text-blue-600 w-4 h-4" />
            Development Roadmap
          </h3>
          <div className="space-y-2">
            {[
              "Data Acquisition",
              "Exploratory Analysis",
              "Preprocessing",
              "Model Training",
              "Evaluation",
              "API Integration",
              "Documentation"
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-3 text-xs p-2 rounded-lg hover:bg-zinc-50 transition-colors">
                <span className="text-zinc-400 font-mono">0{i+1}</span>
                <span className="text-zinc-600">{task}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
            <FileText className="text-blue-600 w-4 h-4" />
            Documentation
          </h3>
          <div className="prose prose-xs max-w-none opacity-90 text-zinc-700">
            <ReactMarkdown>{PROJECT_README}</ReactMarkdown>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1 transition-colors">
            View Full Docs <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
