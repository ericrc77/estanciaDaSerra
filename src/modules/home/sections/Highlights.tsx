import { LucideSun, LucideTreePine, LucideShield, LucideMap } from 'lucide-react';

const items = [
  { icon: LucideTreePine, title: 'Natureza Preservada', desc: 'Planejamento priorizando vegetação existente e vistas abertas.' },
  { icon: LucideMap, title: 'Urbanismo Planejado', desc: 'Implantação racional favorecendo circulação interna e privacidade.' },
  { icon: LucideShield, title: 'Acesso Controlado', desc: 'Portaria projetada e infraestrutura de segurança em planejamento.' },
  { icon: LucideSun, title: 'Qualidade de Vida', desc: 'Ar puro, silêncio e contato direto com o ambiente natural.' }
];

export function Highlights() {
  return (
    <section className="px-4 xs:px-6 max-w-6xl mx-auto" id="diferenciais">
      <div className="text-center mb-10">
        <h2 className="text-fluid-section-title font-display font-semibold text-brand-green">Diferenciais</h2>
        <p className="text-sm sm:text-base text-brand-dark/70 max-w-2xl mx-auto mt-3">Elementos que traduzem a proposta do empreendimento em sua fase de implantação e evolução.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {items.map(i => (
          <div key={i.title} className="bg-white dark:bg-brand-dark/40 rounded-lg p-4 sm:p-5 shadow-soft flex flex-col items-start gap-3 border border-brand-green/10">
            <i.icon className="text-brand-green" size={26} />
            <h3 className="text-xs xs:text-sm font-semibold leading-snug">{i.title}</h3>
            <p className="text-[11px] xs:text-xs text-brand-dark/70 dark:text-white/70 leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
