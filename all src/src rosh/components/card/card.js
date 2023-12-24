import React from 'react'
import'./card.css' 
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const Card = ({a1}) => {
  let dispatch=useDispatch(); 
  return (
    <div className="card">
    <Link to={"/item/"+a1.id}>
    <div className="card-image">
      <img src={a1.img} />
      <span className="card-title">{a1.name}</span>
    </div>
    
    <div className="card-content">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to use
        effectively.
      </p>
    </div>
    <div className="card-action">
      <a href="#">{a1.Price}</a>
    </div>
    </Link>
    <span onClick={()=>{
      dispatch({
        type:"Like_butn",
        payload:a1.id
      })
    }}
    className={a1.abc? "like-btn liked" : "like-btn"}>
  <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 1024 1024"><path d="M831 449L512 839 194 450a155 155 0 11274-132h88a155 155 0 11275 131zM706 124c-81 0-152 42-194 104a233 233 0 10-379 270l329 402h100l330-403a233 233 0 00-186-372z"/></svg>
    </span>
  </div>

  )
  }
