import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header.jsx';
import Introduction from './pages/Introduction/Introduction.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Introduction/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App