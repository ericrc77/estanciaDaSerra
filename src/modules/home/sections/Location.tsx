export function Location() {
  return (
    <section id="localizacao" className="bg-gradient-to-b from-brand-green/5 to-white section-padding">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="grid-responsive-2 items-start">
          <div>
            <h2 className="text-fluid-section-title font-display font-semibold text-brand-green mb-4">Localização & Acesso</h2>
            <p className="text-fluid-base text-brand-gray-700 leading-relaxed mb-4">Projeto situado em região de características rurais com fácil conexão à malha urbana (trajetos e tempo médio de deslocamento serão divulgados com a evolução das etapas de infraestrutura viária).</p>
            <ul className="space-y-2 text-fluid-sm text-brand-gray-600">
              <li>• Acesso facilitado a serviços essenciais</li>
              <li>• Distância estratégica de centros urbanos</li>
              <li>• Ambiente silencioso e baixa poluição luminosa</li>
              <li>• Potencial para trilhas e áreas de lazer ao ar livre</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-soft bg-brand-gray-50 flex items-center justify-center text-brand-gray-500 text-fluid-sm">Mapa ilustrativo – coordenadas finais serão publicadas</div>
            <div className="grid-responsive-2 text-center">
              {['Centro Urbano','Rodovia Principal','Serviços','Área Verde'].map(t => (
                <div key={t} className="card-responsive bg-white border border-brand-green/10 flex flex-col gap-1">
                  <span className="text-fluid-sm font-medium text-brand-green">{t}</span>
                  <span className="text-fluid-sm text-brand-gray-600">Dados em preparação</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
