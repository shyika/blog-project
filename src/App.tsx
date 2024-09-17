import { Link, Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import './index.scss'

const App = () => {
    return (
        <div className='app'>
            <Link to="/">Main page</Link>
            <Link to="/about">About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;