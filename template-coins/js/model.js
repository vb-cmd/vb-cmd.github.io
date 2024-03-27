const cards = document.querySelectorAll('.card-body-button.btn')
const model = document.querySelector('.model')
const modelClose = model.querySelector('.model-content-close')

modelClose.addEventListener('click', closeModel)
cards.forEach(card => {
    card.addEventListener('click', openModel)
})

function closeModel() {
    model.style.display = 'none'
}

function openModel() {
    model.style.display = 'flex'
}
