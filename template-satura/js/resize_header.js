window.onresize = resizeHeader
window.onload = resizeHeader

function resizeHeader() {
    const header = document.querySelector('.header')
    const windowHeight = window.innerHeight + 'px';

    header.style.maxHeight = windowHeight;
    header.style.height = windowHeight;
}