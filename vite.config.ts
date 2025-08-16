import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração otimizada para GitHub Pages
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  const isDevelopment = command === 'serve';
  
  // Para preview local, use base '/'
  const isLocalBuild = process.env.NODE_ENV !== 'production' || process.env.GITHUB_ACTIONS !== 'true';
  
  return {
    base: (isDevelopment || isLocalBuild) ? '/' : '/estanciaDaSerra/',
    plugins: [react()],
    server: { 
      port: 5173,
      host: true,
      open: true,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      middlewareMode: false,
      fs: {
        strict: false,
        allow: ['..']
      },
      hmr: {
        overlay: true
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'react-router-dom'],
      exclude: ['@vite/client', '@vite/env']
    },
    build: { 
      sourcemap: false, // Desabilita sourcemaps em produção para performance
      outDir: 'dist',
      assetsDir: 'assets',
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react')) {
                return 'react-vendor';
              }
              if (id.includes('framer-motion')) {
                return 'animations';
              }
              if (id.includes('router')) {
                return 'router';
              }
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      },
      chunkSizeWarningLimit: 1000
    },
    publicDir: 'public',
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    }
  };
});
