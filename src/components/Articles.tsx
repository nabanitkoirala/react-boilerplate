import React from "react";
import rocketImg from "../assets/Rocket.svg";
import giftImg from "../assets/Gift.svg";
import keyboardImg from "../assets/Keyboard.svg";

const Articles = () => {
  return (
    <>
      <div className="p-5 md:p-20 bg-[white] mx-4 ">
        <div className="flex flex-col gap-6 items-center ">
          <p className="text-[16px] md:text-[24px] font-[500] text-[#32475C] " >Popular Articles</p>
          <div className="flex flex-col gap-y-6 lg:flex-row gap-x-6  ">
            <div className=" flex flex-col items-center border-[1px] rounded-[8px] p-5 gap-y-[12px] ">
              <img src={rocketImg} alt="" />
              <h1 className="text-[16px] md:text-[24px] font-[500] text-[#32475C] " >Getting Started</h1>
              <p className="text-[12px] md:text-[16px] font-[400] text-[#32475C] text-center " >
                Whether you're new or you're a power user, this article will..
              </p>
              <button className="border border-[#696CFF] py-[7px] px-3 md:px-5 text-[10px] md:text-[14px] font-[500] rounded-[6px] " >READ MORE</button>
            </div>
            <div className="flex flex-col items-center border-[1px] rounded-[8px] p-5 gap-y-[12px] ">
              <img src={giftImg} alt="" />
              <h1 className="text-[16px] md:text-[24px] font-[500] text-[#32475C] ">First Steps</h1>
              <p className="text-[12px] md:text-[16px] font-[400] text-[#32475C] text-center ">
                Whether you're new or you're a power user, this article will..
              </p>
              <button className="border border-[#696CFF] py-[7px] px-3 md:px-5 text-[10px] md:text-[14px] font-[500] rounded-[6px] ">READ MORE</button>

            </div>
            <div className="flex flex-col items-center border-[1px] rounded-[8px] p-5 gap-y-[12px]">
              <img src={keyboardImg} alt="" />
              <h1 className="text-[16px] md:text-[24px] font-[500] text-[#32475C] ">Add External Content</h1>
              <p className="text-[12px] md:text-[16px] font-[400] text-[#32475C] text-center ">
                Whether you're new or you're a power user, this article will..
              </p>
              <button className="border border-[#696CFF] py-[7px] px-3 md:px-5 text-[10px] md:text-[14px] font-[500] rounded-[6px] ">READ MORE</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
