import { effects } from './useEffect';
import Navigo from 'navigo';
const router = new Navigo('/');
const app = document.querySelector('#app');
function render(page) {
    app.innerHTML = page;
    effects.forEach((element) => element.cb());
}

export default render;

export { router, app };
