// import onChange from 'on-change';
import { DivComponent } from '../../common/DivComponent';
import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    build() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
        <div>
            <img src="public/images/logo.svg" alt="Логотип" />
        </div>
        <div class="menu">
            <a href="#" class="menu__item menu_search">
                <img src="public/images/search.svg" alt="Поиск" />
                Поиск книг
            </a>

            <a href="#favorites" class="menu__item">
                <img src="public/images/favorites.svg" alt="Избранное" />
                Избранное
                <div class="menu__counter">
                    <div class="menu__digits">
                        ${this.appState.favorites.length}
                    </div>
                </div>
            </a>
        </div>
        `;
        return this.el;
    }
}
