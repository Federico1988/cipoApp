import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        user: "federico",
        items: [],
        total: null,
        updateAt: ""
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, actions) => {
            const findProduct = state.value.items.find(item => item.id === actions.payload.id);
            if (findProduct) findProduct.quantity += 1;
            else state.value.items.push({ ...actions.payload, quantity: 1 });
            state.value.total = state.value.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            state.value.updateAt = new Date().toLocaleString();
        },
        deleteItem: () => { },
        clearCart: (state) => {
            state.items = [];
          }

    },
})

export const { addItem, deleteItem, clearCart } = cartSlice.actions

export default cartSlice.reducer