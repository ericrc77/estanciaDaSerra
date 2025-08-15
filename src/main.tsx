import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './modules/App';
import './styles/global.css';

const queryClient = new QueryClient();

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: any) { console.error('Erro de renderização', err); }
  render() { return this.state.hasError ? <div style={{padding:40,fontFamily:'sans-serif'}}>Ocorreu um erro. Recarregue a página.</div> : this.props.children; }
}

const basename = import.meta.env.DEV ? '/' : '/estanciaDaSerra/';

// Verifica se há redirecionamento do 404.html
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState({}, '', basename + redirect.slice(1));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={basename}>
          <ErrorBoundary>
            <Suspense fallback={<div style={{padding:40}}>Carregando...</div>}>
              <App />
            </Suspense>
          </ErrorBoundary>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
