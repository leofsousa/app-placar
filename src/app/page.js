"use client";
import { useState } from "react";
import { Header } from "@/components/Header";

export default function Home() {
  const [activeTab, setActiveTab] = useState("placar");

  return (
    <div className="">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
