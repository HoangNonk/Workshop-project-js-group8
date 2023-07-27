import { useEffect } from '~/utils';
import { $, $$ } from '~/utils/jquery';
import validateCreate from '~/components/validateCreate';
const createProduct = () => {
    useEffect(() => {
        let btnCreate = $('.btn-create');
        let imageProduct = $('.image-product');
        let validateBox = $('.validate-create');
        let addImage = $('.add-image');
        let listImage = $('.list-image');
        let boxImages = $('.box-images');
        let colorProduct = $('.color-product');
        let amountProduct = $('.amount-product');
        let addType = $('.add-type');
        let boxType = $('.box-type');
        const addSize = $('.add-size');
        let arrListImage = [];
        let arrType = [];
        let arrSize = [];
        addType.addEventListener('click', (e) => {
            e.preventDefault();
            if (colorProduct.value && amountProduct.value) {
                arrType.push({
                    color: colorProduct.value,
                    amount: amountProduct.value,
                });
                render();
            } else if (!colorProduct.value && !amountProduct.value);
            else {
                validateBox.insertAdjacentHTML('afterbegin', validateCreate('Trường giá trị màu còn thiếu', true));
                setTimeout(() => {
                    validateBox.lastElementChild.remove();
                }, 2000);
                return;
            }
        });
        const handleInfo = () => {
            return $('.info').value;
        };
        const render = () => {
            boxType.innerHTML = arrType
                .map(
                    (element) => `
                <div class="tw-bg-gray-100 tw-rounded-md tw-py-1 tw-px-2 tw-flex tw-items-center tw-mt-3">
                    <div class="tw-w-4 tw-h-4 tw-rounded-sm tw-mr-2" style="background: ${element.color}">
                    </div>
                    <p>${element.amount}</p>
                    <p class="tw-text-sm tw-px-1 tw-rounded-sm tw-cursor-pointer close-type" data-color="${element.color}">&#9932;</p>
                </div>
                `,
                )
                .join('');
            handleCloseType();
            boxImages.innerHTML = arrListImage
                .map(
                    (element) => `
                <div class="tw-relative">
                    <span class="tw-absolute tw-top-1 tw-right-1 tw-bg-orange-400 tw-px-1 tw-rounded-sm tw-cursor-pointer close-image">&#9932;</span>
                    <img class="tw-rounded-md tw-min-w-[10rem] tw-h-24 tw-h-22 tw-object-cover" src="${element}"/>
                </div>
                `,
                )
                .join('');
            handleCloseImage();
            const boxSize = $('.box-size');
            boxSize.innerHTML = arrSize
                .map(
                    (item) => `
                    <div class="tw-flex tw-items-center tw-bg-white tw-px-2 tw-rounded-md tw-mr-2">
                        <p class="tw-mr-2">${item}</p>
                        <span class="tw-cursor-pointer close-size">&#9932;</span>
                    </div>
                    `,
                )
                .join('');
            handleCloseSize();
        };
        const handleCloseSize = () => {
            const closeSizes = $$('.close-size');
            closeSizes.forEach((element) => {
                element.addEventListener('click', () => {
                    const size = element.previousElementSibling.innerText;
                    arrSize = arrSize.filter((item) => item !== size);
                    render();
                });
            });
        };
        const handleCloseType = () => {
            const closeType = $$('.close-type');
            closeType.forEach((element) => {
                element.addEventListener('click', () => {
                    const dataColor = element.dataset.color;
                    arrType = arrType.filter((item) => dataColor !== item.color);
                    render();
                });
            });
        };
        const handleGender = () => {
            return $('.gender').value;
        };
        const handleStats = () => {
            return $('.status').value;
        };
        const handleCloseImage = () => {
            let btnClose = $$('.close-image');
            btnClose.forEach((element) => {
                element.addEventListener('click', (e) => {
                    const src = e.target.nextElementSibling.src;
                    arrListImage = arrListImage.filter((item) => item != src);
                    render();
                });
            });
        };
        const dHandler = debounce(() => {
            $('.thumbnail').src = imageProduct.value;
            $('.thumbnail').alt = imageProduct.value;
        }, 400);
        imageProduct.addEventListener('input', dHandler);
        function debounce(func, delay) {
            let timeout;
            return function executedFunc(...args) {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    func(...args);
                    timeout = null;
                }, delay);
            };
        }
        const handleValidate = () => {
            let nameProduct = $('.name-product').value;
            let priceProduct = $('.price-product').value;
            let codeProduct = $('.code-product').value;
            let imageProduct = $('.image-product').value;
            if (nameProduct.trim() === '') {
                return {
                    error: true,
                    message: 'Bạn chưa có tên sản phẩm',
                };
            } else if (priceProduct.trim() === '') {
                return {
                    error: true,
                    message: 'Bạn chưa có giá sản phẩm',
                };
            } else if (codeProduct.trim() === '') {
                return {
                    error: true,
                    message: {
                        error: true,
                        message: 'Bạn chưa có tên sản phẩm',
                    },
                };
            } else if (imageProduct.trim() === '') {
                return {
                    error: true,
                    message: {
                        error: true,
                        message: 'Bạn chưa có tên sản phẩm',
                    },
                };
            }
            return {
                title: nameProduct,
                price: priceProduct,
                code_product: codeProduct,
                thumbnail: imageProduct,
            };
        };
        addSize.addEventListener('click', (e) => {
            e.preventDefault();
            const inputSize = $('.size');
            arrSize.push(inputSize.value);
            render();
            inputSize.value = '';
            inputSize.focus();
        });
        addImage.addEventListener('click', (e) => {
            e.preventDefault();
            if (listImage.value.trim() === '') {
                validateBox.insertAdjacentHTML('afterbegin', validateCreate('Bạn chưa nhập link', true));
                return;
            }
            arrListImage.push(listImage.value);
            render();
            listImage.value = '';
            listImage.focus();
        });
        btnCreate.addEventListener('click', (e) => {
            e.preventDefault();
            const validate = handleValidate();
            const info = handleInfo();
            const gender = handleGender();
            const status = handleStats();
            if (validate.error) {
                validateBox.insertAdjacentHTML('afterbegin', validateCreate(validate.message, true));
                setTimeout(() => {
                    validateBox.lastElementChild.remove();
                }, 2000);
            } else {
                const data = {
                    ...validate,
                    list_image: arrListImage,
                    color: arrType,
                    size: arrSize,
                    info,
                    gender,
                    status,
                };
                console.log(data);
            }
        });
    });
    return `
        <div class="tw-py-4 tw-pl-8 tw-grid tw-grid-cols-3 tw-flex-1">
            <div class="tw-col-span-2">
                <h2 class="tw-text-3xl tw-font-semibold">Tạo sản phẩm</h2>
                <form class="tw-mt-4">
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Tên sản phẩm</label>
                        <input class="tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 name-product" type="text" placeholder="VD: Quần jean"/>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Giá sản phẩm</label>
                        <input class="tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 price-product" type="text" placeholder="VD: 10000000"/>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Mã sản phẩm</label>
                        <input class="tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 code-product" type="text" placeholder="VD: AT12345"/>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Ảnh sản phẩm</label>
                        <input class="tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 image-product" type="text" placeholder="Link ảnh"/>
                    </div>
                    <div class="tw-mt-3">
                        <img class="tw-rounded-md tw-w-40 tw-h-22 tw-object-cover thumbnail" src="https://i.ytimg.com/vi/rzAtabryEOo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC8CrlHYDb3uIJIczZpqBCMlQw1Bw"/>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Danh sách ảnh sản phẩm</label>
                        <div class="tw-flex tw-gap-3">
                            <input class="tw-flex-1 tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 list-image" type="text" placeholder="Link ảnh"/>
                            <button class="tw-bg-blue-500 tw-text-white tw-rounded-md tw-px-5 add-image">Thêm</button>
                        </div>
                    </div>
                    <div class="tw-mt-3 tw-flex tw-gap-3 tw-overflow-x-auto box-images">
                        
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Giới tính</label>
                        <select class="tw-h-10 tw-bg-gray-100 tw-rounded-md tw-outline-0 tw-px-3 gender">
                            <option selected value="both">Cả hai</option>
                            <option value="men">Nam</option>
                            <option value="girl">Nữ</option>
                        </select>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Loại sản phẩm</label>
                        <select class="tw-h-10 tw-bg-gray-100 tw-rounded-md tw-outline-0 tw-px-3 status">
                            <option selected value="New Arrival">New Arrival</option>
                            <option value="Limited Edition">Limited Edition</option>
                            <option value="Online Only">Online Only</option>
                            <option value="Sale off">Sale off</option>
                        </select>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Màu sản phẩm</label>
                        <div class="tw-flex tw-gap-3 tw-justify-between">
                            <input class="tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 tw-flex-1 color-product" placeholder="Mã màu" type="text"/>
                            <input class="tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-4 tw-flex-1 amount-product" placeholder="Số lượng" type="text"/>
                            <button class="tw-bg-blue-500 tw-text-white tw-rounded-md tw-px-5 add-type">Thêm</button>
                        </div>
                        <div class="tw-flex tw-gap-3 box-type">
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Size sản phẩm</label>    
                        <div class="tw-flex tw-gap-3">
                            <div class="tw-flex tw-items-center tw-bg-gray-100 tw-rounded-md tw-px-3 tw-flex-1">
                                <div class="box-size tw-flex tw-items-center">
                                </div>
                                <input class="tw-flex-1 tw-bg-gray-100 tw-h-10 tw-rounded-md tw-outline-0 tw-pl-1 size" type="text" placeholder="VD: 40,..."/>
                            </div>
                            <button class="tw-bg-blue-500 tw-text-white tw-rounded-md tw-px-5 add-size">Thêm</button>
                        </div>
                    </div>
                    <div class="tw-flex tw-flex-col">
                        <label class="tw-py-2">Thông tin sản phẩm</label>
                        <textarea value="ddd" class="tw-bg-gray-100 tw-rounded-md tw-outline-0 tw-pl-4 tw-pt-2 tw-resize-none info"cols="30" rows="10" placeholder="Thông tin">
                        </textarea>
                    </div>
                    <div class="tw-flex tw-flex-col tw-mt-4">
                        <button class="tw-bg-blue-500 tw-rounded-md tw-py-3 tw-text-white tw-font-semibold btn-create">
                            Tạo sản phẩm
                        </button>
                    </div>
                </form>
            </div>
            <div class="validate-create tw-fixed tw-top-3 tw-right-3">
            </div>
        </div>
    `;
};

export default createProduct;
