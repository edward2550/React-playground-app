import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import RouletteGun from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';


function App() {
  return(
    <main className='App'>
      <RouletteGun />
      <Bomb />
      <HelloWorld />
    </main>
  )
}
export default App;

