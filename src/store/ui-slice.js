import { createSlice } from "@reduxjs/toolkit";

const initialUiSlice = {
    showUi : false
}

const UiSlice = createSlice({
    name: "ui-slice",
    initialState : initialUiSlice,
    reducers : {
        toggleUi(state) {
            state.showUi = !state.showUi
        }
    }
})

export const UiActions = UiSlice.actions

export default UiSlice.reducer


