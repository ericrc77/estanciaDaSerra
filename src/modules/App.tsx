import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../shared/Layout';
import { LotPage } from './lot/LotPage';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Estância da Serra - Condomínio</title>
        <meta name="description" content="Condomínio Estância da Serra - viva perto da natureza com segurança e qualidade de vida." />
      </Helmet>
      <Routes>
        <Route element={<Layout />}> 
          <Route index element={<HomePage />} />
          <Route path="lote/:id" element={<LotPage />} />
        </Route>
      </Routes>
    </>
  );
}
