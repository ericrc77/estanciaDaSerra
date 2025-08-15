export function About() {
  return (
    <section id="sobre" className="px-4 xs:px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="order-2 md:order-1 space-y-6">
          <header>
            <h2 className="text-fluid-section-title font-display font-semibold text-brand-green mb-4">Viver Conectado à Paisagem</h2>
            <p className="text-sm sm:text-base leading-relaxed text-brand-dark/80">Implantação em fase inicial com foco em infraestrutura essencial e preparação do terreno. Proposta de urbanismo que valoriza visuais amplos, boa insolação e áreas destinadas ao convívio futuro.</p>
          </header>
          <ul className="grid grid-cols-1 phone:grid-cols-2 gap-3 text-[12px] xs:text-sm text-brand-dark/80">
            {['Portaria projetada','Mobilidade interna otimizada','Viário em finalização','Ambiente silencioso','Potencial paisagístico','Lotes amplos'].map(item => (
              <li key={item} className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />{item}</li>
            ))}
          </ul>
          <p className="text-[12px] xs:text-xs text-brand-dark/50">Informações técnicas complementares serão divulgadas conforme avanço das etapas.</p>
        </div>
        <div className="order-1 md:order-2 relative aspect-[4/3] md:aspect-video rounded-xl overflow-hidden shadow-soft">
          <img src="/gallery/1.jpg" alt="Vista da área do empreendimento" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white/80 text-[10px] backdrop-blur-sm bg-black/30 px-2 py-1 rounded-md">Imagem ilustrativa</div>
        </div>
      </div>
    </section>
  );
}
