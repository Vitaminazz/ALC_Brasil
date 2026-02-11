import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle2, 
  Tractor, 
  Truck, 
  Factory, 
  Building2, 
  Settings 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const applications = [
  {
    icon: Tractor,
    title: 'Agrícola',
    description: 'Projetos especiais para máquinas agrícolas, implementos e sistemas hidráulicos sob medida.',
  },
  {
    icon: Truck,
    title: 'Rodoviário',
    description: 'Soluções hidráulicas personalizadas para implementos rodoviários e equipamentos de transporte.',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Desenvolvimento de cilindros e sistemas hidráulicos específicos para processos industriais.',
  },
  {
    icon: Building2,
    title: 'Construção e Infraestrutura',
    description: 'Componentes hidráulicos sob medida para máquinas de construção pesada.',
  },
  {
    icon: Settings,
    title: 'Máquinas Especiais',
    description: 'Projetos customizados para equipamentos fora de linha ou aplicações não padronizadas.',
  },
];

export default function ProjetosCustomizados() {
  const [expandedApp, setExpandedApp] = useState(null);
  const navigate = useNavigate();

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
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2400"
                  alt="Projetos Customizados"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute top-6 left-6">
                <Badge className="bg-[#159633] text-white font-semibold px-4 py-2 text-sm shadow-lg">
                  Projeto Especial ALC
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Soluções Hidráulicas Sob Medida
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A ALC desenvolve peças, componentes e sistemas hidráulicos personalizados de acordo com a necessidade de cada cliente. Atuamos desde a engenharia até a fabricação, oferecendo soluções sob medida para aplicações específicas.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Engenharia Aplicada', 'Desenvolvimento Personalizado', 'Fabricação Nacional', 'Atendimento Técnico Especializado'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
              <div className="bg-gradient-to-r from-[#159633] to-[#15941E] px-6 py-4">
                <h3 className="font-bold text-lg text-white">Onde Atuamos com Projetos Especiais</h3>
                <p className="text-sm text-white/90 mt-1">Clique em cada área para ver mais detalhes</p>
              </div>
              <div className="divide-y">
                {applications.map((app, index) => (
                  <div key={index} className={`transition-all ${expandedApp === index ? 'bg-green-50' : 'hover:bg-gray-50'}`}>
                    <button
                      onClick={() => setExpandedApp(expandedApp === index ? null : index)}
                      className="w-full flex items-start gap-4 text-left p-5"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        expandedApp === index ? 'bg-[#159633] scale-110' : 'bg-[#159633]/10'
                      }`}>
                        <app.icon className={`w-6 h-6 ${expandedApp === index ? 'text-white' : 'text-[#159633]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-gray-900">{app.title}</h4>
                          <div className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                            expandedApp === index 
                              ? 'bg-[#159633] text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {expandedApp === index ? 'Clique para fechar' : 'Clique para expandir'}
                          </div>
                        </div>
                        {expandedApp === index && (
                          <div className="text-sm text-gray-600 leading-relaxed mt-3 pr-4">
                            {app.description}
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="sticky top-24">
              <a
                href="https://wa.me/551699321766?text=Olá! Gostaria de solicitar um projeto hidráulico personalizado."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#159633] hover:bg-[#15941E] text-white font-bold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Engenharia da ALC
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}