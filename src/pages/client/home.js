import { store } from '~/store/store';
import refreshToken from '~/api/httpRefreshToken';
const home = () => {
    const user = store.getState().user;
    const apiRefreshToken = async () => {
        const res = await refreshToken({ refreshToken: user.currentUser?.refreshToken });
    };

    // apiRefreshToken();
    return `<div class="container tw-bg-red-700">
            <h2>Home Page Client</h2>
        </div>`;
};

export default home;
