import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const partners = [
  { id: "1", name: "Agristar", imageUrl: "/parceiros/AGRISTAR.png" },
  { id: "2", name: "ArcelorMitall", imageUrl: "/parceiros/ARCELORMITTAL.png" },
  { id: "3", name: "Agel", imageUrl: "/parceiros/AGEL.jpg" },
  { id: "4", name: "Cadioli", imageUrl: "/parceiros/CADIOLI.png" },
  { id: "5", name: "D.Carvalho/John Deere", imageUrl: "/parceiros/DCARVALHOJOHNDEERE.jfif" },
  { id: "6", name: "Gerdau", imageUrl: "/parceiros/GERDAU.jpg" },
  { id: "7", name: "GMF Pulverizadores", imageUrl: "/parceiros/GMFPULVERIZADORES.png" },
  { id: "8", name: "JP pulverizadores", imageUrl: "/parceiros/JPPULVERIZADORES.png" },
  { id: "9", name: "MTD agricola", imageUrl: "/parceiros/MTDAGRICOLA.png" },
  { id: "10", name: "Vedacubo", imageUrl: "/parceiros/VEDACUBO.png" },
  { id: "11", name: "JCV fundição", imageUrl: "/parceiros/JCV.png" },
];

export default function Partners() {
  const [isHovering, setIsHovering] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
      align: "center",
    },
    [
      Autoplay({
        delay: 1100,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    if (isHovering) {
      emblaApi.plugins().autoplay.stop();
    } else {
      emblaApi.plugins().autoplay.play();
    }
  }, [emblaApi, isHovering]);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=869"
            alt="Indústria e Parceiros"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#159633]/20 border border-[#159633]/30 rounded-full px-4 py-2 mb-6"
          >
            <Handshake className="w-4 h-4 text-[#159633]" />
            <span className="text-[#159633] font-medium text-sm">
              Parcerias de Sucesso
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Parceiros & <span className="text-[#159633]">Fornecedores</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Parcerias sólidas no agronegócio e na indústria, baseadas em
            confiança, prazo e performance técnica.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Empresas Parceiras
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Relacionamentos estratégicos que impulsionam nossa excelência
              técnica.
            </p>
          </div>

          <div
            ref={emblaRef}
            className="embla overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="embla__container flex">
              {partners.map((partner, index) => {
                const distance = Math.abs(selectedIndex - index);
                const isActive = distance === 0;

                return (
                  <div
                    key={partner.id}
                    className="embla__slide flex-[0_0_280px] min-w-0 pl-6 flex justify-center"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 0.9,
                        opacity: isActive ? 1 : 0.4,
                        filter: "none",
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex flex-col items-center h-[260px] justify-center"
                    >
                      <div className="bg-white rounded-2xl h-40 w-72 flex items-center justify-center shadow-lg border border-gray-200">
                        <img
                          src={partner.imageUrl}
                          alt={partner.name}
                          className="w-32 h-32 object-contain p-4"
                        />
                      </div>

                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 font-semibold text-gray-700"
                        >
                          {partner.name}
                        </motion.span>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
