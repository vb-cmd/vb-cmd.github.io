const header = document.querySelector('#header')

window.onload = changeHeightHeader
window.onresize = changeHeightHeader

function changeHeightHeader() {
    header.style.height = `${window.innerHeight}px`
}