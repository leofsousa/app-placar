"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl p-8 max-w-lgw-full mx-4 border-2 border-text-primary shadow-2xl transform transition-all duration-300 scale-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="float-right -mt-2 -mr-2 p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
          aria-label="Fechar modal"
        >
          <X className="text-text-secondary" size={24} />
        </button>
      </div>
    </div>
  );
};
