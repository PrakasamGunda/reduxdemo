import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart-slice',
    initialState : initialCartState,
    reducers: {
        addItemHandler(state, action) {
            state.totalQuantity = state.totalQuantity + 1
            const newItem = action.payload;
            const isExistingItem = state.items.find(item => item.id === newItem.id)
            if (!isExistingItem) {
                 state.items.push({
                    id : newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title
                 })
            } else {
                isExistingItem.quantity++;
                isExistingItem.totalPrice = isExistingItem.totalPrice + newItem.price;
            }
        },
        removeItemHandler(state, action) {
            state.totalQuantity = state.totalQuantity - 1;
            const id = action.payload
            const isExistingItem = state.items.find(item => item.id === id);
            if (isExistingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                isExistingItem.quantity--;
                isExistingItem.totalPrice = isExistingItem.totalPrice - isExistingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer