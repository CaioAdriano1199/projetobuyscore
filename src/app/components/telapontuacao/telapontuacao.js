"use client";
import { useState } from "react";
import Button from "../button/button";
import Input from "../input/input";

export default function Telapontuacao() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 mt-4">Tela de Pontuação</h1>
      <div className="flex flex-col items-center justify-center flex-grow">
      <Input label={"valor"} placeholder="0"></Input>
      <Button variant="primary"> gerar pontos</Button>
      </div>
    </div>
  );
}