import { FavoritesView } from './views/favorites/FavoritesView.js';
import { MainView } from './views/main/MainView.js';
export const routes = [
    {
        path: '',
        view: MainView,
    },
    {
        path: '#favorites',
        view: FavoritesView,
    },
];
