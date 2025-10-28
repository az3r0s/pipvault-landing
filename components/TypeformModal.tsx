"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeformUrl: string;
}

export function TypeformModal({ isOpen, onClose, typeformUrl }: TypeformModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full p-2 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Typeform Embed */}
        <iframe
          src={typeformUrl}
          className="w-full h-full border-0"
          allow="camera; microphone; autoplay; encrypted-media;"
          title="Typeform"
        />
      </div>
    </div>
  );
}