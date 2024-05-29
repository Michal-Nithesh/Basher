import React from 'react';
import { createRoot } from 'react-dom/client';
import bash from "../src/dist/assets/img/bashers.png"
import google from "../src/dist/assets/img/google-icon.png"

function App() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="second name" />
            <input type="email" placeholder="email" />
            <input type="number" placeholder="age" />
            <input type="password" placeholder="Password" id="pswd1" />
            <input type="password" placeholder="confirm password" id="pswd2" />
            <button type="button" onClick={matchPassword}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <div>
                <img  src={bash}  width="60px" height="60px"></img>
            </div>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {/* <a href="#">Forgot your password?</a> */}
            <div className="flex flex-col items-center mt-7 text-gray-500">
            <div className="flex items-center w-full mb-5">
                <hr className="flex-grow border-gray-500" />
                <span className="mx-3 text-sm">OR</span>
                <hr className="flex-grow border-gray-500" />
            </div>
            </div>
            <button className='Gog'>
            <img src={google} width="20px" height="20px"/>
                Login with Google
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Bashers!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={contactAlert}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function matchPassword() {
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;
    if (pw1 !== pw2) {
      alert("Passwords did not match");
    } else {
      alert("Password created successfully");
    }
  }
  
  function handleSignUp() {
    document.getElementById('container').classList.add("right-panel-active");
  }
  
  function handleSignIn() {
    document.getElementById('container').classList.remove("right-panel-active");
  }

  function contactAlert(){
    alert("As a guest you can't access this page, please sign in or sign up to access this page")
  }
  
  export default App;

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);