import axios from 'axios'
import _MutationObserver from '../_MutationObserver'

class CartItem {
    constructor(elem, selector) {
        this.elem = elem

        this.id = parseInt(elem.getAttribute(selector))
        this.updateElem = elem.querySelector('#quantity')
        this.value = parseInt(this.updateElem.innerHTML)
        this.container = elem.parentElement
        this.idleTimer = null
    }

    init() {
        this.attachListeners()
        this.mutationObserver()
    }

    attachListeners() {
        const plus = this.elem.querySelector('[data-plus]')
        const minus = this.elem.querySelector('[data-minus]')
        
        plus.addEventListener('click', () => this.handleChange('plus'))
        minus.addEventListener('click', () => this.handleChange('minus'))

        const remove = this.elem.querySelector('[data-remove]')
        remove.addEventListener('click', () => this.remove())
    }

    handleChange(dir) {
        if(dir === 'plus') { 
            this.value += 1
        } else {
            this.value -= 1

            if (this.value === 0) {
                this.remove()
            }
        }

        this.updateElem.innerHTML = this.value
        this.delayUpdate(this.id, this.value)
    }

    remove() {
        this.delayUpdate(this.id, 0)
        this.container.removeChild(this.elem)
    }

    delayUpdate (id, qty) {
        clearTimeout(this.idleTimer)
        this.idleTimer = setTimeout(() => this.updateCart(id, qty), 500)
    }

    async updateCart(id, qty) {
        try {
            await axios.post('/cart/update.js', {
                updates: {
                    [id]: qty
                }
            })
        } catch(err) {
            console.error(err)
        }
    }

    mutationObserver() {
        const mutation = new _MutationObserver(this.elem, () => this.value = parseInt(this.updateElem.innerHTML))
        mutation.observe()
    }
}

export default CartItem