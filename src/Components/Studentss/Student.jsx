import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Pagination, Table } from 'react-bootstrap'
import { paginate, sorting } from '../../Common/utils'

let allStudents = null;

export const Student = () => {

         const [students, setStudents] = useState(null)
         const [currentPage, setCurrentpage] = useState(0);
         const [pageSize, setpageSize] = useState(10);
        
         const [sortby, setSortby] = useState("id")
         const [isAss, setisAss] = useState(1);
         const [sortDataType, setSortDataType] = useState("number")

         const [search, setSearch] = useState('')


         const totalLinks = students && Math.ceil(students.length / pageSize)
         const linksArray =[...Array(totalLinks).keys()];

         useEffect(() => {
           axios("https://6258ffe8c5f02d964a4b0602.mockapi.io/products")
           .then(res => {setStudents(res.data);
                        allStudents = res.data;
                        
         });
         
         }, [])

        
         let sortedStudents = students && sorting(students, sortby, sortDataType, isAss);

        let paginateStudents = students && paginate(sortedStudents, currentPage, pageSize)

        const handlePageChange = e => {
          // if(!isAss){

          // }
         setCurrentpage(0);
         setisAss(isAss === 1 ? -1 : 1);
         setpageSize(Number(e.target.value))
        }

        const handleSort = (col, type) =>{
          setSortby(col)
          setSortDataType(type)
        }

        const searchHandler = () =>{

        }
 

  return (
    <div>
       <h1>Students</h1>
       <div className='pagination-wrapper d-flex justify-content-center'>
              <Pagination>
                {linksArray?.map((link) =>(
                  <Pagination.Item
                    onClick={() => setCurrentpage(link)}
                    active ={link === currentPage ? true: false}
                    key={link}>
                    {link +1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </div>
           
           <Form.Select onChange={handlePageChange}>
             <option value="10">10</option>
             <option value="20">20</option>
             <option value="30">30</option>
             <option value="40">40</option>
             <option value="50">50</option>


           </Form.Select>
           <Form.Control onChange={searchHandler}  placeholder="Search" className='mt-2' />
         
            

          
       <Table className="table mt-5">
              <thead>
                <tr>
                  <th onClick={() => handleSort ('id', 'number')} scope="col">#id</th>
                  <th onClick={() => handleSort ('name', 'string')} scope="col">Name</th>
                  <th onClick={() => handleSort ('email', 'string')}scope="col">Email</th>
                  <th onClick={() => handleSort ('address', 'number')}scope="col">address</th>

                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {paginateStudents?.map(p=>(
                  <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.email}</td>
                    <td>{p.address}</td>

                    <td>
                    <button className='btn btn-primary'>Update</button>
                    <button  className='btn btn-danger'>Delete</button>
                    </td>
                    

                  </tr>
                ))}
              </tbody>
              
              
            </Table>
           


    </div>
  )
}
