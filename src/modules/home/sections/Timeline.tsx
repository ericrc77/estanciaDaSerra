const phases = [
  { title: 'Abertura do Projeto', desc: 'Planejamento inicial, definição de layout e regularizações.', status: 'concluído' },
  { title: 'Infraestrutura Viária', desc: 'Abertura e nivelamento das estradas internas.', status: 'em andamento' },
  { title: 'Drenagem & Sinalização', desc: 'Execução de drenagem pluvial e colocação de sinalização básica.', status: 'próximo' },
  { title: 'Portaria & Acesso', desc: 'Construção da portaria de entrada e sistemas de controle.', status: 'planejado' },
  { title: 'Áreas de Lazer', desc: 'Execução de espaços comuns e paisagismo.', status: 'planejado' }
];

export function Timeline() {
  return (
  <section id="progresso" className="section-padding max-w-6xl mx-auto">
      <h2 className="text-fluid-section-title font-display font-semibold mb-8 md:mb-10 text-brand-green word-break-normal">Progresso das Obras</h2>
      {/* Mobile slider */}
      <div className="block lg:hidden -mx-4 xs:-mx-6 pb-4">
        <div className="flex overflow-x-auto gap-4 px-4 xs:px-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-brand-green/40 scrollbar-track-transparent">
          {phases.map(p => (
            <div key={p.title} className="snap-start min-w-[260px] w-[280px] card-responsive card-hover-responsive bg-white border border-brand-green/15 flex flex-col shadow-soft word-break-normal">
              <div className="p-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h3 className="text-fluid-sm font-semibold leading-snug word-break-normal pr-2">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-brand-green/10 text-brand-green w-fit">{p.status}</span>
                </div>
                <p className="text-fluid-sm text-brand-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Grid layout for large screens */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {phases.map(p => (
          <div key={p.title} className="card-responsive card-hover-responsive bg-white border border-brand-green/15 flex flex-col shadow-soft word-break-normal">
            <div className="p-4 flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-fluid-base font-semibold leading-snug word-break-normal">{p.title}</h3>
                <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-brand-green/10 text-brand-green w-fit">{p.status}</span>
              </div>
              <p className="text-fluid-sm text-brand-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-fluid-sm text-brand-gray-500 mt-6">Cronograma de execução sujeito a alterações conforme desenvolvimento do projeto.</p>
    </section>
  );
}
