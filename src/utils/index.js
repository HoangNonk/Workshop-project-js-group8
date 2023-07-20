import Navigo from 'navigo';
const router = new Navigo('/');
const app = document.querySelector('#app');
let effects = [];
const useEffect = (cb) => {
    effects.push({
        cb,
    });
};

function render(page) {
    app.innerHTML = page;
    effects.forEach((element) => element.cb());
    effects = [];
}

export { render, router, app, useEffect };
