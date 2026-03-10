import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contato() {
  const contatoInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(16) 99632-1766",
      link: "tel:+551633821615",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "(16) 99632-1766",
      link: "https://wa.me/551699321766",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "ppcp@alcbrasil.com.br",
      link: "mailto:ppcp@alcbrasil.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua Ernesto Victório Geraldo, 160 - Matão/SP, CEP 15991-414",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 07h às 12h – 13h às 17h",
      link: null,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?q=80&w=870"
            alt="Contato"
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
            <Mail className="w-4 h-4 text-[#159633]" />
            <span className="text-[#159633] font-medium text-sm">
              Fale Conosco
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Entre em <span className="text-[#159633]">Contato</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Nossa equipe de engenharia está pronta para desenvolver soluções
            personalizadas para seu negócio.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6 mb-12">
                {contatoInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-[#159633]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#159633] transition-colors">
                          <item.icon className="w-6 h-6 text-[#159633] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            {item.title}
                          </p>
                          <p className="font-semibold text-gray-900 group-hover:text-[#159633] transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md">
                        <div className="w-12 h-12 bg-[#159633]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-[#159633]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">
                            {item.title}
                          </p>
                          <p className="font-semibold text-gray-900">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#159633] to-[#15941E] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Atendimento Rápido</h3>
                <p className="text-white/90 mb-6">
                  Prefere um atendimento mais ágil? Fale diretamente com nossa
                  equipe técnica pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/551699321766?text=Olá! Gostaria de mais informações sobre projetos de engenharia agrícola."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-[#159633] hover:bg-gray-100 font-bold px-8 py-6 rounded-full w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  Envie uma Mensagem
                </h2>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo que entraremos em contato.
                </p>

                <form
                  action="https://formsubmit.co/vendas@alcbrasil.com.br"
                  method="POST"
                  className="space-y-6"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Novo Contato - Site ALC Brasil"
                  />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Recebemos sua mensagem! Entraremos em contato em breve. - Equipe ALC Brasil"
                  />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="http://alcbrasil.com.br/obrigado"
                  />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="rounded-xl border-gray-300 focus:border-[#159633] focus:ring-[#159633]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputmode="numeric"
                        maxlength="11"
                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                        placeholder="(00) 00000-0000"
                        required
                        className="rounded-xl border-gray-300 focus:border-[#159633] focus:ring-[#159633]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="rounded-xl border-gray-300 focus:border-[#159633] focus:ring-[#159633]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sobre o que deseja falar?"
                      className="rounded-xl border-gray-300 focus:border-[#159633] focus:ring-[#159633]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Digite sua mensagem..."
                      rows={5}
                      required
                      className="rounded-xl border-gray-300 focus:border-[#159633] focus:ring-[#159633]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#159633] hover:bg-[#15941E] text-white font-bold py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
