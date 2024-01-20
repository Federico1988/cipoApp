import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import shopReducer from "../features/shop/shopSlice"
import { shopApi } from './sevices/shopServices'
import cartReducer from "../features/cart/cartSlice"
import { authApi } from './sevices/authServices'
import authReducer from "../features/auth/authSlice"


export const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,


    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

