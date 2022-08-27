import { cartItem, ADD_TO_CART, REMOVE_FROM_CART, DELETE_CART } from "../slice/cartSlice";
import { appDispatch } from "../store"

export const addToCart = (data: cartItem) => {
    appDispatch(ADD_TO_CART(data));
}

export const removeFromCart = (data: cartItem) => {
    appDispatch(REMOVE_FROM_CART(data));
}

export const deleteCart = () => {
    appDispatch(DELETE_CART());
}