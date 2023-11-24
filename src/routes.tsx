import { useLayoutEffect } from 'react';
import { Routes as RoutesContainer, Route, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { MemoriaVirtualIntroducao } from './pages/Post/MemoriaVirtual/MemoriaVirtualIntroducao';
import { MemoriaVirtualPaginacao } from './pages/Post/MemoriaVirtual/MemoriaVirtualPaginacao';
import { Post404Page } from './pages/404';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

export function Routes() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavBar />
      <RoutesContainer>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/memoria-virtual-introducao" element={<MemoriaVirtualIntroducao />} />
        <Route path="/post/memoria-virtual-paginacao" element={<MemoriaVirtualPaginacao />} />
        <Route path="/404" element={<Post404Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </RoutesContainer>
      <Footer />
    </>
  );
}
