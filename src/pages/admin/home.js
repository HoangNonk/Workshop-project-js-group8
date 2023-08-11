import { store } from '~/store/store';
const home = () => {
    console.log(store.getState());
    return ` 
    <div class="tw-flex-1">
        <h2>Home Page Admin</h2>
    </div>`;
};

export default home;
