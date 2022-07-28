import axios from 'axios';
import React, {useEffect, useState} from 'react'

import Employ from './data'
import "./ui.css"

  

  function Persons(){



    const [person, setPerson] = useState(null);

    useEffect(() => {
      axios("https://6258ffe8c5f02d964a4b0602.mockapi.io/person").then(res => {
       setPerson(res.data);

      })
      
    }, [])

    // delete handler
    
  



    return (    
         <div className='col-6' style={{marginLeft:"30%", fontSize:"15px"}} >
           <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">#id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {person?.map(p=>(
                  <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>
                    <button className='btn btn-primary'>Update</button>
                    <button  className='btn btn-danger'>Delete</button>
                    </td>
                    

                  </tr>
                ))}
              </tbody>
              
              
            </table>

        </div>

        

        

    

         )}

export default Persons;

      