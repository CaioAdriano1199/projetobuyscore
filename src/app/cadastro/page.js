"use client";
import { useState } from "react";
import Image from "next/image";

export default function Cadastro() {
  const [isFranqueado, setIsFranqueado] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      
      {/* Logo */}
      <Image src="/logo.png" alt="Logo" width={80} height={80} className="mb-4" />

      {/* Título */}
      <h1 className="text-2xl font-bold text-blue-900 mb-6">Cadastro Lojista</h1>

      {/* Card de cadastro */}
      <div className="bg-blue-700 text-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-center mb-6">Crie sua conta</h2>

        <form className="grid grid-cols-2 gap-4">
          {/* Campos normais */}
          <input type="text" placeholder="Razão Social" className="p-2 rounded text-black col-span-2" />
          <input type="text" placeholder="Nicho da Loja" className="p-2 rounded text-black col-span-2" />

          <input type="email" placeholder="Email" className="p-2 rounded text-black" />
          <input type="tel" placeholder="Celular" className="p-2 rounded text-black" />

          <input type="text" placeholder="CNPJ" className="p-2 rounded text-black" />
          <input type="text" placeholder="CEP" className="p-2 rounded text-black" />

          <input type="text" placeholder="Logradouro" className="p-2 rounded text-black col-span-2" />
          <input type="text" placeholder="Número" className="p-2 rounded text-black" />
          <input type="text" placeholder="Cidade" className="p-2 rounded text-black" />
          <input type="text" placeholder="Estado" className="p-2 rounded text-black" />

          <input type="password" placeholder="Senha" className="p-2 rounded text-black" />
          <input type="password" placeholder="Confirmar Senha" className="p-2 rounded text-black" />

          {/* Checkbox */}
          <label className="flex items-center gap-2 col-span-2 mt-2">
            <input
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
              <input
                type="text"
                placeholder="CNPJ da Matriz"
                className="p-2 rounded text-black col-span-1"
              />
              <input
                type="text"
                placeholder="Código de verificação"
                className="p-2 rounded text-black col-span-1"
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
      </div>
    </div>
  );
}
