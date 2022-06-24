import React from 'react'
import Title from './Title'
import Button from './Button'
import "./styles/aboutus.css"
import aboutus from './assets/images/aboutus.png'
export default function 
() {
  return (
    <div id="aboutus" className='about_wrapper'>
        <div className='aboutSection__left'>
           <Title 
           subheading="Let you Know"
           heading="About Harkalay" 
            />
            <p>
            The word ‘Harkalay’ or ‘هرکلی’ means welcome in Pashto and it
            symbolize the essence of hospitality and friendliness of the
            people of KPK. Harkalay aims to provide a comprehensive &
            interactive travel and tourism platform to the tourist and
            citizens meeting local as well international needs and standards.
            The project aims to provide enough necessary information to the
            tourist to plan their trip safely and avoiding any inconvenience.
              </p>
             <Button button_title="Read More"/> 
        </div>
        <div className='aboutsection_right'>
           <img src={aboutus} alt=''/>
        </div>
    </div>
  )
}
