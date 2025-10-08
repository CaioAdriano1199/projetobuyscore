"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "../components/input";
import Button from "../components/button";
import Card from "../components/card";

export default function Cadastro() {
  const [isFranqueado, setIsFranqueado] = useState(false);
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nichoLoja, setNichoLoja] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState(""); 
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [cnpjMatriz, setCnpjMatriz] = useState("");
  const [codigoVerificacao, setCodigoVerificacao] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={80} height={80} className="mb-4" />

      {/* Título */}
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Cadastro Lojista</h1>

      {/* Card de cadastro */}
      <Card className="rounded-2xl shadow-lg p-8 w-full max-w-lg mb-[5%]">
        <h1 className="text-3xl font-semibold text-center mb-2 text-[rgb(227,227,227)] mb-[5%]">Crie sua conta</h1>

        <form className="grid grid-cols-2 gap-4">
          {/* Campos normais */}
          <Input
            label="Razão Social"
            type="text"
            value={razaoSocial}
            className="p-2 rounded text-black col-span-2"
            onChange={(e) => setRazaoSocial(e.target.value)}
            required
          />

          <Input
            label="Nicho da Loja"
            type="text"
            value={nichoLoja}
            className="p-2 rounded text-black col-span-2"
            onChange={(e) => setNichoLoja(e.target.value)}
            required
            />

            <Input
            label="Email"
            type="email"
            value={email}
            className="p-2 rounded text-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Celular"
            type="tel"
            value={celular}
            className="p-2 rounded text-black"
            onChange={(e) => setCelular(e.target.value)}
            required
          />
          <Input
            label="CNPJ"
            type="text" 
            value={cnpj}
            className="p-2 rounded text-black"
            onChange={(e) => setCnpj(e.target.value)}
            required
          />
          <Input
            label="CEP"
            type="text"
            value={cep}
            className="p-2 rounded text-black"
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <Input
            label="Logradouro"
            type="text"
            value={logradouro}
            className="p-2 rounded text-black col-span-2"
            onChange={(e) => setLogradouro(e.target.value)}
            required
          />
          <Input
            label="Número"
            type="text"
            value={numero}  
            className="p-2 rounded text-black"
            onChange={(e) => setNumero(e.target.value)}
            required
          />
          <Input
            label="Cidade"
            type="text" 
            value={cidade}
            className="p-2 rounded text-black"
            onChange={(e) => setCidade(e.target.value)}
            required
          />
          <Input
            label="Estado"
            type="text"
            value={estado}
            className="p-2 rounded text-black"
            onChange={(e) => setEstado(e.target.value)}
            required
          />
          <Input
            label="Senha"
            type="password"
            value={senha}
            className="p-2 rounded text-black"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Input
            label="Confirmar Senha"
            type="password"
            value={confirmarSenha}
            className="p-2 rounded text-black"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />

          {/* Checkbox */}
          <label className="flex items-center gap-2 col-span-2 mt-2">
            <Input
              type="checkbox"
              checked={isFranqueado}
              onChange={() => setIsFranqueado(!isFranqueado)}
              className="w-4 h-4"
            />
            É um franqueado?
          </label>

          {/* Campos extras se franqueado */}
          {isFranqueado && (
            <>
            <Input
                label="CNPJ da Matriz"
                type="text"
                value={cnpjMatriz}
                className="p-2 rounded text-black col-span-1"
                onChange={(e) => setCnpjMatriz(e.target.value)}
                />
            <Input
                label="Código de verificação"
                type="text"
                value={codigoVerificacao}
                className="p-2 rounded text-black col-span-1"
                onChange={(e) => setCodigoVerificacao(e.target.value)}
                />
              <button
                type="button"
                className="col-span-2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded"
              >
                Enviar código
              </button>
            </>
          )}

          {/* Botão principal */}
          <button
            type="submit"
            className="col-span-2 bg-gray-900 hover:bg-gray-800 text-white p-2 rounded mt-4"
          >
            Cadastrar
          </button>
        </form>
      </Card>
    </div>
  );
}
