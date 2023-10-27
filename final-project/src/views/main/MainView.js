import onChange from 'on-change';
import { AbstractView } from '../../common/View.js';

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = onChange(appState, this.appStateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }
    }

    render() {
        const main = document.createElement('div');
        main.innerHTML = `Число книг ${this.appState.favorites.length}`;
        this.app.innerHTML = '';
        this.app.append(main);
    }
}
