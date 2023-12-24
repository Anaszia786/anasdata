import {useForm} from 'react-hook-form';
import './App.css'
import { useState } from 'react';

export default  ()=>{

    let [users, setUsers] = useState([]);

    let {register, handleSubmit, formState:{errors}} = useForm();

    function saveData(data){
        users.push(data);
        setUsers([...users])
    }

    return <>

    <form onSubmit={handleSubmit(saveData)}>

        <input {...register('name', {required:true, maxLength:9, minLength:6, validate:(a1)=>{

            let userMigya = users.find(user=>user.name == a1);

            if(userMigya){
                return false;
            }else{
                return true;
            }


        }})} type='text' /> <br />
            {errors.name && errors.name.type == 'required' ? <div className='error'>Please enter your name</div> : null}
            {errors.name && errors.name.type == "minLength" ? <div className='error'>Name must be atleast 6 characters</div> : null}
            {errors.name && errors.name.type == "maxLength" ? <div className='error'>Name must be less than 9 characters</div> : null}
            {errors.name && errors.name.type == "validate" ? <div className='error'>Name must be less than 9 characters</div> : null}
    
        <input {...register('email', {required:true})} type='email' /> <br />
        {errors.email ? <div className='error'>Please enter your email</div> : null}


        <select {...register('city', {required:true, validate:(value)=>{

            if(value != "Select City"){
                return true;
            }else{
                return false;
            }

        }})}>
            <option>Select City</option>
            <option>FSD</option>
            <option>LHR</option>
            <option>GOJRA</option>
        </select>
        {errors.city ? <div className='error'>Please enter your city</div> : null}


        <button>Add Name</button>
    </form>

    <table>
        {
            users.map((user)=>{
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.city}</td>
                    <td>{user.email}</td>
                </tr>
            })
        }
    </table>

    </>
}