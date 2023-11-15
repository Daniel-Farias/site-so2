import { Routes as RoutesContainer, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/Home';

export function Routes() {
  return (
    <RoutesContainer>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </RoutesContainer>
  );
}
