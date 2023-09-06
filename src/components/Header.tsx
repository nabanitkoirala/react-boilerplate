import React from "react";
import searchIcon from "../assets/bx-search.svg";
import koreanIcon from "../assets/Korean.svg";
import moonIcon from "../assets/Moon.svg";
import squareIcon from "../assets/Square.svg";
import bellIcon from "../assets/Bell.svg";
import avatarIcon from "../assets/Avatar.svg";
import Browsing from "../baseRouting_network_call/HttpBrowsing";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    Browsing.get('/auth/logout')
      .then(res => {
        localStorage.clear()
        navigate('/');
      })
      .catch(err => {
        console.log("this is error", err.response);

      });
  }
  return (
    <>
      <div className=" w-full md:pr-4">
        <div className="flex w-full justify-between  px-4 py-2 bg-[white] rounded-lg ">
          <div className="flex flex-1">
            <img src={searchIcon} alt="" className="w-3 md:w-6" />
            <input
              type="text"
              placeholder="Search (Ctrl+/)"
              className="w-full px-2 text-[10px] md:text-[16px] outline-none"
            />
          </div>
          <div className="flex ">
            <img src={koreanIcon} alt="" className="px-1 md:px-2 w-5 md:w-10" />
            <img src={squareIcon} alt="" className="px-1 md:px-2 w-5 md:w-10" />
            <img src={moonIcon} alt="" className="px-1 md:px-2 w-5 md:w-10" />
            <img src={bellIcon} alt="" className="px-1 md:px-2 w-5 md:w-10" />
            <img src={avatarIcon} alt="" className="px-1 md:px-2 w-5 md:w-10" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
