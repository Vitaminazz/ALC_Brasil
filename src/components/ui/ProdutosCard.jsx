import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./button";

export default function ProdutosCard({ product, index = 0 }) {
  const categoryLabels = {
    pecas_agricolas: "Peças Agrícolas",
    pecas_industriais: "Peças Industriais",
    implementos: "Implementos",
    acessorios: "Acessórios",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-scale-down group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Wrench className="w-20 h-20 text-gray-300" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 left-4">
            <Badge className="bg-[#159633] hover:bg-[#15941E] text-white font-semibold px-3 py-1">
              Fabricação ALC
            </Badge>
          </div>

          {product.category && (
            <div className="absolute top-4 right-4">
              <Badge
                variant="secondary"
                className="bg-white/90 text-gray-700 font-medium"
              >
                {categoryLabels[product.category] || product.category}
              </Badge>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-[#159633] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>

          {product.models && product.models.length > 0 && (
            <div className="mb-4">
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {product.models.length} modelo
                {product.models.length > 1 ? "s" : ""} disponível
                {product.models.length > 1 ? "s" : ""}
              </span>
            </div>
          )}

          <Link to={product.link || `/produtos/${product.id}`}>
            {" "}
            <Button
              variant="outline"
              className="w-full border-[#159633] text-[#159633] hover:bg-[#159633] hover:text-white font-semibold rounded-full group/btn transition-all duration-300"
            >
              Ver Especificações
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
