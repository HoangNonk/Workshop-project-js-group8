import home from '~/pages/client/home';
import homeAdmin from '~/pages/admin/home';
import createProduct from '~/pages/admin/createProduct';
import listProduct from '~/pages/admin/listProduct';
import productList from '~/pages/client/productList';
const routersClient = [
    {
        path: '/',
        element: home,
        layout: '',
    },
    {
        path: '/product-list',
        element: productList,
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
        path: '/admin/create-product',
        element: createProduct,
        layout: '',
    },
    {
        path: '/admin/list-product',
        element: listProduct,
        layout: '',
    },
];

export default routersClient;
export { routersAdmin };
