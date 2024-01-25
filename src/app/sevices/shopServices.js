import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'


export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    tagTypes: ["location","orders"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}.json`
        }),
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        postOrders: builder.mutation({
            query: ({order, localId}) => ({
                url: `orders/${localId}.json`,
                method: "POST",
                body: order
            }),
            invalidatesTags: ["orders"]
        }),
        getOrders: builder.query({
            query: () => `orders.json`,
            providesTags: ["orders"]
        }),
        postUserLocation: builder.mutation({
            query: ({ localId, locationFormatted }) => ({
                url: `userLocation/${localId}.json`,
                method: "PUT",
                body: locationFormatted
            }),
            invalidatesTags: ["location"]
        }),
        getUserLocation: builder.query({
            query: (localId) => `userLocation/${localId}.json`,
            providesTags: ["location"]
        })
    }),
})


export const { useGetProductQuery,
    useGetProductsQuery,
    useGetCategoriesQuery,
    usePostOrdersMutation,
    useGetOrdersQuery,
    usePostUserLocationMutation,
    useGetUserLocationQuery
} = shopApi