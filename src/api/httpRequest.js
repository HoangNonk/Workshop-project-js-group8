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
const POST = async (url, data, options = {}) => {
    try {
        const res = await httpRequest.post(url, data, options, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error;
    }
};
const POSTa = async (url, options = {}) => {
    const res = await httpRequest.post(url, options, { withCredentials: true, Credential: 'same-site' });
    return res.data;
};

export default httpRequest;
export { GET, POST, POSTa };
