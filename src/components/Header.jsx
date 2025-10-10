"use client";

import { useEffect, useState } from "react";

export const Header = ({ activeTab, setActiveTab }) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setVisible(e.clientY < 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-center gap-4 bg-card transition-all duration-500 z-50 h-24 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <button
        onClick={() => setActiveTab("placar")}
        className={`w-56 font-bold text-2xl px-4 py-2 rounded-xl transition-colors duration-300 border-2 border-accent ${
          activeTab === "placar"
            ? "bg-accent text-white border-white"
            : "bg-card text-text-secondary hover:bg-btn-primary"
        }`}
      >
        Placar
      </button>
      <button
        onClick={() => setActiveTab("teams")}
        className={`w-56 font-bold text-2xl px-4 py-2 rounded-xl transition-colors duration-300 border-2 border-accent ${
          activeTab === "teams"
            ? "bg-accent text-white border-white"
            : "bg-card text-text-secondary hover:bg-orange-100"
        }`}
      >
        Adicionar Times
      </button>
    </header>
  );
};
