<<<<<<< HEAD
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
=======
import '~/components/styleGlobal/style.scss';
import render, { router } from '~/utils/render';
import routersClient, { routersAdmin } from '~/router';
import layoutMain from '~/layout/layoutMain';
import layoutAdmin from '~/layout/layoutAdmin';

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
            render(layoutAdmin(route.element));
        });
    }
});

// start navigo
router.resolve();
>>>>>>> 09e4c7aedf1d5a85118ccaeec1510218a5e38729
