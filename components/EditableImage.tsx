import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';

interface EditableImageProps {
  storageKey: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({ storageKey, defaultSrc, alt, className }) => {
  const [src, setSrc] = useState(defaultSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setSrc(saved);
  }, [storageKey]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSrc(result);
        localStorage.setItem(storageKey, result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group cursor-pointer overflow-hidden ${className}`} onClick={handleClick}>
      <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 px-3 py-2 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2 shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
           <Camera size={16} className="text-rose-500" /> 
           <span>Click to Upload Photo</span>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};