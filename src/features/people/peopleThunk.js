import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPeopleThunk = createAsyncThunk("people/getPeopleThunk", async() => {
    const request = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
    const json  = await request.json()
    return json.data[0]
})