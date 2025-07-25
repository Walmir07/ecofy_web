import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header.jsx';
import Introduction from './pages/Introduction/Introduction.jsx';
import Home from './pages/Home/Home.jsx';
import Plant from './pages/Plant/Plant.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Introduction/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/plantas/:id' element={<Plant/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App