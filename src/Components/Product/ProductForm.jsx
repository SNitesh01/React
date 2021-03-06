import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { httpFile, http } from "../../config/axiosConfig";

function ProductForm() {
//const [formData, setFormData] = useState(null);
 const [categories, setCategories] = useState(null);


  const handleSubmit = e => {
    e.preventDefault();
    let data = new FormData(e.target);
    httpFile.post("products", data);
  };

  useEffect(() => {
    http('category').then(res=> setCategories(res.data))

}, [])

  return (
    <div>
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Name" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" placeholder="Price" />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descriptions</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Description"
          />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Upload</Form.Label>
          <Form.Control
            type="file"
            multiple
            name="images"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Label>category</Form.Label>
        <Form.Select name="category" aria-label="Default Select">
           {categories?.map(category => (
              <option value={category._id}>
                {category.name}
              </option>
            ))}
        </Form.Select>
       
        <Button type="submit" variant="primary">
          Create Product
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;