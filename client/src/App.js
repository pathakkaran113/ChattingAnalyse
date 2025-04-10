import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import AudioAnalyzer from './pages/AudioAnalyzer'
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetProfileImage from './pages/SetProfileImage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/setProfile" element={<SetProfileImage/>} />
        <Route path="/" element={<Chat/>}/>
        <Route path="/AudioAnalyzer" element={<AudioAnalyzer/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App


