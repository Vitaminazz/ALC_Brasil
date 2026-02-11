import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, Cog, Shield } from "lucide-react";

export default function Sobre() {
  const features = [
    {
      icon: Factory,
      title: "Engenharia Integrada",
      description: "Projetos completos desde o conceito até a entrega final.",
    },
    {
      icon: Cog,
      title: "Soluções Personalizadas",
      description:
        "Desenvolvimento sob medida conforme necessidade técnica de cada cliente.",
    },
    {
      icon: Shield,
      title: "Controle Técnico",
      description:
        "Rastreabilidade completa e testes de pressão e estanqueidade.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070')] bg-cover bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#159633]/10 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#159633] rounded-full" />
              <span className="text-[#159633] font-semibold text-sm">
                Sobre Nós
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Engenharia Aplicada
              <span className="text-[#159633]"> ao Agronegócio</span>{" "}
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A ALC Brasil LTDA, fundada em 2024, une engenharia industrial ao
              agronegócio. Desenvolvemos sistemas hidráulicos, eletropneumáticos
              e componentes agrícolas personalizados com precisão técnica e
              inovação contínua.{" "}
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Engenharia mecânica, elétrica e eletroeletrônica",
                "Projetos hidráulicos e eletropneumáticos sob medida",
                "Desenvolvimento customizado de componentes",
                "Localização estratégica em Matão-SP",
                ,
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#159633] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#159633]/10 rounded-xl flex items-center justify-center group-hover:bg-[#159633] transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#159633] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
