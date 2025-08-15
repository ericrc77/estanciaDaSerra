export function Location() {
  return (
    <section id="localizacao" className="bg-gradient-to-b from-brand-green/5 to-white py-16 phone:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 xs:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <h2 className="text-fluid-section-title font-display font-semibold text-brand-green mb-4">Localização & Acesso</h2>
            <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed mb-4">Projeto situado em região de características rurais com fácil conexão à malha urbana (trajetos e tempo médio de deslocamento serão divulgados com a evolução das etapas de infraestrutura viária).</p>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-dark/70">
              <li>• Acesso facilitado a serviços essenciais</li>
              <li>• Distância estratégica de centros urbanos</li>
              <li>• Ambiente silencioso e baixa poluição luminosa</li>
              <li>• Potencial para trilhas e áreas de lazer ao ar livre</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-soft bg-brand-dark/5 dark:bg-white/5 flex items-center justify-center text-brand-dark/50 dark:text-white/40 text-xs">Mapa ilustrativo – coordenadas finais serão publicadas</div>
            <div className="grid grid-cols-2 gap-3 text-center">
              {['Centro Urbano','Rodovia Principal','Serviços','Área Verde'].map(t => (
                <div key={t} className="rounded-lg bg-white dark:bg-brand-dark/40 border border-brand-green/10 px-2 py-3 flex flex-col gap-1">
                  <span className="text-[11px] font-medium text-brand-green">{t}</span>
                  <span className="text-[10px] text-brand-dark/60 dark:text-white/60">Dados em preparação</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
