import { GET } from './httpRequest';
const allProducts = async () => {
    try {
        const data = await GET('/products');
        return data;
    } catch (error) {
        return error;
    }
};

export default allProducts;
