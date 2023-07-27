import allProducts from '~/api/allProducts';
const listProduct = () => {
    let res;
    const getAllProduct = async () => {
        res = await allProducts();
    };
    getAllProduct();
    console.log(res);
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
                <tbody>
                ${res.map(
                    (item) => `
                    <tr>
                        <td class="tw-py-3 tw-max-w-xs">${item.title}</td>
                        <td class="tw-py-3">
                            <img src="" class="tw-w-32 tw-h-20 tw-object-cover tw-rounded-md"/>
                        </td>
                        <td class="tw-py-3">1961</td>
                        <td class="tw-py-3">1961</td>
                        <td class="tw-py-3">1961</td>
                        <td class="tw-py-3">1961</td>
                        <td class="tw-text-blue-500 tw-font-semibold tw-cursor-pointer tw-py-3">Sửa</td>
                        <td class="tw-text-red-500 tw-font-semibold tw-cursor-pointer tw-py-3">Xóa</td>
                    </tr>
                    `,
                )}
                </tbody>
            </table>
        </div>
    </div>`;
};

export default listProduct;
