import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Ajuste "base" quando publicar no GitHub Pages: base: '/nome-do-repo/'
export default defineConfig({
	base: '/estanciaDaSerra/',
	plugins: [react()],
	server: { port: 5173 },
	build: { sourcemap: true }
});
