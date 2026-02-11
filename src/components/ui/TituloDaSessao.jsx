import React from 'react';
import { motion } from 'framer-motion';

export default function TituloDaSessao({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className={`h-1 w-12 rounded-full ${light ? 'bg-white/40' : 'bg-[#159633]'}`} />
        <div className={`h-1.5 w-4 rounded-full ${light ? 'bg-white' : 'bg-[#159633]'}`} />
      </div>

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 ${
        light ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-white/80' : 'text-gray-600'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}