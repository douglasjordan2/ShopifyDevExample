import axios from 'axios'
import _MutationObserver from '../helpers/MutationObserver'
import IdleTimer from '../helpers/IdleTimer'

class CartItem {
    constructor(elem, selector) {
        this.elem = elem

        this.id = parseInt(elem.getAttribute(selector))
        this.updateElem = elem.querySelector('#quantity')
        this.value = parseInt(this.updateElem.innerHTML)
        this.container = elem.parentElement
    }

    init() {
        this.attachListeners()
        
        _MutationObserver(this.elem, () => {
            this.value = parseInt(this.updateElem.innerHTML)
        }, true)
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
        new IdleTimer(() => this.updateCart(this.id, this.value))
    }

    remove() {
        new IdleTimer(() => this.updateCart(this.id, 0))
        this.container.removeChild(this.elem)
    }

    async updateCart(id, qty) {
        try {
            const res = await axios.post('/cart/update.js', {
                updates: {
                    [id]: qty
                }
            })

            console.log(res)
        } catch(err) {
            console.error(err)
        }
    }
}

export default CartItem