import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import cartSlice from "./cart-slice";


const store = configureStore({
    reducer : {
        UiSlice : UiSlice,
        cartSlice: cartSlice
    }
})

export default store