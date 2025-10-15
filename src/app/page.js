"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { TimeCard } from "@/components/TimeCard";
import { Modal } from "@/components/Modal";
import { ModalAddTime } from "@/components/ModalAddTime";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [times, setTimes] = useState([]);

  const handleAddTime = (novoTime) => {
    const timeComId = {
      ...novoTime,
      id: Date.now(),
    };

    setTimes([...times, timeComId]);
  };

  // Função opcional para remover um time
  const handleRemoveTime = (id) => {
    setTimes(times.filter((time) => time.id !== id));
  };

  // Função opcional para atualizar o placar
  const handleUpdateScore = (id, newScore) => {
    setTimes(
      times.map((time) =>
        time.id === id ? { ...time, score: newScore } : time
      )
    );
  };

  return (
    <div className="">
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalAddTime
          onAddTime={handleAddTime}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

      <h1 className="text-center font-extrabold text-8xl m-24 text-text-primary">
        Placar
      </h1>

      <div className="flex gap-4 w-full overflow-x-auto justify-around px-4 pb-8">
        {times.length > 0 ? (
          times.map((time) => (
            <TimeCard
              key={time.id}
              id={time.id}
              color={time.color}
              teamName={time.name}
              onRemove={() => handleRemoveTime(time.id)}
            />
          ))
        ) : (
          <p className="text-center text-text-secondary text-2xl">
            Nenhum time adicionado ainda. Clique em Adicionar Times para
            começar!
          </p>
        )}
      </div>
    </div>
  );
}
