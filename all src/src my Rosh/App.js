import React from 'react'
import "./App.css"
import { Provider } from "react-redux"
import { BrowserRouter,Routes,Route } from "react-router-dom" 
import  Head  from "./components/header/header"
// import Foot from "./components/Footer/Footer"
import {store} from "./store/store"
import {Signup} from "./components/signup/signup"
import {AddProduct} from "./components/addProduct/addProduct"
import {Login} from "./components/logni/login"
import {Home} from "./components/home/home"
import { Wishlist } from './components/wishlist/wishlist'
import Users from './components/User/users'
import {ProductDetails} from "./components/ProductdDetails/productDetails"
import {Checkout} from "./components/Checkout/checkout"
import {Dashboard} from "./components/dashboard/dashboard"

const App = () => {
  return (
    <>
  <Provider store={store}>
    <BrowserRouter>
    <Head></Head>
    <main id="main">
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>

      <Route path="/Wishlist" element={<Wishlist />}/>
      <Route path="/AddProduct" element={<AddProduct/>}/>
      <Route path="/item/:id" element={<ProductDetails/>}/>

      <Route path="/Users" element={<Users/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>



      

      
    </Routes>
    </main>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App