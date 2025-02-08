import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Home/HomeSlider.css"



const HomeSlider = () => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <section className='home-slider'>
        <div className="slider-container overflow-hidden   ">


        <Slider {...settings}>
    
      <div className=' slide slide-1 p-5   '>

        <img className='rounded-xl  ' src="../src/assets/slides/slider-1.png" alt="" />
        
      </div>
      <div className=' slide slide-2 p-5    '  >
        
      <img className='rounded-xl ' src="../src/assets/slides/slider-2.png" alt="" />
      </div>
    </Slider>




        </div>
      
    </section>
  )
}

export default HomeSlider;
