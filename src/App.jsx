import React from 'react'
import Avtar from './Components/Avtar/Avtar';
import { Bulb } from './Components/Bulb/Bulb';
import { City } from './Components/Cities/City';
import Countr from './Components/Class_counter/countr';
import Multicounter from './Components/Class_counter/Multicounter';
import Counter from './Components/Countr/Counter';
import { Header } from './Components/Home/Header'
import Persons from './Components/persond/Persons';
import Rating from './Components/Ratings/Rating';
import { Student } from './Components/Studentss/Student';
import { Switch } from './Components/Switch/Switch';
import { Tasks } from './Components/Tasks/Tasks';

import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import { Dash } from './Components/persond/Dash';
import Products from './Components/Product/Products';
import ProductForm from './Components/Product/ProductForm';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Dashboard from './Screen/Dashboard';
import Loginscreen from './Screen/Loginscreen';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const CartContext = React.createContext();

function App(){

  

  const [cart, setCart] = React.useState({
    items: [],
  });

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [38,373,90.263,60,10,240],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [31,23,110.293,34,20,280],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return(
      <>
      <CartContext.Provider value={{ cart, setCart }}>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/student" element={ <Avtar name="Raj Pri" image={"https://picsum.photos/200"}/> } />
        <Route path="/person" element={<Persons />} />
        <Route path="/dash" element={<Dash />} />
        
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="new" element={<ProductForm />} />
          <Route path="new/:id" element={<ProductForm />} />

         
        </Route>
        <Route path="/login" element={<Loginscreen />} />

        
        {/* <Route path="/*" element={<Page404 />} /> */}
    
     </Routes>
   

      {/* <Header title="Welcom to react"/>  
      <Avtar name="Raj Pri" image={"https://picsum.photos/200"}/>  
       
      <Rating value/> 
     
      <Persons  el/> 
      <City />    
      <Switch />  
      <Counter value={3}/>
      <Tasks />
      <Multicounter/>
      <Bulb /> */}
      
     
     
      {/* <Routes>
    
       <Route path='/students' />
           <Route index element={<Student/>}/>
           <Route path='tasks' element={<Tasks/>}/>
       <Route/>
     
     
       <Route path='/rating' element={<Rating/>} />
       <Route path='/switch' element={<Switch />} />

       


    
    </Routes> */}
      
      </CartContext.Provider>
      
      </>

  );
 
}

export default App;

