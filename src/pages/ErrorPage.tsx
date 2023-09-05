// Need to add logic to redirect the path to home after clicking the button

import React from "react";
import errorImg from "../assets/page-misc-error-light.svg";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  const backToHome = (e) => {
    console.log("path");
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="p-2 h-screen w-full flex flex-col items-center justify-center">
      <span className="text-[34px] font-[500] text-[#32475C]">
        Page Not Found ⚠️
      </span>
      <p className="pt-[10px] text-4 font-[400] text-[#32475C]  ">
        we couldn't find the page you are looking for
      </p>
      <img src={errorImg} alt="" className="py-10" />
      <button
        type="submit"
        className="text-[10px] font-[300] px-5 py-[7px] text-[#FFFFFF] bg-[#9f149f] rounded-[5px] "
        onClick={backToHome}
      >
        BACK TO HOME
      </button>
    </div>
  );
};

export default ErrorPage;
