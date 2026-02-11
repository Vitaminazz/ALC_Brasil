import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ message = "Olá! Gostaria de mais informações sobre soluções em engenharia agrícola da ALC Brasil." }) {
  const whatsappNumber = "551699321766";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="hidden md:block bg-white rounded-lg shadow-xl px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="text-gray-800 font-medium text-sm whitespace-nowrap">
          Fale conosco pelo WhatsApp
        </p>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent" />
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        
        <div className="relative w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20BA5C] transition-colors duration-300">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>
    </motion.a>
  );
}