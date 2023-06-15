import React from 'react';
import NewsFeed from '../components/NewsFeed';
import HotNews from '../components/HotNews';

const ArticlePage = () => {
    return (
        <div>
            <NewsFeed />
            <HotNews />
        </div>
    );
};

export default ArticlePage;
