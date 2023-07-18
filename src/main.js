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
