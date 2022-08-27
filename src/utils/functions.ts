interface cartItem {
    id: string,
    name?: string,
    price?: number,
    image?: string,
    quantity?: number
}
const quantityOfItem = (cart: cartItem[], itemId: string) => {
    const cartItem = cart.find(({ id }) => id === itemId);
    if (cartItem) return cartItem.quantity;
    return 0;
};

export default quantityOfItem;