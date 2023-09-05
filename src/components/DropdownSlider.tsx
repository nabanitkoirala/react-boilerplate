import React, { useState, useEffect, useRef } from "react";
import { Link, useHref, useLocation } from "react-router-dom";
import ArrowDown from "../assets/arrow-down.svg";
import ArrowRight from "../assets/arrow-right.svg";
import SVG from "./SVG";
import { ReactSVG } from "react-svg";

const DropdownSlider = ({ icon, title, link, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { pathname } = useLocation();
  const DropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!DropdownRef?.current?.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [DropdownRef]);
  console.log("options", options)
  return (
    <div key={title + link} ref={DropdownRef} className="flex flex-col">

      <div
        className={`flex items-center gap-2 justify-between hover:bg-[#666CFF] hover:bg-opacity-[0.12] rounded-[10px] cursor-pointer ${pathname === link ? 'bg-[#666CFF] bg-opacity-[0.12]' : ''}`}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="flex gap-4 py-3 px-4 items-center">
          <ReactSVG
            src={icon}
            alt=""
            className={`w-5 h-4 flex items-center ${showOptions
              ? "text-[#696CFF] stroke-[#696CFF] fill-[#696CFF]"
              : "text-[#32475C] stroke-[#32475C] fill-[#32475C] text-opacity-[0.68]"
              }`}
          />
          {options?.length ? (
            <h5
              className={`text-[16px] ${showOptions
                ? "text-[#696CFF]"
                : "text-[#32475C] text-opacity-[0.68]"
                }`}
            >
              {title}
            </h5>
          ) : (
            <Link to={link}>
              <h5
                className={`text-[16px] ${showOptions
                  ? "text-[#696CFF]"
                  : "text-[#32475C] text-opacity-[0.68]"
                  }`}
              >
                {title}
              </h5>
            </Link>
          )}
        </div>
        {options ? (
          showOptions ? (
            <img src={ArrowDown} alt="" />
          ) : (
            <img src={ArrowRight} alt="" />
          )
        ) : null}
      </div>

      {showOptions && options?.length > 0 ? (
        <ul className="flex flex-col list-disc text-[#32475C] text-opacity-[0.68] pl-5 ">
          {options.map((opt, idx) => (
            <li key={idx} className="flex py-2 items-center gap-x-6 ">
              <div className="w-2 h-2 rounded bg-[#32475C] bg-opacity-[0.68] "></div>
              {<Link to={opt.link}>{opt.title}</Link>}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropdownSlider;
