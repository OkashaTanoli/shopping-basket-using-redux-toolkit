import { createSlice } from "@reduxjs/toolkit";
import { type } from "os";
import { cartItemsType } from "../types/types";


const initialState: cartItemsType = {
    cartItems: [],
    isOpen: false
}

export const cartSlice = createSlice({
    name: 'cartslice',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const murge = { ...action.payload, value: 1 }
            let isAdded: boolean = false;
            let index = 0;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === action.payload.id) {
                    isAdded = true
                    index = i
                    break
                }
                else {
                    isAdded = false
                }
            }

            isAdded === false ? state.cartItems.push(murge) : state.cartItems[index].value += 1
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((arrow) => arrow.id !== action.payload);
        },
        setOpen: (state, action) => {
            state.isOpen = action.payload
        },
        incrementItem: (state, action) => {
            state.cartItems.map((val) => {
                if (val.id === action.payload) {
                    val.value += 1
                }
            })
        },
        decrementItem: (state, action) => {
            state.cartItems.map((val) => {
                if (val.id === action.payload) {
                    if(val.value > 1){
                        val. value -= 1
                    }
                }
            })
        }
    }
})

export const { addItem, setOpen, removeItem, decrementItem, incrementItem } = cartSlice.actions

export default cartSlice.reducer