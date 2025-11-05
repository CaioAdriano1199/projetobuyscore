"use client";
import { useEffect, useState } from "react";
import Button from "../button/button";
import CameraButton from "../cameraButton/CameraButton";
import Modal from "../modal/modal";
import Input from "../input/input";

export default function Itensloja({ tipo, searchTerm }) {
  const [produtos, setProdutos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);


  const modaleditarproduto = (produto) => {
    setProdutoSelecionado(produto);
    setIsModalOpen(true);
  };


  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const resposta = await fetch("/mock/produtos.json");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (erro) {
        console.error("Erro ao carregar produtos:", erro);
      }
    };

    carregarProdutos();
  }, []);

  const alternarAtivo = (id) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ativo: !p.ativo } : p))
    );
  };

  const produtosFiltradosPorStatus =
    tipo === "ativos"
      ? produtos.filter((p) => p.ativo)
      : produtos.filter((p) => !p.ativo);

  const produtosFiltrados = produtosFiltradosPorStatus.filter((p) =>
    p.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      {produtosFiltrados.length > 0 ? (
        produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            className="flex justify-between items-center w-[80%] px-4 py-3 "
          >
            <div className="flex items-center gap-3">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-12 h-12"
              />
              <span className="text-[var(--azulescuro)] font-semibold">
                {produto.nome}
              </span>
            </div>

            <span className="text-[var(--azulescuro)] font-semibold">
              {produto.pontos} pts
            </span>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => alternarAtivo(produto.id)}
                variant="primary"
                className="p-2"
              >
                {produto.ativo ? "🚫" : "✅"}
              </Button>
              <Button variant="primary" className="p-2" onClick={() => modaleditarproduto(produto)}>
                ✏️
              </Button>
              <Button variant="primary" className="p-2">
                🗑️
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[var-(--cinza)]">Nenhum produto encontrado.</p>
      )}
     
      <Modal
      
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width="max-w-md"
        className="bg-[var(--branco)] rounded-lg">
           {produtoSelecionado ? (
        <div className="grid grid-cols-5 justify-start auto-rows-max">
          <h2 className="text-2xl text-[var(--azulescuro)] font-bold text-center col-span-5 mb-4">Editar Produto</h2>
          <Input labelColor="azulescuro" label="Nome do produto" colSpan="col-span-5" value={produtoSelecionado.nome}
            onChange={(e) =>
              setProdutoSelecionado({ ...produtoSelecionado, nome: e.target.value })
            } />
          <Input labelColor="azulescuro" label="Pontos necessários" type="number" colSpan="col-span-3" value={produtoSelecionado.pontos}
            onChange={(e) =>
              setProdutoSelecionado({
                ...produtoSelecionado,
                pontos: Number(e.target.value),
              })
            } />
          <div className="flex items-center col-span-3">
            <CameraButton textolabel="Imagem Produto" labelcolor="azulescuro" initialImage={produtoSelecionado.imagem}
              onImageChange={(novaImagem) =>
                setProdutoSelecionado({ ...produtoSelecionado, imagem: novaImagem })
              } />
          </div>

          <Button variant="primary" className="col-span-5 mt-6 justify-self-center">
            Salvar Alterações
          </Button>

        </div>
      ) : (null)}
      </Modal>
    </div>
  );
}
