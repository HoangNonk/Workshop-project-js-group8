import style from './productList.module.scss';
import classNames from 'classnames/bind';
import product from '~/components/product';
import { useEffect } from '~/utils';
const cln = classNames.bind(style);

const data = [
    {
        url: 'https://ananas.vn/wp-content/uploads/desktop_productlist.jpg',
        title: 'product 1',
    },
    {
        url: 'https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg',
        title: 'product 2',
    },
    {
        url: 'https://ananas.vn/wp-content/uploads/Pro_A6T015_2-500x500.jpeg',
        title: 'product 3',
    },
];

const productList = () => {
    useEffect(() => {
        const list = document.querySelector('.list');
        list.addEventListener('click', () => {
            console.log(list);
        });
    });
    return `
        <div class="tw-grid tw-grid-cols-4 tw-gap-3 tw-items-center tw-bg-gray-500 list">
        ${data.map((element) => product(element.url, element.title)).join('')}
        </div>
    `;
};

export default productList;
