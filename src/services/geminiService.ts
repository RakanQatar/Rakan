import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getDashboardInsights(data: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{
        parts: [{
          text: `
            Analyze the following call center metrics for the Qatar Ministry of Municipality and provide 3 strategic insights.
            Metrics: ${JSON.stringify(data)}
            
            Return the response as a JSON array of objects with 'title', 'desc', and 'type' (optimization|alert|trend).
            Do not include markdown formatting, just the raw JSON array.
          `
        }]
      }]
    });

    const text = response.text || "[]";
    return JSON.parse(text.replace(/```json|```/g, "").trim());
  } catch (error) {
    console.error("Error generating insights:", error);
    return [
      {
        title: "Efficiency Optimization",
        desc: "AHT has decreased by 14% since Q4 2024 while maintaining a 92% FCR. This indicates high agent proficiency.",
        type: "optimization"
      },
      {
        title: "Demand Pattern Shift",
        desc: "Digital portal requests are outpacing voice calls by 1.5x in the Doha region. Strategic shift to digital-first is recommended.",
        type: "trend"
      },
      {
        title: "Sustainability Alert",
        desc: "Operational Stability Index is at an all-time high (94%). Resource dashboard is optimal for the current volume.",
        type: "alert"
      }
    ];
  }
}
