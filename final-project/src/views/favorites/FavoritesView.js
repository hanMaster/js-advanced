import onChange from 'on-change';
import { AbstractView } from '../../common/View.js';
import { Header } from '../../components/header/Header.js';
import { Search } from '../../components/search/Search.js';
import { CardList } from '../../components/card-list/CardList.js';

export class favoritesView extends AbstractView {
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Избранное');
    }

    destroy() {
        onChange.unsubscribe(this.appState);
        onChange.unsubscribe(this.state);
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).build());
        main.append(new CardList(this.appState, this.state).build());
        this.app.innerHTML = '';
        this.renderHeader();
        this.app.append(main);
    }

    renderHeader() {
        const header = new Header(this.appState).build();
        this.app.prepend(header);
    }
}
