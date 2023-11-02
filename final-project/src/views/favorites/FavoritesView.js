import onChange from 'on-change';
import { AbstractView } from '../../common/View.js';
import { Header } from '../../components/header/Header.js';
import { Card } from '../../components/card/Card.js';

export class FavoritesView extends AbstractView {
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Избранное');
    }

    destroy() {
        onChange.unsubscribe(this.appState);
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }

    render() {
        const favorites = document.createElement('div');
        const title = document.createElement('div');
        title.classList.add('page-title');
        const searchResult = document.createElement('h2');
        searchResult.innerHTML = 'Избранные книги';
        title.append(searchResult);
        favorites.append(title);
        this.app.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.classList.add('cards-wrapper');
        for (const item of this.appState.favorites) {
            wrapper.append(new Card(this.appState, item).build());
        }

        favorites.append(wrapper);
        this.renderHeader();
        this.app.append(favorites);
    }

    renderHeader() {
        const header = new Header(this.appState).build();
        this.app.prepend(header);
    }
}
