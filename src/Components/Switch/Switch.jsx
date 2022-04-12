import React,{useState} from 'react'
import './switch.css'

export const Switch = () => {

        const [isActive, setIsActive] = useState(false);
      
        const Changebtn = () => {
          setIsActive(!isActive);
        };

  return (
    <div>
        <div onClick={Changebtn} className={`mswitch ${isActive ? "active" : ""}`}>
           <div className='circle'>

           </div>
        </div>
    </div>
  )
}
