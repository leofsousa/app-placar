"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import { TimeCard } from "@/components/TimeCard";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <h1 className="text-center font-extrabold text-8xl m-24 text-text-primary">
        Placar
      </h1>
      <div className="flex gap-4 w-full overflow-x-hidden justify-around">
        <TimeCard color="red" teamName="Time 1" />
        <TimeCard color="green" teamName="Time 2" />
        <TimeCard color="blue" teamName="Time 2" />
      </div>
    </div>
  );
}
