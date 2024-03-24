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
import { AdminTag } from './pages/AdminPage/AdminTag/Loadable';
import { AdminSeries } from './pages/AdminPage/AdminSeries/Loadable';
import { AdminList } from './pages/AdminPage/AdminList/Loadable';
import { AdminCategory } from './pages/AdminPage/AdminCategory/Loadable';

import { Provider } from 'react-redux';
import { store } from 'store';

export function App() {
  const { i18n } = useTranslation();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Helmet
          titleTemplate="NYANGFLIX"
          defaultTitle="NYANGFLIX"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="nayngflix" content="nayngflix" />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');
          </style>
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/tag" element={<AdminTag />} />
          <Route path="admin/series" element={<AdminSeries />} />
          <Route path="admin/list" element={<AdminList />} />
          <Route path="admin/category" element={<AdminCategory />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}
