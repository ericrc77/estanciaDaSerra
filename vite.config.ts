import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração otimizada para GitHub Pages
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const isDevelopment = command === 'serve';
  
  return {
    base: isDevelopment ? '/' : '/estanciaDaSerra/',
    plugins: [react()],
    server: { 
      port: 5173,
      host: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      middlewareMode: false,
      fs: {
        strict: false,
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion'],
    },
    build: { 
      sourcemap: true,
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            animations: ['framer-motion'],
          }
        }
      }
    },
    publicDir: 'public',
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    }
  };
});
