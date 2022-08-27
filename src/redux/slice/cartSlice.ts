import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface cartItem {
    id: string,
    name: string,
    price: number,
    image: string,
    quantity?: number
};

interface cartState {
    cart: cartItem[],
    totalAmount: number,
    totalquantity: number,
};

const initialState: cartState = {
    cart: [],
    totalAmount: 0,
    totalquantity: 0,
};

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState,

    reducers: {
        ADD_TO_CART: (state, { payload }: PayloadAction<cartItem>) => {
            const itemIndex = state.cart.findIndex(({ id }) => id === payload.id);

            /* item not exist in cart */
            if (itemIndex === -1) {
                state.cart = [...state.cart, { ...payload, quantity: 1 }];
            }
            /* item exist in cart */
            else {
                let productItem = state.cart[itemIndex];
                productItem.quantity = productItem.quantity! + 1;
                state.cart[itemIndex] = productItem;
            }
            state.totalquantity += 1;
            state.totalAmount += payload.price;
        },

        REMOVE_FROM_CART: (state, { payload }: PayloadAction<cartItem>) => {
            const itemIndex = state.cart.findIndex(({ id }) => id === payload.id);
            let productItem = state.cart[itemIndex];

            /* product exists in the cart, update the quantity */
            if (productItem.quantity! > 1) {
                productItem.quantity = productItem.quantity! - 1;
                state.cart[itemIndex] = productItem;
            }
            /* item quantity is equal one, delete item from cart */
            else {
                state.cart.splice(itemIndex, 1);
            }
            state.totalquantity -= 1;
            state.totalAmount -= payload.price;
        },

        DELETE_CART: (state) => {
            state.cart = [];
            state.totalAmount = 0;
            state.totalquantity = 0
        }
    },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, DELETE_CART } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;