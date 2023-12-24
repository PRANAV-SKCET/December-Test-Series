import Home from './Home';
import About from './About';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{backgroundColor:"#79797a",height:"100vh"}}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

<br />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
