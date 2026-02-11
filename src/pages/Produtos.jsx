import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import ProdutosCard from "@/components/ui/ProdutosCard";
import produtosData from "@/data/produtos.json";

const categories = [
  { value: "all", label: "Todos" },
  { value: "pecas_agricolas", label: "Peças Agrícolas" },
  { value: "pecas_industriais", label: "Peças Industriais" },
  { value: "implementos", label: "Implementos" },
  { value: "acessorios", label: "Acessórios" },
];

const produtosEspeciais = [
  {
    id: "cilindros-hidraulicos",
    name: "Cilindros Hidráulicos",
    description:
      "Cilindros hidráulicos de alto desempenho, projetados sob demanda para aplicações severas com confiabilidade, precisão e longa vida útil.",
    image_url:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2400",
    category: "Projetos Especiais",
    isSpecial: true,
    featured: true,
    link: "/cilindros-hidraulicos"
  },
  {
    id: "projetos-customizados",
    name: "Projetos Customizados",
    description:
      "Peças, componentes e sistemas hidráulicos personalizados desenvolvidos sob medida desde a engenharia até a fabricação.",
    image_url:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2400",
    category: "Projetos Especiais",
    isSpecial: true,
    featured: true,
    link: "/projetos-customizados"
  },
];

export default function Produtos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const produtos = produtosData;
  const isLoading = false;

  const todosProdutos = [...produtosEspeciais, ...produtos];

  const filteredProdutos = todosProdutos.filter((product) => {
    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory ||
      (product.isSpecial && selectedCategory === "all");

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1482"
            alt="Produtos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#159633]/20 border border-[#159633]/30 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-[#159633] rounded-full" />
            <span className="text-[#159633] font-medium text-sm">
              Catálogo de Produtos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Produtos <span className="text-[#159633]">ALC Brasil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Cilindros hidráulicos, mancais MTS, cubos agrícolas e projetos
            customizados desenvolvidos com engenharia de precisão.
          </motion.p>
        </div>
      </section>

      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md shadow-md py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-full border-gray-300 focus:border-[#159633] focus:ring-[#159633]"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`rounded-full transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-[#159633] hover:bg-[#15941E] text-white"
                      : "hover:border-[#159633] hover:text-[#159633]"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            <Badge variant="secondary" className="bg-gray-100">
              {filteredProdutos.length} produtos
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <Skeleton className="h-64 w-full" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-full rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProdutos.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProdutos.map((product, index) => (
                <ProdutosCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-500">
                Tente ajustar sua busca ou filtros.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
