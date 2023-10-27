import { AbstractView } from '../../common/View.js';
import './NotFound.css';

export class NotFoundView extends AbstractView {
    constructor() {
        super();
        this.setTitle('Страница не найдена');
    }

    render() {
        const notFound = document.createElement('div');
        notFound.classList.add('nf-root');
        notFound.innerHTML = `<p>404 запрашиваемая вами страница не найдена, <br> попробуйте начать с <a href=' / '>Главной</a></p>`;
        this.app.innerHTML = '';
        this.app.append(notFound);
    }
}
