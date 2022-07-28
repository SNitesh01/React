import { Button } from 'react-bootstrap';
import React from 'react'
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

export const Navbar = () => {
 
  const { cart, setCart } = React.useContext(CartContext);

  return (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
  <div className="container-fluid">
    <Link to='/web' className='nav-link'>web</Link>
   
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 g-3">
        <li className="nav-item">
          <Link to='/student'className='nav-link'>Students</Link>
        </li>
        <li className="nav-item">
          <Link to='/dash'className='nav-link'>Post</Link>
        </li>
        <li className="nav-item">
          <Link to='/task'className='nav-link'>Task</Link>
        </li>
        <li className="nav-item">
          <Link to='/products' className='nav-link'>Product</Link>
        </li>
        <li className="nav-item">
          <Link to='/rating' className='nav-link'>Rating</Link>
        </li>
        <li className='nav-item'>
        <Button> Cart <Badge>{cart && cart.items.length}</Badge>
        </Button>
         <Button onClick={() => navigator(1)}>Forward</Button>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to='/rating' class="dropdown-item" >Action</Link></li>
            <li><Link to='/rating' class="dropdown-item" >Another action</Link></li>
            <li><hr  class="dropdown-divider"/></li>
            <li><Link to='/rating' class="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
      
    
      </ul>

     
      
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;
