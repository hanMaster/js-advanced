import { routes } from './routes';
import './app.css';
import { NotFoundView } from './views/404/NotFoundView.js';

class App {
    constructor() {
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }

    route() {
        if (this.currentView) {
            this.currentView.destroy();
        }
        const route = routes.find((r) => r.path === location.hash);
        const view = route ? route.view : NotFoundView;
        this.currentView = new view();
        this.currentView.render();
    }
}

new App();
