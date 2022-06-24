import React from 'react'
import Title  from './Title'
import Contactinfo from './Contactinfo'
import './styles/contact.css'
import { BsFillGeoAltFill, BsFillTelephoneFill,BsFillEnvelopeFill} from "react-icons/bs";
import ContactForm from './ContactForm';
function Contactus() {
  return (
    <div id="contactUs" className='contact__section'>
       <Title
        subheading="Get in Touch"
        heading="Contact Us"
       />
       <div className='contact__Wrapper'>
          <div className='left'>
           <Contactinfo 
            icon={<BsFillTelephoneFill/>}
            text="+92 3178888"
           />
           <Contactinfo
            icon={<BsFillGeoAltFill/>}
            text="Swat"
           />
           <Contactinfo
            icon={<BsFillEnvelopeFill/>}
            text="Harkalay@gmail.com"
            />
          </div>
          <div className='right'>
          <ContactForm/>
          </div>
       </div>
    </div>
  )
}

export default Contactus