import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import lots from '../../../data/lots.json';

interface LotFeature {
  id: string;
  status: 'disponivel' | 'reservado' | 'vendido';
  area_m2: number;
  price?: number;
  videoUrl?: string;
  coordinates: [number, number][]; // lat,lng
}

const statusColor: Record<LotFeature['status'], string> = {
  disponivel: '#16a34a',
  reservado: '#f59e0b',
  vendido: '#dc2626'
};

export function LotsMapSection() {
  const center: [number, number] = [-23.0, -47.0]; // TODO: ajustar para coordenadas reais
  return (
    <section id="mapa" className="bg-gradient-to-b from-white to-green-50 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl font-display font-semibold mb-6 text-brand-green">Área do Empreendimento</h2>
        <p className="text-brand-dark/80 mb-4 max-w-3xl">
          Demarcação individual dos lotes em elaboração. No momento você visualiza apenas uma representação ilustrativa da área geral enquanto as estradas são finalizadas.
        </p>
        <div className="mb-6 text-xs text-brand-dark/60 bg-brand-green/5 border border-brand-green/20 rounded-md p-3">
          <strong>Atualização:</strong> Estradas internas em fase final de preparação. Mapa detalhado com polígonos de cada lote será publicado quando a topografia final estiver concluída.
        </div>
        <div className="h-[560px] w-full rounded-xl overflow-hidden shadow-soft">
          <MapContainer center={center} zoom={16} className="h-full w-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {(lots as LotFeature[]).map(lot => (
              <Polygon key={lot.id} positions={lot.coordinates} pathOptions={{ color: '#667A2B', weight: 1, dashArray: '6 4' }}>
                <Popup>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">Área ilustrativa</p>
                    <p>Demarcação final de lotes em processamento topográfico.</p>
                    <p className="text-xs text-brand-dark/60">Material preliminar sujeito a ajuste.</p>
                  </div>
                </Popup>
              </Polygon>
            ))}
          </MapContainer>
        </div>
  <div className="mt-6 text-xs text-brand-dark/50">Legenda será exibida quando os lotes forem individualizados.</div>
      </div>
    </section>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-sm" style={{ background: color }} />
      <span className="text-brand-dark/80">{label}</span>
    </div>
  );
}
