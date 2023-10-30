import { DivComponent } from '../../common/DivComponent';
import './Card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    addToFavorites() {
        this.appState.favorites.push(this.cardState);
    }

    removeFromFavorites() {
        const idx = this.appState.favorites.findIndex(
            (b) => b.key === this.cardState.key
        );
        this.appState.favorites.splice(idx, 1);
    }

    build() {
        this.el.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            (b) => b.key == this.cardState.key
        );

        this.el.innerHTML = `
        <div class="card__image">
            <img src="https://covers.openlibrary.org/b/olid/${
                this.cardState.cover_edition_key
            }-M.jpg"
            alt="Обложка" />
        </div>
        <div class="card__info">
            <span class="card__tag">
                ${
                    this.cardState.subject
                        ? this.cardState.subject[0]
                        : 'Не задано'
                }
            </span>
            <span class="card__title">${this.cardState.title}</span>
            <span class="card__author">${
                this.cardState.author_name
                    ? this.cardState.author_name[0]
                    : 'Не задано'
            }</span>
            <div class="card__footer">
            <button class="button__add ${
                existInFavorites ? 'button__active' : ''
            }">
            
            ${
                existInFavorites
                    ? '<img src="public/images/favorites.svg" alt="В избранном">'
                    : '<img src="public/images/favorites-white.svg" alt="Добавить в избранное">'
            }
            
            </button>
        </div>
        </div>

       `;

        const btn = this.el.querySelector('.button__add');
        if (!existInFavorites) {
            btn.addEventListener('click', this.addToFavorites.bind(this));
        } else {
            btn.addEventListener('click', this.removeFromFavorites.bind(this));
        }

        return this.el;
    }
}
