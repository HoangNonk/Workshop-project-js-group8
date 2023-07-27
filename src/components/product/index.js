const product = (url, title) => {
    return `
        <div class="">
            <img src="${url}" class="tw-h-32 tw-w-full tw-object-cover"/>
            <h2>${title}</h2>
        </div>
    `;
};

export default product;
