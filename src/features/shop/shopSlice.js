import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        filterCategory: {},
        selectedProduct: {},
        filteredByCategoryProducts: []

    }

}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setFilterCategory: (state, actions) => {
            state.value.filterCategory=actions.payload;

        },
        setSelectedProducts: (state, actions) => {
            state.value.selectedProduct = actions.payload;
        }

    }
})

export const { setFilterCategory, setSelectedProducts } = shopSlice.actions

export default shopSlice.reducer