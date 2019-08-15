import React from 'react';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import './App.css';
// 头部入口文件
import Header from './components/Header'
// 默认进入首页
import HomePage from './views/Home/Home';


// import Mine from "./views/Mine/Mine";


// 路由组件




function App() {
  return (
    <Router>
      <div>
       <Header/>
       <Route path='/' excat conponent={HomePage}></Route>
       {/* <Route path='/mine' conponent={Mine}></Route> */}
       <Redirect
        to={{
          pathname: "/home",
        }}
      />
      </div>
    </Router>
  );
}

export default App;
