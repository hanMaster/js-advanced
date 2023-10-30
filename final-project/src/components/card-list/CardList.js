import { DivComponent } from '../../common/DivComponent';
import { Spinner } from '../../components/spinner/Spinner.js';
import './CardList.css';

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    build() {
        this.el.classList.add('card-list');
        if (this.parentState.loading) {
            this.el.append(new Spinner().build());
            return this.el;
        }
        const searchResult = document.createElement('h2');
        searchResult.classList.add('search-result');
        searchResult.innerHTML = `Найдено книг - ${this.parentState.list.length}`;
        this.el.append(searchResult);

        return this.el;
    }
}
