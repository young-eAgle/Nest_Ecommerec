import React from 'react';
import { ImPriceTag } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { SlCallOut } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
    <div className='footerWrapper'>

        <div className="footerBoxes flex gap-4 justify-center">

            <div className="box-1 flex justify-center items-center  gap-3 bg-gray-100 w-70 py-3 rounded-lg">
                <div className="icon-container ">
                   <img className='w-18' src="./src/assets/footer/icon-1.svg" alt="" />
                </div>
                <div className="box-info">
                    <div className="heading">
                        <h1 className='text-lg font-bold'>Best prices & Offers</h1>
                    </div>
                    <div className="span">
                        <h5 className='text-md'>Orders $50 or more</h5>
                    </div>


                </div>
            </div>
            <div className="box-1 flex justify-center items-center  gap-3 bg-gray-100 w-70 py-3 rounded-lg">
                <div className="icon-container ">
                   <img className='w-18' src="./src/assets/footer/icon-2.svg" alt="" />
                </div>
                <div className="box-info">
                    <div className="heading">
                        <h1 className='text-lg font-bold'>Best prices & Offers</h1>
                    </div>
                    <div className="span">
                        <h5 className='text-md'>Orders $50 or more</h5>
                    </div>


                </div>
            </div>
            <div className="box-1 flex justify-center items-center  gap-3 bg-gray-100 w-70 py-3 rounded-lg">
                <div className="icon-container ">
                   <img className='w-18' src="./src/assets/footer/icon-3.svg" alt="" />
                </div>
                <div className="box-info">
                    <div className="heading">
                        <h1 className='text-lg font-bold'>Best prices & Offers</h1>
                    </div>
                    <div className="span">
                        <h5 className='text-md'>Orders $50 or more</h5>
                    </div>


                </div>
            </div>
            <div className="box-1 flex justify-center items-center  gap-3 bg-gray-100 w-70 py-3 rounded-lg">
                <div className="icon-container ">
                   <img className='w-18' src="./src/assets/footer/icon-4.svg" alt="" />
                </div>
                <div className="box-info">
                    <div className="heading">
                        <h1 className='text-lg font-bold'>Best prices & Offers</h1>
                    </div>
                    <div className="span">
                        <h5 className='text-md'>Orders $50 or more</h5>
                    </div>


                </div>
            </div>
            <div className="box-1 flex justify-center items-center  gap-3 bg-gray-100 w-70 py-3 rounded-lg">
                <div className="icon-container ">
                   <img className='w-18' src="./src/assets/footer/icon-5.svg" alt="" />
                </div>
                <div className="box-info">
                    <div className="heading">
                        <h1 className='text-lg font-bold'>Best prices & Offers</h1>
                    </div>
                    <div className="span">
                        <h5 className='text-md'>Orders $50 or more</h5>
                    </div>


                </div>
            </div>

    

        </div>


        <div className="footer-Main py-6 mt-5">


            <footer className='flex gap-3 justify-around'>

                <div className="footer-section-1">
                    <div className="logo-slogan mb-5">
                        <img src="./src/assets/images/logo.svg" alt="" />
                         <span> Awesome grocery store website</span>
                    </div>

                    <div className="address">
                        <div className="logo-heading flex items-center gap-2">
                        <FaLocationDot size={25}/>
                        <div className="tag">
                         <h4 className='text-2xl font-semibold'>Address:</h4> 
                        </div>

                        </div>
                        <div className="actual_address">
                        <span className='text-md'>  5171 W Campbell Ave Kent,Utah 53127 United States</span>
                        </div>

                    </div>


                    <div className="mobile">
                        <div className="mobile-heading flex items-center gap-2">

                        <SlCallOut size={25}/>
                    <div className="tag">
                         <h4 className='text-2xl font-semibold'>Mobile:</h4> 
                        </div>
                        </div>

                        <div className="number">
                            <span> +92 321-3680114</span>
                        </div>
                    </div>


                    <div className="whatsapp">
                        <div className="whatsapp-heading flex items-center gap-2">

                        <FaWhatsapp size={25}/>
                    <div className="tag">
                         <h4 className='text-2xl font-semibold'>Whatsapp:</h4> 
                        </div>
                        </div>

                        <div className="number">
                            <span> +92 321-3680114</span>
                        </div>

                    </div>


                    <div className="Email">

                        <div className="email-heading flex items-center gap-2">

                        <HiOutlineMail size={25}/>
                    <div className="tag">
                         <h4 className='text-2xl font-semibold'>Email:</h4> 
                        </div>
                        </div>

                        <div className="number">
                            <span> info@xyzmail.pk</span>
                        </div>

                    </div>
                    





                </div>


                <div className="footer-section-2">
                    <h1 className='text-2xl font-semibold mb-5'>Popular Categories</h1>

                    <div className="categories ">
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Air Conditioners</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Refrigerator</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Air Fryer</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Water Dispenser</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Deep Freezer</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Washing Machine</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Kitchen Appliances</h4>
                    
                    </div>

                </div>

                <div className="footer-section-3">
                    <h1 className='text-2xl font-semibold mb-5'>Privacy Policy</h1>

                    <div className="categories">
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Privacy Policy</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Terms & Conditions</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Return and Refund</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Blogs</h4>
                      
                    </div>

                </div>

                <div className="footer-section-4">
                    <h1 className='text-2xl font-semibold mb-5'>Customer Support</h1>

                    <div className="categories">
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Contact Us</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>FAQs</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Customer Feedback</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Reviews</h4>
                        <h4 className='py-2 cursor-pointer p-1 rounded hover:bg-green-700'>Corporate Solutions</h4>
                      
                    </div>

                </div>






            </footer>




        </div>

        


    </div>

    
      
    </>
  )
}

export default Footer;
