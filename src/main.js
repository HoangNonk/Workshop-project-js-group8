import '~/components/styleGlobal/style.scss';
import Navigo from 'navigo';
import render from '~/utils/render';
import routersClient, { routersAdmin } from '~/router';
import layoutMain from './layout/layoutMain';

// config router
const app = document.querySelector('#app');
const router = new Navigo('/');

// Định nghĩa cái route
routersClient.map((route) => {
    if (route.layout === '') {
        router.on(route.path, () => {
            render(layoutMain(route.element), app);
        });
    }
});

routersAdmin.map((route) => {
    if (route.layout === '') {
        router.on(route.path, () => {
            render(layoutMain(route.element), app);
        });
    }
});

// start navigo
router.resolve();
