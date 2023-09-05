import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const Assistance = [
    {
      item: "License",
      link: "/license",
    },
    {
      item: "More Themes",
      link: "/more_themes",
    },
    {
      item: "Documentation",
      link: "/documentation",
    },
    {
      item: "Support",
      link: "/support",
    },
  ];
  return (
    <>
      <div className="flex justify-between mx-4 p-4">
        <div className="">
          <h5 className="text-[12px] md:text-[14px] lg:text-[16px] ">
            © 2023, Made with ❤️ by{" "}
            <span className="text-[#696CFF] text-[12px] md:text-[14px] lg:text-[16px] font-[400] ">
              Pixinvent
            </span>{" "}
          </h5>
        </div>
        <div className="flex lg:flex-row flex-col gap-x-4 md:gap-y-2 lg:gap-x-3 ">
          {Assistance?.map((help, idh) => (
            <Link key={idh} to={help.link}>
              <h5 className="text-[12px] lg:text-[16px] md:text-[14px] font-[400] text-[#696CFF] ">
                {help.item}{" "}
              </h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
