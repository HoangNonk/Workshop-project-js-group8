import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:8000/api',
});

const GET = async (url, options = {}) => {
    try {
        const res = await httpRequest.get(url, options);
        return res.data;
    } catch (error) {
        return error;
    }
};

export default httpRequest;
export { GET };
