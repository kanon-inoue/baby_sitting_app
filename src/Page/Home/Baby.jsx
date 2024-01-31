import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./SignUp"

export default function Baby() {
  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/signup');
  }
  return (
    <section>
      <div>
        <button className="btn btn-primary welcome--btn" onClick={navigateSignUp}>Sign Up</button>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
            
      </div>
    </section>

  );
}