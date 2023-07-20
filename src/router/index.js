<<<<<<< HEAD
import home from '~/pages/client/home';
import homeAdmin from '~/pages/admin/home';
const routersClient = [
    {
        path: '/',
        element: home,
        layout: '',
    },
];

const routersAdmin = [
    {
        path: '/admin',
        element: homeAdmin,
        layout: '',
    },
];

export default routersClient;
export { routersAdmin };
=======
import home from '~/pages/client/home';
import homeAdmin from '~/pages/admin/home';
const routersClient = [
    {
        path: '/',
        element: home,
        layout: '',
    },
];

const routersAdmin = [
    {
        path: '/admin',
        element: homeAdmin,
        layout: '',
    },
    {
        path: '/admin/user',
        element: homeAdmin,
        layout: '',
    },
];

export default routersClient;
export { routersAdmin };
>>>>>>> 09e4c7aedf1d5a85118ccaeec1510218a5e38729
