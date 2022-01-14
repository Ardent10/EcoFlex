import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux";
import { userRequest,publicRequest } from "../requestMethods";

import 
{ getProductStart,
  getProductFailure,
  getProductSuccess,  
  deleteProductStart,
  deleteProductFailure,
  deleteProductSuccess, 
  updateProductStart,
  updateProductFailure,
  updateProductSuccess, 
  addProductStart,
  addProductFailure,
  addProductSuccess, 


} from "./productRedux";
import { 
    getClientStart, 
    getClientSuccess,
    getClientFailure,
    deleteClientStart,
    deleteClientSuccess,
    deleteClientFailure,
    // updateClientStart,
    // updateClientSuccess,
    // updateClientFailure,
    // addClientStart,
    // addClientSuccess,
    // addClientFailure,

} from "./clientRedux";

//USER LOGIN
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

//USER LOGOUT
export const userlogout = async(dispatch)=>{
    dispatch(logout());
}

//GET PRODUCTS
export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());

    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data));
    } 
    catch (err) 
    {
        dispatch(getProductFailure());
        console.log(err);    
    }
}

//DELETE PRODUCTS
export const deleteProducts = async (id,dispatch)=>{
    dispatch(deleteProductStart());

    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id));
    } 
    catch (err) 
    {
        dispatch(deleteProductFailure());
        console.log(err);    
    }
}

//UPDATE PRODUCTS
export const updateProducts = async (id,product,dispatch)=>{
    dispatch(updateProductStart());

    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(updateProductSuccess({id,product}));
    } 
    catch (err) 
    {
        dispatch(updateProductFailure());
        console.log(err);    
    }
}

//ADD PRODUCTS
export const addProducts = async (product,dispatch)=>{
    dispatch(addProductStart());

    try {
        const res = await userRequest.post(`/products`,product);
        dispatch(addProductSuccess(res.data));
    } 
    catch (err) 
    {
        dispatch(addProductFailure());
        console.log(err);    
    }
}


//GET CLIENTS
export const getClients = async (dispatch)=>{
    dispatch(getClientStart());

    try {
        const res = await userRequest.get(`/users`);
        dispatch(getClientSuccess(res.data));
    } 
    catch (err) 
    {
        dispatch(getClientFailure());
        console.log(err);    
    }
}

//DELETE CLIENTS
export const deleteClients = async (id,dispatch)=>{
    dispatch(deleteClientStart());

    try {
        const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteClientSuccess(id));
    } 
    catch (err) 
    {
        dispatch(deleteClientFailure());
        console.log(err);    
    }
}

// //UPDATE CLIENTS
// export const updateClients = async (product,dispatch)=>{
//     dispatch(addProductStart());

//     try {
//         const res = await userRequest.post(`/products`,product);
//         dispatch(addProductSuccess(res.data));
//     } 
//     catch (err) 
//     {
//         dispatch(addProductFailure());
//         console.log(err);    
//     }
// }

// //ADD CLIENTS
// export const addClients = async (product,dispatch)=>{
//     dispatch(addProductStart());

//     try {
//         const res = await userRequest.post(`/products`,product);
//         dispatch(addProductSuccess(res.data));
//     } 
//     catch (err) 
//     {
//         dispatch(addProductFailure());
//         console.log(err);    
//     }
// }