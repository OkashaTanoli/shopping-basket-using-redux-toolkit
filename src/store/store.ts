import productsSlice from "../reducers/productsSlice";
import cartSlice from "../reducers/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
