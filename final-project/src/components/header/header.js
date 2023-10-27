import onChange from 'on-change';
import { DivComponent } from '../../common/DivComponent';
import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = onChange(appState);
    }

    build() {
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
        
        `;
    }
}
