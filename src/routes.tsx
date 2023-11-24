import { Routes as RoutesContainer, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PostPage } from './pages/Post';
import { Post404Page } from './pages/404';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export function Routes() {
  return (
    <>
      <NavBar />
      <RoutesContainer>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:slug" element={<PostPage />} />
        <Route path="/404" element={<Post404Page />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </RoutesContainer>
      <Footer />
    </>
  );
}
