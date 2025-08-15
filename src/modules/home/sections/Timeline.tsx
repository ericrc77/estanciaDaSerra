const phases = [
  { title: 'Abertura do Projeto', desc: 'Planejamento inicial, definição de layout e regularizações.', status: 'concluído', date: 'Q2 2025' },
  { title: 'Infraestrutura Viária', desc: 'Abertura e nivelamento das estradas internas.', status: 'em andamento', date: 'Q3 2025' },
  { title: 'Drenagem & Sinalização', desc: 'Execução de drenagem pluvial e colocação de sinalização básica.', status: 'próximo', date: 'Q4 2025' },
  { title: 'Portaria & Acesso', desc: 'Construção da portaria de entrada e sistemas de controle.', status: 'planejado', date: 'Q1 2026' },
  { title: 'Áreas de Lazer', desc: 'Execução de espaços comuns e paisagismo.', status: 'planejado', date: '2026' }
];

export function Timeline() {
  return (
  <section id="progresso" className="container mx-auto px-4 xs:px-6 max-w-6xl py-16 phone:py-20 md:py-24">
      <h2 className="text-fluid-section-title font-display font-semibold mb-8 md:mb-10 text-brand-green">Progresso das Obras</h2>
      {/* Mobile slider */}
      <div className="block lg:hidden -mx-4 xs:-mx-6 pb-4">
        <div className="flex overflow-x-auto gap-4 px-4 xs:px-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-green/40 scrollbar-track-transparent">
          {phases.map(p => (
            <div key={p.title} className="snap-start min-w-[240px] w-[260px] bg-white dark:bg-brand-dark/40 border border-brand-green/15 rounded-lg p-4 flex flex-col gap-2 shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold leading-snug">{p.title}</h3>
                <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-brand-green/10 text-brand-green whitespace-nowrap">{p.status}</span>
              </div>
              <p className="text-[11px] text-brand-dark/70 dark:text-white/70 leading-relaxed flex-1">{p.desc}</p>
              <p className="text-[10px] text-brand-dark/50 dark:text-white/40">{p.date}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Grid layout for large screens */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {phases.map(p => (
          <div key={p.title} className="relative bg-white dark:bg-brand-dark/40 border border-brand-green/15 rounded-lg p-4 flex flex-col gap-2 shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm xl:text-base font-semibold leading-snug">{p.title}</h3>
              <span className="text-[10px] xl:text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-brand-green/10 text-brand-green whitespace-nowrap">{p.status}</span>
            </div>
            <p className="text-[11px] xl:text-sm text-brand-dark/70 dark:text-white/70 leading-relaxed flex-1">{p.desc}</p>
            <p className="text-[10px] text-brand-dark/50 dark:text-white/40">{p.date}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] sm:text-xs text-brand-dark/50 dark:text-white/40 mt-6">Linha do tempo ilustrativa. Datas sujeitas a alterações conforme cronograma executivo.</p>
    </section>
  );
}
