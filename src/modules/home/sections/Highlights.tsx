import { LucideSun, LucideTreePine, LucideShield, LucideMap } from 'lucide-react';

const items = [
  { icon: LucideTreePine, title: 'Natureza Preservada', desc: 'Planejamento priorizando vegetação existente e vistas abertas.' },
  { icon: LucideMap, title: 'Urbanismo Planejado', desc: 'Implantação racional favorecendo circulação interna e privacidade.' },
  { icon: LucideShield, title: 'Acesso Controlado', desc: 'Portaria projetada e infraestrutura de segurança em planejamento.' },
  { icon: LucideSun, title: 'Qualidade de Vida', desc: 'Ar puro, silêncio e contato direto com o ambiente natural.' }
];

export function Highlights() {
  return (
    <section className="section-padding max-w-6xl mx-auto" id="diferenciais">
      <div className="text-center mb-10">
        <h2 className="text-fluid-section-title font-display font-semibold text-brand-green">Diferenciais</h2>
        <p className="text-fluid-base text-brand-gray-600 max-w-2xl mx-auto mt-3">Elementos que traduzem a proposta do empreendimento em sua fase de implantação e evolução.</p>
      </div>
      <div className="grid-responsive-2">
        {items.map(i => (
          <div key={i.title} className="card-responsive card-hover-responsive bg-white shadow-soft flex flex-col items-start gap-3 border border-brand-green/10">
            <i.icon className="text-brand-green" size={26} />
            <h3 className="text-fluid-sm font-semibold leading-snug">{i.title}</h3>
            <p className="text-fluid-sm text-brand-gray-600 leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
