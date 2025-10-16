"use client";
import { useState } from "react";
import Image from "next/image";
import Input from "../components/input/input";
import Button from "../components/button/button";
import Card from "../components/card/card";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <Image src="/logo.png" alt="Logo" width={80} height={80} className="mb-4" />
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Cadastro Lojista</h1>
      <Card className="rounded-2xl shadow-lg p-8 w-full max-w-lg mb-[5%]">
        <h1 className="text-3xl font-semibold text-center mb-2 text-[rgb(227,227,227)] mb-[5%]">Crie sua conta</h1>

        <form className="grid grid-cols-6 gap-4">

          <Input
            label="Razão Social"
            type="text"
            colSpan="col-span-3"
            value={razaoSocial}
            className="p-2 rounded text-black"
            onChange={(e) => setRazaoSocial(e.target.value)}
            required
          />

          <Input
            label="Nicho da Loja"
            type="text"
            value={nichoLoja}
            colSpan="col-span-3"
            className="p-2 rounded text-black"
            onChange={(e) => setNichoLoja(e.target.value)}
            required
          />


          <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 100%Autocomplete }}
            className="p-2 rounded text-black col-span-3"
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
          

          <Input
            label="Email"
            type="email"
            value={email}
            colSpan="col-span-3"
            className="p-2 rounded text-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Celular"
            type="tel"
            value={celular}
            colSpan="col-span-3"
            className="p-2 rounded text-black"
            onChange={(e) => setCelular(e.target.value)}
            required
          />
          <Input
            label="CNPJ"
            type="text"
            value={cnpj}
            colSpan="col-span-3"
            className="p-2 rounded text-black"
            onChange={(e) => setCnpj(e.target.value)}
            required
          />
          <Input
            label="CEP"
            type="text"
            value={cep}
            colSpan="col-span-2"
            className="p-2 rounded text-black"
            onChange={(e) => setCep(e.target.value)}
            required
          />

          <Input
            label="Número"
            type="text"
            value={numero}
            colSpan="col-span-1"
            className="p-2 rounded text-black col-span-1"
            onChange={(e) => setNumero(e.target.value)}
            required
          />

          <Input
            label="Logradouro"
            type="text"
            value={logradouro}
            colSpan="col-span-3"
            className="p-2 rounded text-black col-span-2"
            onChange={(e) => setLogradouro(e.target.value)}
            required
          />

          <Input
            label="Cidade"
            type="text"
            value={cidade}
            colSpan="col-span-2"
            className="p-2 rounded text-black"
            onChange={(e) => setCidade(e.target.value)}
            required
          />
          <Input
            label="Estado"
            type="text"
            value={estado}
            colSpan="col-span-1"
            className="p-2 rounded text-black"
            onChange={(e) => setEstado(e.target.value)}
            required
          />
          <Input
            label="Senha"
            type="password"
            value={senha}
            colSpan="col-span-2"
            className="p-2 rounded text-black"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Input
            label="Confirmar Senha"
            type="password"
            colSpan=" col-span-2"
            value={confirmarSenha}
            className="p-2 rounded text-black"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />

          <label className="flex items-center gap-2 text-[rgb(227,227,227)] col-span-4 mt-2">
            <input
              type="checkbox"
              checked={isFranqueado}
              onChange={() => setIsFranqueado(!isFranqueado)}
              className="w-4 h-4"
            />
            É um franqueado?
          </label>

          {isFranqueado && (
            <>
              <Input
                label="CNPJ da Matriz"
                type="text"
                value={cnpjMatriz}
                colSpan="col-span-2"
                className="p-2 rounded text-black col-span-1"
                onChange={(e) => setCnpjMatriz(e.target.value)}
              />
              <Input
                label="Código de verificação"
                type="text"
                value={codigoVerificacao}
                colSpan="col-span-2"
                className="p-2 rounded text-black col-span-1"
                onChange={(e) => setCodigoVerificacao(e.target.value)}
              />
              <Button
                type="submit" variant="primary"
                className="col-span-4"
              >
                Enviar código
              </Button>
            </>
          )}

          <Button
            type="submit" variant="primary"
            className="col-span-4"
          >
            Cadastrar
          </Button>
        </form>
      </Card>
    </div>
  );
}
