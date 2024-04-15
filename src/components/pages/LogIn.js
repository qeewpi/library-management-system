import React from "react";
import library from "../../img/library.jpg";


function LogIn() {
  return (
    <div className ="flex justify-center	items-center">
      <div>
        <img src={library} alt="Library"/>
      </div>

      <div className = "form">
        <div className="header text-center ">
          <h1>Log In</h1>
          <h2>Welcome Back</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
       
        <input type="text" placeholder="Email" required></input>
        <input type="password" placeholder="Password" required></input>

        <button type="submit" class="btn">Login</button>
      </div>
    </div>
  );
}

export default LogIn;
