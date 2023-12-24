import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
const Home = () => {
    
let [weaatherninfo,setWeatherInfo]=useState({});
    // let city="quetta";
    // useEffect(function(){
        
    // },[])
  return (
    <>
        <select onChange={function(evt){
            let city=evt.target.value
            axios.get('http://api.weatherapi.com/v1/current.json?key=47dcbc95dc914ae8b12225235231812&q='+city+'&aqi=no').then(function(resp){
            console.log(resp.data.current)
            setWeatherInfo(resp.data.current)
        })
        }}>
            <option>select city</option>    
            <option>Lahore</option>
            <option>faisalabad</option>
            <option>multan</option>
            <option>karachi</option>
            <option>gilgit</option>
            <option>okara</option>

        </select>

    <h1>{weaatherninfo.temp_c}</h1>
    { weaatherninfo.condition? <img src={weaatherninfo.condition.icon}/>:null}
    </>
  )
}

export default Home
// import React from 'react'
// import './home.css';
// import { useSelector } from 'react-redux';
// import { Card } from '../card/card';

// export const Home = () => {


//     let productSection =  useSelector(store=>{
//         return store.ProductSection;
//     })

//   return (
//     <div id='product-section' className='flex'>
//             {
//                 productSection.products.filter((product)=>{
//                     if(product.title.includes(productSection.searched)){
//                         return true;
//                     }
//                 }).map((product)=>{
//                     return <Card a1={product} />
//                 })
//             }
//         </div>
//   )
// }

// 47dcbc95dc914ae8b12225235231812