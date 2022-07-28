import React, { useContext, useEffect, useState } from "react";
import { Table, Button, Pagination, Row, Col } from "react-bootstrap";
import queryString from "query-string";
import  {http}  from '../../config/axiosConfig';
import swal from "sweetalert2";

import axios from "axios";
import Cart from "../Cart/Cart";
import { CartContext } from "../../App";

function Products() {

  const [products, setProducts] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  
 
  const [query, setQuery] = useState({
    limit: 5,
    page: 0,
    sortOrder: -1,
    sortBy: "price",
  });

  const [totalRecords, setTotalRecords] = useState(null);


  const linksArray = products && [...Array(Math.ceil(totalRecords / query.limit)).keys(),];

  useEffect(() => {
     http("products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err.message));
 
      //  http(`products?${queryString.stringify(query)}`)
      // .then(res => {
      //   setProducts(res.data.result);
      //   setTotalRecords(res.data.totalRecords);
      // })
      // .catch(err => console.log(err.message));
 
}, []);

  
  
  
  const handleDelete = id => {
    swal
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete!",
    })
    .then(result => {
      if (result.isConfirmed) {
        http
          .delete(`products/${id}`)
          .then(res => {
            if (res.status == 200) {
              setRefresh(!refresh);
            }
          })
          .catch(err => {
            swal.fire("Oops", "Something went wrong", "error");
          });
      }
    });

  };


 const editHandler = (second) => { third }



 const cartHandler = product => { 
  const newCartItems = { ...cart };
  newCartItems.items = [...cart.items, { ...product, qty: 1 }];
  setCart(newCartItems);
  }





  return (
    <div>
      Products
      <Row>
      <Col xs={12} lg={8}>
      <Table variant="dark" striped hover>
     
     <thead>
       <tr>
         <th>Id</th>
         <th onClick={() => setQuery({ ...query, sortBy: "name" })}>Name</th>
       
         <th onClick={() => setQuery({ ...query, sortBy: "price" })}>Price</th>
        

         <th>In Stock</th>
         <th>Actions</th>
       </tr>
     </thead>
     <tbody>
       {products?.map(pro => (
         <tr>
           <td>{pro._id}</td>
           <td>{pro.name}</td>
          
           <td>{pro.price}</td>
           <td>{pro.inStock ? "In Stock" : "Out of Stock"}</td>
           <td>
             <Button variant="secondary" onClick={() => editHandler()} >Edit</Button>
             <Button variant="danger" onClick={() => handleDelete(pro._id)}> Delete</Button>
             <Button variant="primary" onClick={()=> cartHandler(pro)} >Add to cart</Button>
           </td>
         </tr>
       ))}
     </tbody>
   </Table>

      <Pagination>
        {linksArray?.map((link, index) => {
          return (
            <Pagination.Item
              onClick={() => setQuery({ ...query, page: +link })}>
              {link + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
      </Col>
      
        <Col xs={12} lg={4}>
          <Cart />
       
       
        </Col>
      </Row>
   
    </div>
  );
}

export default Products;