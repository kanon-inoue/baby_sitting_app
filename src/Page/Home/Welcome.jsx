import { Routes, Route, useNavigate } from "react-router-dom";
import Baby from "./Baby";
import Dog from "./Dog";
import Cat from "./Cat";
import Fish from "./Fish";

export default function Welcome() {
  const navigate = useNavigate();

  const navigateBaby = () => {
    navigate('/baby');
  }
  const navigateDog = () => {
    navigate('/dog');
  }
  const navigateCat = () => {
    navigate('/cat');
  }
  const navigateFish = () => {
    navigate('/fish');
  }

  return (
    <section id="Welcome" className="welcome--section">
      <div className="welcome--section--content--box">
        <div className="welcome--section--content">
          <h2>Welcome</h2>
          <p className="section--title">Would you like to use the app for...?</p>
          <div className="welcome--section--buttons">
            <button className="btn btn-primary welcome--btn" onClick={navigateBaby}>Baby</button>
            <button className="btn btn-primary welcome--btn" onClick={navigateDog}>Dog</button>
            <button className="btn btn-primary welcome--btn" onClick={navigateCat}>Cat</button>
            <button className="btn btn-primary welcome--btn" onClick={navigateFish}>Fish</button>
            <Routes>
              <Route path="/baby" element={<Baby />} />
              <Route path="/dog" element={<Dog />} />
              <Route path="/cat" element={<Cat />} />
              <Route path="/fish" element={<Fish />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="welcome--section--img">
        <img src="./img/parentpic.png" alt="Welcome" />
      </div>
    </section>
  );
}