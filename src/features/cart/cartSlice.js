import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        items: [],
        total: 0,
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
        deleteItem: (state, actions) => {
            const index = state.value.items.findIndex(item => item.id === actions.payload.id);

            if (index !== -1) {
                state.value.items.splice(index, 1);
            }
            state.value.total = state.value.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            state.value.updateAt = new Date().toLocaleString();

        },
        clearCart: (state) => {
            state.value.items = [];
            state.value.total = 0;
        }

    },
})

export const { addItem, deleteItem, clearCart } = cartSlice.actions

export default cartSlice.reducer