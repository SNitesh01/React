import React, {useState} from 'react'
import "./bulb.css"

export const Bulb = () => {

  const [on, setOn] = useState(false);

  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);

  return (
    <>
      <div className={on ? 'bulb-on' : 'bulb-off'} >
        
      </div>
      
      <button onClick={lightOn}>on</button>
      <button onClick={lightOff}>off</button>
    </>
  );
}


