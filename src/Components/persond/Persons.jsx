import React from 'react'
import Employ from './data'
import "./ui.css"

  

  function Persons({color}){
    
    return (
        <div>
         {Employ.map((el=>(
             
         <div className='col-6' style={{marginLeft:"30%", fontSize:"15px"}} >
           <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">#id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{color:"red"}}>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>

                </tr>
              </tbody>
            </table>

        </div>

         )))}

        </div>

    );

         }

export default Persons;

      