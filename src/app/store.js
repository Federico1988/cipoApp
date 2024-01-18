import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  shopReducer  from "../features/shop/shopSlice"
import { shopApi } from '../sevices/shopServices'
import cartReducer from "../features/cart/cartSlice"


export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,

    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,}).concat(shopApi.middleware),
})

setupListeners(store.dispatch)

