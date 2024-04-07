import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="login-signUp">
      <div className="login-signUp__container">
        <h1>Sign Up</h1>
        <div className="login-signUp__fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address " />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-signUp__login">
          Already have an account?
          <span>Login</span>
          <div className="login-signUp__agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the terms of use & privacy policy </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
