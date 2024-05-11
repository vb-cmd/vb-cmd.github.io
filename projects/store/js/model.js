export default class Model {
    #optionFramesLeft = [
        {
            transform: 'translateX(-100%)'
        },
        {
            transform: 'translateX(0%)'
        }
    ]

    #optionFramesRight = [
        {
            transform: 'translateX(100%)'
        },
        {
            transform: 'translateX(0%)'
        }
    ]

    #optionOpen = {
        duration: 300,
        iterations: 1,
        fill: 'forwards',
        easing: 'ease-in'
    }

    #optionClose = {
        direction: 'reverse',
        duration: 300,
        iterations: 1,
        fill: 'forwards',
        easing: 'ease-in-out'
    }

    #targetModel = null
    #targetButton = null
    #isClose = true
    #position = null

    constructor(modelName, buttonName) {
        this.#targetButton = document.querySelector(buttonName)
        this.#targetModel = document.querySelector(modelName)

        if (this.#targetModel === null || this.#targetButton === null) {
            throw new Error('Model or target button not found')
        }

        this.#setPostition()
        this.#setOnClick()
    }

    #setPostition() {
        let position = this.#targetModel.className.match(/model-position-(?<position>left|right)/)

        if (position === null) {
            throw new Error('Not found model-position-(left|right) class in model')
        }

        this.#position = position.groups.position
    }

    #setOnClick() {
        this.#targetModel.querySelector('.model-title-exit')
            .addEventListener('click', this.close.bind(this))

        this.#targetButton.addEventListener('click', this.open.bind(this))
    }

    close() {
        if (!this.#isClose) {
            let positionOption;

            switch (this.#position) {
                case 'left':
                   positionOption = this.#optionFramesLeft
                    break;
                case 'right':
                    positionOption = this.#optionFramesRight
                    break;
            }
            this.#targetModel.animate(positionOption, this.#optionClose)

            this.#isClose = true;
        }
    }

    open() {
        if (this.#isClose) {
            let positionOption;

            switch (this.#position) {
                case 'left':
                    positionOption = this.#optionFramesLeft
                    break;
                case 'right':
                    positionOption = this.#optionFramesRight
                    break;
            }

            this.#targetModel.animate(positionOption, this.#optionOpen)
            this.#isClose = false;
        }
    }
}