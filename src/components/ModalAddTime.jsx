"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export const ModalAddTime = ({ onAddTime, onClose }) => {
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("red");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!nomeTime.trim()) {
      alert("Por favor, digite o nome do time!");
      return;
    }

    // Chama a função para adicionar o time (passada pelo componente pai)
    onAddTime({
      name: nomeTime.trim(),
      color: corTime,
      score: 0,
    });

    // Limpa o formulário
    setNomeTime("");
    setCorTime("red");

    // Fecha o modal
    onClose();
  };

  const cores = [
    { nome: "red", classe: "bg-red-500" },
    { nome: "blue", classe: "bg-blue-500" },
    { nome: "green", classe: "bg-green-500" },
    { nome: "yellow", classe: "bg-yellow-500" },
    { nome: "purple", classe: "bg-purple-500" },
    { nome: "orange", classe: "bg-orange-500" },
    { nome: "pink", classe: "bg-pink-500" },
    { nome: "gray", classe: "bg-gray-500" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-text-primary">
        Adicionar Novo Time
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Campo Nome do Time */}
        <div>
          <label
            htmlFor="nomeTime"
            className="block mb-2 text-lg font-semibold text-text-secondary"
          >
            Nome do Time:
          </label>
          <input
            id="nomeTime"
            type="text"
            value={nomeTime}
            onChange={(e) => setNomeTime(e.target.value)}
            className="w-full text-text-primary border-2 border-text-primary rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
            placeholder="Digite o nome do time"
            maxLength={20}
          />
        </div>

        {/* Campo Cor do Time */}
        <div>
          <label className="block mb-2 text-lg font-semibold text-text-secondary">
            Cor do Time:
          </label>
          <div className="grid grid-cols-4 gap-4">
            {cores.map((cor) => (
              <button
                key={cor.nome}
                type="button"
                onClick={() => setCorTime(cor.nome)}
                className={`${
                  cor.classe
                } w-12 h-12 rounded-full transition-all duration-200 hover:scale-110 ${
                  corTime === cor.nome
                    ? "ring-4 ring-white ring-offset-2 ring-offset-card scale-110"
                    : ""
                }`}
                aria-label={`Selecionar cor ${cor.nome}`}
              />
            ))}
          </div>
        </div>

        {/* Preview da cor selecionada */}
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
          <span className="text-black font-semibold">Cor selecionada:</span>
          <div
            className={`w-10 h-10 rounded-full ${
              cores.find((c) => c.nome === corTime)?.classe
            }`}
          />
          <span className="text-black font-bold capitalize">{corTime}</span>
        </div>

        {/* Botões */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-accent text-white px-3 rounded-lg font-bold text-lg hover:bg-orange-100 hover:text-black transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Plus size={24} />
            Adicionar Time
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-lg font-bold text-lg border-2 border-text-primary text-text-secondary hover:bg-gray-100 transition-colors duration-200"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
