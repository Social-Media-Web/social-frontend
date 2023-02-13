import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="cart">
          <div className="left">
            <h1>Hello Folks!</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              quibusdam laudantium, praesentium dolorum tempora illo
              voluptatibus quasi .
            </p>
            <span>Dont have an Account? register below!</span>
            <button>Register</button>
          </div>
          <div className="right">
            <h1>Login Now!</h1>
            <form>
              <label htmlFor="">Username</label>
              <input type="text" placeholder="Username"/>
              <label className="label-password" htmlFor="">Password</label>
              <input className="input-password" type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
