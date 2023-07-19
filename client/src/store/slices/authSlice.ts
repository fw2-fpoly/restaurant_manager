import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "~/interface/auth";



export interface authState {
    isLogin: boolean;
    user: IUser
}

const initialState: authState = {
    isLogin: false,
    user: {} as IUser
}

const authSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action);
        },
        logout: (state, action) => {
            console.log(action);

        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
