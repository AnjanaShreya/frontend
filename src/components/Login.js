import React from "react";

export default function Login() {
  return (
    <div className="content">
      <p>
        <input type="text" placeholder="Enter Email Address"></input>
      </p>
      <p>
        <input type="password" placeholder="Enter Password"></input>
      </p>
      <button>Login</button>
      <button>Signup</button>
    </div>
  );
}