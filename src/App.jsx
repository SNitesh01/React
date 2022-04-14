import React from 'react'
import Avtar from './Components/Avtar/Avtar';
import { Bulb } from './Components/Bulb/Bulb';
import { City } from './Components/Cities/City';
import Countr from './Components/Class_counter/countr';
import Counter from './Components/Countr/Counter';
import { Header } from './Components/Home/Header'
import Persons from './Components/persond/Persons';
import Rating from './Components/Ratings/Rating';
import { Switch } from './Components/Switch/Switch';
import { Tasks } from './Components/Tasks/Tasks';



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
      <Tasks />
      <Countr />
      <Bulb />
      
      
      </>

  );
 
}

export default App;

