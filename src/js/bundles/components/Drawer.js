class Drawer {
    constructor(elem, selector) {
        this.elem = elem
        this.options = JSON.parse(elem.getAttribute(selector)) || {}

        this.open = document.querySelector(this.options.open)
        this.close = document.querySelector(this.options.close)
    }

    init() {
        this.attachListeners()
    }

    attachListeners() {
        this.open.addEventListener('click', () => {
            this.elem.classList.add('active')
        })

        this.close.addEventListener('click', () => {
            this.elem.classList.remove('active')
        })
    }
}

export default Drawer