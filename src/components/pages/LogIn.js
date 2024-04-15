import React from "react";
import library from "../../img/library.jpg";


function LogIn() {
  return (
    <div>
      <div className="image">
        <img src={library} alt="Library" style={{marginLeft: "0"}}/>
      </div>

      <div className = "form text-center">
        <div className="header mr-justify">
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
