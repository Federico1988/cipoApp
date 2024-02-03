import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        //products: allProducts,
        //categories: allCategories,
        filterCategory: {},
        selectedProduct: {},
        filteredByCategoryProducts: []

    }

}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        //setFilteredByCategoryProducts: (state, actions) => {
        //    state.value.filteredByCategoryProducts = state.value.products.filter(product => product.category == actions.payload);
        //},
        //setSelectedProducts: (state, actions) => {
        //    state.value.selectedProduct = state.value.products.find(product => product.id === actions.payload);
        //}
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