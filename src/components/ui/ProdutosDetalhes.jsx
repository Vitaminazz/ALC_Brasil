import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Download,
  Wrench,
  CheckCircle2,
  Package,
  Square,
  Circle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import produtosData from "@/data/produtos.json";

export default function ProdutosDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = produtosData.find((product) => product.id === id) || null;
  const [selectedModel, setSelectedModel] = useState("0");
  const isLoading = false;

  const categoryLabels = {
    pecas_agricolas: "Peças Agrícolas",
    pecas_industriais: "Peças Industriais",
    implementos: "Implementos",
    acessorios: "Acessórios",
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Skeleton className="h-8 w-40 mb-8" />
          <div className="grid lg:grid-cols-2 gap-12">
            <Skeleton className="h-[500px] rounded-2xl" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <Package className="w-20 h-20 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Produto não encontrado
          </h2>
          <Button
            onClick={() => navigate("/produtos")}
            className="bg-[#159633] hover:bg-[#15941E]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Catálogo
          </Button>
        </div>
      </main>
    );
  }
const GeometryDisplay = ({ geometry }) => {
  if (!geometry) return null;
  
  return (
    <div className="flex items-center gap-2 mt-2">
      {geometry === "Quadrado" && (
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md border">
          <Square className="w-4 h-4 text-gray-700" />
          <span className="text-xs text-gray-700">Quadrado</span>
        </div>
      )}
      {geometry === "Circular" && (
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md border">
          <Circle className="w-4 h-4 text-gray-700" />
          <span className="text-xs text-gray-700">Circular</span>
        </div>
      )}
    </div>
  );
};
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white border-b pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/produtos"
            className="inline-flex items-center text-gray-600 hover:text-[#159633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Catálogo
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-10">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-50 h-50 object-scale-down"
                />
              ) : (
                <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Wrench className="w-32 h-32 text-gray-300" />
                </div>
              )}
            </div>

            <div className="absolute top-6 left-6">
              <Badge className="bg-[#159633] text-white font-semibold px-4 py-2 text-sm shadow-lg">
                Fabricação ALC
              </Badge>
            </div>
            <div>
              {product.category && (
                <Badge variant="outline" className="mb-4">
                  {categoryLabels[product.category] || product.category}
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Engenharia de Precisão",
                "Desenvolvimento Customizado",
                "Fabricação em Matão-SP",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-[#e0f7e7] text-green-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {product.models && product.models.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">
                        Especificações Técnicas
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Selecione a variação desejada
                      </p>
                    </div>

                    <div className="w-full sm:w-64">
                      <Select
                        value={selectedModel}
                        onValueChange={setSelectedModel}
                      >
                        <SelectTrigger className="w-full bg-white">
                          <SelectValue>
                            {product.models[parseInt(selectedModel)].label}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {product.models.map((model, index) => (
                            <SelectItem key={index} value={index.toString()}>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#159633]"></div>
                                <span>{model.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {product.models[parseInt(selectedModel)].label}
                      </h4>
                      <Badge variant="outline" className="text-sm">
                        Modelo {parseInt(selectedModel) + 1} de{" "}
                        {product.models.length}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(
                      product.models[parseInt(selectedModel)].specs,
                    ).map(([key, value]) => {
                      const isGeometryField =
                        key.includes("Geometria") ||
                        key.includes("Geometria (D)");

                      return (
                        <div
                          key={key}
                          className={`bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-[#159633] transition-all duration-300 hover:shadow-md ${
                            isGeometryField ? "" : ""
                          }`}
                        >
                          <div className="text-sm font-medium text-gray-500 mb-2">
                            {key}
                          </div>

                          {isGeometryField ? (
                            <div className="flex flex-col">
                              <div className="text-lg font-semibold text-gray-900 mb-3">
                                {Array.isArray(value)
                                  ? value.join(", ")
                                  : value}
                              </div>
                              <GeometryDisplay geometry={value} />
                            </div>
                          ) : (
                            <div className="text-lg font-semibold text-gray-900">
                              {value || "—"}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t gap-4">
                    <Button
                      variant="outline"
                      onClick={() =>
                        setSelectedModel(
                          Math.max(0, parseInt(selectedModel) - 1).toString(),
                        )
                      }
                      disabled={parseInt(selectedModel) === 0}
                      className="gap-2 w-full sm:w-auto"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Modelo Anterior
                    </Button>

                    <div className="flex gap-1 items-center">
                      <div className="flex gap-1">
                        {product.models
                          .slice(
                            Math.max(0, parseInt(selectedModel) - 2),
                            Math.min(
                              product.models.length,
                              parseInt(selectedModel) + 3,
                            ),
                          )
                          .map((_, index) => {
                            const actualIndex =
                              Math.max(0, parseInt(selectedModel) - 2) + index;
                            return (
                              <button
                                key={actualIndex}
                                onClick={() =>
                                  setSelectedModel(actualIndex.toString())
                                }
                                className={`
                                  w-2 h-2 rounded-full transition-all duration-300
                                  ${
                                    actualIndex === parseInt(selectedModel)
                                      ? "bg-[#159633] scale-125"
                                      : "bg-gray-300 hover:bg-gray-400"
                                  }
                                `}
                                aria-label={`Ir para modelo ${actualIndex + 1}`}
                              />
                            );
                          })}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      onClick={() =>
                        setSelectedModel(
                          Math.min(
                            product.models.length - 1,
                            parseInt(selectedModel) + 1,
                          ).toString(),
                        )
                      }
                      disabled={
                        parseInt(selectedModel) === product.models.length - 1
                      }
                      className="gap-2 w-full sm:w-auto"
                    >
                      Próximo Modelo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/551699321766?text=Olá! Gostaria de solicitar um orçamento para o produto: ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#159633] hover:bg-[#15941E] text-white font-bold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento no WhatsApp
                </Button>
              </a>

              {product.pdf_url && (
                <a
                  href={product.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 font-bold py-6 rounded-full hover:border-[#159633] hover:text-[#159633] transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Baixar Ficha Técnica
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
