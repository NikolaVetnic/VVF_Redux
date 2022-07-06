import { createSlice } from "@reduxjs/toolkit";
import randomFutureDate from "../../util/randomFutureDate";

const initialState = {
    toDoList: [
        {
            key: 1,
            date: randomFutureDate().toLocaleString(),
            msg: "Test message #1.",
        },
        {
            key: 2,
            date: randomFutureDate().toLocaleString(),
            msg: "Test message #2.",
        },
    ],
};

const toDoListSlice = createSlice({
    name: "toDoList",
    initialState: initialState,
    reducers: {
        create(state, action) {
            state.toDoList.push(action.payload);
        },
    },
});

export const toDoListActions = toDoListSlice.actions;

export default toDoListSlice.reducer;
