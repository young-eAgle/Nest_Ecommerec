import React, { useEffect, useState } from "react";
import Select from "../SelectDropDown/select";
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import { ClickAwayListener } from "@mui/material";
import "../header/header.css"
import Navigation from "./navigation/navigation";
// MUI IMPORTS
import Button from '@mui/material/Button';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Header = () => {
  const [isOpenAccDrop, setIsOpenAccDrop] = useState(false);
  const [Categories, setCategoreis] = useState([
    "All Categories",
    "Milk Daires",
    "wines & Alchol",
    "Clothing & Beauty",
    "Pet Foods & Toy",
    "Fast Food",
    "Baking material",
    "Vegitables",
    "Fresh Seafood",
    "Noodle & Rice",
    "Ice Cream",
    "Sugar & Rice",
    "Fries & Chips",
    "Oils & Soda",
    "Electronics",
    "Dry Fruits",
  ]);


  const countryList = [];

  useEffect(()=>{


    getCountry('https://countriesnow.space/api/v0.1/countries/')
  },[]);


  const getCountry = async(url)=>{

    try {
       let countryData =  await axios.get(url).then((res)=>{
        if(res!==null){

            res.data.data.map((item, index)=>{

                countryList.push(item.country)
            })
            
        }
       })
        
    } catch (error) {

        console.log(error.message)
        
    }



  }




  return (
    <>
      <div className="bg-gray-500 ">Header</div>
      <header className="mb-4">
        <div className="header_container flex items-center justify-between gap-4 px-2">
          <div className="logo_container">
            <img src="./src/assets/images/logo.svg" alt="" />
          </div>

          <div className="searchbar_container ">
            <div className=" flex items-center justify-between gap-4 my-3  px-4   w-150 h-15  border-green-500 border-2 rounded-sm">
              <div className="select_dropDown  w-40 relative">
                <Select data={Categories} />
              </div>
              <hr className="bg-red-500 w-[1.8px] h-10" />
              <div className="input_bar">
                <input
                  className="focus-outline-none border py-2 px-4 "
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="search_icon">
                <IoSearchOutline size={30} />
              </div>
            </div>
          </div>
          <div className="country_container w-50 relative border p-4 rounded shadow-xl">

            <Select data={countryList}   />




          </div>

          <div className="cart_&Others  ">
          <ClickAwayListener onClickAway={()=>setIsOpenAccDrop(false)}>
            <ul className="flex items-center gap-6">
                <li className="list-inline-item flex ">
                    <div className="img-container w-7 relative">
                        <span className="absolute bg-green-500 p-1 rounded-full w-5 h-5 flex items-center justify-center left-[10px] top-[-10px]">3</span>
                <img  src="../../src/assets/images/icon-compare.svg" alt="img" />

                    </div>
                     <span>  Compare</span>
                     </li>
                <li className="list-inline-item flex ">

                <div className="img-container w-7 relative">
                <span className="absolute bg-green-500 p-1 rounded-full w-5 h-5 flex items-center justify-center left-[10px] top-[-10px]">4</span>
                <img className=" " src="../../src/assets/images/icon-heart.svg" alt="" />
                </div>
                     <span>  Wishlist</span>
                     </li>
                <li className="list-inline-item flex ">
                <div className="img-container w-7 relative">
                <span className="absolute bg-green-500 p-1 rounded-full w-5 h-5 flex items-center justify-center left-[10px] top-[-10px]">1</span>
                <img className=" w-24" src="../../src/assets/images/icon-cart.svg" alt="" />
                </div>
                     <span>  Cart</span>
                     </li>
                <li className="list-inline-item  relative w-full cursor-pointer" onClick={()=>setIsOpenAccDrop(!isOpenAccDrop)}>
                  <div className="flex  ">
                <img src="../../src/assets/images/icon-user.svg" alt="" />
                     <span>  Account</span>
                     </div>
                     
                    {isOpenAccDrop &&
                     <ul className="Account_dropDown absolute top-8 right-0 w-[190px] h-auto shadow-xl border-gray-100 border-[0.6px z-100   ">
                      <li className="w-full py-1"><Button className="mui-button"><PersonOutlineSharpIcon className=""/>My Account</Button></li>
                      <li className="w-full py-1"><Button className="mui-button"> <LocationOnOutlinedIcon/>Tracking</Button></li>
                      <li className="w-full py-1"><Button className="mui-button"> <BeenhereOutlinedIcon/> My Voucher</Button></li>
                      <li className="w-full py-1"><Button className="mui-button"><FavoriteBorderOutlinedIcon/> My Wishlist</Button></li>
                      <li className="w-full py-1"><Button className="mui-button"><SettingsOutlinedIcon/> Setting</Button></li>
                      <li className="w-full py-1 "><Button className="mui-button"><LogoutOutlinedIcon/> Sign Out</Button></li>
                     </ul>
                     }
                    


                     </li>

            </ul>
            </ClickAwayListener>

          </div>
        </div>
      </header>
        <hr className=" text-gray-300" />
      <Navigation/>
      <hr className=" text-gray-300" />
    </>
  );
};

export default Header;
