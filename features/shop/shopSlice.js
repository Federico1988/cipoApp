import { createSlice } from '@reduxjs/toolkit'
import allProducts from "../../Data/products.json"
import allCategories from "../../Data/catergories.json"

const initialState = {
    value: {
        products: allProducts,
        categories: allCategories,
        selectedProduct: {},
        filteredByCategoryProducts: []

    }

}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setFilteredByCategoryProducts: (state, actions) => {
            state.value.filteredByCategoryProducts = state.value.products.filter(product => product.category == actions.payload)
        },
        setSelectedProducts: (state, actions) => {
            state.value.selectedProduct = state.value.products.find(product => product.id === actions.payload)
        }

    }
})

export const { setFilteredByCategoryProducts, setSelectedProducts } = shopSlice.actions

export default shopSlice.reducer