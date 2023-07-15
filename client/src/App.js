import React from 'react'
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/edit/:id" Component={Edit} />
    </Routes>
    </BrowserRouter>
  )
}

export default App