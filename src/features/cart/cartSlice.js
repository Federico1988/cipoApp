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
            state.value.items.push({...actions.payload,quantity:1});
            console.log(state.value.items)
        },
        deleteItem: () => { }
    },
})

export const { addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer