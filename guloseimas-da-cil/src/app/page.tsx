"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Ou use o caminho relativo se necessário
import { Button } from "@/components/ui/button"; // Ou use o caminho relativo se necessário
import { ShoppingCart, Mail } from "lucide-react";

const produtos = [
  { id: 1, nome: "Brigadeiro Gourmet", preco: "R$ 3,50", imagem: "https://via.placeholder.com/150" },
  { id: 2, nome: "Bolo de Cenoura", preco: "R$ 25,00", imagem: "https://via.placeholder.com/150" },
  { id: 3, nome: "Cupcake de Morango", preco: "R$ 8,00", imagem: "https://via.placeholder.com/150" },
];

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      if (prevCarrinho.some((item) => item.id === produto.id)) {
        return prevCarrinho; // Produto já está no carrinho
      }
      return [...prevCarrinho, produto]; // Adiciona o produto se não estiver no carrinho
    });
  };

  return (
    <div className="p-4">
      <header className="bg-pink-500 text-white text-center p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">Guloseimas da Cil</h1>
        <p className="text-lg">Os doces mais deliciosos para adoçar seu dia!</p>
      </header>
      
      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <Card key={produto.id} className="p-4 bg-white shadow-md rounded-xl">
            <img src={produto.imagem} alt={produto.nome} className="rounded-xl" />
            <CardContent>
              <h2 className="text-xl font-semibold mt-2">{produto.nome}</h2>
              <p className="text-pink-600 font-bold">{produto.preco}</p>
              <Button className="mt-2 w-full bg-pink-500 hover:bg-pink-700" onClick={() => adicionarAoCarrinho(produto)}>
                <ShoppingCart className="mr-2" /> Adicionar ao Carrinho
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8 text-center">
        <h2 className="text-2xl font-bold">Entre em contato</h2>
        <p className="text-gray-600">Peça seus doces pelo WhatsApp ou e-mail!</p>
        <div className="mt-4">
          <Button className="bg-green-500 hover:bg-green-700 mx-2">
            <Mail className="mr-2" /> WhatsApp
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-700 mx-2">
            <Mail className="mr-2" /> E-mail
          </Button>
        </div>
      </section>
    </div>
  );
}
