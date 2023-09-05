import React from "react";
import discordIcon from "../assets/Discord.svg";
import laptopIcon from "../assets/Laptop.svg";
import bulbIcon from "../assets/Lightbulb.svg";

const PopularArticles = () => {
  const PopularArticlesMenus = [
    {
      icon: laptopIcon,
      title: "Blogging",
      disc: "Expert tips & tools to improve your website or oline store using blog.",
    },
    {
      icon: bulbIcon,
      title: "Inspiration Center",
      disc: "Inspiration from experts to help you start and grow your big ideas.",
    },
    {
      icon: discordIcon,
      title: "Community",
      disc: "A group of people living in the same place or having a particular.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-2 md:gap-y-6 p-5 md:p-20 bg-[#FFFFFF] mx-4 ">
      <div className="">
        <h1 className="lg:text-[24px] md:text-[20px] font-[500] text-[#32475C] ">Popular Articles</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-4 md:gap-y-6 gap-x-6">
        {PopularArticlesMenus?.map((popular, ide) => (
          <div key={ide} className="flex flex-col items-center p-5 gap-y-[12px] border-[1px] rounded-[8px]">
            <div  className="flex flex-col items-center ">
              <img src={popular.icon} alt="" className="lg:w-[58px] md:w-12 lg:h-[58px] md:h-12 " />
              <h5 className=" lg:text-[20px] md:text-[16px] font-[500] text-[#32475C] " >{popular.title} </h5>
              <p className="text-center text-[14px] font-[400] text-[#32475C] " >{popular.disc} </p>
            </div>
            <div className="">
              <button type="submit" className="flex uppercase border-[#666CFF] border-[1px] rounded-[6px] justify-center px-3 md:px-5 text-[10px] md:text-[14px] font-[500] text-[#696CFF] py-[7px]" >read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;
