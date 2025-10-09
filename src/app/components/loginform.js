"use client";

import { useState } from "react";
import Input from "./input";
import Button from "./button";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentando logar com:", { email, senha });
    // Aqui futuramente você chama a API de autenticação
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold text-center mb-2 text-[rgb(227,227,227)]">Login</h1>

      <Input
        label="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu Email"
        required
      />

      <Input
        label="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha"
        required
      />

      <Button type="submit" variant="primary" className="w-full mt-2">
        Login
      </Button>

      <p className="text-sm text-center mt-2 text-[rgb(227,227,227)]">
        Não tem conta? cadastre-se{" "}
        <a href="/cadastro" className="underline font-semibold">
           aqui!
        </a>
      </p>
    </form>
  );
}
