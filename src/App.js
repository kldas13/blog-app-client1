import './App.css';
import React from 'react';
import { Navigate } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Blog from './components/Blog';
import Create from './components/Create';

function App() {
  // const navigate = Navigate();
  return (
    <div className="App">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz9FW3cNHa4qnoZ7iF2XiKzfGoAvB9ipr9_BQ0FI0bw&s' alt='logo' style={{position:'fixed', left:'7px', top:'1px',width:'80px'}}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route  path='/signup' element = {<Signup/>}></Route>
        <Route  path='/blog' element = {<Blog/>}></Route>
        <Route  path='/create' element = {<Create/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
