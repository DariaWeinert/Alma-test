import { useState } from 'react'
import './App.css'
import NavigationBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import SecondPage from './Pages/SecondPage';

function App() {

  return (
    <>
<NavigationBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/second" element={<SecondPage/>} />
          </Routes>
    </>
  )
}

export default App
