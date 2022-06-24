import React from 'react'
import "./styles/title.css"

export default function Title(props) {
  return (
    <div className="text-center">
        <p className='subtitle'> {props.subheading}</p>
        <h3>{props.heading}</h3>
    </div>
  )
}
