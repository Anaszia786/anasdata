import './App.css';
// import { Header } from "./components/header/header";
// import { Footer } from "./components/footer/footer";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/home/home';

// import Login from './components/login/login';

// export default ()=>{

//     return <div id="app1">
//         <BrowserRouter>
//             <Header></Header>
//             <main>
//                 <Routes>
//                   <Route path='/' element={<Home />} />
//                   <Route path='/login' element={<Login />} />
//                   {/* <Route path='/signup' element={<Signup />} /> */}
//                 </Routes>
//             </main>
//             <Footer></Footer>
//         </BrowserRouter>
//     </div>

// };
// *********************************************************************************
import {useForm} from 'react-hook-form';
export default  ()=>{

let {register, handleSubmit, formState:{errors}} = useForm();

    function saveData(data){
        console.log(data);
    }

    return <>

    <form onSubmit={handleSubmit(saveData)}>

        <input {...register('name', {required:true, maxLength:9, minLength:6})} type='text' /> <br />
            {errors.name && errors.name.type == 'required' ? <div className='error'>Please enter your name</div> : null}
            {errors.name && errors.name.type == "minLength" ? <div className='error'>Name must be atleast 6 characters</div> : null}
            {errors.name && errors.name.type == "maxLength" ? <div className='error'>Name must be less than 9 characters</div> : null}
    
        <input {...register('email', {required:true})} type='email' /> <br />
        {errors.email ? <div className='error'>Please enter your email</div> : null}


        <select className='slc' {...register('city', {required:true})}>
            <option>Select City</option>
            <option>FSD</option>
            <option>LHR</option>
            <option>GOJRA</option>
        </select>
        {errors.city ? <div className='error'>Please enter your city</div> : null}


        <button>Add Name</button>
    </form>


    </>
}