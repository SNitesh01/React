import React from 'react'
import { Link } from 'react-router-dom';
import "./avtar.css";



const Avtar = ({name, image}) => {
    const getinti = name =>{
        let spliteed = name.split(' ');
        if(spliteed.length === 1) 
        return spliteed[0] [0];
        return spliteed[0][0] + spliteed.at(-1)[0];
    };
    
  return (
   <>
    <div className='avtar' style={{background: `url(${image})`, border: !image && "1px solid black",}}>
         <h4>{getinti(name)}</h4>
    </div>
    <Link to='/person' className='nav-link text-center'>
       <button className='btn btn-primary'>view</button>
    </Link>
   

  
   
   </>
  )
}

export default Avtar;

Avtar.defaultProps = {
    name: "null",
    color: "black",
    backgroundColor: "grey"
};