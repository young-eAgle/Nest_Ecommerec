import React from 'react';
import "../topProducts/TopProduct.css"
import Rating from '@mui/material/Rating';

const TopProducts = ({title}) => {
  return (
    <>
    <div className="topSellingBox">

        <h1 className='text-[32px] font-semibold '>{title}</h1>
    </div>


    <div className="items flex items-center gap-3 hover:scale-102 transition-all duration-125 cursor-pointer pt-5">

        <div className="img rounded">
            <img className='rounded-sm w-38' src="./src/assets/top_products/top-1.jpg" alt="" />

        </div>
        <div className="info">

            <div className="name text-wrap">
                <h2 className='text-wrap text-lg font-semibold'>Nestle Original Coffe-Mate Coffe Creamer</h2>
            </div>
             <div className="rating">
                        
                  <Rating  name="half-rating" defaultValue={2.5} precision={0.5}/>
                    </div>
            <div className="price flex items-center gap-2">
                <h2 className="text-xl font-semibold text-green-500">$54.89</h2>
                <h4 className="line-through text-gray-400">$58.8</h4>
            </div>





        </div>


    </div>
    <div className="items flex items-center gap-3  relative transition-all duration-785 ease-in-out cursor-pointer pt-5 overflow-hidden">

        <div className="img rounded">
            <img className='rounded-sm w-38' src="./src/assets/top_products/top-3.jpg" alt="" />

        </div>
        <div className="info">

            <div className="name text-wrap">
                <h2 className='text-wrap text-lg font-semibold'>Nestle Original Coffe-Mate Coffe Creamer</h2>
            </div>
             <div className="rating">
                        
                  <Rating  name="half-rating" defaultValue={2.5} precision={0.5}/>
                    </div>
            <div className="price flex items-center gap-2">
                <h2 className="text-xl font-semibold text-green-500">$54.89</h2>
                <h4 className="line-through text-gray-400">$58.8</h4>
            </div>





        </div>


    </div>
    <div className="items flex items-center gap-3 hover:scale-102 transition-all duration-125 cursor-pointer pt-5">

        <div className="img rounded">
            <img className='rounded-sm w-38' src="./src/assets/top_products/top-2.jpg" alt="" />

        </div>
        <div className="info">

            <div className="name text-wrap">
                <h2 className='text-wrap text-lg font-semibold'>Nestle Original Coffe-Mate Coffe Creamer</h2>
            </div>
             <div className="rating">
                        
                  <Rating  name="half-rating" defaultValue={2.5} precision={0.5}/>
                    </div>
            <div className="price flex items-center gap-2">
                <h2 className="text-xl font-semibold text-green-500">$54.89</h2>
                <h4 className="line-through text-gray-400">$58.8</h4>
            </div>





        </div>


    </div>



      
    </>
  )
}

export default TopProducts
