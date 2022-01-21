import axios from 'axios'
import CartItem from '../components/CartItem'

class AddToCart {
    constructor(elem, selector) {
        this.elem = elem
        this.options = JSON.parse(elem.getAttribute(selector))

        this.cart = document.querySelector('[data-side-cart]')
        this.itemsContainer = this.cart.querySelector('.side-cart__items')
    }

    init() {
        this.attachListeners()
    }

    attachListeners() {
        let postData = {};
        if(this.options.type === 'single') {
            postData.items = [
                {
                    quantity: 1,
                    id: this.options.product,
                    properties: {
                        info: this.options.info
                    }
                }
            ]
        } else {
            postData.items = this.options.products
        }

        this.elem.addEventListener('click', () => this.updateCart(postData))
    }

    async updateCart(postData) {
        try {
            const res = await axios.post('/cart/add.js', postData)

            const items = res.data.items
            items.forEach(item => {
                const matchingElem = this.cart.querySelector('[data-cart-item="' + item.id + '"]')
                if(matchingElem) {
                    matchingElem.querySelector('#quantity').innerHTML = item.quantity
                } else {
                    this.buildCartItem(item)
                }
            })
            
            if(!this.cart.classList.contains('active')) {
                this.cart.classList.add('active')

                if(window.innerWidth < 1000) {
                    document.querySelector('.drawer-menu--close').click()
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    buildCartItem(item) {
        const raw =`
            <div class="flex">
                <img class="cart-item__image m-r-m" src="${item.featured_image.url}" />

                <div class="flex f-col f-jc">
                    <h5 class="cart-item__title text-md">${item.product_title}</h5>
                    <p class="cart-item__info text-sm">${item.properties.info}</p>
                    <div class="cart-item__quantity flex text-sm">
                        <button class="cart-item__quantity-btn" data-minus>-</button>
                        <div class="cart-item__quantity-increment flex f-ac font-secondary" id="quantity">
                            ${item.quantity}
                        </div>
                        <button class="cart-item__quantity-btn" data-plus>+</button>
                    </div>
                </div>
            </div>

            <span class="cart-item--remove" data-remove="${item.variant_id}">&times;</span>
        `

        const container = document.createElement('div')
        container.classList.add('cart-item', 'flex', 'f-jb', 'f-ac')
        container.setAttribute('data-cart-item', item.variant_id)
        container.innerHTML = raw

        this.itemsContainer.appendChild(container)

        const cartItem = new CartItem(container, 'data-cart-item')
        cartItem.init()
    }
}

export default AddToCart