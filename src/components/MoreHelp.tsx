import React from "react";

const MoreHelp = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-4 gap-y-4 p-5 md:p-20">
        <div className="flex flex-col items-center gap-y-2 md:gap-y-4 ">
          <h1 className="text-[16px] lg:text-[24px] md:text-[20px] font-[500] text-[#32475C] " >Still need help?</h1>
          <p className="text-center text-[12px] md:text-[16px] font-[400] text-[#32475C] ">
            Our specialists are always happy to help. <br/> Contact us during standard
            business hours or email us 24/7, and we'll get back to you
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:gap-x-4 gap-y-2">
          <button className="px-3 py-[5px] md:px-5 md:py-[7px] bg-[#696CFF] rounded-[6px] uppercase font-[500]  text-[10px] md:text-[12px] text-[#FFFFFF] ">visit our community</button>
          <button className="px-3 py-[5px] md:px-5 md:py-[7px] bg-[#696CFF] rounded-[6px] uppercase font-[500]  text-[10px] md:text-[12px] text-[#FFFFFF] " >Contact us</button>
        </div>
      </div>
    </>
  );
};

export default MoreHelp;
