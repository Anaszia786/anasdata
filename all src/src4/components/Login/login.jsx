import React from 'react'

export function Login (){
  return (
    <div><>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    body {\n      display: flex;\n      min-height: 100vh;\n      flex-direction: column;\n    }\n\n    main {\n      flex: 1 0 auto;\n    }\n\n    body {\n      background: #fff;\n    }\n\n    .input-field input[type=date]:focus + label,\n    .input-field input[type=text]:focus + label,\n    .input-field input[type=email]:focus + label,\n    .input-field input[type=password]:focus + label {\n      color: #e91e63;\n    }\n\n    .input-field input[type=date]:focus,\n    .input-field input[type=text]:focus,\n    .input-field input[type=email]:focus,\n    .input-field input[type=password]:focus {\n      border-bottom: 2px solid #e91e63;\n      box-shadow: none;\n    }\n  "
      }}
    />
    <div className="section" />
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
            <form className="col s12">
              <div className="row">
                <div className="col s12"></div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    className="validate"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <label htmlFor="password">Enter your password</label>
                </div>
                <label style={{ float: "right" }}>
                  <a className="pink-text" to="./home">
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
  </>
  </div>
  )
}
