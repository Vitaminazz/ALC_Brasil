import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TituloDaSessao from "@/components/ui/TituloDaSessao";
import ProdutosCard from "@/components/ui/ProdutosCard";

export default function ProdutosDestaque({ produtos }) {
  const listaProdutos = Array.isArray(produtos) ? produtos : [];

  const produtosFiltrados = listaProdutos.filter(p => p.featured).slice(0, 4);
  const displayProdutos =
    produtosFiltrados.length > 0
      ? produtosFiltrados
      : listaProdutos.slice(0, 4);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TituloDaSessao
          title="Produtos em Destaque"
          subtitle="Conheça nossa linha de produtos de fabricação própria com a mais alta qualidade e durabilidade."
        />

        {displayProdutos.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {displayProdutos.map((product, index) => (
                <ProdutosCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/produtos">
                <Button className="bg-[#159633] hover:bg-[#15941E] text-white font-bold px-8 py-6 rounded-full">
                  Ver Catálogo Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Produtos em breve...</p>
          </div>
        )}
      </div>
    </section>
  );
}
