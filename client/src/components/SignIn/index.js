import React from "react";
import "./style.css";

function SignUp () {


  return (
    <div className="container">
    <div className="row">
    <div className="col-12">
      <form className="form-signin">
        <h1 className="h3 mb-3">Please sign in...</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
      </form>
      </div>
      </div>
      </div>
  )
}

export default SignUp;