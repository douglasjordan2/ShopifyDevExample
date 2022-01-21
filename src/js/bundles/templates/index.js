import "Styles/templates/index.scss";
import Drawer from '../components/Drawer';
import AddToCart from "../components/AddToCart";
import CartItem from "../components/CartItem"; 
import SideCart from '../components/SideCart';
import ImageReveal from '../components/ImageReveal';

import ComponentConstructor from "../ComponentConstructor";

const components = [
    { selector: 'drawer', class: Drawer },
    { selector: 'atc', class: AddToCart },
    { selector: 'cart-item', class: CartItem },
    { selector: 'side-cart', class: SideCart },
    { selector: 'image-reveal', class: ImageReveal }
]

const Constructor = new ComponentConstructor(components)
Constructor.init()