import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/card'
import Buttons from './components/Buttons'
import Input from './components/Input';
import SwitchChoose from './components/SwitchChoose';
import GridLayout from './components/GridLayout';
function App() {
  return (
    <div className="App">
       <Input/> 
      <Card></Card>
      <Buttons></Buttons>
      <GridLayout></GridLayout>
    </div>
  );
}

export default App;
