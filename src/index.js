import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './component/store/favorites-context';

ReactDOM.render(

    <FavoritesContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </FavoritesContextProvider>,   

    document.getElementById('root')
);



