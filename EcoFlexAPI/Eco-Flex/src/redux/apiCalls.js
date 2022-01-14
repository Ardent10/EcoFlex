import {    
    loginFailure,   
    loginStart, 
    loginSuccess,
    logout,
    RegisterStart,
    RegisterSuccess,
    RegisterFailure 

} from "./userRedux";
import { publicRequest } from "../requestMethod";

//LOGIN
export const login = async (dispatch,user)=>{
    dispatch(loginStart());

    try {
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data));
    } 
    catch (err) 
    {
        dispatch(loginFailure());
        console.log(err);    
    }
}

//LOGOUT
export const userLogout = async (dispatch)=>{
    dispatch(logout());
}


//REGISTER
export const userRegister = async (dispatch,user)=>{
    dispatch(RegisterStart());

    try {
        const res = await publicRequest.post("/auth/register",user)
        dispatch(RegisterSuccess(res.data));
    } 
    catch (err) 
    {
        dispatch(RegisterFailure());
        console.log(err);    
    }

}