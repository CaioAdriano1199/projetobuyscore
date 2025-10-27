"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GraficoColuna() {
  const data = [
    { nome: "Jan", pontos: 400 },
    { nome: "Fev", pontos: 300 },
    { nome: "Mar", pontos: 500 },
    { nome: "Abr", pontos: 250 },
    { nome: "Mai", pontos: 450 },
  ];

  return (
    <div className="w-full h-full bg-[var(--branco)] p-4 shadow-md flex flex-col">
      <h2 className="text-[var(--azulescuro)] text-xl font-semibold mb-4">
        Pontos
      </h2>

      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--azulescuro)" />
            <XAxis dataKey="nome" stroke="var(--azulescuro)" />
            <YAxis stroke="var(--azulescuro)" />
            <Tooltip />
            <Bar
              dataKey="pontos"
              fill="var(--azulclaro)"
              barSize={40}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
