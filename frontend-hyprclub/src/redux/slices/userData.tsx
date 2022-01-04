import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

export const userDataSlice = createSlice({
    name : 'UserData',
    initialState,
    reducers : {

    }
});

export const UserDataActions = userDataSlice.actions;

export default userDataSlice.reducer;