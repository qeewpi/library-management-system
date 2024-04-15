import React from "react";
import library from "../../img/library.jpg";


function LogIn() {
  return (
<div className="login-page flex justify-center items-center min-h-screen bg-gray-100">
<div className="image w-1/2 h-full bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <img src={library} alt="Library" style={{marginLeft: "50"}}/>
      </div>


      <div className="form w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md overflow-hidden">
        <form action="">
          <div className="header text-center">
            <h1 className="text-3xl font-bold text-blue-600 mt-4">eLibrary</h1>
            <h2 className="text-xl text-gray-700 mt-2">Welcome Back!</h2>
            <p className="text-gray-500 text-base mt-4">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="input-box flex items-center mt-8">
            <input type="text" placeholder="Email" required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>

          <div className="input-box flex items-center mt-6">
            <input type="password" placeholder="Password" required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
        </form>

        <div className="forgot flex justify-end mt-4 text-sm text-gray-500">
          <label>
            <a href="#">Forgot password?</a>
          </label>
        </div>

        <button type="submit" className="btn mt-8 w-full py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700">
          Login
        </button>

        <div className="register-link flex justify-center mt-6 text-sm text-gray-500">
          <p>
            Don't have an account? <a href="register.html">Sign Up</a>
          </p>
        </div>
      </div>
    </div> // Removed extra closing parentheses and semicolon
  );
}

export default LogIn;
