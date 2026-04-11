import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function analyzeMedicalImage(base64Image: string, mimeType: string) {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    You are an expert Medical Imaging Specialist. 
    Analyze this medical image (e.g., X-ray, MRI, CT scan).
    
    Provide a detailed report in Markdown format including:
    1. **Image Type & Region**: Identify what kind of scan this is and the body part.
    2. **Observations**: Describe what you see in the image (bones, tissues, anomalies).
    3. **Potential Findings**: List any potential issues (e.g., fractures, pneumonia signs, tumors) or state if it looks normal.
    4. **Confidence Level**: Provide a confidence score (0-100%).
    5. **Recommendations**: Suggest next steps for a medical professional.
    
    IMPORTANT: Include a clear disclaimer that this is an AI-powered simulation and not a real medical diagnosis.
  `;

  const imagePart = {
    inlineData: {
      data: base64Image.split(",")[1] || base64Image,
      mimeType: mimeType,
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: [imagePart, { text: prompt }] },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error analyzing image:", error);
    throw new Error("Failed to analyze image. Please try again.");
  }
}
