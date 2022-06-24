import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/Navbar.css'
import Aboutus from '../components/Aboutus'
import Contactus from '../components/Contactus'
import Destinations from './pages/Destinations';
import {Navbar,Nav,Container} from 'react-bootstrap'



function NavBar() {
      return (
    <>
     <Navbar collapseOnSelect expand="lg" variant="white" className='Navbar'>
     <Container className='Nav__container'>
    <Navbar.Brand href="#home"><img className='logo' src={process.env.PUBLIC_URL+"images/logo.png"} />
    </Navbar.Brand>
    <Navbar.Toggle className='Toggle'  aria-controls="responsive-navbar-nav"  />
    <Navbar.Collapse id="responsive-navbar-nav">
          
    <Nav className="ms-auto menu">
      <Link className="link-hover" to="/">Home</Link>
      <Link className="link-hover" to="/destination">Destinations</Link>
      <Link className="link-hover" to="">Events</Link>
      <Link className="link-hover" to="">Blogs</Link>
      <a className="link-hover" href="#aboutus">About Us</a>
      <a className="link-hover" href="#contactUs">Contact Us</a>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar