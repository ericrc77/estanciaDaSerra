export function About() {
  return (
    <section id="sobre" className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-display font-semibold mb-6 text-brand-green">Um novo jeito de viver perto da natureza</h2>
          <p className="text-lg leading-relaxed text-brand-dark/90 mb-4">
            O Condomínio Estância da Serra encontra-se em fase de implantação inicial: modelagem do terreno e finalização das estradas internas. Todo o planejamento urbanístico prioriza a integração com a paisagem natural e a criação de um ambiente seguro e sustentável a médio e longo prazo.
          </p>
          <ul className="space-y-3 text-brand-dark/80">
            <li>• Condomínio fechado a poucos minutos da cidade</li>
            <li>• Lotes amplos com excelente topografia</li>
            <li>• Estradas internas em fase de finalização</li>
            <li>• Paisagens únicas e pôr do sol deslumbrante</li>
            <li>• Espaços planejados para lazer e convivência</li>
          </ul>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-soft">
          <img src="/placeholder-nature.jpg" alt="Paisagem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
