import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';   // Import Home component
import Blue from './components/Blue';   // Import Blue component
import Red from './components/Red';     // Import Red component

function App() {
  return (
    <div>
      <div id="navbar">
        <Link to="/">Home</Link> | 
        <Link to="/blue">Blue</Link> | 
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
