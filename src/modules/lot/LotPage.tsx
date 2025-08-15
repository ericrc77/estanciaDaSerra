import { useParams, Link } from 'react-router-dom';
import data from '../../data/lots.json';

interface Lot { id: string; status: string; area_m2: number; price?: number; videoUrl?: string; }

export default function LotPage() {
  const { id } = useParams();
  const lot = (data as Lot[]).find(l => l.id === id);
  if (!lot) return <div className="max-w-4xl mx-auto px-6 py-32"><p>Lote não encontrado.</p><Link className="underline text-brand-green" to="/">Voltar</Link></div>;
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 space-y-8">
      <Link to="/" className="text-sm text-brand-green underline">← Voltar</Link>
      <h1 className="text-4xl font-display font-semibold">Lote {lot.id}</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p><strong>Status:</strong> {lot.status}</p>
          <p><strong>Área:</strong> {lot.area_m2.toLocaleString('pt-BR')} m²</p>
          {lot.price && <p><strong>Preço:</strong> R$ {lot.price.toLocaleString('pt-BR')}</p>}
        </div>
        <div className="rounded-lg bg-brand-dark/5 dark:bg-white/5 p-4 text-sm">
          <p className="font-medium mb-2">Informações do Lote</p>
          <p>Conteúdo detalhado (características físicas, vista e infraestrutura prevista) será disponibilizado em etapa posterior de divulgação comercial.</p>
        </div>
      </div>
      {lot.videoUrl && <div className="aspect-video w-full rounded-lg overflow-hidden shadow-soft"><iframe src={lot.videoUrl.replace('watch?v=', 'embed/')} className="w-full h-full" allowFullScreen title={`Vídeo Lote ${lot.id}`}></iframe></div>}
      <div>
        <a href="#contato" className="px-6 py-3 rounded-full bg-brand-green text-white font-medium">Quero mais informações</a>
      </div>
    </div>
  );
}
