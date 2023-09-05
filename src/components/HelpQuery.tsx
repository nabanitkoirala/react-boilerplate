import React from "react";
import backgroundImg from "../assets/Background.svg";
import searchIcon from "../assets/bx-search.svg";
const HelpQuery = () => {
  return (
    <>
      <div className="px-4 ">
        <div
          style={{ backgroundImage: `url(${backgroundImg})` }}
          className=" flex items-center justify-center  w-[100%] h-60 md:h-80 rounded-t-[8px] bg-no-repeat bg-cover "
        >
          <div className="px-[5px] flex flex-col items-center  ">
            <h1 className="font-inter text-[14px] md:text-[24px] font-[600] ">
              Hello, how can we help?
            </h1>
            <div className="flex my-[18px] py-[15px] bg-[white] px-[12px] gap-x-[8px] rounded-[6px]  ">
              <img src={searchIcon} alt="" className=" pl-[5px] w-5 md:w-6 h-5 md:h-6 " />
              <input
                type="text"
                placeholder="Ask a question...."
                className="text-[12px] md:text-[16px] font-[400] "
              />
            </div>
            <p className="text-[12px] md:text-[14px] font-[400] text-center ">
              or choose a category to quickly find the help you need
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpQuery;
