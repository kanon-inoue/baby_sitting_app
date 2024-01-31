import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./Main"

export default function SignIn() {
  const navigate = useNavigate();

  const navigateMain = () => {
    navigate('/main');
  }
  return (
    <section id="SignIn" className="sign--section">
      <div>
        <h3>Sign In</h3>
        <p className="text-lg">
          Welcome back!
        </p>
      </div>
      <form className="sign--form--container">
        <div className="container">
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
        </div>
        <div>
          <button className="btn btn-primary sign-form-btn" onClick={navigateMain}>
            Sign In
          </button>
          <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
        </div>
      </form>
    </section>
  );
}