import './product.css';

export default(props)=>{

    return <div className="card">
    <div className="card-image">
      <img src={props.data.src} />
      <span className="card-title">Card Title</span>
    </div>
    <div className="card-content">
      <p>
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to use
        effectively.
      </p>
    </div>
    <div className="card-action">
      <a href="#">{props.data.price}</a>
    </div>
  </div>
;  

}