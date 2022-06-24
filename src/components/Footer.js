import React from 'react'
import './styles/Footer.css'
import { BsTwitter,BsFacebook,BsInstagram,BsLinkedin} from "react-icons/bs";
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <Row className='ms-auto footer-row'>
            <Col className='col-lg-4 text-center mt-4 mb-4'>
            <img className='footer-logo' src={process.env.PUBLIC_URL+"images/logo.png"} />
            </Col>
            <Col className='col-lg-4 text-center mt-4 mb-4'>
                <ul className='menu'>
                    <Link to="/" className='menu-item'>Home</Link>
                    <Link to="/" className='menu-item'>About Us</Link>
                    <Link to="/" className='menu-item'>Destinations</Link>
                    <Link to="/" className='menu-item'>Events</Link>
                    <Link to="/" className='menu-item'>Blogs</Link>
                    <Link to="/" className='menu-item'>Contact Us</Link>
                </ul>
            </Col>
            <Col className='col-lg-4 text-center mt-4 mb-4'>
                   <div className='social'> 
                   <h3>Social Media</h3>
                    <Link to="/" className='icons'><BsTwitter/></Link>
                    <Link to="/" className='icons'><BsLinkedin/></Link>
                    <Link to="/" className='icons'><BsFacebook/></Link>
                    <Link to="/" className='icons'><BsInstagram/></Link>
                    </div>
            </Col>
        </Row>
    </div>
  )
}

export default Footer