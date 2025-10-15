"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export const TimeCard = ({ teamName, color }) => {
  const [pontuacao, setPontuacao] = useState(0);

  return (
    <div className="flex flex-1 min-w-0 flex-col justify-center items-center bg-card rounded-2xl mx-8 shadow text-text-primary">
      <h1 className="text-7xl font-bold pt-16 px-16 ">{teamName}</h1>
      <div
        className="rounded-3xl h-8 w-1/3 mt-4 mb-10 min-w-0"
        style={{ backgroundColor: color }}
      ></div>
      <h2 className="font-bold pt-6">Pontuação</h2>
      <span className="pb-30 font-extrabold text-9xl">{pontuacao}</span>
      <div className="flex gap-12 m-10">
        <button
          className="bg-accent-green px-10 rounded-4xl font-extrabold text-4xl"
          onClick={() => setPontuacao(pontuacao + 1)}
        >
          <Plus className="" />
        </button>
        <button
          className="bg-btn-primary font-extrabold text-2xl py-4 px-8 text-black rounded-4xl"
          onClick={() => setPontuacao(0)}
        >
          Zerar
        </button>
        <button
          className="bg-accent-red px-10 rounded-4xl font-extrabold text-4xl"
          onClick={() =>
            pontuacao === 0 ? setPontuacao(0) : setPontuacao(pontuacao - 1)
          }
        >
          <Minus />
        </button>
      </div>
    </div>
  );
};
