/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { AdminPage } from './pages/AdminPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="NYANGFLIX"
        defaultTitle="NYANGFLIX"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="nayngflix" content="nayngflix" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
        </style>
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
