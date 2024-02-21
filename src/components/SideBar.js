import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserPlus,faArrowTrendUp, faBagShopping,faFilm,faMusic,faGamepad,faTowerBroadcast,faPodcast} from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

 if(!isMenuOpen) return null;//early return

  return (
    <div className=" flex flex-col gap-2 w-48 ">
      {/* <div className="flex">
        <div className="outline-none rounded-md flex items-center w-10 h-8">
        <FontAwesomeIcon icon={faBars}  onClick={()=> toggleBar()}/>  
        </div>
        <div className="outline-none rounded-md flex items-center w-10 h-8 bg-black">
          <img src={Logo} alt="logo"></img>MTube
        </div>
    </div> */}
      <ul>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </li>
        <li className="flex gap-3 justify-start items-center p-2 cursor-pointer hover:bg-gray-200">
          <div><FontAwesomeIcon icon={faTiktok} /></div>
          Shorts
        </li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200">
          <FontAwesomeIcon icon={faUserPlus} />
          Subscriptions
        </li>
      </ul>
      <hr className="w-full  bg-black"></hr>
      <h1 className=" font-semibold">Subscriptions</h1>
      <hr className="w-full  bg-black"></hr>
      <h1 className=" font-semibold">Explore</h1>
      <ul>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faArrowTrendUp} />Trending</li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faBagShopping} />Shopping</li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faFilm} />Movies</li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faMusic} />Music</li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faGamepad} />Gaming</li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faTowerBroadcast} />Live</li>
        <li className="flex gap-2 justify-start items-center p-2 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon icon={faPodcast} />Podcasts</li>
      </ul>
    </div>
  );
};

export default SideBar;
