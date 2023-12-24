

import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';


const AddProduct = () => {
    
    let {register, handleSubmit} =  useForm();
    let dispatch = useDispatch();
    
    const saveProduct = (data)=>{

        data.img = URL.createObjectURL(data.file[0]);
        
        dispatch({
            type:"ADD_PRODUCT",
            payload:data
        });

        console.log(data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(saveProduct)}>

            
            <input {...register('title')} type="text" placeholder='title' /> <br/>
            <input {...register('price')} type="number" placeholder='price' /><br/>
            <input {...register('file')} type="file" placeholder='FIle' /><br/>
            <button>Create Product</button>
        </form>
    </div>
  )
}

export default AddProduct