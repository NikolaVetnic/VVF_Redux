import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// preparing a slice of our global state
const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    // map of all the reducers this slice needs
    reducers: {
        increment(state) {
            // here it is allowed as toolkit uses immer to clone the state
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
