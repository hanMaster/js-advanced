import { DivComponent } from '../../common/DivComponent';
import './SearchResult.css';

export class SearchResult extends DivComponent {
    constructor(parentState) {
        super();
        this.parentState = parentState;
    }

    build() {
        this.el.classList.add('page-title');
        const searchResult = document.createElement('h2');
        searchResult.innerHTML = `Найдено книг - ${this.parentState.numFound}`;
        this.el.append(searchResult);

        return this.el;
    }
}
