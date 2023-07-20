import { GET } from './httpRequest';
const allProducts = async () => {
    const data = await GET('/products');
    return data;
};

export default allProducts;
