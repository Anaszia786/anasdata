import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';



export function Login ()  {
  let {register,handleSubmit}=useForm()
  let sigupdata=useSelector(store=>store.ProductSection).signup
  let dispatch=useDispatch();
  let move =useNavigate();
  function userLdata(data){
    let userMilgya=sigupdata.find((user)=>{
      if (user.email==data.email && user.password==data.password){

        return true
      }
    })
    if (userMilgya){
        move('/dashboard')
       dispatch({
          type: "user_login",
          payload:userMilgya
        })
    }
  }
 
  
  return (
    <>
    <div className="section" />
    <main>
      <center>
        <img
          className="responsive-img"
          style={{ width: 250 }}
          src="https://i.imgur.com/ax0NCsK.gif"
        />
        <div className="section" />
        <h5 className="indigo-text">Please  Login into your account</h5>
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
            <form  onSubmit={handleSubmit(userLdata)} className="col s12" method="post">
              <div className="row">
                <div className="col s12"></div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                  {...register("email")}
                    className="validate"
                    type="email"
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                  {...register("password")}
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
                  </button >
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
  </>
  
  )
          }
