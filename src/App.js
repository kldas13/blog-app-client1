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
      Welcome
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
