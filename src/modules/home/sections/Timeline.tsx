const phases = [
  { title: 'Abertura do Projeto', desc: 'Planejamento inicial, definição de layout e regularizações.', status: 'concluído', date: 'Q2 2025' },
  { title: 'Infraestrutura Viária', desc: 'Abertura e nivelamento das estradas internas.', status: 'em andamento', date: 'Q3 2025' },
  { title: 'Drenagem & Sinalização', desc: 'Execução de drenagem pluvial e colocação de sinalização básica.', status: 'próximo', date: 'Q4 2025' },
  { title: 'Portaria & Acesso', desc: 'Construção da portaria de entrada e sistemas de controle.', status: 'planejado', date: 'Q1 2026' },
  { title: 'Áreas de Lazer', desc: 'Execução de espaços comuns e paisagismo.', status: 'planejado', date: '2026' }
];

export function Timeline() {
  return (
    <section id="progresso" className="container mx-auto px-6 max-w-6xl">
      <h2 className="text-3xl font-display font-semibold mb-10 text-brand-green">Progresso das Obras</h2>
      <div className="relative pl-6 border-l-2 border-brand-green/30 space-y-8">
        {phases.map(p => (
          <div key={p.title} className="relative">
            <span className="absolute -left-[15px] top-2 w-3.5 h-3.5 rounded-full bg-brand-green shadow" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full bg-brand-green/10 text-brand-green">{p.status}</span>
            </div>
            <p className="text-brand-dark/70 dark:text-white/70 mt-1 text-sm max-w-3xl">{p.desc}</p>
            <p className="text-xs text-brand-dark/50 dark:text-white/40 mt-1">{p.date}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-brand-dark/50 dark:text-white/40 mt-6">Linha do tempo ilustrativa. Datas sujeitas a alterações conforme cronograma executivo.</p>
    </section>
  );
}
