import React from "react";
import rocketIcon from "../assets/rocket-outline.svg";
import giftIcon from "../assets/CardGiftcard.svg";
import lockIcon from "../assets/LockOpen.svg";
import rulesIcon from "../assets/ContentPaste.svg";
import chatsIcon from "../assets/ChatBubbleOutline.svg";
import dotIcon from "../assets/dot.svg";
import connectionIcon from "../assets/Link.svg";
import { Link } from "react-router-dom";
const KnowledgeBase = () => {
  const KnowledgeBaseMenus = [
    {
      image: rocketIcon,

      bgColor: "#71DD37",
      heading: "Getting Started",
      contents: [
        {
          icon: dotIcon,
          title: "Account",
          link: "/account",
        },
        {
          icon: dotIcon,
          title: "Authentication",
          link: "/authentication",
        },
        {
          icon: dotIcon,
          title: "Billing",
          link: "/Billing",
        },
      ],
      article: {
        name: "14 Articles",
        link: "14_articles",
      },
    },

    {
      image: giftIcon,

      bgColor: "#03C3EC",
      heading: "Orders",
      contents: [
        {
          icon: dotIcon,
          title: "Processing orders",
          link: "/processing-orders",
        },
        {
          icon: dotIcon,
          title: "Payments",
          link: "/payments",
        },
        {
          icon: dotIcon,
          title: "Returns, Refunds and Replacements",
          link: "/returns_refunds_replacements",
        },
      ],
      article: {
        name: "13 Articles",
        link: "13_articles",
      },
    },
    {
      image: lockIcon,

      bgColor: "#696CFF",
      heading: "Safety and Security",
      contents: [
        {
          icon: dotIcon,
          title: "Safety and security",
          link: "/safety_security",
        },
        {
          icon: dotIcon,
          title: "Privacy",
          link: "/safety_security",
        },
        {
          icon: dotIcon,
          title: "Spam and fake accounts",
          link: "/safety_security",
        },
      ],
      article: {
        name: "9 Articles",
        link: "9_articles",
      },
    },
    {
      image: rulesIcon,

      bgColor: "#FF3E1D",
      heading: "Rules and policies",
      contents: [
        {
          icon: dotIcon,
          title: "General",
          link: "general",
        },
        {
          icon: dotIcon,
          title: "Intellectual property",
          link: "intellectual_property",
        },
        {
          icon: dotIcon,
          title: "Guidelines for law enforcement",
          link: "guidelines",
        },
      ],
      article: {
        name: "14 Articles",
        link: "14_articles",
      },
    },

    {
      image: chatsIcon,

      bgColor: "#FFAB00",
      heading: "Chats",
      contents: [
        {
          icon: dotIcon,
          title: "General",
          link: "general",
        },
        {
          icon: dotIcon,
          title: "Features",
          link: "featues",
        },
        {
          icon: dotIcon,
          title: "Encryption",
          link: "encryption",
        },
      ],
      article: {
        name: "14 Articles",
        link: "14_articles",
      },
    },
    {
      image: connectionIcon,
      bgColor: "#8592A3",
      heading: "Connections",
      contents: [
        {
          icon: dotIcon,
          title: "Conversations",
          link: "Conversations",
        },
        {
          icon: dotIcon,
          title: "Jobs",
          link: "jobs",
        },
        {
          icon: dotIcon,
          title: "People",
          link: "people",
        },
      ],
      article: {
        name: "14 Articles",
        link: "14_articles",
      },
    },
  ];
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-6 mx-4 p-5 md:p-[80px]">
      {/* <div className="h-full w-full gap-y-6 flex flex-col "> */}
      <div className="text-center  ">
        <h1 className="text-[#32475C] text-[24px] font-[400] ">
          Knowledge Base
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
        {KnowledgeBaseMenus?.map((details, idf) => (
          <div
            key={idf}
            className="flex flex-col p-2 lg:p-5 md:p-3 gap-y-4 bg-[#FFFFFF] rounded-[8px] "
          >
            <div className="flex gap-x-[6px] lg:gap-x-[12px] ">
              <img src={details?.image} alt="" className="w-6 h-6  " />
              <h5 className="text-[16px] md:text-[20px] font-[500] text-[#32475C] ">
                {details?.heading}
              </h5>
            </div>
            {details?.contents?.map((content, idg) => (
              <div key={idg} className="flex items-center gap-x-[10px] pl-[12px] ">
                <img src={dotIcon} alt="" className="w-[6px] h-[6px] " />
                <Link
                  to={content.link}
                  className="flex flex-col gap-y-[10px] "
                >
                  <p className="text-[14px] md:text-[16px] font-[400] text-[#696CFF] ">
                    {content.title}
                  </p>
                </Link>
              </div>
            ))}
            <div className="">
              <Link to={details.article.link}>
                <h5 className="text-[14px] md:text-[12px] font-[600] text-[#696CFF] ">
                  {details.article.name}
                </h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
