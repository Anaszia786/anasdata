import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import {useForm} from'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {

  let move = useNavigate();

  let users = useSelector(store=>store.authSection.users);

  let dispatch = useDispatch();
   let {register, handleSubmit} =  useForm();

  const saveUser = (data)=>{

    let userMilgya = users.find((user)=>{
      if(user.name == data.name && user.password == data.password){
        return true;
      }
    })


    if(userMilgya){

      move('/dashboard');

      dispatch({
        type:"USER_LOGIN_HOGYA",
        payload:userMilgya
      })

  }

    console.log(data);
  }

  return (
    <main className='modal' id='modal1'>
  <center>
    <img
      className="responsive-img"
      style={{ width: 250 }}
      src="https://i.imgur.com/ax0NCsK.gif"
    />
    <div className="section" />
    <h5 className="indigo-text">Please, login into your account</h5>
    <div className="section" />
    <div className="container">
      <div
        className="z-depth-1 grey lighten-4 row"
        style={{
          display: "inline-block",
          padding: "32px 48px 0px 48px",
          border: "1px solid #EEE"
        }}
      >
        <form onSubmit={handleSubmit(saveUser)} className="col s12" method="post">
          <div className="row">
            <div className="col s12"></div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                {...register('name')}
                className="validate"
                type="email"          
              />
              <label htmlFor="email">Enter your email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                className="validate"
                type="password"
                {...register('password')}
              />
              <label htmlFor="password">Enter your password</label>
            </div>
            <label style={{ float: "right" }}>
              <a className="pink-text" href="#!">
                <b>Forgot Password?</b>
              </a>
            </label>
          </div>
          <br />
          <center>
            <div className="row">
              <button
                type="submit"
                name="btn_login"
                className="col s12 btn btn-large waves-effect indigo"
              >
                Login
              </button>
            </div>
          </center>
        </form>
      </div>
    </div>
    <a href="#!">Create account</a>
  </center>
  <div className="section" />
  <div className="section" />
</main>

  )
}
