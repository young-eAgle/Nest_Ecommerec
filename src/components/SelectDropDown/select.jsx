import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { ClickAwayListener } from "@mui/material";
import React from "react";

const Select = (props) => {

    const [isOpenSelect, setisOpenSelect] = useState(false);
    const [selectedIndex ,setSelectedIndex] = useState(0);
    const [selectedText ,setSelectedText] = useState("All Categories");
    const [listData, setListData] = useState(props.data);
    const [listData2, setListData2] = useState(props.data)

    const openSelectHandle =()=>{
        setisOpenSelect(!isOpenSelect);
    }
    const closeSelectHandle = (index, text) => {
        setSelectedIndex(index)
        setisOpenSelect(false);
        setSelectedText(text);
    }

    const filterList = (e)=>{
        const keyword = e.target.value.toLowerCase();
    

        const list = listData2.filter((item)=>{
            return item.toLowerCase().includes(keyword)
        })

        const list2 = list.filter((item, index)=> list.indexOf(item) === index);
        console.log(list2);

        setListData(list2);


    }


  return (
    <>
    <ClickAwayListener onClickAway={()=>(setisOpenSelect(false))}>
      <div
        className="all_categories w-full flex justify-between items-center cursor-pointer  "
        onClick={openSelectHandle}
      >
        <h2>{selectedText}</h2>
        <FaChevronDown className="" />
      </div>
      </ClickAwayListener>
 
      {isOpenSelect === true && (
        <div className="select_DropDown w-[220px] h-auto max-h-[300px] overflow-y-scroll absolute top-10 left-[-18px] shadow-xl  border border-gray-100 px-2   ">
          <div className="drop_search   py-2">
            <input
              type="text"
              className=" border-green-500 border-3 w-full rounded-sm p-1 text-xl"
              placeholder="Search"
              onChange={filterList}
            />
          </div  >

          <ul className="pb-2"      >

            {listData.map((item, index) =>{

                return(


                <li key={index} onClick={() =>closeSelectHandle(index, item)} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===index ? "active" :""}`} >{item}</li>
                    // <li onClick={()=>closeSelectHandle(index, item)} className={` my-2 cursor-pointer hover:bg-green-600 p-1  ${selectedIndex ===index ? "active" :""}`} >{item}</li>
                )


            })}
          </ul>
        </div>
      )}
      
    </>
  );
};

export default Select;
