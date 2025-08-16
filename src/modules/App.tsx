import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../shared/Layout';
import { lazy, Suspense } from 'react';
const LotPage = lazy(()=>import('./lot/LotPage'));

export default function App() {
  return (
    <>
      <Helmet>
        <title>Estância da Serra - Chacreamento</title>
        <meta name="description" content="Chacreamento Estância da Serra - viva perto da natureza com segurança e qualidade de vida." />
      </Helmet>
      <Suspense fallback={<div style={{padding:40}}>Carregando...</div>}>
        <Routes>
          <Route element={<Layout />}> 
            <Route index element={<HomePage />} />
            <Route path="lote/:id" element={<LotPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
