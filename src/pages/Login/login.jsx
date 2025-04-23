import React from "react";
import "./login.scss";

export default function login() {
  return (
    <>
      <div className="login">
        <div className="login">
          <div className="loginContainer">
            <input
              className="loginInput"
              type="email"
              placeholder="email.."
              id="email"
            />
            <input
              className="loginInput"
              type="password"
              placeholder="password.."
              id="password"
            />

            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
