import { GoogleGenAI } from "@google/genai";

export const generateLoveLetter = async (): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key missing, returning fallback text.");
      return "My love for you grows stronger with every passing day. From our missed connection on LinkedIn to our temple visits, every moment has been a blessing.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      Write a short, incredibly romantic, and slightly witty love poem (max 120 words) based on this true relationship story:
      - We matched on matrimony.
      - I couldn't find her on Insta, so I checked LinkedIn on Dec 25 and realized she had already messaged me for a job referral ages ago! I missed it!
      - We moved to Insta, connected deeply.
      - Proposed on Dec 28.
      - First met at Lara Cafe Jan 3.
      - Family visited Jan 25.
      - Temple visit Feb 8.
      
      End the poem asking her to be my Valentine. Use a poetic, heartfelt tone but acknowledge the funny LinkedIn mishap.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "You are the missing piece to my puzzle.";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "From a missed message on LinkedIn to a forever promise at the temple, my journey is only complete with you. Will you be my Valentine?";
  }
};