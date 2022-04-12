import React from 'react'
import Avtar from './Components/Avtar/Avtar';
import { City } from './Components/Cities/City';
import { Counter } from './Components/Counter/Counter';
import { Header } from './Components/Home/Header'
import Persons from './Components/persond/Persons';
import Rating from './Components/Ratings/Rating';
import { Switch } from './Components/Switch/Switch';


function App(){
  return(
      <>
      <Header title="Welcom to react"/>  
      <Avtar name="Raj Pri" image={"https://picsum.photos/200"}/>  
       
      <Rating value/> 
      <Persons  el/> 
      <City />    
      <Switch />  
      <Counter value={3}/>
      </>

  );
 
}

export default App;

