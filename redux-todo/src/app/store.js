import { configureStore } from "@reduxjs/toolkit";

import toDoListSlice from "../features/toDoList/toDoListSlice";

const store = configureStore({
    reducer: { toDoList: toDoListSlice },
});

export default store;
