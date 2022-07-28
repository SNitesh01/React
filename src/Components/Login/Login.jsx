import React,{useState} from 'react'
import { Button, Form, } from 'react-bootstrap';

import Joi from "joi";
import { http } from "../../config/axiosConfig";

const loginSchema = Joi.object({
  email: Joi.string()
    .min(4)
    .max(50)
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .label("Email"),
  password: Joi.string().min(4).max(50).required().label("Password"),
});


const Login = () => {

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);
  
    const handleFormChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        //validate formdata
        let result = loginSchema.validate(formData, { abortEarly: false });
        if (result.error) {
          setErrors(result.error.details);
          return;
        }
        http
          .post("auth", formData)
          .then(res => {
            if (res.status === 200) {
              setErrors([]);
            }
          })
          .catch(err =>
            setErrors([{ message: err.response.data, path: ["server"] }]),
          );
    
        //send login request back
      };
      console.log(errors);
  

  return (
    <div>
        <Form onChange={handleFormChange} onSubmit={handleSubmit}>
       
        {errors?.find(er => er?.path[0] == "server")?.message && (
        <Alert variant="danger">
          {errors?.find(er => er?.path[0] == "server")?.message}
        </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
     
        {errors && (
          <Form.Text className="text-danger">
            {errors?.find(er => er?.path[0] == "email")?.message}
          </Form.Text>
        )}
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
        {errors && (
          <Form.Text className="text-danger">
            {errors?.find(er => er?.path[0] == "password")?.message}
          </Form.Text>
        )}

      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
    </div>
  )
}

export default Login;