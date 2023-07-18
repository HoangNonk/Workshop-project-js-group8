import header from '~/layout/components/header';
import footer from '~/layout/components/footer';
function layoutMain(children) {
    return `
    <div>
        ${header()}
        ${children()}
        ${footer()}
    </div>
    `;
}

export default layoutMain;
