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
            toast.success("Welcome " + state.currentUser.username + "🤖",{position:"top-center"})
        },
        loginFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        logout:(state)=>{
            state.currentUser= null;
            state.isFetching= false;
            state.error= false
            toast.success("Logout Successful! 🙋‍♂️",{position:"top-center"})
        },
        RegisterStart:(state)=>{
            state.isFetching=true;
        },
        RegisterSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload;
            toast.success("Welcome " + state.currentUser.username + "🤖",{position:"top-center"})
        },
        RegisterFailure:(state)=>{
            state.isFetching = false;
            state.error = true;
            toast.error("Registration Failed ❌");
        },

    },
});

export const {loginStart, loginSuccess,loginFailure,logout,RegisterStart,RegisterSuccess,RegisterFailure} = userSlice.actions;
export default userSlice.reducer;