import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
  
export const Card = () => {
    // let data =useForm()
    let {register,handleSubmit}=useForm();
    const [card,setCard]=useState([]);
    console.log(card);

    const getData = (data,e)=>{
        // setCard(data)
        setCard([...card, data])
        e.target.reset();
    }
  return (
    <>
    {/* <form onSubmit={data.handleSubmit(getData)}> */}
    <form onSubmit={handleSubmit(getData)}>

        <input {...register('name')} placeholder='Enter  Name' type="text" />
        <input {...register('email')} placeholder='Email' type="email" />
        <input {...register('password')} placeholder='password' type="password" />
        <button type='submit'>Submit</button>
    </form>
    {

card.map((card)=>{

  return <>
    <h1>{card.name}</h1>
    <h2>{card.email}</h2>
    <h3>{card.password}</h3>
    </>
})
}
    </>

  )
}

// **********************************************************************************8
// import React from 'react'
// import { useForm } from 'react-hook-form'

// export function Card ()  {
//   let card =useForm();
//   function getstarted(chla){
//     console.log(chla);
//   }
//   return (
// <>
// <form onSubmit={card.handleSubmit(getstarted)} action="">
//   <input {...card.register('name')} placeholder='Enter Name' type="text" autoComplete='off' />
//   <input {...card.register('email')} placeholder='Enter Email' type="email" autoComplete='off' />
//   <input {...card.register('password')} placeholder='Enter Password' type="password" autoComplete='off' />
// <button type='submit'>Submit</button>
// </form>

// </>
//     )
// }
