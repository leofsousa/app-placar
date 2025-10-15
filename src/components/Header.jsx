"use client";

import { Plus, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export const Header = ({ onOpenModal }) => {
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
      className={`fixed top-0 left-0 w-full flex items-center justify-between gap-4 bg-card transition-all duration-500 z-50 h-24 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="flex gap-3 p-5 rounded-2xl m-4">
        <Trophy className="text-text-primary w-8 h-8" />
        <h1 className="text-text-primary text-3xl">Placar App</h1>
      </div>
      <button
        onClick={onOpenModal}
        className="flex justify-center gap-4 font-bold text-2xl px-4 py-2 m-4 rounded-xl transition-colors duration-300 border-2 border-accent bg-card text-text-secondary hover:bg-orange-100 hover:border-white"
      >
        <Plus className="h-8 w-8" /> Times
      </button>
    </header>
  );
};
