import React from 'react';

export function Architect() {
  return (
    <section id="arquiteto" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Arquitetura de Conceito
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Projeto desenvolvido por profissional reconhecido na região
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Placeholder para foto do arquiteto */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold">
              Foto
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                [Nome do Arquiteto]
              </h3>
              <p className="text-green-600 font-medium mb-2">
                Arquiteto e Urbanista
              </p>
              <p className="text-gray-600">
                [Registros profissionais e especialidades]
              </p>
            </div>
          </div>

          {/* Conteúdo principal - placeholder */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Conceito do Projeto:</strong> [Texto sobre a filosofia e conceito arquitetônico do empreendimento]
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Experiência Profissional</h4>
                <ul className="space-y-2 text-sm">
                  <li>• [Projeto destacado 1]</li>
                  <li>• [Projeto destacado 2]</li>
                  <li>• [Projeto destacado 3]</li>
                  <li>• [Anos de experiência na região]</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Diferenciais</h4>
                <ul className="space-y-2 text-sm">
                  <li>• [Especialização 1]</li>
                  <li>• [Especialização 2]</li>
                  <li>• [Reconhecimentos]</li>
                  <li>• [Metodologia de trabalho]</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-green-800 mb-3">Visão para o Projeto</h4>
              <p className="text-green-700">
                "[Citação ou depoimento do arquiteto sobre o projeto Estância da Serra - aguardando conteúdo]"
              </p>
            </div>
          </div>

          {/* Placeholder para portfólio */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-4">Portfólio Regional</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                  Projeto {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
