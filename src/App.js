import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Page/Home/Homescreen';
import Baby from './Page/Home/Baby';
import Dog from './Page/Home/Dog';
import Cat from './Page/Home/Cat';
import Fish from './Page/Home/Fish';
import SignUp from './Page/Home/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/baby" element={<Baby />}></Route>
          <Route path="/dog" element={<Dog />}></Route>
          <Route path="/cat" element={<Cat />}></Route>
          <Route path="/fish" element={<Fish />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;