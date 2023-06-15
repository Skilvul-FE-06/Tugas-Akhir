import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/articles" element={<ArticlePage />} />
      <Route path="/articles/:id" element={<ArticleDetail />} />
    </Routes>
  );
};

export default App;
