import Navigo from 'navigo';
const router = new Navigo('/');
const app = document.querySelector('#app');
function render(page) {
    app.innerHTML = page;
}

export default render;

export { router, app };
