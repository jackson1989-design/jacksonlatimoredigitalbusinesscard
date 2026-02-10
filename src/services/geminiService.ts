
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Always create a new instance right before making an API call to ensure it uses the most up-to-date configuration.
  async generateContent(prompt: string, systemInstruction: string) {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview', // Upgraded to Pro for complex legacy reasoning
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
          thinkingConfig: { thinkingBudget: 4000 } // Enable thinking for better analytical strategy
        }
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      throw error;
    }
  }

  // Always create a new instance right before making an API call to ensure it uses the most up-to-date configuration.
  async generateStream(prompt: string, systemInstruction: string) {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    return ai.models.generateContentStream({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });
  }
}

export const geminiService = new GeminiService();
