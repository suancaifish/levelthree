import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


// 路由组件
import Home from './views/Home/Home'



function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">home</Link>
      </div>
      <Route path="/" component={Home}></Route>

     
    </Router>
  );
}

export default App;
