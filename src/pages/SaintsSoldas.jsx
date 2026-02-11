import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Flame,
  Shield,
  Zap,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const produtos = [
  {
    name: "Máquinas de Solda MIG/MAG",
    description: "Equipamentos de alta performance para soldagem contínua.",
    features: [
      "Regulagem digital",
      "Alimentador integrado",
      "Alta produtividade",
    ],
  },
  {
    name: "Inversoras de Solda TIG",
    description:
      "Precisão e acabamento superior para trabalhos especializados.",
    features: ["Ignição HF", "Controle de amperagem", "Pulso programável"],
  },
  {
    name: "Máquinas de Corte Plasma",
    description: "Corte limpo e preciso em diversos materiais.",
    features: ["Corte CNC compatível", "Tocha refrigerada", "Alta velocidade"],
  },
  {
    name: "Consumíveis de Soldagem",
    description: "Arames, eletrodos e gases de alta qualidade.",
    features: ["Ampla variedade", "Qualidade certificada", "Entrega rápida"],
  },
  {
    name: "Equipamentos de Proteção",
    description: "EPIs específicos para soldadores profissionais.",
    features: [
      "Máscaras automáticas",
      "Aventais e luvas",
      "Proteção respiratória",
    ],
  },
  {
    name: "Acessórios e Peças",
    description: "Componentes originais para manutenção e reposição.",
    features: ["Tochas e cabos", "Bicos e difusores", "Peças de reposição"],
  },
];

export default function SaintsSoldas() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070"
            alt="Welding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-800/90 to-orange-900/80" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              initial={{
                x: `${Math.random() * 100}%`,
                y: "50%",
                opacity: 0,
              }}
              animate={{
                y: ["50%", `${Math.random() * 100}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-medium text-sm">
                Revenda Autorizada
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6"
            >
              <span className="text-yellow-400">SAINTS</span> SOLDAS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              A ALC Brasil é revenda autorizada Saints Soldas. Equipamentos
              profissionais de soldagem com garantia e suporte técnico
              especializado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de informações sobre os produtos Saints Soldas."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Garantia de Fábrica",
                desc: "Produtos com garantia oficial Saints Soldas",
              },
              {
                icon: Zap,
                title: "Alta Performance",
                desc: "Equipamentos para uso profissional intensivo",
              },
              {
                icon: Flame,
                title: "Suporte Técnico",
                desc: "Assistência especializada e peças originais",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-orange-900/50 to-gray-800 p-8 rounded-2xl border border-orange-500/20"
              >
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <Badge className="bg-orange-100 text-orange-700 font-semibold mb-4">
        Linha Completa
      </Badge>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
        Equipamentos <span className="text-orange-500">Saints Soldas</span> Disponíveis
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Alguns dos equipamentos profissionais disponíveis sob consulta pela ALC Agrícola.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {produtos.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
          <div className="h-2 bg-gradient-to-r from-orange-500 to-yellow-500" />
          <div className="p-8">
            <Badge className="bg-orange-100 text-orange-700 text-xs font-semibold mb-3">
              {product.category || "Soldagem"}
            </Badge>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <ul className="space-y-2 mb-6">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/551699321766?text=Olá! Gostaria de consultar disponibilidade de equipamentos Saints Soldas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold"
              >
                Consultar Disponibilidade
              </Button>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 font-semibold text-sm">
                Parceria Oficial
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ALC Agrícola |{" "}
              <span className="text-orange-500">
                Revenda Autorizada Saints Soldas
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              A ALC Agrícola atua como revenda autorizada Saints Soldas,
              fornecendo equipamentos de soldagem profissional, consumíveis e
              peças originais. Além da comercialização, oferecemos suporte
              técnico, orientação especializada e atendimento direto para
              orçamentos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-6"
          >
            Precisa de Equipamentos de Soldagem?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-10"
          >
            Entre em contato e solicite um orçamento personalizado para sua
            empresa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://wa.me/5500000000000?text=Olá! Gostaria de um orçamento para equipamentos Saints Soldas."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-10 py-6 text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Saints Soldas – ALC Agrícola
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
