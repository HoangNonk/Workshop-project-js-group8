import { router, useEffect } from '~/utils';
const sidebar = () => {
    const data = [
        {
            title: 'Điều khiển',
            href: 'admin',
            active: false,
        },
        {
            title: 'Danh sách sản phẩn',
            href: 'admin/list-product',
            active: false,
        },
        {
            title: 'Tạo sản phẩm',
            href: 'admin/create-product',
            active: false,
        },
        {
            title: 'Cấp quyền admin',
            href: 'admin/user',
            active: false,
        },
    ];
    let dataSidebar;
    useEffect(() => {
        console.log(1234);
        const currentLocation = router.getCurrentLocation().url;
        console.log(currentLocation);
        // dataSidebar = data.map((element) => {
        //     if (currentLocation === element.href) {
        //         return {
        //             ...element,
        //             active: true,
        //         };
        //     }
        //     return element;
        // });
    });
    return `
    <div class="">
        <div class="tw-w-[300px] tw-sticky tw-top-0 tw-max-h-screen tw-min-h-screen tw-border-r tw-border-[#ccc]/50 tw-border-solid tw-pr-3">
            <div class="tw-py-5 tw-border-b tw-border-solid tw-border-[#ccc]/50">
                <img class="tw-mx-auto" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg" alt="logo"/>
            </div>
            <ul class="tw-flex tw-flex-col tw-mt-8 tw-gap-1">
            ${data
                .map(
                    (element) => `
                <li><a href="${
                    element.href
                }" class="tw-text-lg tw-font-semibold tw-block tw-pl-5 tw-py-3 hover:tw-bg-gray-400/10 ${
                        element.active
                            ? 'tw-border-l-4 tw-border-solid tw-border-[#F15E2D] tw-text-[#F15E2D]'
                            : 'tw-text-gray-500'
                    }" data-navigo data-navigo-options="updateState: true,">
                    ${element.title}
                </a></li>
            `,
                )
                .join('')}
            </ul>
        </div>
    </div>
    `;
};

export default sidebar;
