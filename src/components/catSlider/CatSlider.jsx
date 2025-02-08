import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../catSlider/CatSlider.css"

const CatSlider = () => {

    
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };


  return (
    <div className='catSliderSection  w-full h-auto'>
      <div className="catSlider-Container  ">
        <h1 className='font-bold mx-9 text-2xl mb-3'>Featured Categories</h1>
        <Slider {...settings} className='catSlider_Main' >


            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-1.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-2xl font-bold text-white'>Burgers</h3>
                    <span className='text-gray-200'>56 items</span>
                </div>
               
           
            </div>

            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-2.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-2xl font-bold text-white'>Almonds</h3>
                    <span className='text-gray-200'>26 items</span>
                </div>
               
           
            </div>

            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-3.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-2xl font-bold text-white'>Oranges</h3>
                    <span className='text-gray-200'>29 items</span>
                </div>
            </div>

            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-4.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-2xl font-bold text-white'>Apples</h3>
                    <span className='text-gray-200'>32 items</span>
                </div>
            </div>
            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-5.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-2xl font-bold text-white'>Snacks</h3>
                    <span className='text-gray-200'>16 items</span>
                </div>
            </div>
            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-6.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-2xl font-bold text-white'>Vegitables</h3>
                    <span className='text-gray-200'>43 items</span>
                </div>
            </div>
            <div className="slides-container-1 w-full bg-green-600 h-[170px] mb-4 rounded-md  ">
                <div className="img-container -mt-4 ">
                    <img src="./src/assets/f_categories/cat-7.png" alt="" />
                </div>

                <div className="namePrice flex flex-col items-center">
                    <h3 className='text-xl font-bold text-white'>Strawberry</h3>
                    <span className='text-gray-200'>56 items</span>
                </div>
            </div>
          
           



        </Slider>
      </div>
    </div>
  )
}

export default CatSlider;
