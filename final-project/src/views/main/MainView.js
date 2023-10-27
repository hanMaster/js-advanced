import onChange from 'on-change';
import { AbstractView } from '../../common/View.js';
import { Header } from '../../components/header/header.js';

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
        this.app.innerHTML = '';
        this.renderHeader();
        this.app.append(main);
    }

    renderHeader() {
        const header = new Header(this.appState).build();
        this.app.prepend(header);
    }
}
