import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { ArticleProvider } from './context/ArticlesContext';
import ArticleList from './components/ArticleList';
import HotNews from './components/HotNews';
import ArticlePage from './components/ArticlePage';

const App = () => {
  return (
    <ArticleProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </ArticleProvider>
  );
};

const Home = () => {
  return (
    <div>
      <ArticleList />
      <Outlet />
      <HotNews />
    </div>
  );
};

export default App;
