import React from 'react'
import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductsType } from '../types/types'

const initialState: { productsList: ProductsType[], isLoading: boolean } = {
    productsList: [],
    isLoading: true
}

export const AsyncProducts = createAsyncThunk(
    '/api/products',
    async () => {
        const response = await fetch('api/products/')
        const data = await response.json()
        return data as ProductsType[]
    }
)

export const ProductsSlice = createSlice({
    name: 'productslice',
    initialState,
    reducers: {
        // ProductsAdd: (state, action: PayloadAction<ProductsType[]>): void => {
        //     state.productsList = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(AsyncProducts.fulfilled, (state, { payload }) => {
            state.productsList = payload
            state.isLoading = false
        })
        builder.addCase(AsyncProducts.pending, (state, { payload }) => {
            state.isLoading = true
        })
        builder.addCase(AsyncProducts.rejected, (state, action) => {
            state.isLoading = false
            console.log(action.error.message)
        })
    },
})



// export const { ProductsAdd } = ProductsSlice.actions

export default ProductsSlice.reducer