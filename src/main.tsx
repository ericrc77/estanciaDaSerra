import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './modules/App';
import './styles/global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) { 
    super(props); 
    this.state = { hasError: false }; 
  }
  
  static getDerivedStateFromError() { 
    return { hasError: true }; 
  }
  
  componentDidCatch(err: any, errorInfo: any) { 
    console.error('Erro de renderização:', err, errorInfo); 
  }
  
  render() { 
    return this.state.hasError ? (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-green-50 to-white px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-brand-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-xl font-semibold text-brand-dark-700 mb-2">Ops! Algo deu errado</h2>
          <p className="text-brand-dark-500 mb-6">Ocorreu um erro inesperado. Por favor, recarregue a página.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-brand-green-600 text-white rounded-full hover:bg-brand-green-700 transition-colors font-medium"
          >
            Recarregar Página
          </button>
        </div>
      </div>
    ) : this.props.children; 
  }
}

const basename = import.meta.env.DEV ? '/' : '/estanciaDaSerra/';

// Verifica se há redirecionamento do 404.html
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState({}, '', basename + redirect.slice(1));
}

// Loading component melhorado
const LoadingComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-green-50 to-white">
    <div className="text-center">
      <div className="w-12 h-12 border-3 border-brand-green-200 border-t-brand-green-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-brand-gray-600 font-medium">Carregando Estância da Serra...</p>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={basename}>
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent />}>
              <App />
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
