import React from 'react'
import './styles/contactinfo.css'

function Contactinfo(props) {
  return (
    <div className='info__section'>
        <div className='icon'>
          {props.icon}
        </div>
        <div className='info'>
          <p>{props.text}</p>  
        </div>
    </div>
  )
}

export default Contactinfo