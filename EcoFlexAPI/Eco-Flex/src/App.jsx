import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Impact from "./pages/Impact";


const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return( 
    <Router>
          <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/impact" element={<Impact/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/login" element={user?<Navigate to= "/"/> :<Login/>}/>
          <Route path="/register" element={user?<Navigate to="/"/> :<Register/>}/>
          <Route path="*" element={<Error/>}/>
        
        </Routes>
    </Router>
 )};

export default App;