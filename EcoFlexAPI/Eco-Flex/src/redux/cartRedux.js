import { createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers:{
        addProduct: (state,action)=>{
            state.quantity += 1; //cart quantity
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.quantity; 
            
            toast.success("Product added to cart 🛒",{position:"top-center"});
        },
        removeProduct: (state,action)=>{
            state.products.map((product)=>{ 
            if(product._id===action.payload){         
                const updatedCart=  state.products.filter(
                (item)=> item._id !== product._id
                );
                state.products = updatedCart;
                state.quantity -= 1;
                state.total -= product.price*product.quantity;
        
                toast.error("Product removed from cart 🗑",{position:"top-center"});
                }
                localStorage.setItem("products",JSON.stringify(state.products));
            return state;
         }) 
        },
    },
});

export const {addProduct,removeProduct} = cartSlice.actions;
export default cartSlice.reducer;



//   state.products.map((product)=>{
        //       if(product.id===action.payload.id){         
        //           const updatedCart=  state.products.filter(
        //                 (item)=> item.id !== product.id
        //             );
        //             state.products = updatedCart;
        //             state.quantity -= 1;
        //             state.total -= product.price*product.quantity;

        //             toast.error("Product removed from cart 🗑",{position:"top-center"});
        //       }
        //       localStorage.setItem("products",JSON.stringify(state.products));
        //       return state;
        //   })

         // const updatedCart = state.products.filter(
            //     product => product.id !==action.payload.id
            // );
            //     state.products = updatedCart;
            //     state.quantity -= 1;
            //     state.total -= action.payload.price*action.payload.quantity;
            //     localStorage.setItem("products",JSON.stringify(state.products));