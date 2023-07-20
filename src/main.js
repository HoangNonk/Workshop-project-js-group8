import '~/components/styleGlobal/style.scss';
import { render, router } from './utils';
import routersClient, { routersAdmin } from '~/router';
import layoutMain from './layout/layoutMain';

// Định nghĩa cái route
routersClient.map((route) => {
    if (route.layout === '') {
        router.on(route.path, () => {
            render(layoutMain(route.element));
        });
    }
});

routersAdmin.map((route) => {
    if (route.layout === '') {
        router.on(route.path, () => {
            render(layoutMain(route.element));
        });
    }
});

// start navigo
router.resolve();
