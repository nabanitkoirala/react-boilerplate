import React, { useState } from "react";
import imgGirl from "../assets/girl-unlock-password-light 1.svg";
import icon from "../assets/sneat-logo.svg";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    console.log(e, "event");
    console.log(email, "email");
  };
  return (
    <>
      <div className="flex w-full h-screen mx-auto ">
        <div className="hidden md:flex w-[60%] h-full">
          <img src={imgGirl} alt="" className="w-full " />
        </div>
        <div className=" flex-1 w-full md:w-[40%] h-full ">
          <div className=" flex flex-col items-center justify-center  bg-[#ffffff] px-[32px] py-[32px] h-full ">
            <div className="flex  justify-start items-center gap-2">
              <img src={icon} alt="" className=" w-[22px] h-[32.4px] " />
              <h1 className="font-[700] tracking-[0.15px] text-[28px] text-[#32475c] leading-[24px] ">
                Sneat
              </h1>
            </div>
            <div className="text-[#32475c] tracking-[0.15px] ">
              <h2 className="pt-8 font-[600] text-[24px] leading-[32px] tracking-[0.18px] text-left text-[#32475c] opacity-[87%] ">
                Forgot Password 🔒
              </h2>
              <p className="font-[400] text-[16px] leading-[24px]  pb-6 opacity-[60%] ">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
                <input
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-[12px] px-[17px] border-[#32475c]  border-[1px] border-opacity-[22%] rounded-[4px] placeholder:opacity-[38%] text-inherit outline-[#32475c]f  outline-slate-300 "
                />

                <button
                  type="submit"
                  className="bg-[#696cff] w-full text-white p-2 flex-inline justify-center items-center rounded-[8px] active:scale-[95%] active:invert"
                >
                  LOGIN
                </button>
                <div className="w-full flex justify-center items-center gap-[5px] ">
                  <FaLessThan className="text-[#696cff] font-[400] " />

                  <Link to={"/login"}>
                    <p className=" text-[#696cff] font-[400] text-[16px] tracking-[0.15px] text-center leading-[24px] ">
                      Back to login
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
