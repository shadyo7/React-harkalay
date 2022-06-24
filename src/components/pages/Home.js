import React from 'react'
import '../styles/imageslider.css'
import '../styles/responsive-style.css'
import NavBar from '../NavBar'
import { sliderData } from '../images'
import ImageSlider from '../ImageSlider'
import Aboutus from '../Aboutus'
import Cards from '../Cards'
import Footer from '../Footer'
import Contactus from '../Contactus'

function Home() {
    return (
    <>
    <NavBar />
    <ImageSlider slides={sliderData}/>
    <Aboutus />
    <Cards />
    <Contactus />
    <Footer />
      </>
    );
  }
  
  export default Home;