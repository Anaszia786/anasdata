import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
export const AddProduct = () => {
    let {register,handleSubmit}=useForm();
    let dispatch= useDispatch()
    let user=useSelector((store)=>store.ProductSection).signup
    function addData(data){
        data.img=URL.createObjectURL(data.img[0]);
        data.id = v4();
        data.owner = user.id;


    dispatch({
        type:"Add_Product",
        payload:data
    })

    }
  return (
    <>
    <form onSubmit={handleSubmit(addData)}>

    <input {...register("name")} type="text" />
    <input {...register("Price")} type="number" />
    <input {...register("img")} type="file" />
    <button>Create Product</button>
    </form>
    </>
  )
}
