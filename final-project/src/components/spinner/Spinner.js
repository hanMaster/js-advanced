import { DivComponent } from '../../common/DivComponent';
import './Spinner.css';

export class Spinner extends DivComponent {
    constructor() {
        super();
    }
    build() {
        this.el.classList.add('loading');
        // this.el.setAttribute('id', 'loading');
        return this.el;
    }
}
