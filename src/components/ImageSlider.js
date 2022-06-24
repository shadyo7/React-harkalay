import React,{useState}  from 'react'
import { sliderData } from "./images";
import { BsChevronRight,BsChevronLeft} from "react-icons/bs";

const ImageSlider= ({slides}) => {
 
  const [current, setCurrent] = useState(0);
  const length=slides.length;

  const nextslide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevslide =() =>{
     setCurrent(current === 0 ? length -1 : current -1 );
  }
  console.log(current) ;

  if (!Array.isArray(slides)||slides.length<=0){
    return null;
  };

return(
      <section className='slider'>
        <BsChevronLeft  className='left-arrow' onClick={prevslide}/>
        <BsChevronRight  className='right-arrow' onClick={nextslide}/>
        {sliderData.map((slide,index) => {
          return <div className={index === current ? 'slide active' : 'slide'}
           key={index} 
          >
           {index === current && 
           ( <div><img src={slide.image} alt='travel image' className='image'/>
             <h3 className='image-heading'>{slide.name}</h3></div>   
           )
           
           }     
          </div>             
        })}
      </section>
)
}
export default ImageSlider;