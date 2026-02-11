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
  Package, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1661917244769-a2f97a82ca22?q=80&w=1427',
    alt: 'Cilindro Hidráulico Industrial',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1661963024527-c855211ad31d?q=80&w=870',
    alt: 'Cilindro aplicado no setor Rodoviário',
  },
  {
    url: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=872',
    alt: 'Cenário de construção civíl',
  },
  {
    url: 'https://images.unsplash.com/photo-1763665814546-27c2c003317e?q=80&w=870',
    alt: 'Movimat aplicado',
  },
];

const segments = [
  {
    icon: Tractor,
    title: 'Agrícola e Florestal',
    description: 'A ALC atende o setor agrícola e florestal com cilindros hidráulicos de alta resistência, desenvolvidos para suportar condições severas de trabalho e longas jornadas operacionais. Nossas soluções contribuem diretamente para o aumento da produtividade no campo e na colheita florestal.',
  },
  {
    icon: Truck,
    title: 'Rodoviário',
    description: 'Desenvolvemos cilindros hidráulicos para implementos rodoviários com foco em desempenho, durabilidade e eficiência operacional. Atuamos com rigor técnico para entregar soluções que aumentam a produtividade no transporte de cargas e operações logísticas.',
  },
  {
    icon: Factory,
    title: 'Industrial',
    description: 'No setor industrial, a ALC fornece cilindros hidráulicos de alta precisão e confiabilidade, fabricados com controle rigoroso de qualidade e engenharia especializada, garantindo performance e segurança nos processos produtivos.',
  },
  {
    icon: Building2,
    title: 'Construção Civil e Infraestrutura',
    description: 'Cilindros hidráulicos são componentes essenciais em máquinas de construção e infraestrutura. ALC oferece soluções robustas, projetadas para suportar cargas elevadas e ambientes de operação exigentes.',
  },
  {
    icon: Package,
    title: 'Movimentação de Materiais (Movimat)',
    description: 'Atuamos também no setor de movimentação de materiais e intralogística, desenvolvendo cilindros hidráulicos confiáveis e seguros para operações contínuas e ambientes industriais dinâmicos.',
  },
];

export default function CilindrosHidraulicos() {
  const [expandedSegment, setExpandedSegment] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl relative">
                <div className="overflow-hidden">
                  <div className="relative h-[500px]">
                    <img
                      src={images[currentImageIndex].url}
                      alt={images[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir para imagem ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute top-6 left-6 z-10">
                <Badge className="bg-[#159633] text-white font-semibold px-4 py-2 text-sm shadow-lg">
                  Fabricação ALC
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
                Cilindros Hidráulicos
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A ALC desenvolve e fabrica cilindros hidráulicos de alto desempenho, projetados para atender aplicações severas com confiabilidade, precisão e longa vida útil. Nossas soluções são aplicadas em diversos segmentos que exigem força, resistência e engenharia de qualidade.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada cilindro é desenvolvido sob demanda, de acordo com a necessidade do projeto e da aplicação do cliente. Por isso, esses produtos não possuem especificações fixas em catálogo, sendo projetados com foco total em desempenho, segurança e precisão técnica.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['Engenharia de Precisão', 'Alta Resistência Estrutural', 'Fabricação Nacional', 'Projetos sob Demanda'].map((feature, idx) => (
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
                <h3 className="font-bold text-lg text-white">Segmentos de Atuação</h3>
                <p className="text-sm text-white/90 mt-1">Clique em cada segmento para ver mais detalhes</p>
              </div>
              <div className="divide-y">
                {segments.map((segment, index) => (
                  <div key={index} className={`transition-all ${expandedSegment === index ? 'bg-green-50' : 'hover:bg-gray-50'}`}>
                    <button
                      onClick={() => setExpandedSegment(expandedSegment === index ? null : index)}
                      className="w-full flex items-start gap-4 text-left p-5"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                        expandedSegment === index ? 'bg-[#159633] scale-110' : 'bg-[#159633]/10'
                      }`}>
                        <segment.icon className={`w-6 h-6 ${expandedSegment === index ? 'text-white' : 'text-[#159633]'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-gray-900">{segment.title}</h4>
                          <div className={`text-xs font-semibold px-3 py-1 rounded-full transition-all ${
                            expandedSegment === index 
                              ? 'bg-[#159633] text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {expandedSegment === index ? 'Clique para fechar' : 'Clique para expandir'}
                          </div>
                        </div>
                        {expandedSegment === index && (
                          <div className="text-sm text-gray-600 leading-relaxed mt-3 pr-4">
                            {segment.description}
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
                href="https://wa.me/551699321766?text=Olá! Gostaria de solicitar um orçamento para Cilindros Hidráulicos sob demanda da ALC."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-[#159633] hover:bg-[#15941E] text-white font-bold py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento no WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}