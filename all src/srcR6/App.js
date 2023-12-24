
// signup
// login
// logout
// orders process, total dikhaya
// header ko update kia tha according to user login
// dashboard bnya tha
// user ko redirect kia tha to dashboard after login


// Assignment
// user component m delete ka button add krna h
// dashboard route m table kay andr user kay create krda products dikhaney hn

import * as header from "./components/header/header"
import Dashboard from "./Dashboard/Dashboard";
import Checkout from "./components/Checkout/Checkout";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { WishList } from "./components/WishList/WishList";

  import 'react-toastify/dist/ReactToastify.css';

import { Home } from "./components/home/home"
import { Signup } from "./components/signup/signup"
import { Login } from "./components/logni/login"
import { AddProduct } from "./components/addProduct/addProduct";
import { Provider } from "react-redux"
import { store } from "./store/store"
import { useEffect } from "react";  
import { Users } from "./components/users/users";

export default()=>{




  return <>
  <Provider store={store}>
  <BrowserRouter>
    <header.Header />

    <Login />

    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/users" element={<Users />} />
      <Route path="/item/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<Dashboard />} />
      

      
    </Routes>


  </BrowserRouter>
  <ToastContainer />
  </Provider>
  </>


  
}