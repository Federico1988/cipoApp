import { createSlice } from '@reduxjs/toolkit'
import allProducts from "../../Data/products.json"
import allCategories from "../../Data/catergories.json"

const initialState = {
    value: {
        products: allProducts,
        categories: allCategories,
        selectedProducts: {},
        filteredByCategoryProducts: []

    }

}

export const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        setFilteredByCategoryProducts: (state, actions) => {
            state.value.filteredByCategoryProducts = state.value.products.filter(product => product.category == actions.payload)
        }

    }
})

export const { setFilteredByCategoryProducts } = shopSlice.actions

export default shopSlice.reducer