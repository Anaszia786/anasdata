import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify'

export const AddProduct = () => {

    let {register, handleSubmit} = useForm();
    let dispatch = useDispatch();

    const addProduct = (data)=>{
        data.img = URL.createObjectURL(data.file[0]);


        dispatch({
            type:"ADD_PRODUCT",
            payload:data
        });

        toast.error("Product create hogya");



    }

  return (
    <div>
        <form onSubmit={handleSubmit(addProduct)}>
            <input {...register('title')} type="text" /> <br/>
            <input {...register('price')} type="number" /> <br/>
            <input {...register('file')} type="file" /> <br/>
            <button>Create Product</button>
        </form>
    </div>
  )
}
