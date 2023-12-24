import {useForm} from 'react-hook-form';

    export default({products, setProducts})=>{

    let data = useForm();    

    const createProduct = (data)=>{
        products.push(data);
        data.src = URL.createObjectURL(data.file[0]);
        setProducts([...products]);
        console.log(data);        
    }

    return <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <div className="section" />
      <h5 className="indigo-text">Create Product</h5>
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
          <form onSubmit={data.handleSubmit(createProduct)} className="col s12" method="post">
            <div className="row">
              <div className="col s12"></div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                {...data.register('title')}
                  className="validate"
                  type="text"
                  name="title"
                  id="title"
                />
                <label htmlFor="title">Enter product title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                {...data.register('price')}
                  className="validate"
                  type="number"
                  name="price"
                  id="price"
                />
                <label htmlFor="price">Enter product price</label>
              </div>
              
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                {...data.register('file')}
                  className="validate"
                  type="file"
                  name="file"
                  id="file"
                />
              </div>
            </div>
            <br />
            <center>
              <div className="row">
                <button
                  type="submit"
                  name="btn_login"
                  className="col s12 btn btn-large waves-effect indigo"
                >
                  Create Product
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      {/* <a href="#!">Create account</a> */}
    </center>
    <div className="section" />
    <div className="section" />
  </main>
  
}