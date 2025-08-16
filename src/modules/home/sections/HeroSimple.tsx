import React from 'react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-18 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold text-green-800 mb-4">
          Serra de Minas
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Condomínio Estância da Serra
        </p>
        <div className="text-green-600 font-bold">
          ✅ Hero carregando corretamente!
        </div>
      </div>
    </section>
  );
}
