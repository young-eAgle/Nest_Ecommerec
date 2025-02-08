import React from 'react'
import "../navigation/navigation.css"
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineTable } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Button from '@mui/material/Button';

const Navigation = () => {
  return (
    <div className='m-3 '>

        <div className="navigation-container flex items-center justify-between relative ">
          
            <div className="navigation-btn flex items-center justify-center gap-2 text-white  px-1 bg-green-600 w-65 py-2 rounded-sm cursor-pointer">
                <AiOutlineAppstore size={25} className=''/>

            <h1 className='text-lg '>Browse All Categories</h1>

             <FaChevronDown size={16}/>

 

            </div>
           

            <div className="navigation-name static">
                <nav>

                    <ul className='navigation-list-name flex '>

                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer">  <a href="" className=''>Home</a> </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer">  <a href="">About</a> </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer">  <a href="">Shop</a>  </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer">  <a href="">Vendors</a>  </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer static">  <a href="">Mega menu</a> <FaChevronDown className='' size={12}/> 



                        <div className=" mega_menu absolute flex items-center justify-around  left-0 w-full top-[73px] px-3 h-auto rounded-sm z-[2000]  ">
                            {/* first Line start */}
                            <div className="first-line mt-10">
                            <h1 className='text-2xl font-bold'>Fruits & Vegitables</h1>
                            
                            
                        { <ul className="dropDown_list mt-3 ">
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> About Us </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> Contact Us </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> My Account  </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> Login </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> Register </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> Purchase Guide </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> Privacy Policy </li>
                            <li className='py-1 text-lg px-2  hover:text-white hover:bg-black hover:rounded-md '> Terms of Service </li>
                            
                        </ul> }
                        </div>

 {/* first Line End */}

  {/* first Line start */}
  <div className="first-line mt-10">
                            <h1 className='text-2xl font-bold'>Breakfast & Dairy</h1>
                            
                            
                        { <ul className="dropDown_list mt-3 ">
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md  '> About Us </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Contact Us </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> My Account  </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Login </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Register </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Purchase Guide </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Privacy Policy </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Terms of Service </li>
                            
                        </ul> }
                        </div>

 {/* first Line End */}
  {/* first Line start */}
  <div className="first-line mt-10">
                            <h1 className='text-2xl font-bold'>Meat & Seafood</h1>
                            
                            
                        { <ul className="dropDown_list mt-3 ">
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> About Us </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Contact Us </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> My Account  </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Login </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Register </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Purchase Guide </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Privacy Policy </li>
                            <li className='py-1 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Terms of Service </li>
                            
                        </ul> }
                        </div>

 {/* first Line End */}



                        </div>
                                                
                        
                        
                        
                        
                        </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer">  <a href="">Blog</a>  </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 cursor-pointer relative ">  <a href="">Pages</a> <FaChevronDown className='' size={12}/> 
                        

                        <div className="dropDown_menu absolute top-[62px] w-[200px] px-3 rounded-sm  bg-gray-300 z-[2000] ">
                            <ul className="dropDown_list">
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> About Us </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Contact Us </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> My Account  </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Login </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Register </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Forgot Password </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Reset Password </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Purchase Guide </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Privacy Policy </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md '> Terms of Service </li>
                                <li className='py-2 text-lg px-2 hover:text-white hover:bg-black hover:rounded-md  '> 404 Page </li>
                            </ul>
                        </div>
                        
                        
                        
                         </li>
                        <li className="single-name flex items-center gap-4 mx-3 p-2 ">  <a href="">Contact</a>  </li>



                    </ul>



                </nav>

            </div>

            <div className="navigation-contact flex items-center gap-3">
            <div className="icon_container">
 <TfiHeadphoneAlt size={55}/>
</div>
                <div className="number-container flex flex-col  items-center  ">
                <div className="phone_number text-2xl text-green-400 font-bold">
                    0092-889-2323
                </div>
                <span className='text-lg'>24/7 Support Center</span>
                </div>
             

            </div>
        </div>
      
    </div>
  )
}

export default Navigation
