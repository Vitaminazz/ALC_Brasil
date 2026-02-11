import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, MessageCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Obrigado() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074"
            alt="Confirmação"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#159633]/20 border border-[#159633]/30 rounded-full px-4 py-2 mb-6"
          >
            <CheckCircle className="w-4 h-4 text-[#159633]" />
            <span className="text-[#159633] font-medium text-sm">
              Mensagem Enviada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Recebemos sua <span className="text-[#159633]">Mensagem</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Agradecemos pelo seu interesse. Nossa equipe técnica entrará em 
            contato em breve.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 lg:p-10"
            >
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-20 h-20 bg-[#159633]/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#159633]" />
                </div>
                
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  Solicitação Registrada com Sucesso
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Sua mensagem foi recebida por nossa equipe de engenharia e 
                  está sendo processada. Em instantes, você receberá uma 
                  confirmação por e-mail com os detalhes do seu contato.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 w-full max-w-md">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Próximos Passos:
                  </h3>
                  <ol className="text-left text-gray-600 space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#159633] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </span>
                      <span>Confirmação automática por e-mail (cheque sua caixa de entrada)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#159633] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </span>
                      <span>Análise técnica pela equipe ALC (em até 24h úteis)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#159633] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        3
                      </span>
                      <span>Contato personalizado com proposta técnica</span>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 font-bold py-3 px-8 rounded-full hover:border-[#159633] hover:text-[#159633]"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Voltar ao Início
                  </Button>
                </Link>
                
                <Link to="/produtos">
                  <Button className="bg-[#159633] hover:bg-[#15941E] text-white font-bold py-3 px-8 rounded-full">
                    Conhecer Produtos
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#159633] to-[#15941E] rounded-2xl p-8 text-white md:w-fit h-fit"
            >
              <h3 className="text-xl font-bold mb-6">Contato Imediato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Telefone Direto</p>
                    <a 
                      href="tel:+5516996321766"
                      className="font-bold text-lg text-white hover:opacity-90 transition-opacity"
                    >
                      (16) 99632-1766
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">WhatsApp</p>
                    <a 
                      href="https://wa.me/551699321766"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-lg text-white hover:opacity-90 transition-opacity"
                    >
                      Conversar Agora
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-90">E-mail Principal</p>
                    <a 
                      href="mailto:ppcp@alcbrasil.com.br"
                      className="font-bold text-white hover:opacity-90 transition-opacity"
                    >
                      ppcp@alcbrasil.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-90 mb-4 text-center">
                  Precisando de resposta urgente?
                </p>
                <a 
                  href="https://wa.me/551699321766?text=Olá! Acabei de enviar um formulário e gostaria de acompanhamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-white text-[#159633] hover:bg-gray-100 font-bold py-3 rounded-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}