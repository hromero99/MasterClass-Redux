import { createSlice } from "@reduxjs/toolkit";
import { getPeopleThunk } from "./peopleThunk";


export const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "idle",
        data: [],
        error: null
    },
    reducers: {
        addPerson: (state,action) => {
           // Inmutable
            state.data.push(action.payload)
        },
        deletePerson: (state,action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPeopleThunk.pending,(state,action) => {
            state.status = "pending"
        }).addCase(getPeopleThunk.rejected,(state,action) => {
            state.status = "rejected"
            state.error = action.error.message
        }).addCase(getPeopleThunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = [...state.data,action.payload]
        })
    }
})

export const getPeopleData = (state) => state.people.data
export const getPeopleSatus = (state) => state.people.status
export const getPeopleError = (state) => state.people.error
export const {addPerson,deletePerson} = peopleSlice.actions
