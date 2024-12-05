import React from 'react';
import { Link } from '@react-navigation/native';
import { useState } from 'react'
import './App.css'

import home from './components/home.jsx'

function App() {

  return (
    <>
      <h1>Bienvenue sur mon site</h1>
      <ul>
        <Link screen = "Demarrer" params={{ id : 'home'}}>Démarrer</Link>
      </ul>
    </>
  )
}

export default App
