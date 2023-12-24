import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import axios from 'axios'

export const Signup = () => {

  let {register, handleSubmit} = useForm();

  let dispatch = useDispatch();

  const  saveData = (data)=>{

    axios.post('/create-user', data).then((resp)=>{
      alert('user created');
    })

    // dispatch({
    //   type:"USER_ADDED",
    //   payload:data
    // })
    console.log(data);
  }

  return (
    <main>
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
        <form onSubmit={handleSubmit(saveData)} className="col s12" method="post">
          <div className="row">
            <div className="col s12"></div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
              {...register('email')}
                className="validate"
                type="email"
              />
              <label htmlFor="email">Enter your email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
              {...register('password')}
              className="validate"
                type="password"
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
