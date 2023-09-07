import React, { useState } from "react";
import icon from "../assets/sneat-logo.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import imgBoy from "../assets/boy-with-laptop-light 1.svg";
import { FaLessThan } from "react-icons/fa";
import ShowHidepass from "./ShowHidepass";
import Browsing from "../Utils/Browsing";

const Resetpassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPassword === confirmPassword) {
      Browsing.put(`/auth/resetpassword/${id}`, { password: confirmPassword })
        .then(res => {
          // localStorage.setItem("accessToken", res.data.accessToken);
          // localStorage.setItem("refreshToken", res.data.refreshToken);

          navigate('/');
        })
        .catch(err => {
          console.log("this is error", err.response);

        });
    }

  };

  return (
    <>
      <div className="flex w-full h-screen justify-between">
        <div className="hidden md:flex w-[60%] h-full">
          <img src={imgBoy} alt="" className="w-full" />
        </div>
        <div className="flex h-full w-full md:w-[40%]">
          <div className=" flex flex-col items-start justify-center bg-[#ffffff] px-[32px] py-[32px] ">
            <div className="flex  justify-start items-center gap-2">
              <img src={icon} alt="" className=" w-[22px] h-[32.4px] " />
              <h1 className="font-[700] tracking-[0.15px] text-[28px] text-[#32475c] leading-[24px] ">
                Sneat
              </h1>
            </div>
            <div className="text-[#32475c] tracking-[0.15px] ">
              <h2 className="pt-8 font-[500] text-[24px] leading-[32px] tracking-[0.18px] text-left text-[#32475c] opacity-[87%] ">
                Reset Password 🔒
              </h2>
              <p className="font-[400] text-[16px] leading-[24px] tracking-[0.15px] pb-6 opacity-[60%] ">
                Your new password must be different from previously used
                passwords
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
                <ShowHidepass
                  name="newPassword"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  autoComplete="true"
                />
                <ShowHidepass
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="true"
                />

                <button
                  type="submit"
                  className="bg-[#696cff] w-full text-white p-2 flex-inline justify-center items-center rounded-[8px] active:scale-[95%] active:invert"
                >
                  LOGIN
                </button>
                <div className="w-full flex justify-center items-center gap-[5px] ">
                  <FaLessThan className="text-[#696cff]  " />
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

export default Resetpassword;
