import allProducts from '~/api/allProducts';
import { useEffect } from '~/utils';
import product from '~/components/admin/product';
const listProduct = () => {
    useEffect(() => {
        const getAllProduct = async () => {
            const listProduct = document.querySelector('.list-product');
            const res = await allProducts();
            const result = res.map((element) => product(element)).join('');
            listProduct.innerHTML = result;
        };
        getAllProduct();
    });
    return `
    <div class="tw-flex-1 tw-p-4">
        <div>
            <h2 class="tw-text-3xl tw-font-semibold">Danh sách sản phẩm</h2>
        </div>
        <div class="tw-mt-8">
            <table class="tw-table-auto tw-w-full">
                <thead class="tw-border-b tw-border-[#ccc] tw-border-solid tw-py-3">
                    <tr>
                        <th class="tw-py-3 tw-font-medium">Tiêu đề</th>
                        <th class="tw-py-3 tw-font-medium">Ảnh</th>
                        <th class="tw-py-3 tw-font-medium">Mã</th>
                        <th class="tw-py-3 tw-font-medium">Giá</th>
                        <th class="tw-py-3 tw-font-medium">Giới tính</th>
                        <th class="tw-py-3 tw-font-medium">Trạng thái</th>
                        <th class="tw-py-3 tw-font-medium">Sửa</th>
                        <th class="tw-py-3 tw-font-medium">Xóa</th>
                    </tr>
                </thead>
                <tbody class="list-product">
                </tbody>
            </table>
        </div>
    </div>`;
};

export default listProduct;
