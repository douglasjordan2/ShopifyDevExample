import "Styles/templates/index.scss";
import Drawer from '../components/Drawer';
import AddToCart from "../components/AddToCart";
import CartItem from "../components/CartItem"; 
import SideCart from '../components/SideCart';
import ImageReveal from '../components/ImageReveal';

import ComponentConstructor from "../helpers/ComponentConstructor";

const components = {
    'drawer': Drawer,
    'atc': AddToCart,
    'cart-item': CartItem,
    'side-cart': SideCart,
    'image-reveal': ImageReveal
}

ComponentConstructor(components)