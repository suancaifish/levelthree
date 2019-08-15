import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./";


// 路由组件




function App() {
  return (
    <Router>
      <div>
        <Link to="/"></Link>

        <Route path="/" exact component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
