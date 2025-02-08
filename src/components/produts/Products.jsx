import React from "react";
import "../produts/products.css";
import Rating from '@mui/material/Rating';
import { IoCartOutline } from "react-icons/io5";

const Products = () => {
  return (
    <>
      <div className="singleProduct w-70 mx-2  h-[460px] bg-white rounded border  ">

        <div className="img-wrapper">
            <img src="./src/assets/products/product-1.jpg" alt="" />
        </div>
        <div className="text-info_Container ml-5">
        <div className="category">
            <span>Snack</span>
        </div>
        <div className="info">
            <h2 className="name text-xl font-bold">Seeds of Change Organic Quinoa,Brown,& Red Rice</h2>
        </div>

        <div className="rating">
            
      <Rating  name="half-rating" defaultValue={2.5} precision={0.5}/>
        </div>
        <div className="brand">
            <h4>By <span className="text-md font-semibold text-green-500">Nest Food</span></h4>
        </div>

        <div className="price-cart flex  items-center justify-around">

            <div className="price flex items-center gap-2">
                <h2 className="text-xl font-semibold text-green-500">$54.89</h2>
                <h4 className="line-through text-gray-400">$58.8</h4>
            </div>

            <div className="cart flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-sm ">
                <div className="cart-img">
                    <IoCartOutline size={29}/>
                    
                </div>
                 <h1 className="text-xl">Add</h1>
            </div>


        </div>

      </div>
      </div>


      



    </>
  );
};

export default Products;
