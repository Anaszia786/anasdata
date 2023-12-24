import './App.css';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct/CreateProduct';

import Home from './components/home/home';

import Login from './components/login/login';
import './App.css';
import { useState } from 'react';
export default ()=>{

    
    let [products, setProducts] = useState([
        {
            name:'Product 1',
            src:'https://static-01.daraz.pk/p/c9ac91adf74db1cd3b05d00b79d74e79.jpg',
            price:100
        },
        {
            name:'Product 2',
            src:'https://static-01.daraz.pk/p/cb597e7804bc1a6bd62f86d1009e3a88.jpg',
            price:200
        },
        {
            name:'Product 3',
            src:'https://static-01.daraz.pk/p/706c2924f80e85f85abbcc4cc2218b7f.jpg',
            price:300
        }
    ]);

    return <div id="app1">
        <BrowserRouter>
            <Header></Header>
            <main>
                <Routes>
                  <Route path='/' element={<Home abc={products} />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/create-product' element={<CreateProduct    products={products} setProducts={setProducts} />} />


                  {/* <Route path='/signup' element={<Signup />} /> */}
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    </div>

};
