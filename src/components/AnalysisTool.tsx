import React, { useState, useRef } from "react";
import { Upload, Brain, FileText, Activity, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { analyzeMedicalImage } from "../services/gemini";
import { cn } from "../lib/utils";

export const AnalysisTool = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    if (!selectedImage) return;
    setIsAnalyzing(true);
    setError(null);
    try {
      const result = await analyzeMedicalImage(selectedImage, "image/jpeg");
      setAnalysisResult(result || "No analysis generated.");
    } catch (err) {
      setError("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Upload Section */}
      <div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50">
        <div className="flex items-center gap-2 mb-6">
          <Upload className="text-blue-600 w-4 h-4" />
          <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Upload Scan</h2>
        </div>

        <div 
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "border border-zinc-200 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-white",
            selectedImage ? "bg-blue-50 border-blue-200" : "bg-white"
          )}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
            accept="image/*"
          />
          {selectedImage ? (
            <img src={selectedImage} alt="Preview" className="max-h-48 rounded shadow-sm" />
          ) : (
            <div className="text-center space-y-2">
              <Upload className="text-zinc-400 w-6 h-6 mx-auto" />
              <p className="text-zinc-500 text-sm font-medium">Click to upload medical scan</p>
            </div>
          )}
        </div>

        {selectedImage && (
          <button
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-200 text-white py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Brain className="w-4 h-4" />
            )}
            {isAnalyzing ? "Analyzing..." : "Run AI Diagnostic"}
          </button>
        )}
      </div>

      {/* Result Section */}
      <div className="p-6 rounded-2xl border border-zinc-100 bg-zinc-50 flex flex-col min-h-[400px]">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="text-blue-600 w-4 h-4" />
          <h2 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Diagnostic Report</h2>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {analysisResult ? (
            <div className="prose prose-sm prose-blue max-w-none text-zinc-800">
              <ReactMarkdown>{analysisResult}</ReactMarkdown>
            </div>
          ) : isAnalyzing ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-8 h-8 border-2 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
              <p className="text-zinc-500 text-xs">Processing neural networks...</p>
            </div>
          ) : error ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-red-50 rounded-xl border border-red-100">
              <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
              <p className="text-red-600 text-xs font-medium">{error}</p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
              <Activity className="w-10 h-10 text-zinc-300 mb-2" />
              <p className="text-zinc-400 text-xs">Upload an image to generate a report.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
