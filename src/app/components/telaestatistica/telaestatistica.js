"use client";
import Button from "../button/button";
import GraficoColuna from "../grafico/GraficoColuna";

export default function Telaestatistica() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen">
      <div className="flex justify-between bg-[var(--azulescuro)] w-full items-center">
        <div className="flex divide-x divide-white">
          <Button variant="terciary" className="text-white px-6 py-4">
            Pontos
          </Button>
          <Button variant="terciary" className="text-white px-6 py-4">
            Clientes Pontuando
          </Button>
          <Button variant="terciary" className="text-white px-6 py-4">
            Itens Resgatados
          </Button>
        </div>

        <h1 className="text-4xl text-[var(--branco)] p-5">Estatísticas</h1>
      </div>


      <div className="flex-1 w-full">
        <GraficoColuna />
      </div>
    </div>
  );
}
