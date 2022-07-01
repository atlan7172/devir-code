import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [{
        id: 1, text: "hello"
    }, {
        id: 2, text: "hello2"
    }, {
        id: 3, text: "hello3"
    }]
}

export const itemsSlice = createSlice({
    name: 'data', initialState, reducers: {
        addItem: (state, action) => {
            state.items.push({id: action.payload.id, text: action.payload.text})
        }, removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }, changeItem: (state, action) => {
            state.items[action.payload.id - 1] = action.payload
        }, clearAll: (state) => {
            state.items = []
        }
    },
})

export const {addItem, removeItem, clearAll, changeItem} = itemsSlice.actions

export default itemsSlice.reducer