// Helper para construir caminhos de assets respeitando o BASE_URL do Vite
// Uso: asset('media/hero.png') => '/estanciaDaSerra/media/hero.png' em produção, '/media/hero.png' em dev
export function asset(relative: string) {
  const base = import.meta.env.BASE_URL || '/';
  const clean = relative.replace(/^\/+/, '');
  return base + clean;
}

export function assetUrl(relative: string) {
  return asset(relative);
}
