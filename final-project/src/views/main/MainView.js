import onChange from 'on-change';
import { AbstractView } from '../../common/View.js';
import { Header } from '../../components/header/Header.js';
import { Search } from '../../components/search/Search.js';
import { CardList } from '../../components/card-list/CardList.js';
import { SearchResult } from '../../components/search-result/SearchResult.js';

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
        numFound: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    destroy() {
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }

    async stateHook(path) {
        if (path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.list = data.docs;
            this.state.numFound = data.numFound;
            this.state.loading = false;
        }
        if (path === 'loading') {
            this.render();
        }
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).build());
        main.append(new SearchResult(this.state).build());
        main.append(new CardList(this.appState, this.state).build());
        this.app.innerHTML = '';
        this.renderHeader();
        this.app.append(main);
    }

    renderHeader() {
        const header = new Header(this.appState).build();
        this.app.prepend(header);
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json();
    }
}
