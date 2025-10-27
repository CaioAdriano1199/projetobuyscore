"use client";
import { useState } from "react";
import Sidemenu from "../components/sidemenu/sidemenu";
import Telapontuacao from "../components/telapontuacao/telapontuacao";
import Telaestatistica from "../components/telaestatistica/telaestatistica";

export default function Page() {
  const [currentView, setCurrentView] = useState("pontuacao");

  function handleSelect(viewId) {
    setCurrentView(viewId);
  }

  function renderView() {
    switch (currentView) {
      case "pontuacao":
        return <Telapontuacao />;
      case "estatisticas":
        return <Telaestatistica />;
      default:
        return <Telapontuacao />;
    }
  }

  return (
    <div className="flex">
      <Sidemenu currentView={currentView} onSelect={handleSelect}/>
      <div className="w-[85%] h-screen">
        {renderView()}
      </div>
    </div>
  );
}