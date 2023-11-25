import { useLayoutEffect } from 'react';
import { Routes as RoutesContainer, Route, Navigate, useLocation } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { MemoriaVirtualIntroducao } from './pages/Post/MemoriaVirtual/MemoriaVirtualIntroducao';
import { MemoriaVirtualPaginacao } from './pages/Post/MemoriaVirtual/MemoriaVirtualPaginacao';
import { MemoriaVirtualSegmentacao } from './pages/Post/MemoriaVirtual/MemoriaVirtualSegmentacao';
import { MemoriaVirtualSegmentacaoComParticao } from './pages/Post/MemoriaVirtual/MemoriaVirtualSegmentacaoComParticao';
import { MemoriaVirtualSubstituicaoPaginas } from './pages/Post/MemoriaVirtual/MemoriaVirtualSubstituicaoPaginas';
import { MemoriaVirtualProtecaoMemoria } from './pages/Post/MemoriaVirtual/MemoriaVirtualProtecaoMemoria';
import { MemoriaVirtualSwapping } from './pages/Post/MemoriaVirtual/MemoriaVirtualSwapping';
import { MemoriaVirtualThrashing } from './pages/Post/MemoriaVirtual/MemoriaVirtualSwappingThrashing';
import { Post404Page } from './pages/404';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

export function Routes() {
  const location = useLocation();
  useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <>
      <NavBar />
      <RoutesContainer>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/memoria-virtual-introducao" element={<MemoriaVirtualIntroducao />} />
        <Route path="/post/memoria-virtual-paginacao" element={<MemoriaVirtualPaginacao />} />
        <Route path="/post/memoria-virtual-segmentacao" element={<MemoriaVirtualSegmentacao />} />
        <Route path="/post/memoria-virtual-segmentacao-com-paginacao" element={<MemoriaVirtualSegmentacaoComParticao />} />
        <Route path="/post/memoria-virtual-politicas-de-substituição-paginas" element={<MemoriaVirtualSubstituicaoPaginas />} />
        <Route path="/post/memoria-virtual-protecao-de-memoria" element={<MemoriaVirtualProtecaoMemoria />} />
        <Route path="/post/memoria-virtual-swapping" element={<MemoriaVirtualSwapping />} />
        <Route path="/post/memoria-virtual-thrashing" element={<MemoriaVirtualThrashing />} />
        <Route path="/post/*" element={<Post404Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </RoutesContainer>
      <Footer />
    </>
  );
}
