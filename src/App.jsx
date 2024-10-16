import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home";
import Blue from "./Components/Blue";
import Red from "./Components/Red";

function App() {
  return (
    <BrowserRouter>
      <div id="navbar">
        <Link to="/">Home</Link> | 
        <Link to="/blue">Blue</Link>
 | 
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;