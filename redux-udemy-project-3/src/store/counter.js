import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// preparing a slice of our global state
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

// not exporting the entire slice but just the reducer part
export default counterSlice.reducer;
