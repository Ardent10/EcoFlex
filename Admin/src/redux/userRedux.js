import { createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart: (state)=>{
            state.isFetching = true;
        },
        loginSuccess: (state, action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;

            toast.success("Admin Login Success🤖",{position:"top-center"});
        },
        loginFailure: (state)=>{
            state.isFetching = false;
            state.currentUser = null;
            state.error = true;
            toast.error("Admin Login failed❌",{position:"top-center"});
        },
        logout: (state) =>{
            state.currentUser = null;
            state.isFetching= false;
            state.error= false;
            toast.error("Admin Logout Success🤖",{position:"top-center"});
        },
    },
});

export const {loginStart, loginSuccess,loginFailure, logout} = userSlice.actions;
export default userSlice.reducer;