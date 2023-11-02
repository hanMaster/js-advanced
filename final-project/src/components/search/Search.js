import { DivComponent } from '../../common/DivComponent';
import './Search.css';

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        const value = this.el.querySelector('input').value.trim();
        if (value) {
            this.state.searchQuery = value;
        }
    }

    build() {
        this.el.classList.add('search');
        this.el.innerHTML = `
            <div class="search__wrapper">
                <img src="../public/images/search.svg" alt="search" />
                <input
                    type="text"
                    placeholder="Найти книгу или автора..."
                    class="search__input"
                    value="${
                        this.state.searchQuery ? this.state.searchQuery : ''
                    }"
                />
            </div>
            <button aria-label="Искать">
                <img src="public/images/search_white.svg" alt="search button" />
            </button>
        `;
        this.el
            .querySelector('button')
            .addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.search();
            }
        });
        return this.el;
    }
}
