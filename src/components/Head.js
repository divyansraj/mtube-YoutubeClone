import React from "react";
import Logo from "../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import userimg from "../assets/img/1000_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT-removebg-preview.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/MenuSlice";



const Head = () => {

  const dispatch = useDispatch();
  const toggleBar =() => {
    dispatch(toggleMenu());
  }

  return (
    <div className="flex justify-between items-center p-2 pl-4 pr-4">
      <div className="flex">
        <div className="outline-none rounded-md flex items-center w-10 h-8">
        <div className=" cursor-pointer hover:shadow-lg" >
        <FontAwesomeIcon icon={faBars} 
          
        onClick={()=> toggleBar()}/>  
        </div>
        </div>
        <div className="outline-none rounded-md flex items-center w-10 h-8 bg-black">
          <img src={Logo} alt="logo"></img>MTube
        </div>
    </div>

    <div className="flex">
      <input
      className=" border-2 w-[600px] rounded-lg rounded-r-none p-2 outline-none"
      placeholder="Search Bar"
      >

      </input>
      <button className="border-2 rounded-lg rounded-l-none">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8" />
      </button>
    </div>

    <div>
      <img className="h-8 w-10 "
      src={userimg}
      alt="user">

      </img>
    </div>

    </div>
  );
};

export default Head;
