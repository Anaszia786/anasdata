import { Header } from "./components/header/header"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

import { Home } from "./components/home/home"
import { Signup } from "./components/signup/signup"
import { Login } from "./components/logni/login"
import { AddProduct } from "./components/addProduct/addProduct";
import { Provider } from "react-redux"
import { store } from "./store/store"
import { useEffect } from "react";


export default()=>{




  return <>
  <Provider store={store}>
  <BrowserRouter>
    <Header />

    <Login />

    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>


  </BrowserRouter>
  <ToastContainer />
  </Provider>
  </>


  
}