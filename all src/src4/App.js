import React from 'react'
import {Header} from './components/Header/header'
import {Footer} from './components/Footer/footer'
import { Login } from './components/Login/login'
import { Createproduct } from './components/Products/product'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { Slider } from './components/Carousel/Carouse'
const App = () => {

  return (
      <BrowserRouter>
      <Header/>
      <main>
      <Routes>
        <Route path='/slider' element={<Slider/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/createproduct' element={<Createproduct/>}></Route>
      </Routes>
      </main>
      {/* <Slider></Slider> */}
      {/* <Footer/> */}
      
      </BrowserRouter>
  )
}

export default App