import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import React from "react";

const Select = (props) => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex ,setSelectedIndex] = useState(0);
    const [selectedText ,setSelectedText] = useState("All Categories");

    const openSelectHandle =()=>{
        setisOpenSelect(!isOpenSelect);
    }


    const closeSelectHandle = (index, text) => {
        setSelectedIndex(index)
        setisOpenSelect(false);
        setSelectedText(text);
    }

  return (
    <>
      <div
        className="all_categories w-full flex justify-between items-center cursor-pointer  "
        onClick={openSelectHandle}
      >
        <h2>{selectedText}</h2>
        <FaChevronDown className="" />
      </div>
 {/* <ClickAwayListener onClickAway={()=>(setisOpenSelect(false))}> */}
      {isOpenSelect === true && (
        <div className="select_DropDown w-[220px] h-auto max-h-[300px] overflow-y-scroll absolute top-10 left-[-18px] shadow-xl  border border-gray-100 px-2   ">
          <div className="drop_search   py-2">
            <input
              type="text"
              className="border border-green-500 border-3 w-full rounded-sm p-1 text-xl"
              placeholder="Search"
            />
          </div  >

          <ul className="pb-2"      >

            {props.data.map((item, index) =>{

                return(


                <li onClick={() =>closeSelectHandle(index, item)} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===index ? "active" :""}`} ></li>
                    // <li onClick={()=>closeSelectHandle(index, item)} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===index ? "active" :""}`} >{item}</li>
                )


            })}


            <li className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===0 ? "active" :""}`}></li>
            <li onClick={()=>closeSelectHandle(0 ,"All Categories"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===0 ? "active" :""}`}  >All Categories</li>
            <li onClick={()=>closeSelectHandle(1 ,"Milk Daires"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===1 ? "active" :""}`} >Milk Daires</li>
            <li onClick={()=>closeSelectHandle(2 ,"wines & Alchol"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===2 ? "active" :""}`} >wines & Alchol</li>
            <li onClick={()=>closeSelectHandle(3 ,"Clothing & Beauty"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===3 ? "active" :""}`} >Clothing & Beauty</li>
            <li onClick={()=>closeSelectHandle(4 ,"Pet Foods & Toy"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===4 ? "active" :""}`} >Pet Foods & Toy</li>
            <li onClick={()=>closeSelectHandle(5 ,"Fast Food"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===5 ? "active" :""}`} >Fast Food</li>
            <li onClick={()=>closeSelectHandle(6 ,"Baking material"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===6 ? "active" :""}`} >Baking material</li>
            <li onClick={()=>closeSelectHandle(7 ,"Vegitables"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===7 ? "active" :""}`} >Vegitables</li>
            <li onClick={()=>closeSelectHandle(8 ,"Fresh Seafood"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===8 ? "active" :""}`} >Fresh Seafood</li>
            <li onClick={()=>closeSelectHandle(9, "Noodle & Rice" )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===9 ? "active" :""}`} >Noodle & Rice</li>
            <li onClick={()=>closeSelectHandle(10,"Ice Cream"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===10 ? "active" :""}`} >Ice Cream</li>
            <li onClick={()=>closeSelectHandle(11,"Sugar & Rice"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===11 ? "active" :""}`} >Sugar & Rice</li>
            <li onClick={()=>closeSelectHandle(12,"Fries & Chips"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===12 ? "active" :""}`} >Fries & Chips</li>
            <li onClick={()=>closeSelectHandle(13,"Oils & Soda"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===13 ? "active" :""}`} >Oils & Soda</li>
            <li onClick={()=>closeSelectHandle(14,"Electronics"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===14? "active" :""}`} >Electronics</li>
            <li onClick={()=>closeSelectHandle(15,"Dry Fruits"  )} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===15 ? "active" :""}`} >Dry Fruits</li>
          </ul>
        </div>
      )}
      {/* </ClickAwayListener> */}
    </>
  );
};


