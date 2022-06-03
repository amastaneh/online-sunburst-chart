import './index.scss'
import '@fortawesome/fontawesome-free/js/all';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './pages/pageLayout';
import Page404 from './pages/page404';
import PageMain from './pages/pageMain';


export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route index element={<PageMain />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}