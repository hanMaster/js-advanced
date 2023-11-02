import { DivComponent } from '../../common/DivComponent';
import { Spinner } from '../../components/spinner/Spinner.js';
import { Card } from '../card/Card.js';
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
        const wrapper = document.createElement('div');
        wrapper.classList.add('cards-wrapper');
        for (const item of this.parentState.list) {
            wrapper.append(new Card(this.appState, item).build());
        }

        this.el.append(wrapper);

        return this.el;
    }
}
