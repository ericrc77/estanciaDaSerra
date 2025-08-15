import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Em dev usamos base '/' para evitar tela em branco; em build/preview aplica base do GitHub Pages.
export default defineConfig(({ mode }) => ({
	base: mode === 'development' ? '/' : '/estanciaDaSerra/',
	plugins: [react()],
	server: { port: 5173 },
	build: { sourcemap: true }
}));
