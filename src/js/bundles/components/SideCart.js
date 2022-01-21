import axios from "axios"
import _MutationObserver from "../helpers/MutationObserver"
import IdleTimer from "../helpers/IdleTimer"

class SideCart {
    constructor(elem) {
        this.elem = elem

        this.itemsContainer = elem.querySelector('.side-cart__items')
        this.emptyText = elem.querySelector('.empty-cart-text')
        this.checkoutBtn = elem.querySelector('.checkout-btn')
        this.subtotalBlock = elem.querySelector('.side-cart__subtotal')
        this.subtotal = elem.querySelector('.subtotal-text')
    }

    init() {
        _MutationObserver(this.elem, () => {
            const cartItems = this.elem.querySelectorAll('.cart-item')
    
            if(cartItems.length) {
                this.subtotalBlock.classList.remove('visually-hidden')
                this.emptyText.classList.add('visually-hidden')
                this.checkoutBtn.classList.remove('btn--primary')
                this.checkoutBtn.classList.add('btn--secondary')
                this.checkoutBtn.disabled = false
    
                new IdleTimer(() => this.updateSubtotalText())
            } else {
                this.subtotalBlock.classList.add('visually-hidden')
                this.emptyText.classList.remove('visually-hidden')
                this.checkoutBtn.classList.add('btn--primary')
                this.checkoutBtn.classList.remove('btn--secondary')
                this.checkoutBtn.disabled = true
            }
        })
    }

    async updateSubtotalText() {
        const res = await axios.get('/cart.js')
        const subtotal = (res.data.items_subtotal_price / 100).toFixed(2)
        this.subtotal.innerHTML = '$' + subtotal
    }
}

export default SideCart