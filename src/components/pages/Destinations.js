import React from 'react'
import NavBar from '../NavBar'
import CardItem from '../Carditems';
import Footer from '../Footer'
import Title from '../Title';
import '../styles/destination.css'
import '../styles/Cards.css'
import { Places } from './DestinationsData';
import { Link } from 'react-router-dom';

function Destinations() {
  
  const renderCard = (Places,index) =>{
    return(
      
      <CardItem key={index} className='cards__items '
      src={Places.image}
      text={Places.name}
      label={Places.type}
      path='/services'
    /> 
   
    )
  }
  return (
     <>
      <div className='header-destination'>
        <Link to="/"><img className='logo' src={process.env.PUBLIC_URL+"images/logo.png"}/> </Link>
      </div>
    <div className='destination__wrapper'>
        <div className='banner'>
        
        </div>
        
        <Title  
        subheading="Explore with Harkalay"
        heading="Select Destinations!"/>
        <div className='destination__container'>
        <div className='destination-cards'>
            {Places.map(renderCard) }
        </div>
          </div>
        
    </div>
    <Footer />
     </>
     
  )
}

export default Destinations