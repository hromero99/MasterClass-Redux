import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "../features/people/peopleSlice";


export const store = configureStore({
    reducer: {
        "people": peopleSlice.reducer
    }
})