import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface GeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

const GeneratedImage: React.FC<GeneratedImageProps> = ({ 
  prompt, 
  alt, 
  className = "", 
  aspectRatio = "1:1" 
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      try {
        setLoading(true);
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: `90s retro anime style, high quality cel shaded, flat colors, clean lines, vintage cartoon aesthetic, centered character on solid dark background: ${prompt}`,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: aspectRatio,
            },
          },
        });

        let foundUrl = null;
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            foundUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            break;
          }
        }

        if (foundUrl) {
          setImageUrl(foundUrl);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`bg-zinc-900 animate-pulse flex items-center justify-center ${className}`}>
        {/* Loading text removed as requested */}
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`bg-zinc-800 flex items-center justify-center ${className}`}>
        <span className="text-white/20 text-xs">ERR: NO_SIGNAL</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 image-reveal group-hover:scale-110"
      />
    </div>
  );
};

export default GeneratedImage;