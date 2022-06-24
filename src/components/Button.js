import React from 'react'
import "./styles/button.css"
function Button(props) {
 return (
    <div className="text-center">
     <a class="main-btn" href="">
     {props.button_title}
     </a>
    </div>
  )
}

export default Button