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
