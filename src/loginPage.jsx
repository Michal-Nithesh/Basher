import React from 'react';
import ReactDOM from 'react-dom';

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
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
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
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUp}>Sign Up</button>
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
  
  export default App;