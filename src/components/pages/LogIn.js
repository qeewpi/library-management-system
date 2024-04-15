import React from "react";
import library from "../../img/library.jpg";


function LogIn() {
  return (
    <div>
      <div>
        <img src={library} alt="Library"/>
      </div>

      <div className = "form">
        <h1 className="inblock">Log In</h1>
      </div>
    </div>
  );
}

export default LogIn;
