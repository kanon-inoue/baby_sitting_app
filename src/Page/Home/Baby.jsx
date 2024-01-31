import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp"

export default function Baby() {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/signup');
  }

  return (
    <section id="SignUp" className="sign--section">
      <div>
        <h3>Sign Up</h3>
        <p className="text-lg">
          Welcome to the app! 
          <br /> Fill these blanks to keep your data on this application.
        </p>
      </div>
      <form className="sign--form--container">
        <div className="container">
          <label htmlFor="username" className="sign--label">
              <span className="text-md">Your User Name</span>
              <input 
                type="text"
                className="sign--input text-md"
                name="username"
                id="username"
                required />
          </label>
          <label htmlFor="babynumber" className="sign--label">
              <span className="text-md">How Many Baby Do You Have?</span>
              <input 
                type="number"
                className="sign--input text-md"
                name="babynumber"
                id="babynumber"
                required />
          </label>
          <label htmlFor="babyname" className="sign--label">
              <span className="text-md">Your Baby Name</span>
              <input 
                type="text"
                className="sign--input text-md"
                name="username"
                id="username"
                required />
          </label>
          <label htmlFor="emial-address" className="sign--label">
            <span className="text-md">Your Email Address</span>
            <input 
              type="text"
              className="sign--input text-md"
              name="email-address"
              id="email-address"
              required />
          </label>
          <label htmlFor="password" className="sign--label">
            <span className="text-md">Your Password</span>
            <input 
              type="text"
              className="sign--input text-md"
              name="password"
              id="password"
              required />
          </label>
          <label htmlFor="passwordagain" className="sign--label">
            <span className="text-md">Confirm Your Password</span>
            <input 
              type="text"
              className="sign--input text-md"
              name="passwordagain"
              id="passwordagain"
              required />
          </label>
        </div>  
      </form>
      <div>
        <button className="btn btn-primary welcome--btn" onClick={navigateSignUp}>Sign Up</button>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </section>
  );
}