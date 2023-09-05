import React, { useState } from "react";
import imgEye from "../assets/bx-show.svg";

const ShowHidepass = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-between border-[#32475c]  border-[1px] border-opacity-[22%] rounded-[4px] placeholder:opacity-[38%] text-inherit outline-slate-300">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full py-[12px] pl-[17px] rounded-[4px] placeholder:opacity-[38%] text-inherit   outline-none "
        {...props}
      />
      <span
        onClick={handleTogglePassword}
        className="px-[13px]  flex items-center justify-center cursor-pointer"
      >
        <img
          src={imgEye}
          alt=""
          className={`w-[24px] ${
            showPassword ? "text-[#696cff]" : "text-[red] opacity-[50%]"
          }`}
        />
      </span>
    </div>
  );
};

export default ShowHidepass;
