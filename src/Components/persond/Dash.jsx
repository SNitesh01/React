import React, {useState} from 'react'



//const [formdata, setFormdata] = useState(null);

       const submitHandler = e => {
       //   console.log("heloo")
        //  e.preventDefault();
        //  let data = new FormData(e.target);
        //  http.post("register", data,{
        //      headers:{
        //        "Content-Type":"multipart/form-data"
               
        //      }
        //  })

       }

export const Dash = () => {
  return (
    <div>
       <form className='w-50' onSubmit={submitHandler}>
           <div class="mb-3">
            <label  class="form-label">User name</label>
            <input type="text" class="form-control"  name="name" id="name"  required/>
          </div>
        
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control"  name="email" id="email"  aria-describedby="emailHelp"/>
            <div class="form-text">We'll never share your email with anyone else.</div>
          </div>
         
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="Password" name="password" />
          </div>
           <div class="mb-3">
            <label for="image" class="form-label" >Image</label>
            <input type="file" id="image" name="image" />
          </div>


          
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>  
    </div>
  )
}
