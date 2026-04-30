import React from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <div className="container" >
    <img className="logo" src={logo} alt="Logo" />
    <h1 className="heading">Fun facts about react</h1>
    <ul className="listItems">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walker</li>
      <li>Has well over 200k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
  )
}

export default App
