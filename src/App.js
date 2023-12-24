import ProductDetail from './components/ProductDetail/ProductDetail'
import Header from './components/header/header'
import './App.css'
import Cart from './components/Cart/Cart';
import {Wishlist} from './components/WishList/WishList';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './components/home/home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './components/addProduct/addProduct';
import { Signup } from './components/signup/signup';
import Users from './components/Users/users'
import { Login } from './components/logni/login';
import Dashboard from './components/Dashboard/Dashboard';

function PageNotFound(){
  return <div>
    <h1>Page not found</h1>
  </div>
}

const App = () => {

  let location = useLocation();

  // let [headerVisibility, setHeaderVisibility] = useState(true);

  // let routes = [
  //   '/', '/category', '/wishlist', 'add-product'
  // ];

  // useEffect(()=>{

  //   if(!routes.includes(location.pathname)){
  //     setHeaderVisibility(false);
  //   }

  // }, [location]);


  return (
      <>
      <Header></Header>
        {/* {headerVisibility ? <Header></Header> : null} */}

        <Routes>
          
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

          {/* <Route path='/' element={<Home/>} /> */}

          <Route path='/category/:abc' element={<Home/>} />

          <Route path='/product/:someID' element={<ProductDetail/>} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/cart' element={<Cart />} />
        
          <Route path='*' element={<PageNotFound />}></Route>
          
          
        </Routes>
        <ToastContainer></ToastContainer>    
      </>
    )
}

export default App