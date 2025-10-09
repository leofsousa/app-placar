"use client";
export const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="h-18 w-full bg-secondary flex items-center gap-4 justify-center">
      <button
        onClick={() => setActiveTab("placar")}
        className={`w-48 text-bold text-2xl px-4 py-2 rounded-xl ${
          activeTab === "placar"
            ? "bg-primary text-white"
            : "bg-accent text-secondary hover:bg-orange-100"
        }`}
      >
        Placar
      </button>
      <button
        onClick={() => setActiveTab("teams")}
        className={`w-40text-bold text-2xl px-4 py-2 rounded-xl ${
          activeTab === "teams"
            ? "bg-primary text-white"
            : "bg-accent text-secondary hover:bg-orange-100"
        }`}
      >
        Adicionar Times
      </button>
    </header>
  );
};
