import allProducts from '~/api/allProducts';
const home = () => {
    allProducts();
    return `<div class="container tw-bg-red-700">
            <h2>Home Page Client</h2>
        </div>`;
};

export default home;
