import React, {useState} from 'react'
import Button from './Button';
import './styles/contactform.css'


function ContactForm() {
   const [name ,setName]=useState('');
   const [email ,setEmail]=useState('');
   const [message ,setMessage]=useState('');
    return (
    <form className='.contact_form'>
      <div className='form-group'>
           <label htmlFor='name'>
            Your Name
            <input type="text"
             id="name"
             name="name" 
             value={name}
             onChange={(e)=>setName(e.target.value)} />
           </label>
      </div>
      <div className='form-group'>
           <label htmlFor='email'>
            Your Email
            <input type="text"
             id="email"
             email="email" 
             value={email}
             onChange={(e)=>setEmail(e.target.value)} />
           </label>
      </div>
      <div className='form-group'>
           <label htmlFor='message'>
            Your Message
            <textarea type="text"
             id="message"
             message="message" 
             value={message}
             onChange={(e)=>setMessage(e.target.value)} />
           </label>
      </div>
      <Button type="submit" button_title="Submit"/>
    </form>
    
  )
}

export default ContactForm