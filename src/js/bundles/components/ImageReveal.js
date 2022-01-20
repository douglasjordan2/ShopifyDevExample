class ImageReveal {
    constructor(elem, selector) {
        this.elem = elem

        this.image = document.querySelector(elem.getAttribute(selector))
    }

    init() {
        this.attachListeners()
    }

    attachListeners() {
        this.elem.addEventListener('mouseenter', () => {
            this.image.classList.add('reveal')
        })

        this.elem.addEventListener('mouseleave', () => {
            this.image.classList.remove('reveal')
        })
    }
}

export default ImageReveal