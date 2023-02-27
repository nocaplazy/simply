import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '@/pages/Home';
import { SchoolFormPage } from '@/pages/SchoolForm';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/school" element={<SchoolFormPage />} />
    </Routes>
  </BrowserRouter>
);
